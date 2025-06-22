# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-06-22

### Added
- Initial release of n8n-nodes-wxai
- WXAI API integration with Gemini 2.0 Flash model
- Chat completion functionality with configurable parameters
- Support for system, user, and assistant message roles
- Configurable temperature and top-p parameters
- Maximum token limits (up to 8192 tokens)
- Simplified output option for easier data handling
- Automatic SSE (Server-Sent Events) response parsing
- Comprehensive error handling and validation
- TypeScript support with full type definitions
- ESLint and Prettier configuration for code quality
- Complete test suite and API validation scripts
- Detailed documentation and usage examples

### Features
- **Chat Completions**: Full support for WXAI chat completions API
- **Model Support**: Optimized for Gemini 2.0 Flash model
- **Parameter Control**: Fine-tune responses with temperature, top-p, and max tokens
- **Message Roles**: Support for system instructions, user queries, and assistant responses
- **Response Handling**: Automatic parsing of SSE format responses
- **Error Management**: Comprehensive error handling with meaningful messages
- **Type Safety**: Full TypeScript support for better development experience

### Technical Details
- Base URL: `https://cs.rhwx-ai.com/api/ai/v1`
- API Version: v1
- Response Format: Server-Sent Events (SSE) with automatic JSON extraction
- Node Type: Community node for n8n workflow automation
- License: MIT

### Documentation
- Complete README with installation and usage instructions
- Example workflow configuration
- API testing scripts
- Troubleshooting guide
- Contributing guidelines
