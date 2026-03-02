/**
 * HTML Validation Tests
 * Validates HTML structure, semantics, and best practices
 */

const fs = require('fs');
const path = require('path');

class HtmlTests {
  async run(templatePath, templateName) {
    const htmlPath = path.join(templatePath, 'index.html');
    const results = [];

    if (!fs.existsSync(htmlPath)) {
      return [{
        category: 'html',
        template: templateName,
        test: 'index.html exists',
        passed: false,
        message: 'index.html not found',
        severity: 'error'
      }];
    }

    const html = fs.readFileSync(htmlPath, 'utf8');

    // Test 1: DOCTYPE
    results.push(this.checkDoctype(html, templateName));

    // Test 2: HTML lang attribute
    results.push(this.checkLangAttribute(html, templateName));

    // Test 3: Required meta tags
    results.push(...this.checkMetaTags(html, templateName));

    // Test 4: Title tag
    results.push(this.checkTitle(html, templateName));

    // Test 5: Image alt attributes
    results.push(...this.checkImageAlts(html, templateName));

    // Test 6: Link security (rel="noopener" for target="_blank")
    results.push(...this.checkLinkSecurity(html, templateName));

    // Test 7: Script loading
    results.push(this.checkScriptLoading(html, templateName));

    // Test 8: Semantic HTML
    results.push(...this.checkSemanticHtml(html, templateName));

    // Test 9: Heading hierarchy
    results.push(this.checkHeadingHierarchy(html, templateName));

    // Test 10: Form accessibility
    results.push(...this.checkFormAccessibility(html, templateName));

    return results;
  }

  checkDoctype(html, templateName) {
    const hasDoctype = html.trim().toLowerCase().startsWith('<!doctype html>');
    return {
      category: 'html',
      template: templateName,
      test: 'Has DOCTYPE declaration',
      passed: hasDoctype,
      message: hasDoctype ? 'Valid DOCTYPE' : 'Missing or invalid DOCTYPE',
      severity: hasDoctype ? 'info' : 'error'
    };
  }

