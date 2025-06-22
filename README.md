# n8n-nodes-wxai

[![npm version](https://badge.fury.io/js/n8n-nodes-wxai.svg)](https://badge.fury.io/js/n8n-nodes-wxai)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![n8n-community-node](https://img.shields.io/badge/n8n-community--node-blue)](https://docs.n8n.io/integrations/community-nodes/)

This is an n8n community node that integrates WXAI API with Gemini 2.0 Flash model into your n8n workflows. It provides powerful AI chat completion capabilities with configurable parameters for enhanced automation.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## ✨ Features

- 🤖 **Gemini 2.0 Flash Model**: Access to Google's latest Gemini model via WXAI
- 💬 **Chat Completions**: Full conversation support with system, user, and assistant roles
- ⚙️ **Configurable Parameters**: Fine-tune responses with temperature, top-p, and token limits
- 🔄 **SSE Support**: Automatic handling of Server-Sent Events responses
- 🛡️ **Error Handling**: Comprehensive error management and validation
- 📝 **TypeScript**: Full type safety and IntelliSense support
- 🎯 **Easy Integration**: Simple setup and configuration in n8n

## 📦 Installation

### Option 1: n8n Community Nodes (Recommended)

1. Go to **Settings** > **Community Nodes** in your n8n instance
2. Click **Install a community node**
3. Enter: `n8n-nodes-wxai`
4. Click **Install**

For detailed instructions, follow the [n8n community nodes installation guide](https://docs.n8n.io/integrations/community-nodes/installation/).

### Option 2: Manual Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/wxai-community/n8n-nodes-wxai.git
   cd n8n-nodes-wxai
   ```

2. Install dependencies and build:
   ```bash
   npm install
   npm run build
   ```

3. Copy the `dist` folder to your n8n custom nodes directory
4. Restart your n8n instance

## Credentials

Add your WXAI API credentials in n8n:

1. Go to **Credentials** in your n8n instance
2. Click **Add Credential** and select **WXAI API**
3. Enter your credentials:
   - **API Key**: Your WXAI API key (e.g., `6263aef89551c6349d49eada0a9e71c1b31b391768285b951a86f86bc62793ca`)
   - **Base URL**: `https://cs.rhwx-ai.com/api/ai/v1`

## Usage

1. Add a **WXAI** node to your workflow
2. Select your WXAI API credentials
3. Configure the chat operation:
   - **Model**: `gemini-2.0-flash` (default)
   - **Messages**: Add your conversation messages with roles:
     - `system`: System instructions
     - `user`: User messages
     - `assistant`: Assistant responses

### Example Configuration

```json
{
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    },
    {
      "role": "user",
      "content": "Hello, how are you?"
    }
  ]
}
```

## Features

- ✅ Chat completions with Gemini 2.0 Flash model
- ✅ Configurable temperature and top-p parameters
- ✅ Maximum token limits (up to 8192 tokens)
- ✅ Simplified output option for easier data handling
- ✅ Error handling and validation
- ✅ TypeScript support

## Development

```bash
# Install dependencies
npm install

# Build the node
npm run build

# Run linting
npm run lint

# Fix linting issues
npm run lintfix

# Format code
npm run format
```

## API Testing

A test script is included to verify API connectivity:

```bash
node test-api.js
```

**Note**: Update the API key in `test-api.js` with your actual WXAI API key before testing.

### Expected Response Format

The WXAI API returns responses in Server-Sent Events (SSE) format. The node automatically handles this format and extracts the JSON data for use in n8n workflows.

## Troubleshooting

### API Key Issues
- Ensure your API key is valid and active
- Check that the base URL is correct: `https://cs.rhwx-ai.com/api/ai/v1`
- Verify your account has sufficient credits/quota

### Model Issues
- The default model is `gemini-2.0-flash`
- Ensure the model is available in your WXAI account

## License

MIT

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Development

```bash
# Clone the repository
git clone https://github.com/wxai-community/n8n-nodes-wxai.git
cd n8n-nodes-wxai

# Install dependencies
npm install

# Build the project
npm run build

# Run linting
npm run lint

# Test API connectivity
node test-complete.js
```

## 📄 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes and versions.

## 🐛 Issues & Support

- **Bug Reports**: [GitHub Issues](https://github.com/wxai-community/n8n-nodes-wxai/issues)
- **Feature Requests**: [GitHub Issues](https://github.com/wxai-community/n8n-nodes-wxai/issues)
- **Documentation**: [README.md](README.md)

## 📊 Stats

- **Downloads**: [![npm downloads](https://img.shields.io/npm/dm/n8n-nodes-wxai.svg)](https://www.npmjs.com/package/n8n-nodes-wxai)
- **Version**: [![npm version](https://img.shields.io/npm/v/n8n-nodes-wxai.svg)](https://www.npmjs.com/package/n8n-nodes-wxai)
- **License**: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
