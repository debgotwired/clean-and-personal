/**
 * CSS Validation Tests
 * Validates CSS structure, best practices, and responsive design
 */

const fs = require('fs');
const path = require('path');

class CssTests {
  async run(templatePath, templateName) {
    const cssPath = path.join(templatePath, 'styles.css');
    const results = [];

    if (!fs.existsSync(cssPath)) {
      return [{
        category: 'css',
        template: templateName,
        test: 'styles.css exists',
        passed: false,
        message: 'styles.css not found',
        severity: 'error'
      }];
    }

    const css = fs.readFileSync(cssPath, 'utf8');

    // Test 1: CSS Variables (Custom Properties)
    results.push(this.checkCssVariables(css, templateName));

    // Test 2: Box-sizing reset
    results.push(this.checkBoxSizing(css, templateName));

    // Test 3: Responsive design (media queries)
    results.push(...this.checkResponsiveDesign(css, templateName));

    // Test 4: !important usage
    results.push(this.checkImportantUsage(css, templateName));

    // Test 5: Font loading
    results.push(this.checkFontLoading(css, templateName));

    // Test 6: Color consistency
    results.push(this.checkColorConsistency(css, templateName));

    // Test 7: Balanced braces
    results.push(this.checkBalancedBraces(css, templateName));

    // Test 8: Focus states
    results.push(this.checkFocusStates(css, templateName));

    // Test 9: Reduced motion support
    results.push(this.checkReducedMotion(css, templateName));

    // Test 10: Print styles
    results.push(this.checkPrintStyles(css, templateName));

    return results;
  }

