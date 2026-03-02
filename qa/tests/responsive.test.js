/**
 * Responsive Design Tests
 * Validates responsive layouts using Playwright
 */

const { chromium } = require('playwright');
const path = require('path');
const config = require('../config');

class ResponsiveTests {
  constructor() {
    this.browser = null;
  }

  async init() {
    this.browser = await chromium.launch({ headless: true });
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  async run(templatePath, templateName) {
    const results = [];
    const indexPath = path.join(templatePath, 'index.html');

    try {
      if (!this.browser) {
        await this.init();
      }

      const page = await this.browser.newPage();
      await page.goto(`file://${indexPath}`, { waitUntil: 'networkidle' });

      // Test each viewport
      for (const [name, viewport] of Object.entries(config.viewports)) {
        const viewportResults = await this.testViewport(page, templateName, name, viewport);
        results.push(...viewportResults);
      }

      // Test horizontal scroll
      results.push(await this.checkHorizontalScroll(page, templateName));

      // Test touch targets
      results.push(await this.checkTouchTargets(page, templateName));

      // Test text readability
      results.push(await this.checkTextReadability(page, templateName));

      await page.close();
    } catch (error) {
      results.push({
        category: 'responsive',
        template: templateName,
        test: 'Responsive tests',
        passed: false,
        message: `Error: ${error.message}`,
        severity: 'error'
      });
    }

    return results;
  }

  async testViewport(page, templateName, viewportName, viewport) {
    const results = [];

    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.waitForTimeout(300);

    // Check for overflow
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    results.push({
      category: 'responsive',
      template: templateName,
      test: `${viewportName}: No horizontal overflow`,
      passed: !hasOverflow,
      message: hasOverflow
        ? `Horizontal overflow at ${viewport.width}px`
        : `No overflow at ${viewport.width}px`,
      severity: hasOverflow ? 'warning' : 'info'
    });

    // Check main content is visible
    const contentVisible = await page.evaluate(() => {
      const main = document.querySelector('main') || document.body;
      const rect = main.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });

    results.push({
      category: 'responsive',
      template: templateName,
      test: `${viewportName}: Content visible`,
      passed: contentVisible,
      message: contentVisible
        ? 'Main content visible'
        : 'Main content not visible',
      severity: contentVisible ? 'info' : 'error'
    });

    return results;
  }

  async checkHorizontalScroll(page, templateName) {
    // Test at mobile size
    await page.setViewportSize({ width: 375, height: 667 });

    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    return {
      category: 'responsive',
      template: templateName,
      test: 'Mobile: No horizontal scroll',
      passed: !hasHorizontalScroll,
      message: hasHorizontalScroll
        ? 'Has unwanted horizontal scroll on mobile'
        : 'No horizontal scroll on mobile',
      severity: hasHorizontalScroll ? 'error' : 'info'
    };
  }

  async checkTouchTargets(page, templateName) {
    await page.setViewportSize({ width: 375, height: 667 });

    const smallTargets = await page.evaluate(() => {
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
      let small = 0;

      for (const el of interactiveElements) {
        const rect = el.getBoundingClientRect();
        // Minimum touch target: 44x44px (Apple HIG) or 48x48px (Material)
        if (rect.width > 0 && rect.height > 0 && (rect.width < 44 || rect.height < 44)) {
          small++;
        }
      }

      return { small, total: interactiveElements.length };
    });

    const passed = smallTargets.small <= Math.ceil(smallTargets.total * 0.2); // Allow 20% small targets

    return {
      category: 'responsive',
      template: templateName,
      test: 'Mobile: Adequate touch targets',
      passed,
      message: `${smallTargets.total - smallTargets.small}/${smallTargets.total} elements have adequate touch targets (44px+)`,
      severity: passed ? 'info' : 'warning'
    };
  }

  async checkTextReadability(page, templateName) {
    await page.setViewportSize({ width: 375, height: 667 });

    const textInfo = await page.evaluate(() => {
      const body = document.body;
      const style = window.getComputedStyle(body);
      const fontSize = parseFloat(style.fontSize);
      const lineHeight = parseFloat(style.lineHeight) / fontSize;

      return { fontSize, lineHeight };
    });

    const goodFontSize = textInfo.fontSize >= 14;
    const goodLineHeight = textInfo.lineHeight >= 1.4;

    return {
      category: 'responsive',
      template: templateName,
      test: 'Mobile: Readable text',
      passed: goodFontSize && goodLineHeight,
      message: `Font: ${textInfo.fontSize}px, Line-height: ${textInfo.lineHeight.toFixed(2)}`,
      severity: (goodFontSize && goodLineHeight) ? 'info' : 'warning'
    };
  }
}

module.exports = ResponsiveTests;
