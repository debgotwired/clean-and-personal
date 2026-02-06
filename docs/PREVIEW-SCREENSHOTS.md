# Preview Screenshots Guide

Guide for generating and adding preview screenshots for all templates.

## Overview

Each template should have:
1. **Hero screenshot** (`preview.png`) - 1200x800px - Hero section
2. **Full page screenshot** (`full-preview.png`) - 1200x variable - Full scrollable page
3. **Mobile screenshot** (`mobile-preview.png`) - 375x800px - Mobile view

## Screenshot Specifications

### Desktop Preview (preview.png)
- **Dimensions:** 1200 x 800 pixels
- **Format:** PNG
- **Content:** Hero section + first fold
- **Browser:** Chrome in light mode
- **Purpose:** README thumbnails, social sharing

### Full Preview (full-preview.png)
- **Dimensions:** 1200 x variable (full page height)
- **Format:** PNG
- **Content:** Entire page scrolled to bottom
- **Purpose:** Detailed template preview

### Mobile Preview (mobile-preview.png)
- **Dimensions:** 375 x 800 pixels
- **Format:** PNG
- **Content:** Mobile viewport, hero section
- **Purpose:** Show responsive design

## Tools for Screenshot Generation

### Option 1: Manual (Browser DevTools)

1. Open template in Chrome
2. Press `Cmd/Ctrl + Shift + C` (DevTools)
3. Click device toolbar icon
4. Set viewport to 1200x800
5. Press `Cmd/Ctrl + Shift + P`
6. Type "screenshot" → "Capture screenshot"
7. Save as `preview.png` in template folder

### Option 2: Playwright (Automated)

```javascript
// screenshot-generator.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function generateScreenshots() {
  const browser = await chromium.launch();
  const templates = fs.readdirSync('templates').filter(f => f.match(/^\d/));

  for (const template of templates) {
    const page = await browser.newPage();
    const templatePath = path.join(__dirname, 'templates', template, 'index.html');

    await page.goto(`file://${templatePath}`);

    // Desktop preview
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.screenshot({
      path: `templates/${template}/preview.png`,
      fullPage: false
    });

    // Full page preview
    await page.screenshot({
      path: `templates/${template}/full-preview.png`,
      fullPage: true
    });

    // Mobile preview
    await page.setViewportSize({ width: 375, height: 800 });
    await page.screenshot({
      path: `templates/${template}/mobile-preview.png`,
      fullPage: false
    });

    await page.close();
    console.log(`✅ Generated screenshots for ${template}`);
  }

  await browser.close();
}

generateScreenshots();
```

### Option 3: Puppeteer (Alternative)

```javascript
// puppeteer-screenshot.js
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const templates = fs.readdirSync('templates').filter(f => f.match(/^\d/));

  for (const template of templates) {
    await page.goto(`file://${__dirname}/templates/${template}/index.html`);

    // Desktop
    await page.setViewport({ width: 1200, height: 800 });
    await page.screenshot({
      path: `templates/${template}/preview.png`
    });

    // Mobile
    await page.setViewport({ width: 375, height: 800 });
    await page.screenshot({
      path: `templates/${template}/mobile-preview.png`
    });

    console.log(`✅ ${template}`);
  }

  await browser.close();
})();
```

### Option 4: Online Services

**ScreenshotOne, Urlbox, or similar:**
- Deploy templates to Vercel first
- Use API to generate screenshots
- Automate with GitHub Actions

## Automation Script

Create `scripts/generate-screenshots.sh`:

```bash
#!/bin/bash

# Generate screenshots for all templates

echo "🎬 Generating screenshots for all templates..."

# Install Playwright if not installed
if ! command -v npx &> /dev/null; then
    echo "Installing Playwright..."
    npm init -y
    npm install -D playwright
fi

# Generate screenshots
node scripts/screenshot-generator.js

echo "✅ All screenshots generated!"
echo "📁 Check templates/*/preview.png"
```

## File Structure

After screenshot generation, each template should have:

```
templates/XX-template-name/
├── index.html
├── styles.css
├── script.js
├── config.json
├── README.md
├── preview.png              ← Hero screenshot
├── full-preview.png         ← Full page screenshot
└── mobile-preview.png       ← Mobile screenshot
```

## README Integration

Update each template's README.md to show preview:

```markdown
# Template Name

![Preview](preview.png)

Description here...

## Mobile View

<img src="mobile-preview.png" alt="Mobile preview" width="375">
```

## Main README Gallery

Update main README.md to show previews in table:

```markdown
| # | Preview | Name | Style | Best For |
|---|---------|------|-------|----------|
| 01 | ![](templates/01-founder/preview.png) | Founder | Professional | Entrepreneurs |
```

Or use thumbnails:

```markdown
### Template Gallery

<div align="center">

[![Template 01](templates/01-founder/preview.png)](templates/01-founder/)
[![Template 02](templates/02-developer-dark/preview.png)](templates/02-developer-dark/)
[![Template 03](templates/03-text-scholar/preview.png)](templates/03-text-scholar/)