  checkCssVariables(css, templateName) {
    const hasRoot = /:root\s*\{/i.test(css);
    const variableCount = (css.match(/--[a-zA-Z0-9-]+:/g) || []).length;

    return {
      category: 'css',
      template: templateName,
      test: 'Uses CSS custom properties',
      passed: hasRoot && variableCount >= 3,
      message: hasRoot
        ? `Has ${variableCount} CSS variables in :root`
        : 'Missing :root with CSS variables',
      severity: (hasRoot && variableCount >= 3) ? 'info' : 'warning'
    };
  }

  checkBoxSizing(css, templateName) {
    const hasBoxSizing = /\*\s*\{[^}]*box-sizing:\s*border-box/i.test(css);

    return {
      category: 'css',
      template: templateName,
      test: 'Has box-sizing reset',
      passed: hasBoxSizing,
      message: hasBoxSizing
        ? 'Has box-sizing: border-box reset'
        : 'Missing box-sizing reset',
      severity: hasBoxSizing ? 'info' : 'warning'
    };
  }

  checkResponsiveDesign(css, templateName) {
    const results = [];
    const mediaQueries = css.match(/@media[^{]+/gi) || [];

    // Check for mobile breakpoint (any reasonable mobile breakpoint)
    const hasMobileBreakpoint = mediaQueries.some(mq =>
      /max-width:\s*\d{3,4}px/i.test(mq) ||
      /min-width:\s*\d{3,4}px/i.test(mq)
    );

    results.push({
      category: 'css',
      template: templateName,
      test: 'Has mobile breakpoint',
      passed: hasMobileBreakpoint,
      message: hasMobileBreakpoint
        ? 'Has mobile responsive breakpoint'
        : 'Missing mobile breakpoint',
      severity: hasMobileBreakpoint ? 'info' : 'error'
    });

    results.push({
      category: 'css',
      template: templateName,
      test: 'Media query count',
      passed: mediaQueries.length >= 1,
      message: `Has ${mediaQueries.length} media queries`,
      severity: mediaQueries.length >= 1 ? 'info' : 'warning'
    });

    return results;
  }

  checkImportantUsage(css, templateName) {
    const importantCount = (css.match(/!important/gi) || []).length;
    const acceptable = importantCount <= 3;

    return {
      category: 'css',
      template: templateName,
      test: 'Minimal !important usage',
      passed: acceptable,
      message: `Uses !important ${importantCount} time${importantCount !== 1 ? 's' : ''}`,
      severity: acceptable ? 'info' : 'warning'
    };
  }

  checkFontLoading(css, templateName) {
    const hasFontStack = /font-family:[^;]*(,\s*[-a-z]+)+/i.test(css);
    const hasSystemFallback = /font-family:[^;]*(-apple-system|BlinkMacSystemFont|sans-serif|serif)/i.test(css);

    return {
      category: 'css',
      template: templateName,
      test: 'Has font fallback stack',
      passed: hasSystemFallback,
      message: hasSystemFallback
        ? 'Has system font fallbacks'
        : 'Missing system font fallbacks',
      severity: hasSystemFallback ? 'info' : 'warning'
    };
  }

  checkColorConsistency(css, templateName) {
    // Check if colors are using variables vs hardcoded
    const variableColors = (css.match(/:\s*var\(--[^)]+\)/g) || []).length;
    const hardcodedColors = (css.match(/:\s*#[0-9a-fA-F]{3,8}\b/g) || []).length;

    // Colors in :root don't count as hardcoded
    const rootSection = css.match(/:root\s*\{[^}]+\}/i)?.[0] || '';
    const rootColors = (rootSection.match(/#[0-9a-fA-F]{3,8}/g) || []).length;
    const actualHardcoded = hardcodedColors - rootColors;

    const usesVariables = variableColors > actualHardcoded;

    return {
      category: 'css',
      template: templateName,
      test: 'Uses color variables consistently',
      passed: usesVariables || actualHardcoded <= 5,
      message: `${variableColors} var() colors, ${actualHardcoded} hardcoded (outside :root)`,
      severity: (usesVariables || actualHardcoded <= 5) ? 'info' : 'warning'
    };
  }

  checkBalancedBraces(css, templateName) {
    const openBraces = (css.match(/\{/g) || []).length;
    const closeBraces = (css.match(/\}/g) || []).length;
    const balanced = openBraces === closeBraces;

    return {
      category: 'css',
      template: templateName,
      test: 'Balanced braces',
      passed: balanced,
      message: balanced
        ? `Balanced: ${openBraces} pairs`
        : `Unbalanced: ${openBraces} open, ${closeBraces} close`,
      severity: balanced ? 'info' : 'error'
    };
  }

  checkFocusStates(css, templateName) {
    const hasFocus = /:focus/i.test(css);
    const hasFocusVisible = /:focus-visible/i.test(css);
    const hasOutline = /outline:/i.test(css);

    const hasFocusStyles = hasFocus || hasFocusVisible;

    return {
      category: 'css',
      template: templateName,
      test: 'Has focus states for accessibility',
      passed: hasFocusStyles,
      message: hasFocusStyles
        ? `Has ${hasFocusVisible ? ':focus-visible' : ':focus'} styles`
        : 'Missing focus state styles',
      severity: hasFocusStyles ? 'info' : 'warning'
    };
  }

  checkReducedMotion(css, templateName) {
    const hasReducedMotion = /prefers-reduced-motion/i.test(css);

    return {
      category: 'css',
      template: templateName,
      test: 'Supports prefers-reduced-motion',
      passed: hasReducedMotion,
      message: hasReducedMotion
        ? 'Has prefers-reduced-motion media query'
        : 'Missing prefers-reduced-motion support',
      severity: hasReducedMotion ? 'info' : 'info' // Not an error, just nice to have
    };
  }

  checkPrintStyles(css, templateName) {
    const hasPrintStyles = /@media\s+print/i.test(css);

    return {
      category: 'css',
      template: templateName,
      test: 'Has print styles',
      passed: hasPrintStyles,
      message: hasPrintStyles
        ? 'Has @media print styles'
        : 'No print styles (optional)',
      severity: 'info' // Print styles are optional
    };
  }
}

module.exports = CssTests;
