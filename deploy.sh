#!/bin/bash

# Quick SFTP Deployment Script for Skribh Main Site
# Usage: ./deploy.sh

echo "🚀 Building and deploying Skribh main site..."

# Build the site
echo "📦 Building production site..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# SFTP deployment
echo "📤 Deploying to Namecheap hosting..."

# Your server details
SERVER="184.94.213.59"
PORT="21098"
USERNAME="skriaeub"
SSH_KEY="/Users/kajusarkar/skribh_old/skribh-working-clean/infrastructure/ssh-keys/kaju-ssh"

# Upload files via SFTP
sftp -i "$SSH_KEY" -P "$PORT" "$USERNAME@$SERVER" << EOF
cd public_html
put -r dist/* .
quit
EOF

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Site is live at: https://skribh.com/investors"
else
    echo "❌ Deployment failed!"
    exit 1
fi
