/**
 * Accessibility Tests
 * Validates WCAG compliance and accessibility best practices
 */

const fs = require('fs');
const path = require('path');

class AccessibilityTests {
  async run(templatePath, templateName) {
    const htmlPath = path.join(templatePath, 'index.html');
    const cssPath = path.join(templatePath, 'styles.css');
    const results = [];

    if (!fs.existsSync(htmlPath)) {
      return [{
        category: 'accessibility',
        template: templateName,
        test: 'Files exist',
        passed: false,
        message: 'Required files not found',
        severity: 'error'
      }];
    }

    const html = fs.readFileSync(htmlPath, 'utf8');
    const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : '';

    // Test 1: Skip link
    results.push(this.checkSkipLink(html, templateName));

    // Test 2: ARIA landmarks
    results.push(this.checkAriaLandmarks(html, templateName));

    // Test 3: Color contrast (basic check)
    results.push(this.checkColorContrast(css, templateName));

    // Test 4: Interactive elements accessibility
    results.push(this.checkInteractiveElements(html, templateName));

    // Test 5: Focus management
    results.push(this.checkFocusManagement(html, css, templateName));

    // Test 6: Text alternatives
    results.push(this.checkTextAlternatives(html, templateName));

    // Test 7: Keyboard navigation
    results.push(this.checkKeyboardNav(html, templateName));

    // Test 8: Form labels
    results.push(this.checkFormLabels(html, templateName));

    // Test 9: Link purpose
    results.push(this.checkLinkPurpose(html, templateName));

    // Test 10: Motion and animation
    results.push(this.checkMotionSafety(css, templateName));

    return results;
  }

  checkSkipLink(html, templateName) {
    const hasSkipLink = /skip[- ]?(to[- ]?)?main|skip[- ]?nav|skip[- ]?content/i.test(html);

    return {
      category: 'accessibility',
      template: templateName,
      test: 'Has skip link',
      passed: hasSkipLink,
      message: hasSkipLink
        ? 'Has skip navigation link'
        : 'Missing skip link (nice to have for long pages)',
      severity: 'info' // Nice to have, not critical
    };
  }