  checkLangAttribute(html, templateName) {
    const hasLang = /<html[^>]*lang=["'][a-z]{2}["']/i.test(html);
    return {
      category: 'html',
      template: templateName,
      test: 'HTML has lang attribute',
      passed: hasLang,
      message: hasLang ? 'Has lang attribute' : 'Missing lang attribute on <html>',
      severity: hasLang ? 'info' : 'error'
    };
  }

  checkMetaTags(html, templateName) {
    const results = [];
    const requiredMeta = [
      { name: 'charset', pattern: /<meta[^>]*charset=/i },
      { name: 'viewport', pattern: /<meta[^>]*name=["']viewport["']/i },
      { name: 'description', pattern: /<meta[^>]*name=["']description["']/i }
    ];

    for (const meta of requiredMeta) {
      const exists = meta.pattern.test(html);
      results.push({
        category: 'html',
        template: templateName,
        test: `Has meta ${meta.name}`,
        passed: exists,
        message: exists ? `Has ${meta.name} meta tag` : `Missing ${meta.name} meta tag`,
        severity: exists ? 'info' : 'error'
      });
    }

    return results;
  }

  checkTitle(html, templateName) {
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    const hasTitle = !!titleMatch;
    const titleContent = titleMatch ? titleMatch[1].trim() : '';
    const validTitle = titleContent.length >= 10 && titleContent.length <= 70;

    return {
      category: 'html',
      template: templateName,
      test: 'Has valid title',
      passed: hasTitle && validTitle,
      message: hasTitle
        ? (validTitle ? `Title: "${titleContent}"` : `Title too ${titleContent.length < 10 ? 'short' : 'long'}: ${titleContent.length} chars`)
        : 'Missing title tag',
      severity: (hasTitle && validTitle) ? 'info' : 'warning'
    };
  }

  checkImageAlts(html, templateName) {
    const results = [];
    const imgTags = html.match(/<img[^>]*>/gi) || [];

    let withAlt = 0;
    let withoutAlt = 0;

    for (const img of imgTags) {
      if (/alt=["'][^"']*["']/i.test(img)) {
        withAlt++;
      } else {
        withoutAlt++;
      }
    }

    if (imgTags.length > 0) {
      results.push({
        category: 'html',
        template: templateName,
        test: 'Images have alt attributes',
        passed: withoutAlt === 0,
        message: withoutAlt === 0
          ? `All ${withAlt} images have alt attributes`
          : `${withoutAlt} of ${imgTags.length} images missing alt attribute`,
        severity: withoutAlt === 0 ? 'info' : 'error'
      });
    }

    return results;
  }

  checkLinkSecurity(html, templateName) {
    const results = [];
    const externalLinks = html.match(/<a[^>]*target=["']_blank["'][^>]*>/gi) || [];

    let secure = 0;
    let insecure = 0;

    for (const link of externalLinks) {
      if (/rel=["'][^"']*noopener[^"']*["']/i.test(link)) {
        secure++;
      } else {
        insecure++;
      }
    }

    if (externalLinks.length > 0) {
      results.push({
        category: 'html',
        template: templateName,
        test: 'External links have rel="noopener"',
        passed: insecure === 0,
        message: insecure === 0
          ? `All ${secure} external links are secure`
          : `${insecure} external links missing rel="noopener"`,
        severity: insecure === 0 ? 'info' : 'warning'
      });
    }

    return results;
  }

  checkScriptLoading(html, templateName) {
    // Check that script is at end of body
    const bodyEndMatch = html.match(/<script[^>]*src=["']script\.js["'][^>]*>\s*<\/script>\s*<\/body>/i);
    const hasCorrectPlacement = !!bodyEndMatch;

    return {
      category: 'html',
      template: templateName,
      test: 'Script loaded at end of body',
      passed: hasCorrectPlacement,
      message: hasCorrectPlacement
        ? 'Script correctly placed before </body>'
        : 'Script should be placed at end of body',
      severity: hasCorrectPlacement ? 'info' : 'warning'
    };
  }

  checkSemanticHtml(html, templateName) {
    const results = [];
    const semanticTags = [
      { tag: 'main', required: true },
      { tag: 'header', required: false },
      { tag: 'footer', required: false },
      { tag: 'nav', required: false },
      { tag: 'section', required: false },
      { tag: 'article', required: false }
    ];

    let semanticCount = 0;
    for (const { tag, required } of semanticTags) {
      const hasTag = new RegExp(`<${tag}[^>]*>`, 'i').test(html);
      if (hasTag) semanticCount++;

      if (required) {
        results.push({
          category: 'html',
          template: templateName,
          test: `Uses <${tag}> tag`,
          passed: hasTag,
          message: hasTag ? `Uses <${tag}>` : `Missing <${tag}> tag`,
          severity: hasTag ? 'info' : 'warning'
        });
      }
    }

    results.push({
      category: 'html',
      template: templateName,
      test: 'Uses semantic HTML',
      passed: semanticCount >= 3,
      message: `Uses ${semanticCount} semantic tags`,
      severity: semanticCount >= 3 ? 'info' : 'warning'
    });

    return results;
  }

  checkHeadingHierarchy(html, templateName) {
    const headings = html.match(/<h[1-6][^>]*>/gi) || [];
    const levels = headings.map(h => parseInt(h.match(/h([1-6])/i)[1]));

    let valid = true;
    let hasH1 = levels.includes(1);
    let h1Count = levels.filter(l => l === 1).length;

    // Check no skipped levels
    for (let i = 1; i < levels.length; i++) {
      if (levels[i] - levels[i-1] > 1) {
        valid = false;
        break;
      }
    }

    return {
      category: 'html',
      template: templateName,
      test: 'Valid heading hierarchy',
      passed: hasH1 && h1Count === 1 && valid,
      message: !hasH1
        ? 'Missing H1 heading'
        : h1Count > 1
          ? `Multiple H1 headings (${h1Count})`
          : valid
            ? 'Valid heading hierarchy'
            : 'Skipped heading level',
      severity: (hasH1 && h1Count === 1 && valid) ? 'info' : 'warning'
    };
  }

  checkFormAccessibility(html, templateName) {
    const results = [];
    const forms = html.match(/<form[^>]*>[\s\S]*?<\/form>/gi) || [];
    const inputs = html.match(/<input[^>]*>/gi) || [];
    const buttons = html.match(/<button[^>]*>/gi) || [];

    if (inputs.length > 0) {
      let inputsWithLabels = 0;
      for (const input of inputs) {
        // Check for associated label or aria-label
        const hasAriaLabel = /aria-label=/i.test(input);
        const hasId = /id=["']([^"']+)["']/i.test(input);
        const inputId = input.match(/id=["']([^"']+)["']/i)?.[1];
        const hasAssociatedLabel = inputId && new RegExp(`<label[^>]*for=["']${inputId}["']`, 'i').test(html);

        if (hasAriaLabel || hasAssociatedLabel || /type=["']hidden["']/i.test(input) || /type=["']submit["']/i.test(input)) {
          inputsWithLabels++;
        }
      }

      results.push({
        category: 'html',
        template: templateName,
        test: 'Form inputs have labels',
        passed: inputsWithLabels === inputs.length,
        message: inputsWithLabels === inputs.length
          ? `All ${inputs.length} inputs have labels`
          : `${inputs.length - inputsWithLabels} inputs missing labels`,
        severity: inputsWithLabels === inputs.length ? 'info' : 'warning'
      });
    }

    return results;
  }
}

module.exports = HtmlTests;
