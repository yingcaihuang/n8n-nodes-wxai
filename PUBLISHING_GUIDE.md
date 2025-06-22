# Publishing Guide for n8n-nodes-wxai

This guide explains how to publish the n8n-nodes-wxai package to npm and share it with the n8n community.

## Prerequisites

1. **npm Account**: Create an account at [npmjs.com](https://www.npmjs.com/)
2. **npm CLI**: Install and login to npm
   ```bash
   npm login
   ```
3. **GitHub Account**: For repository hosting
4. **n8n Community Access**: For sharing in the community

## Step 1: Prepare for Publishing

### 1.1 Final Testing
```bash
# Install dependencies
npm install

# Run all checks
npm run lint
npm run build
npm run test:api

# Test in actual n8n instance (recommended)
```

### 1.2 Update Version
```bash
# For patch release (bug fixes)
npm version patch

# For minor release (new features)
npm version minor

# For major release (breaking changes)
npm version major
```

### 1.3 Review Package Contents
```bash
# Check what will be published
npm pack --dry-run
```

## Step 2: Publish to npm

### 2.1 Build and Publish
```bash
# Clean build
npm run clean
npm run build

# Publish to npm
npm publish
```

### 2.2 Verify Publication
- Check your package at: `https://www.npmjs.com/package/n8n-nodes-wxai`
- Test installation: `npm install n8n-nodes-wxai`

## Step 3: Create GitHub Repository

### 3.1 Create Repository
1. Go to [GitHub](https://github.com/)
2. Create new repository: `n8n-nodes-wxai`
3. Make it public
4. Add description: "WXAI node for n8n - Gemini 2.0 Flash integration"

### 3.2 Push Code
```bash
git init
git add .
git commit -m "Initial release v1.0.0"
git branch -M main
git remote add origin https://github.com/your-username/n8n-nodes-wxai.git
git push -u origin main
```

### 3.3 Create Release
1. Go to repository → Releases
2. Click "Create a new release"
3. Tag: `v1.0.0`
4. Title: `v1.0.0 - Initial Release`
5. Description: Copy from CHANGELOG.md
6. Publish release

## Step 4: Share with n8n Community

### 4.1 n8n Community Forum
1. Visit [n8n Community](https://community.n8n.io/)
2. Create new topic in "Share your work" category
3. Title: "New Community Node: WXAI (Gemini 2.0 Flash)"
4. Include:
   - Description of functionality
   - Installation instructions
   - Example workflow
   - Screenshots/GIFs if possible

### 4.2 n8n Discord
1. Join [n8n Discord](https://discord.gg/n8n)
2. Share in #community-nodes channel
3. Brief description with npm package link

### 4.3 Social Media (Optional)
- Twitter: Tag @n8n_io
- LinkedIn: Share in relevant groups
- Reddit: r/n8n, r/automation

## Step 5: Maintenance

### 5.1 Monitor Issues
- Watch GitHub repository for issues
- Respond to npm package questions
- Monitor n8n community discussions

### 5.2 Updates
- Regular dependency updates
- Bug fixes and improvements
- New feature releases

### 5.3 Documentation
- Keep README.md updated
- Update CHANGELOG.md for each release
- Maintain example workflows

## Example Community Post

```markdown
# 🚀 New Community Node: WXAI (Gemini 2.0 Flash)

I'm excited to share a new community node that integrates WXAI API with Google's Gemini 2.0 Flash model!

## Features
- Chat completions with Gemini 2.0 Flash
- Configurable parameters (temperature, top-p, max tokens)
- Support for system, user, and assistant roles
- Automatic SSE response handling

## Installation
```bash
npm install n8n-nodes-wxai
```

Or install via n8n Community Nodes interface.

## Example Use Cases
- Customer support automation
- Content generation
- Data analysis and insights
- Conversational workflows

## Links
- 📦 npm: https://www.npmjs.com/package/n8n-nodes-wxai
- 🔗 GitHub: https://github.com/your-username/n8n-nodes-wxai
- 📖 Documentation: Full README with examples

Would love to hear your feedback and see what you build with it! 🎉
```

## Troubleshooting

### Common Issues
1. **npm publish fails**: Check if package name is available
2. **Build errors**: Ensure all dependencies are installed
3. **Version conflicts**: Use `npm version` to properly increment

### Getting Help
- n8n Community Forum
- GitHub Issues
- npm support

## Success Metrics

Track your node's success:
- npm download statistics
- GitHub stars and forks
- Community feedback and usage
- Issue reports and feature requests

Good luck with your publication! 🎉
```
