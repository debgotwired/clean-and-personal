#!/usr/bin/env node
/**
 * QA Test Runner
 * Clean and Personal Template Collection
 *
 * Run: node qa/runner.js [--template <name>] [--category <category>] [--verbose]
 */

const fs = require('fs');
const path = require('path');
const config = require('./config');

// Test modules
const StructureTests = require('./tests/structure.test');
const HtmlTests = require('./tests/html.test');
const CssTests = require('./tests/css.test');
const JavaScriptTests = require('./tests/javascript.test');
const AccessibilityTests = require('./tests/accessibility.test');
const ResponsiveTests = require('./tests/responsive.test');

class QARunner {
  constructor(options = {}) {
    this.options = {
      verbose: false,
      template: null,
      category: null,
      ...options
    };

    this.tests = {
      structure: new StructureTests(),
      html: new HtmlTests(),
      css: new CssTests(),
      javascript: new JavaScriptTests(),
      accessibility: new AccessibilityTests(),
      responsive: new ResponsiveTests()
    };

    this.results = [];
    this.startTime = Date.now();
  }

  async run() {
    console.log('\n' + '='.repeat(60));
    console.log('  CLEAN AND PERSONAL - QA TEST SUITE');
    console.log('  ' + new Date().toISOString());
    console.log('='.repeat(60) + '\n');

    // Get templates to test
    const templates = this.getTemplates();
    console.log(`Testing ${templates.length} templates...\n`);

    // Run tests for each template
    for (const template of templates) {
      await this.runTemplateTests(template);
    }

    // Cleanup responsive tests (browser)
    await this.tests.responsive.cleanup();

    // Generate report
    const report = this.generateReport();
    this.saveReport(report);
    this.printSummary(report);

    return report;
  }

  getTemplates() {
    const templates = fs.readdirSync(config.templatesDir)
      .filter(f => f.match(/^\d+/))
      .sort();

    if (this.options.template) {
      return templates.filter(t =>
        t.includes(this.options.template) ||
        t.startsWith(this.options.template)
      );
    }

    return templates;
  }

  async runTemplateTests(templateName) {
    const templatePath = path.join(config.templatesDir, templateName);

    if (this.options.verbose) {
      console.log(`\n📋 Testing: ${templateName}`);
    } else {
      process.stdout.write(`Testing ${templateName}... `);
    }

    const templateResults = [];
    const categories = this.options.category
      ? [this.options.category]
      : Object.keys(this.tests);

    for (const category of categories) {
      if (!this.tests[category]) continue;

      try {
        const results = await this.tests[category].run(templatePath, templateName);
        templateResults.push(...results);

        if (this.options.verbose) {
          this.printCategoryResults(category, results);
        }
      } catch (error) {
        templateResults.push({
          category,
          template: templateName,
          test: `${category} tests`,
          passed: false,
          message: `Error: ${error.message}`,
          severity: 'error'
        });
      }
    }

    this.results.push(...templateResults);

    if (!this.options.verbose) {
      const passed = templateResults.filter(r => r.passed).length;
      const failed = templateResults.filter(r => !r.passed && r.severity === 'error').length;
      const warnings = templateResults.filter(r => !r.passed && r.severity === 'warning').length;

      if (failed > 0) {
        console.log(`❌ ${failed} errors, ${warnings} warnings`);
      } else if (warnings > 0) {
        console.log(`⚠️  ${warnings} warnings`);
      } else {
        console.log(`✅ ${passed} tests passed`);
      }
    }
  }

  printCategoryResults(category, results) {
    console.log(`  📁 ${category.toUpperCase()}`);
    for (const result of results) {
      const icon = result.passed ? '✓' : (result.severity === 'error' ? '✗' : '⚠');
      const color = result.passed ? '\x1b[32m' : (result.severity === 'error' ? '\x1b[31m' : '\x1b[33m');
      console.log(`     ${color}${icon}\x1b[0m ${result.test}: ${result.message}`);
    }
  }

  generateReport() {
    const duration = Date.now() - this.startTime;
    const templates = [...new Set(this.results.map(r => r.template))];

    const summary = {
      total: this.results.length,
      passed: this.results.filter(r => r.passed).length,
      failed: this.results.filter(r => !r.passed && r.severity === 'error').length,
      warnings: this.results.filter(r => !r.passed && r.severity === 'warning').length
    };

    const byCategory = {};
    const byTemplate = {};

    for (const result of this.results) {
      // By category
      if (!byCategory[result.category]) {
        byCategory[result.category] = { passed: 0, failed: 0, warnings: 0, tests: [] };
      }
      byCategory[result.category].tests.push(result);
      if (result.passed) {
        byCategory[result.category].passed++;
      } else if (result.severity === 'error') {
        byCategory[result.category].failed++;
      } else {
        byCategory[result.category].warnings++;
      }

      // By template
      if (!byTemplate[result.template]) {
        byTemplate[result.template] = { passed: 0, failed: 0, warnings: 0, tests: [] };
      }
      byTemplate[result.template].tests.push(result);
      if (result.passed) {
        byTemplate[result.template].passed++;
      } else if (result.severity === 'error') {
        byTemplate[result.template].failed++;
      } else {
        byTemplate[result.template].warnings++;
      }
    }

    return {
      timestamp: new Date().toISOString(),
      duration: `${(duration / 1000).toFixed(2)}s`,
      templates: templates.length,
      summary,
      byCategory,
      byTemplate,
      results: this.results
    };
  }

