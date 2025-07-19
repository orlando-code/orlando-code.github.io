#!/bin/bash

# Configuration
SOURCE_DIR="/path/to/your/nextjs/source"
DEPLOY_DIR="/path/to/orlando-code.github.io"
BRANCH="main"

echo "🚀 Starting deployment process..."

# 1. Build the static site
echo "📦 Building static site..."
cd "$SOURCE_DIR"
npm run build
npm run export

# 2. Copy built files to deploy directory
echo "📋 Copying files to deploy directory..."
rm -rf "$DEPLOY_DIR"/*
cp -r out/* "$DEPLOY_DIR/"

# 3. Add .nojekyll file (if not exists)
touch "$DEPLOY_DIR/.nojekyll"

# 4. Commit and push to GitHub
echo "📤 Pushing to GitHub..."
cd "$DEPLOY_DIR"
git add .
git commit -m "Auto-deploy: $(date)"
git push origin $BRANCH

echo "✅ Deployment complete!"