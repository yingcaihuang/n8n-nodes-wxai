#!/bin/bash

# Script to push the repository to GitHub
# Usage: ./push-to-github.sh <github-repo-url>

if [ $# -eq 0 ]; then
    echo "Usage: $0 <github-repo-url>"
    echo "Example: $0 https://github.com/your-username/n8n-nodes-wxai.git"
    exit 1
fi

REPO_URL=$1

echo "🚀 Pushing n8n-nodes-wxai to GitHub..."

# Add remote origin
git remote add origin $REPO_URL

# Rename master to main (GitHub standard)
git branch -M main

# Push code and tags
git push -u origin main
git push origin --tags

echo "✅ Successfully pushed to GitHub!"
echo "📦 Repository: $REPO_URL"
echo "🏷️  Tagged version: v1.0.0"
echo ""
echo "Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Create a release from the v1.0.0 tag"
echo "3. Share your node with the n8n community!"
