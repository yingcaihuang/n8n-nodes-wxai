import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class WxaiApi implements ICredentialType {
	name = 'wxaiApi';
	displayName = 'WXAI API';
	icon: Icon = 'file:wxai.svg';
	documentationUrl = 'https://cs.rhwx-ai.com/api/ai';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			required: true,
			default: '',
			description: 'Your WXAI API key',
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			required: true,
			default: 'https://cs.rhwx-ai.com/api/ai/v1',
			description: 'The base URL for WXAI API',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/chat/completions',
			method: 'POST',
			body: {
				model: 'gemini-2.0-flash',
				messages: [{ role: 'user', content: 'test' }],
				max_tokens: 1
			},
		},
	};
}
