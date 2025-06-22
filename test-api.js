const https = require('https');

// Note: Replace with your actual API key
const apiKey = '6263aef89551c6349d49eada0a9e71c1b31b391768285b951a86f86bc62793ca';
const baseUrl = 'https://cs.rhwx-ai.com/api/ai/v1';

// Test API connection
const testData = JSON.stringify({
  model: 'gemini-2.0-flash',
  messages: [
    {
      role: 'user',
      content: 'Hello, can you respond with a simple greeting?'
    }
  ],
  max_tokens: 100,
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

console.log('Testing WXAI API connection...');
console.log('URL:', `${baseUrl}/chat/completions`);
console.log('Model: gemini-2.0-flash');

const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  console.log(`Headers:`, res.headers);

  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:');
    try {
      const response = JSON.parse(data);
      console.log(JSON.stringify(response, null, 2));
    } catch (e) {
      console.log('Raw response:', data);
    }
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.write(testData);
req.end();