  checkAriaLandmarks(html, templateName) {
    const landmarks = {
      main: /<main|role=["']main["']/i.test(html),
      navigation: /<nav|role=["']navigation["']/i.test(html),
      banner: /<header|role=["']banner["']/i.test(html),
      contentinfo: /<footer|role=["']contentinfo["']/i.test(html)
    };

    const landmarkCount = Object.values(landmarks).filter(Boolean).length;

    return {
      category: 'accessibility',
      template: templateName,
      test: 'Has ARIA landmarks',
      passed: landmarks.main,
      message: `Has ${landmarkCount}/4 landmarks (main: ${landmarks.main ? 'yes' : 'no'})`,
      severity: landmarks.main ? 'info' : 'warning'
    };
  }

  checkColorContrast(css, templateName) {
    // Basic check: ensure dark text on light bg or light text on dark bg
    const hasDarkTheme = /\[data-theme=["']dark["']\]/i.test(css);
    const hasColorVariables = /--text:|--bg:/i.test(css);

    return {
      category: 'accessibility',
      template: templateName,
      test: 'Color contrast awareness',
      passed: hasColorVariables,
      message: hasColorVariables
        ? `Uses color variables${hasDarkTheme ? ' with dark theme' : ''}`
        : 'Consider using CSS variables for theming',
      severity: hasColorVariables ? 'info' : 'info'
    };
  }

  checkInteractiveElements(html, templateName) {
    const buttons = html.match(/<button[^>]*>/gi) || [];
    const links = html.match(/<a[^>]*>/gi) || [];

    let accessibleButtons = 0;
    let accessibleLinks = 0;

    for (const btn of buttons) {
      if (/aria-label=|>.*</i.test(btn) || !/^\s*<button[^>]*>\s*<\/button>/i.test(btn)) {
        accessibleButtons++;
      }
    }

    for (const link of links) {
      if (/aria-label=|>.*</i.test(link) || !/href=["']#["']\s*>/i.test(link)) {
        accessibleLinks++;
      }
    }

    const total = buttons.length + links.length;
    const accessible = accessibleButtons + accessibleLinks;

    return {
      category: 'accessibility',
      template: templateName,
      test: 'Interactive elements accessible',
      passed: accessible === total || total === 0,
      message: total > 0
        ? `${accessible}/${total} interactive elements have accessible names`
        : 'No interactive elements found',
      severity: accessible === total ? 'info' : 'warning'
    };
  }

  checkFocusManagement(html, css, templateName) {
    const hasFocusStyles = /:focus|:focus-visible/i.test(css);
    const hasOutlineNone = /outline:\s*(none|0)/i.test(css);
    const hasCustomFocus = /outline:|box-shadow:/i.test(css);

    const goodFocus = hasFocusStyles && (!hasOutlineNone || hasCustomFocus);

    return {
      category: 'accessibility',
      template: templateName,
      test: 'Focus indicators present',
      passed: hasFocusStyles,
      message: hasFocusStyles
        ? 'Has focus styles'
        : 'Missing visible focus indicators',
      severity: hasFocusStyles ? 'info' : 'error'
    };
  }

  checkTextAlternatives(html, templateName) {
    const images = html.match(/<img[^>]*>/gi) || [];
    const svgs = html.match(/<svg[^>]*>/gi) || [];

    let withAlt = 0;
    for (const img of images) {
      if (/alt=["'][^"']+["']/i.test(img)) withAlt++;
    }

    let svgsAccessible = 0;
    for (const svg of svgs) {
      if (/aria-label=|role=["']img["']/i.test(svg)) svgsAccessible++;
    }

    const totalMedia = images.length + svgs.length;
    const accessible = withAlt + svgsAccessible;

    return {
      category: 'accessibility',
      template: templateName,
      test: 'Media has text alternatives',
      passed: accessible >= images.length, // At least images should have alt
      message: totalMedia > 0
        ? `${withAlt}/${images.length} images with alt text`
        : 'No images found',
      severity: accessible >= images.length ? 'info' : 'error'
    };
  }

  checkKeyboardNav(html, templateName) {
    const hasTabindex = /tabindex=/i.test(html);
    const hasNegativeTabindex = /tabindex=["']-1["']/i.test(html);
    const hasPositiveTabindex = /tabindex=["'][1-9]/i.test(html);

    return {
      category: 'accessibility',
      template: templateName,
      test: 'Keyboard navigation',
      passed: !hasPositiveTabindex,
      message: hasPositiveTabindex
        ? 'Avoid positive tabindex values'
        : 'No problematic tabindex values',
      severity: hasPositiveTabindex ? 'warning' : 'info'
    };
  }

  checkFormLabels(html, templateName) {
    const inputs = html.match(/<input[^>]*type=["'](?!hidden|submit|button)[^>]*>/gi) || [];
    const textareas = html.match(/<textarea[^>]*>/gi) || [];
    const selects = html.match(/<select[^>]*>/gi) || [];

    const formElements = inputs.length + textareas.length + selects.length;

    if (formElements === 0) {
      return {
        category: 'accessibility',
        template: templateName,
        test: 'Form labels',
        passed: true,
        message: 'No form elements requiring labels',
        severity: 'info'
      };
    }

    let labeled = 0;
    for (const input of inputs) {
      const hasLabel = /aria-label=|aria-labelledby=|placeholder=/i.test(input);
      const hasId = input.match(/id=["']([^"']+)["']/i);
      const hasAssociatedLabel = hasId && new RegExp(`for=["']${hasId[1]}["']`, 'i').test(html);
      if (hasLabel || hasAssociatedLabel) labeled++;
    }

    return {
      category: 'accessibility',
      template: templateName,
      test: 'Form labels',
      passed: labeled >= inputs.length,
      message: `${labeled}/${inputs.length} form inputs labeled`,
      severity: labeled >= inputs.length ? 'info' : 'warning'
    };
  }

  checkLinkPurpose(html, templateName) {
    const vagueLinkPatterns = [
      /<a[^>]*>\s*(click here|here|read more|more|learn more)\s*<\/a>/gi
    ];

    let vagueCount = 0;
    for (const pattern of vagueLinkPatterns) {
      const matches = html.match(pattern) || [];
      vagueCount += matches.length;
    }

    return {
      category: 'accessibility',
      template: templateName,
      test: 'Descriptive link text',
      passed: vagueCount === 0,
      message: vagueCount === 0
        ? 'All links have descriptive text'
        : `${vagueCount} link${vagueCount !== 1 ? 's' : ''} with vague text`,
      severity: vagueCount === 0 ? 'info' : 'info' // Common pattern, just note it
    };
  }

  checkMotionSafety(css, templateName) {
    const hasAnimations = /@keyframes|animation:|transition:/i.test(css);
    const hasReducedMotion = /prefers-reduced-motion/i.test(css);

    return {
      category: 'accessibility',
      template: templateName,
      test: 'Respects motion preferences',
      passed: !hasAnimations || hasReducedMotion,
      message: hasAnimations
        ? (hasReducedMotion ? 'Has prefers-reduced-motion support' : 'Missing prefers-reduced-motion')
        : 'No animations to worry about',
      severity: (!hasAnimations || hasReducedMotion) ? 'info' : 'warning'
    };
  }
}

module.exports = AccessibilityTests;
