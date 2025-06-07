#!/bin/bash

# Child Farmer GitHub Push Script
# Usage: ./github-push.sh "commit message" repo-name

COMMIT_MESSAGE="$1"
REPO_NAME="$2"
GITHUB_TOKEN=$(cat ../../../.env | grep GITHUB_TOKEN | cut -d= -f2)
ORG="WebSmartTeam"

if [ -z "$COMMIT_MESSAGE" ] || [ -z "$REPO_NAME" ]; then
    echo "Usage: ./github-push.sh \"commit message\" repo-name"
    echo "Example: ./github-push.sh \"Initial website deployment\" anne-songhurst-portfolio"
    exit 1
fi

echo "🚀 Setting up GitHub repository: $REPO_NAME"

# Initialize git if not already done
if [ ! -d ".git" ]; then
    git init
    echo "✅ Git repository initialized"
fi

# Create GitHub repository
echo "📂 Creating GitHub repository..."
curl -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/orgs/$ORG/repos \
  -d "{\"name\":\"$REPO_NAME\",\"description\":\"Project deployed by AIDAN Network\",\"private\":false}"

# Add all files
git add .

# Commit with message
git commit -m "$COMMIT_MESSAGE

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"

# Add remote origin
git remote remove origin 2>/dev/null || true
git remote add origin https://x-access-token:$GITHUB_TOKEN@github.com/$ORG/$REPO_NAME.git

# Push to GitHub
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ SUCCESS! Repository created and pushed to:"
echo "🌐 https://github.com/$ORG/$REPO_NAME"

# Notify parent farm
echo "📡 Notifying parent farm..."
node communicate-fixed.js send "✅ GITHUB PUSH COMPLETE: $REPO_NAME pushed to https://github.com/$ORG/$REPO_NAME - Ready for deployment!"