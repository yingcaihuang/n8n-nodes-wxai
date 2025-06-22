@echo off
REM Script to push the repository to GitHub (Windows)
REM Usage: push-to-github.bat <github-repo-url>

if "%1"=="" (
    echo Usage: %0 ^<github-repo-url^>
    echo Example: %0 https://github.com/your-username/n8n-nodes-wxai.git
    exit /b 1
)

set REPO_URL=%1

echo 🚀 Pushing n8n-nodes-wxai to GitHub...

REM Add remote origin
git remote add origin %REPO_URL%

REM Rename master to main (GitHub standard)
git branch -M main

REM Push code and tags
git push -u origin main
git push origin --tags

echo ✅ Successfully pushed to GitHub!
echo 📦 Repository: %REPO_URL%
echo 🏷️  Tagged version: v1.0.0
echo.
echo Next steps:
echo 1. Go to your GitHub repository
echo 2. Create a release from the v1.0.0 tag
echo 3. Share your node with the n8n community!
