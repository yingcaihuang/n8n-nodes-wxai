import type {
	IExecuteSingleFunctions,
	IN8nHttpFullResponse,
	INodeExecutionData,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

export async function sendErrorPostReceive(
	this: IExecuteSingleFunctions,
	data: INodeExecutionData[],
	response: IN8nHttpFullResponse,
): Promise<INodeExecutionData[]> {
	if (String(response.statusCode).startsWith('4') || String(response.statusCode).startsWith('5')) {
		throw new NodeApiError(this.getNode(), response as unknown as JsonObject);
	}

	// Handle SSE format response from WXAI
	const contentType = response.headers['content-type'];
	if (typeof contentType === 'string' && contentType.includes('text/event-stream')) {
		const body = response.body as string;
		const lines = body.split('\n');

		for (const line of lines) {
			if (line.startsWith('data:')) {
				try {
					const jsonData = line.substring(5).trim();
					if (jsonData && jsonData !== '[DONE]') {
						const parsedData = JSON.parse(jsonData);
						// Replace the response body with parsed JSON
						response.body = parsedData;
						break;
					}
				} catch (error) {
					// Continue if JSON parsing fails
				}
			}
		}
	}

	return data;
}
