#!/bin/bash
# Screenshot generation script

echo "🎬 Screenshot Generator"
echo "======================"

if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Install from https://nodejs.org"
    exit 1
fi

if [ ! -f "package.json" ]; then
    npm init -y
fi

if [ ! -d "node_modules/playwright" ]; then
    echo "📦 Installing Playwright..."
    npm install -D playwright
fi

echo "🎬 Generating screenshots..."
node scripts/screenshot-generator.js

echo "✅ Done!"