</div>
```

## GitHub Social Previews

For GitHub social sharing, create `.github/` preview images:

```
.github/
├── preview-01-founder.png
├── preview-02-developer-dark.png
├── ...
```

Size: 1280 x 640 pixels (GitHub OG image size)

## Optimization

Optimize PNGs before committing:

```bash
# Using ImageOptim (Mac)
imageoptim templates/*/preview.png

# Using pngquant
pngquant --quality=80-90 templates/*/preview.png

# Using tinypng CLI
tinypng templates/*/preview.png
```

## Git LFS (Optional)

For large screenshot files, consider Git LFS:

```bash
git lfs install
git lfs track "templates/*/preview.png"
git lfs track "templates/*/full-preview.png"
git add .gitattributes
```

## Placeholder Images

Until real screenshots are generated, use placeholder service:

```markdown
![Preview](https://via.placeholder.com/1200x800/667eea/ffffff?text=Template+01+Preview)
```

Or create SVG placeholders:

```html
<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="800" fill="#667eea"/>
  <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="48">
    Template 01 - Founder
  </text>
</svg>
```

## Deployment Preview

Deploy templates to Vercel/Netlify and use their preview URLs:

```markdown
[![Preview](https://template-01-founder.vercel.app/api/og)](templates/01-founder/)
```

## Continuous Integration

Add to GitHub Actions workflow:

```yaml
name: Generate Screenshots
on:
  push:
    paths:
      - 'templates/**/*.html'
      - 'templates/**/*.css'

jobs:
  screenshots:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install playwright
      - run: node scripts/screenshot-generator.js
      - uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: "Update screenshots"
          file_pattern: "templates/*/preview.png"
```

## Best Practices

1. **Consistent styling:** Use same browser, zoom level, theme
2. **Hide scrollbars:** Use CSS to hide scrollbars in screenshots
3. **Clean data:** Use realistic but clean placeholder data
4. **Optimize size:** Keep PNGs under 500KB each
5. **Alt text:** Add descriptive alt text for accessibility
6. **Update regularly:** Regenerate when templates change
7. **Mobile-first:** Show mobile views prominently

## Manual Generation Checklist

For each template:

- [ ] Open in Chrome
- [ ] Clear cache
- [ ] Set viewport to 1200x800
- [ ] Take hero screenshot
- [ ] Scroll to bottom, take full page
- [ ] Set viewport to 375x800
- [ ] Take mobile screenshot
- [ ] Optimize all images
- [ ] Add to template folder
- [ ] Update README with preview
- [ ] Commit to git

## Status: Templates 01-25

| Template | Hero | Full | Mobile | Status |
|----------|------|------|--------|--------|
| 01-founder | ✅ | ✅ | ✅ | Complete |
| 02-developer-dark | ✅ | ✅ | ✅ | Complete |
| 03-text-scholar | ✅ | ✅ | ✅ | Complete |
| 04-minimal-clean | ✅ | ✅ | ✅ | Complete |
| 05-playful-developer | ✅ | ✅ | ✅ | Complete |
| 06-blog-first | ✅ | ✅ | ✅ | Complete |
| 07-resume | ✅ | ✅ | ✅ | Complete |
| 08-startup | ✅ | ✅ | ✅ | Complete |
| 09-creative-portfolio | ✅ | ✅ | ✅ | Complete |
| 10-project-showcase | ✅ | ✅ | ✅ | Complete |
| 11-bento-grid | ✅ | ✅ | ✅ | Complete |
| 12-glassmorphism | ✅ | ✅ | ✅ | Complete |
| 13-y2k-retro | ✅ | ✅ | ✅ | Complete |
| 14-organic-shapes | ✅ | ✅ | ✅ | Complete |
| 15-hand-drawn | ✅ | ✅ | ✅ | Complete |
| 16-bold-typography | ✅ | ✅ | ✅ | Complete |
| 17-3d-elements | ✅ | ✅ | ✅ | Complete |
| 18-brutalist | ✅ | ✅ | ✅ | Complete |
| 19-swiss-style | ✅ | ✅ | ✅ | Complete |
| 20-memphis-design | ✅ | ✅ | ✅ | Complete |
| 21-neumorphism | ✅ | ✅ | ✅ | Complete |
| 22-software-engineer | ✅ | ✅ | ✅ | Complete |
| 23-ui-ux-designer | ✅ | ✅ | ✅ | Complete |
| 24-product-designer | ✅ | ✅ | ✅ | Complete |
| 25-graphic-designer | ✅ | ✅ | ✅ | Complete |

**Total:** 75/75 screenshots generated (100%)

---

**Next Steps:**
1. ✅ Choose screenshot generation method (Playwright) - DONE
2. ✅ Run generation script - DONE (75/75 screenshots generated)
3. ⏳ Optimize images (optional - current sizes are acceptable)
4. ⏳ Update READMEs with previews (can be done per template as needed)
5. ⏳ Commit to repository

**Status:** Screenshots generated successfully! Ready to commit.
