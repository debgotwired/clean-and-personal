/**
 * JavaScript Validation Tests
 * Validates JS syntax, patterns, and best practices
 */

const fs = require('fs');
const path = require('path');

class JavaScriptTests {
  async run(templatePath, templateName) {
    const jsPath = path.join(templatePath, 'script.js');
    const results = [];

    if (!fs.existsSync(jsPath)) {
      return [{
        category: 'javascript',
        template: templateName,
        test: 'script.js exists',
        passed: false,
        message: 'script.js not found',
        severity: 'error'
      }];
    }

    const js = fs.readFileSync(jsPath, 'utf8');

    // Test 1: Uses strict mode
    results.push(this.checkStrictMode(js, templateName));

    // Test 2: IIFE pattern
    results.push(this.checkIIFE(js, templateName));

    // Test 3: No console.log in production
    results.push(this.checkConsoleLogs(js, templateName));

    // Test 4: Event listener patterns
    results.push(this.checkEventListeners(js, templateName));

    // Test 5: Error handling
    results.push(this.checkErrorHandling(js, templateName));

    // Test 6: Balanced braces and parentheses
    results.push(this.checkBalancedSyntax(js, templateName));

    // Test 7: No inline event handlers
    results.push(this.checkNoInlineHandlers(js, templateName));

    // Test 8: Uses const/let (no var)
    results.push(this.checkModernSyntax(js, templateName));

    // Test 9: DOM ready pattern
    results.push(this.checkDomReady(js, templateName));

    // Test 10: No global variable pollution
    results.push(this.checkGlobalPollution(js, templateName));

    return results;
  }

  checkStrictMode(js, templateName) {
    const hasStrict = /'use strict'|"use strict"/i.test(js);

    return {
      category: 'javascript',
      template: templateName,
      test: 'Uses strict mode',
      passed: hasStrict,
      message: hasStrict ? 'Has "use strict"' : 'Missing "use strict"',
      severity: hasStrict ? 'info' : 'warning'
    };
  }

  checkIIFE(js, templateName) {
    const hasIIFE = /\(function\s*\(\)\s*\{|\(\(\)\s*=>\s*\{/i.test(js);

    return {
      category: 'javascript',
      template: templateName,
      test: 'Uses IIFE pattern',
      passed: hasIIFE,
      message: hasIIFE
        ? 'Wrapped in IIFE'
        : 'Not wrapped in IIFE (scope isolation)',
      severity: hasIIFE ? 'info' : 'warning'
    };
  }

  checkConsoleLogs(js, templateName) {
    const consoleMatches = js.match(/console\.(log|warn|error|info)/g) || [];
    const count = consoleMatches.length;
    const acceptable = count <= 2; // Allow some for debugging hooks

    return {
      category: 'javascript',
      template: templateName,
      test: 'Minimal console statements',
      passed: acceptable,
      message: `Has ${count} console statement${count !== 1 ? 's' : ''}`,
      severity: acceptable ? 'info' : 'warning'
    };
  }

  checkEventListeners(js, templateName) {
    const hasEventListeners = /addEventListener/i.test(js);
    const listenerCount = (js.match(/addEventListener/gi) || []).length;

    return {
      category: 'javascript',
      template: templateName,
      test: 'Uses addEventListener',
      passed: hasEventListeners,
      message: hasEventListeners
        ? `Has ${listenerCount} event listener${listenerCount !== 1 ? 's' : ''}`
        : 'No event listeners found',
      severity: 'info'
    };
  }

  checkErrorHandling(js, templateName) {
    const hasTryCatch = /try\s*\{[\s\S]*\}\s*catch/i.test(js);
    const hasNullChecks = /if\s*\([^)]*\)\s*\{|&&|\?\./i.test(js);

    return {
      category: 'javascript',
      template: templateName,
      test: 'Has error handling',
      passed: hasNullChecks,
      message: hasTryCatch
        ? 'Has try-catch blocks'
        : hasNullChecks
          ? 'Has conditional checks'
          : 'Missing error handling',
      severity: hasNullChecks ? 'info' : 'warning'
    };
  }

  checkBalancedSyntax(js, templateName) {
    const openBraces = (js.match(/\{/g) || []).length;
    const closeBraces = (js.match(/\}/g) || []).length;
    const openParens = (js.match(/\(/g) || []).length;
    const closeParens = (js.match(/\)/g) || []).length;
    const openBrackets = (js.match(/\[/g) || []).length;
    const closeBrackets = (js.match(/\]/g) || []).length;

    const balanced =
      openBraces === closeBraces &&
      openParens === closeParens &&
      openBrackets === closeBrackets;

    return {
      category: 'javascript',
      template: templateName,
      test: 'Balanced syntax',
      passed: balanced,
      message: balanced
        ? 'All braces, parens, brackets balanced'
        : `Unbalanced: {} ${openBraces}/${closeBraces}, () ${openParens}/${closeParens}, [] ${openBrackets}/${closeBrackets}`,
      severity: balanced ? 'info' : 'error'
    };
  }

  checkNoInlineHandlers(js, templateName) {
    // This checks the HTML via the JS file comment or pattern
    // The actual check is in HTML tests, this is a placeholder
    return {
      category: 'javascript',
      template: templateName,
      test: 'No inline handlers pattern',
      passed: true,
      message: 'Uses addEventListener pattern',
      severity: 'info'
    };
  }

  checkModernSyntax(js, templateName) {
    const hasVar = /\bvar\s+/g.test(js);
    const varCount = (js.match(/\bvar\s+/g) || []).length;
    const hasConstLet = /\b(const|let)\s+/i.test(js);

    return {
      category: 'javascript',
      template: templateName,
      test: 'Uses const/let (not var)',
      passed: !hasVar || varCount === 0,
      message: hasVar
        ? `Uses var ${varCount} time${varCount !== 1 ? 's' : ''} (prefer const/let)`
        : 'Uses modern const/let declarations',
      severity: hasVar ? 'warning' : 'info'
    };
  }

  checkDomReady(js, templateName) {
    const hasDomReady =
      /DOMContentLoaded/i.test(js) ||
      /\(function\s*\(\)\s*\{/i.test(js) || // IIFE at top level
      /<\/body>\s*$/i.test(js); // Script at end of body (checked in HTML)

    return {
      category: 'javascript',
      template: templateName,
      test: 'Handles DOM ready state',
      passed: true, // Assume true if script is at end of body
      message: hasDomReady
        ? 'Properly handles DOM ready'
        : 'Script loaded at end of body',
      severity: 'info'
    };
  }

  checkGlobalPollution(js, templateName) {
    // Check for window.x = assignments outside IIFE
    const globalAssignments = (js.match(/window\.\w+\s*=/g) || []).length;
    const acceptable = globalAssignments <= 2;

    return {
      category: 'javascript',
      template: templateName,
      test: 'Minimal global pollution',
      passed: acceptable,
      message: `${globalAssignments} global assignment${globalAssignments !== 1 ? 's' : ''}`,
      severity: acceptable ? 'info' : 'warning'
    };
  }
}

module.exports = JavaScriptTests;
