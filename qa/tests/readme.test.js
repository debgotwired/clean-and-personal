/**
 * README Tests
 * Validates that the root README.md is in sync with templates
 *
 * Checks:
 * - Template count matches actual templates
 * - All templates are listed in README tables
 * - Badge counts are accurate
 *
 * Can also auto-fix issues when run with --fix flag
 */

const fs = require('fs');
const path = require('path');
const config = require('../config');

class ReadmeTests {
  constructor() {
    this.results = [];
    this.rootDir = path.join(__dirname, '..', '..');
    this.readmePath = path.join(this.rootDir, 'README.md');
    this.templatesDir = config.templatesDir;
  }

  async run(options = {}) {
    const results = [];

    // Get actual templates
    const templates = this.getTemplates();
    const templateCount = templates.length;

    // Read README
    if (!fs.existsSync(this.readmePath)) {
      return [{
        category: 'readme',
        template: 'project',
        test: 'README.md exists',
        passed: false,
        message: 'Root README.md not found',
        severity: 'error'
      }];
    }

    let readmeContent = fs.readFileSync(this.readmePath, 'utf8');
    let needsUpdate = false;
    let updates = [];

    // Test 1: Check template count in title
    const titleMatch = readmeContent.match(/with (\d+) beautiful/);
    if (titleMatch) {
      const readmeCount = parseInt(titleMatch[1]);
      const passed = readmeCount === templateCount;

      results.push({
        category: 'readme',
        template: 'project',
        test: 'Template count in title',
        passed,
        message: passed
          ? `Title shows ${templateCount} templates (correct)`
          : `Title shows ${readmeCount} but found ${templateCount} templates`,
        severity: passed ? 'info' : 'error',
        fix: () => {
          readmeContent = readmeContent.replace(
            /with \d+ beautiful/,
            `with ${templateCount} beautiful`
          );
        }
      });

      if (!passed) needsUpdate = true;
    }

    // Test 2: Check badge count
    const badgeMatch = readmeContent.match(/templates-(\d+)-success/);
    if (badgeMatch) {
      const badgeCount = parseInt(badgeMatch[1]);
      const passed = badgeCount === templateCount;

      results.push({
        category: 'readme',
        template: 'project',
        test: 'Template count in badge',
        passed,
        message: passed
          ? `Badge shows ${templateCount} templates (correct)`
          : `Badge shows ${badgeCount} but found ${templateCount} templates`,
        severity: passed ? 'info' : 'error',
        fix: () => {
          readmeContent = readmeContent.replace(
            /templates-\d+-success/,
            `templates-${templateCount}-success`
          );
        }
      });

      if (!passed) needsUpdate = true;
    }

    // Test 3: Check "All X Templates" header
    const headerMatch = readmeContent.match(/## 📚 All (\d+) Templates/);
    if (headerMatch) {
      const headerCount = parseInt(headerMatch[1]);
      const passed = headerCount === templateCount;

      results.push({
        category: 'readme',
        template: 'project',
        test: 'Template count in section header',
        passed,
        message: passed
          ? `Section header shows ${templateCount} templates (correct)`
          : `Header shows ${headerCount} but found ${templateCount} templates`,
        severity: passed ? 'info' : 'error',
        fix: () => {
          readmeContent = readmeContent.replace(
            /## 📚 All \d+ Templates/,
            `## 📚 All ${templateCount} Templates`
          );
        }
      });

      if (!passed) needsUpdate = true;
    }

    // Test 4: Check features line
    const featuresMatch = readmeContent.match(/🎨 \*\*(\d+) Beautiful Templates\*\*/);
    if (featuresMatch) {
      const featuresCount = parseInt(featuresMatch[1]);
      const passed = featuresCount === templateCount;

      results.push({
        category: 'readme',
        template: 'project',
        test: 'Template count in features',
        passed,
        message: passed
          ? `Features shows ${templateCount} templates (correct)`
          : `Features shows ${featuresCount} but found ${templateCount} templates`,
        severity: passed ? 'info' : 'error',
        fix: () => {
          readmeContent = readmeContent.replace(
            /🎨 \*\*\d+ Beautiful Templates\*\*/,
            `🎨 **${templateCount} Beautiful Templates**`
          );
        }
      });

      if (!passed) needsUpdate = true;
    }

    // Test 5: Check "browse templates" line
    const browseMatch = readmeContent.match(/to see all (\d+) templates/);
    if (browseMatch) {
      const browseCount = parseInt(browseMatch[1]);
      const passed = browseCount === templateCount;

      results.push({
        category: 'readme',
        template: 'project',
        test: 'Template count in browse section',
        passed,
        message: passed
          ? `Browse section shows ${templateCount} templates (correct)`
          : `Browse shows ${browseCount} but found ${templateCount} templates`,
        severity: passed ? 'info' : 'error',
        fix: () => {
          readmeContent = readmeContent.replace(
            /to see all \d+ templates/,
            `to see all ${templateCount} templates`
          );
        }
      });

      if (!passed) needsUpdate = true;
    }

    // Test 6: Check all templates are listed in tables
    const missingTemplates = [];
    for (const template of templates) {
      // Extract template number and check if it's in a table row
      const match = template.match(/^(\d+)-(.+)$/);
      if (match) {
        const num = match[1];
        // Look for table row like "| 61 |" or "| 01 |"
        const tableRowRegex = new RegExp(`\\| ${num.replace(/^0/, '0?')} \\|`);
        if (!tableRowRegex.test(readmeContent)) {
          missingTemplates.push(template);
        }
      }
    }

    const allListed = missingTemplates.length === 0;
    results.push({
      category: 'readme',
      template: 'project',
      test: 'All templates listed in tables',
      passed: allListed,
      message: allListed
        ? `All ${templateCount} templates are listed in README tables`
        : `Missing from tables: ${missingTemplates.join(', ')}`,
      severity: allListed ? 'info' : 'error'
    });

    // Apply fixes if requested
    if (options.fix && needsUpdate) {
      for (const result of results) {
        if (result.fix && !result.passed) {
          result.fix();
        }
      }
      fs.writeFileSync(this.readmePath, readmeContent);

      results.push({
        category: 'readme',
        template: 'project',
        test: 'Auto-fix applied',
        passed: true,
        message: 'README.md has been updated with correct template counts',
        severity: 'info'
      });
    } else if (needsUpdate && !options.fix) {
      results.push({
        category: 'readme',
        template: 'project',
        test: 'README needs update',
        passed: false,
        message: 'Run with --fix to auto-update template counts, or manually add missing templates to tables',
        severity: 'warning'
      });
    }

    return results;
  }

  getTemplates() {
    return fs.readdirSync(this.templatesDir)
      .filter(f => f.match(/^\d+/))
      .sort();
  }
}

module.exports = ReadmeTests;
