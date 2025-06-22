# Contributing to n8n-nodes-wxai

Thank you for your interest in contributing to n8n-nodes-wxai! This document provides guidelines for contributing to this project.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (version 7 or higher)
- Git

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/n8n-nodes-wxai.git
   cd n8n-nodes-wxai
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build the project:
   ```bash
   npm run build
   ```

## Development Workflow

### Making Changes

1. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following the coding standards
3. Test your changes:
   ```bash
   npm run lint
   npm run build
   node test-complete.js
   ```

4. Commit your changes with a descriptive message:
   ```bash
   git commit -m "feat: add new feature description"
   ```

### Code Standards

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add tests for new functionality
- Update documentation as needed

### Testing

- Run `npm run lint` to check code quality
- Run `npm run build` to ensure compilation works
- Test API connectivity with `node test-complete.js`
- Verify the node works in an actual n8n instance

## Submitting Changes

1. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Create a Pull Request with:
   - Clear description of changes
   - Reference to any related issues
   - Screenshots if UI changes are involved

## Reporting Issues

When reporting issues, please include:

- n8n version
- Node.js version
- Operating system
- Steps to reproduce
- Expected vs actual behavior
- Error messages or logs

## Feature Requests

We welcome feature requests! Please:

- Check existing issues first
- Provide clear use case description
- Explain why the feature would be valuable
- Consider implementation complexity

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Follow the project's coding standards

## Questions?

Feel free to open an issue for questions or join the discussion in existing issues.

Thank you for contributing! 🎉
