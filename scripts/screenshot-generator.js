/**
 * Screenshot Generator for All Templates
 * Run: node scripts/screenshot-generator.js
 */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');

async function generateScreenshots() {
  console.log('🎬 Starting screenshot generation...\n');
  const templates = fs.readdirSync(TEMPLATES_DIR).filter(f => f.match(/^\d+/)).sort();
  console.log(`Found ${templates.length} templates\n`);

  const browser = await chromium.launch({ headless: true });
  let success = 0, errors = 0;

  for (const template of templates) {
    try {
      const indexPath = path.join(TEMPLATES_DIR, template, 'index.html');
      if (!fs.existsSync(indexPath)) continue;

      console.log(`📸 ${template}...`);
      const page = await browser.newPage();
      await page.goto(`file://${indexPath}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);

      // Desktop
      await page.setViewportSize({ width: 1200, height: 800 });
      await page.screenshot({ path: path.join(TEMPLATES_DIR, template, 'preview.png') });

      // Full page
      await page.screenshot({ path: path.join(TEMPLATES_DIR, template, 'full-preview.png'), fullPage: true });

      // Mobile
      await page.setViewportSize({ width: 375, height: 800 });
      await page.screenshot({ path: path.join(TEMPLATES_DIR, template, 'mobile-preview.png') });

      await page.close();
      success++;
      console.log(`  ✅ Complete\n`);
    } catch (error) {
      console.error(`❌ Error: ${error.message}`);
      errors++;
    }
  }

  await browser.close();
  console.log(`\n📊 Success: ${success}, Errors: ${errors}, Total: ${success * 3} screenshots`);
}

generateScreenshots().catch(console.error);
