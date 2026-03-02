/**
 * Structure Tests
 * Validates file structure and required files for each template
 */

const fs = require('fs');
const path = require('path');
const config = require('../config');

class StructureTests {
  constructor() {
    this.results = [];
  }

  async run(templatePath, templateName) {
    const tests = [];

    // Test 1: Check all required files exist
    tests.push(this.checkRequiredFiles(templatePath, templateName));

    // Test 2: Check file sizes are reasonable
    tests.push(this.checkFileSizes(templatePath, templateName));

    // Test 3: Check config.json is valid JSON
    tests.push(this.checkConfigJson(templatePath, templateName));

    // Test 4: Check README has required sections
    tests.push(this.checkReadme(templatePath, templateName));

    // Test 5: Check preview images exist and have valid sizes
    tests.push(this.checkPreviews(templatePath, templateName));

    return tests.flat();
  }

  checkRequiredFiles(templatePath, templateName) {
    const results = [];
    const coreFiles = ['index.html', 'styles.css', 'script.js', 'config.json', 'README.md'];

    for (const file of coreFiles) {
      const filePath = path.join(templatePath, file);
      const exists = fs.existsSync(filePath);

      results.push({
        category: 'structure',
        template: templateName,
        test: `Required file: ${file}`,
        passed: exists,
        message: exists ? `${file} exists` : `Missing required file: ${file}`,
        severity: 'error'
      });
    }

    return results;
  }

  checkFileSizes(templatePath, templateName) {
    const results = [];
    const limits = {
      'index.html': config.performance.maxHtmlSize,
      'styles.css': config.performance.maxCssSize,
      'script.js': config.performance.maxJsSize
    };

    for (const [file, maxSize] of Object.entries(limits)) {
      const filePath = path.join(templatePath, file);
      if (!fs.existsSync(filePath)) continue;

      const stats = fs.statSync(filePath);
      const passed = stats.size <= maxSize;

      results.push({
        category: 'structure',
        template: templateName,
        test: `File size: ${file}`,
        passed,
        message: passed
          ? `${file}: ${(stats.size / 1024).toFixed(1)}KB (limit: ${maxSize / 1024}KB)`
          : `${file} exceeds size limit: ${(stats.size / 1024).toFixed(1)}KB > ${maxSize / 1024}KB`,
        severity: passed ? 'info' : 'warning'
      });
    }

    return results;
  }

  checkConfigJson(templatePath, templateName) {
    const configPath = path.join(templatePath, 'config.json');
    const results = [];

    if (!fs.existsSync(configPath)) {
      return [{
        category: 'structure',
        template: templateName,
        test: 'config.json validity',
        passed: false,
        message: 'config.json not found',
        severity: 'error'
      }];
    }

    try {
      const content = fs.readFileSync(configPath, 'utf8');
      const json = JSON.parse(content);

      // Check required fields
      const requiredFields = ['name', 'description'];
      for (const field of requiredFields) {
        results.push({
          category: 'structure',
          template: templateName,
          test: `config.json has "${field}"`,
          passed: !!json[field],
          message: json[field] ? `Has ${field}` : `Missing ${field} in config.json`,
          severity: json[field] ? 'info' : 'error'
        });
      }

      results.push({
        category: 'structure',
        template: templateName,
        test: 'config.json is valid JSON',
        passed: true,
        message: 'Valid JSON structure',
        severity: 'info'
      });
    } catch (error) {
      results.push({
        category: 'structure',
        template: templateName,
        test: 'config.json is valid JSON',
        passed: false,
        message: `Invalid JSON: ${error.message}`,
        severity: 'error'
      });
    }

    return results;
  }

  checkReadme(templatePath, templateName) {
    const readmePath = path.join(templatePath, 'README.md');
    const results = [];

    if (!fs.existsSync(readmePath)) {
      return [{
        category: 'structure',
        template: templateName,
        test: 'README.md exists',
        passed: false,
        message: 'README.md not found',
        severity: 'error'
      }];
    }

    const content = fs.readFileSync(readmePath, 'utf8');
    const requiredSections = ['#', 'Features', 'Customization'];

    for (const section of requiredSections) {
      const hasSection = content.includes(section);
      results.push({
        category: 'structure',
        template: templateName,
        test: `README has "${section}" section`,
        passed: hasSection,
        message: hasSection ? `Has ${section}` : `Missing ${section} in README`,
        severity: hasSection ? 'info' : 'warning'
      });
    }

    // Check README length
    const lineCount = content.split('\n').length;
    results.push({
      category: 'structure',
      template: templateName,
      test: 'README has sufficient content',
      passed: lineCount >= 30,
      message: `README has ${lineCount} lines (minimum: 30)`,
      severity: lineCount >= 30 ? 'info' : 'warning'
    });

    return results;
  }

  checkPreviews(templatePath, templateName) {
    const results = [];
    const previewFiles = ['preview.png', 'mobile-preview.png', 'full-preview.png'];

    for (const file of previewFiles) {
      const filePath = path.join(templatePath, file);
      const exists = fs.existsSync(filePath);

      if (exists) {
        const stats = fs.statSync(filePath);
        const validSize = stats.size > 10000; // At least 10KB

        results.push({
          category: 'structure',
          template: templateName,
          test: `Preview: ${file}`,
          passed: validSize,
          message: validSize
            ? `${file}: ${(stats.size / 1024).toFixed(0)}KB`
            : `${file} seems too small (${(stats.size / 1024).toFixed(1)}KB)`,
          severity: validSize ? 'info' : 'warning'
        });
      } else {
        results.push({
          category: 'structure',
          template: templateName,
          test: `Preview: ${file}`,
          passed: false,
          message: `Missing preview: ${file}`,
          severity: 'error'
        });
      }
    }

    return results;
  }
}

module.exports = StructureTests;
