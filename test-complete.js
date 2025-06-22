const https = require('https');

const apiKey = '6263aef89551c6349d49eada0a9e71c1b31b391768285b951a86f86bc62793ca';
const baseUrl = 'https://cs.rhwx-ai.com/api/ai/v1';

// Test complete chat functionality
const testData = JSON.stringify({
  model: 'gemini-2.0-flash',
  messages: [
    {
      role: 'system',
      content: 'You are a helpful assistant. Respond concisely.'
    },
    {
      role: 'user',
      content: 'What is the capital of France? Please respond in one sentence.'
    }
  ],
  max_tokens: 50,
  temperature: 0.7,
  stream: false
});

const options = {
  hostname: 'cs.rhwx-ai.com',
  port: 443,
  path: '/api/ai/v1/chat/completions',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
    'Content-Length': Buffer.byteLength(testData)
  }
};

console.log('🧪 Testing WXAI API Complete Chat Functionality');
console.log('📍 URL:', `${baseUrl}/chat/completions`);
console.log('🤖 Model: gemini-2.0-flash');
console.log('💬 Testing conversation with system and user messages...\n');

const req = https.request(options, (res) => {
  console.log(`✅ Status Code: ${res.statusCode}`);
  console.log(`📋 Content-Type: ${res.headers['content-type']}`);

  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('\n📥 Raw Response:');
    console.log(data);
    
    // Parse SSE format
    if (res.headers['content-type']?.includes('text/event-stream')) {
      console.log('\n🔄 Parsing SSE format...');
      const lines = data.split('\n');
      
      for (const line of lines) {
        if (line.startsWith('data:')) {
          try {
            const jsonData = line.substring(5).trim();
            if (jsonData && jsonData !== '[DONE]') {
              const parsedData = JSON.parse(jsonData);
              console.log('\n✨ Parsed JSON Response:');
              console.log(JSON.stringify(parsedData, null, 2));
              
              if (parsedData.choices && parsedData.choices[0]) {
                const message = parsedData.choices[0].message;
                console.log('\n💬 Assistant Response:');
                console.log(`"${message.content}"`);
                
                console.log('\n📊 Usage Statistics:');
                if (parsedData.usage) {
                  console.log(`- Prompt tokens: ${parsedData.usage.prompt_tokens}`);
                  console.log(`- Completion tokens: ${parsedData.usage.completion_tokens}`);
                  console.log(`- Total tokens: ${parsedData.usage.total_tokens}`);
                }
              }
              break;
            }
          } catch (e) {
            console.log('❌ Failed to parse JSON:', e.message);
          }
        }
      }
    } else {
      try {
        const response = JSON.parse(data);
        console.log('\n✨ Parsed JSON Response:');
        console.log(JSON.stringify(response, null, 2));
      } catch (e) {
        console.log('❌ Failed to parse response as JSON');
      }
    }
    
    console.log('\n🎉 Test completed successfully!');
  });
});

req.on('error', (error) => {
  console.error('❌ Error:', error);
});

req.write(testData);
req.end();