  saveReport(report) {
    const reportsDir = config.reportsDir;
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    // Save JSON report
    const jsonPath = path.join(reportsDir, `qa-report-${Date.now()}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));

    // Save latest report
    const latestPath = path.join(reportsDir, 'latest.json');
    fs.writeFileSync(latestPath, JSON.stringify(report, null, 2));

    // Save markdown report
    const mdReport = this.generateMarkdownReport(report);
    const mdPath = path.join(reportsDir, 'latest.md');
    fs.writeFileSync(mdPath, mdReport);

    console.log(`\n📝 Reports saved to ${reportsDir}/`);
  }

  generateMarkdownReport(report) {
    let md = `# QA Report - Clean and Personal\n\n`;
    md += `**Generated:** ${report.timestamp}\n`;
    md += `**Duration:** ${report.duration}\n`;
    md += `**Templates Tested:** ${report.templates}\n\n`;

    md += `## Summary\n\n`;
    md += `| Metric | Count |\n|--------|-------|\n`;
    md += `| Total Tests | ${report.summary.total} |\n`;
    md += `| Passed | ${report.summary.passed} |\n`;
    md += `| Errors | ${report.summary.failed} |\n`;
    md += `| Warnings | ${report.summary.warnings} |\n`;
    md += `| Pass Rate | ${((report.summary.passed / report.summary.total) * 100).toFixed(1)}% |\n\n`;

    md += `## Results by Category\n\n`;
    for (const [category, data] of Object.entries(report.byCategory)) {
      const passRate = ((data.passed / data.tests.length) * 100).toFixed(0);
      md += `### ${category.charAt(0).toUpperCase() + category.slice(1)}\n`;
      md += `- Passed: ${data.passed}\n`;
      md += `- Errors: ${data.failed}\n`;
      md += `- Warnings: ${data.warnings}\n`;
      md += `- Pass Rate: ${passRate}%\n\n`;
    }

    md += `## Issues Found\n\n`;
    const issues = report.results.filter(r => !r.passed && r.severity === 'error');
    if (issues.length === 0) {
      md += `No critical issues found.\n\n`;
    } else {
      for (const issue of issues) {
        md += `- **${issue.template}** (${issue.category}): ${issue.test} - ${issue.message}\n`;
      }
      md += `\n`;
    }

    md += `## Warnings\n\n`;
    const warnings = report.results.filter(r => !r.passed && r.severity === 'warning');
    if (warnings.length === 0) {
      md += `No warnings.\n\n`;
    } else {
      for (const warning of warnings) {
        md += `- **${warning.template}** (${warning.category}): ${warning.test} - ${warning.message}\n`;
      }
      md += `\n`;
    }

    return md;
  }

  printSummary(report) {
    console.log('\n' + '='.repeat(60));
    console.log('  SUMMARY');
    console.log('='.repeat(60));

    console.log(`\n  Total Tests:  ${report.summary.total}`);
    console.log(`  \x1b[32mPassed:\x1b[0m       ${report.summary.passed}`);
    console.log(`  \x1b[31mErrors:\x1b[0m       ${report.summary.failed}`);
    console.log(`  \x1b[33mWarnings:\x1b[0m     ${report.summary.warnings}`);

    const passRate = ((report.summary.passed / report.summary.total) * 100).toFixed(1);
    const rateColor = passRate >= 90 ? '\x1b[32m' : passRate >= 70 ? '\x1b[33m' : '\x1b[31m';
    console.log(`  ${rateColor}Pass Rate:\x1b[0m    ${passRate}%`);

    console.log(`\n  Duration:     ${report.duration}`);
    console.log(`  Templates:    ${report.templates}\n`);

    if (report.summary.failed > 0) {
      console.log('\x1b[31m  ❌ QA FAILED - Fix errors before releasing\x1b[0m\n');
      process.exitCode = 1;
    } else if (report.summary.warnings > 5) {
      console.log('\x1b[33m  ⚠️  QA PASSED with warnings\x1b[0m\n');
    } else {
      console.log('\x1b[32m  ✅ QA PASSED\x1b[0m\n');
    }
  }
}

// CLI
if (require.main === module) {
  const args = process.argv.slice(2);
  const options = {
    verbose: args.includes('--verbose') || args.includes('-v'),
    template: args.includes('--template') ? args[args.indexOf('--template') + 1] : null,
    category: args.includes('--category') ? args[args.indexOf('--category') + 1] : null
  };

  // Help
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Clean and Personal - QA Test Suite

Usage: node qa/runner.js [options]

Options:
  --template <name>   Test specific template(s) matching name
  --category <cat>    Test specific category only
  --verbose, -v       Show detailed test output
  --help, -h          Show this help

Categories:
  structure, html, css, javascript, accessibility, responsive

Examples:
  node qa/runner.js                      # Run all tests
  node qa/runner.js --template 51        # Test templates starting with 51
  node qa/runner.js --category html      # Only HTML tests
  node qa/runner.js --verbose            # Detailed output
`);
    process.exit(0);
  }

  const runner = new QARunner(options);
  runner.run().catch(console.error);
}

module.exports = QARunner;
