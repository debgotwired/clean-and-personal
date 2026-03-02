# QA Test Suite

Comprehensive quality assurance suite for Clean and Personal templates, designed with the same rigor as enterprise-level web design tools like Webflow.

## Quick Start

```bash
# Run full QA suite
npm run qa

# Run with verbose output
npm run qa:verbose

# Test specific template
node qa/runner.js --template 51

# Test specific category
node qa/runner.js --category html

# Run screenshots + QA
npm run qa:full
```

## Test Categories

### 1. Structure Tests (`structure.test.js`)
- Required files exist (index.html, styles.css, script.js, config.json, README.md)
- File sizes within limits
- config.json validity and required fields
- README.md has required sections
- Preview images exist and have valid sizes

### 2. HTML Tests (`html.test.js`)
- DOCTYPE declaration
- `lang` attribute on `<html>`
- Required meta tags (charset, viewport, description)
- Valid title length
- All images have alt attributes
- External links have `rel="noopener"`
- Script loaded at end of body
- Semantic HTML usage (main, header, footer, nav, section)
- Valid heading hierarchy
- Form accessibility (labels for inputs)

### 3. CSS Tests (`css.test.js`)
- CSS custom properties in `:root`
- Box-sizing reset
- Mobile breakpoint exists
- Minimal `!important` usage
- System font fallbacks
- Color variables consistency
- Balanced braces
- Focus states for accessibility
- `prefers-reduced-motion` support
- Print styles (optional)

### 4. JavaScript Tests (`javascript.test.js`)
- `'use strict'` mode
- IIFE pattern for scope isolation
- Minimal console statements
- addEventListener usage
- Error handling (null checks)
- Balanced braces/parentheses
- Modern syntax (const/let, not var)
- DOM ready handling
- Minimal global pollution

### 5. Accessibility Tests (`accessibility.test.js`)
- Skip link presence
- ARIA landmarks (main, navigation, banner, contentinfo)
- Color contrast awareness
- Interactive elements have accessible names
- Focus indicators present
- Media has text alternatives
- No problematic tabindex values
- Form labels
- Descriptive link text
- Motion preference respect

### 6. Responsive Tests (`responsive.test.js`)
- No horizontal overflow at each viewport
- Content visible at all breakpoints
- No horizontal scroll on mobile
- Adequate touch targets (44px minimum)
- Readable text (font size, line height)

## Viewports Tested

| Name | Width | Height | Description |
|------|-------|--------|-------------|
| Mobile | 375px | 667px | iPhone SE |
| Tablet | 768px | 1024px | iPad |
| Desktop | 1280px | 800px | Standard desktop |
| Wide | 1920px | 1080px | Wide desktop |

## Reports

Reports are saved to `qa/reports/`:

- `latest.json` - Full JSON report
- `latest.md` - Markdown summary
- `qa-report-{timestamp}.json` - Timestamped reports

## Configuration

Edit `qa/config.js` to customize:

```javascript
module.exports = {
  // Performance thresholds
  performance: {
    maxHtmlSize: 30000,  // 30KB
    maxCssSize: 50000,   // 50KB
    maxJsSize: 20000,    // 20KB
  },

  // Required files per template
  requiredFiles: [
    'index.html',
    'styles.css',
    'script.js',
    'config.json',
    'README.md',
    'preview.png',
    'mobile-preview.png',
    'full-preview.png'
  ],

  // Viewports for responsive testing
  viewports: {
    mobile: { width: 375, height: 667 },
    tablet: { width: 768, height: 1024 },
    desktop: { width: 1280, height: 800 },
    wide: { width: 1920, height: 1080 }
  }
};
```

## Severity Levels

| Level | Meaning | Action |
|-------|---------|--------|
| Error | Critical issue | Must fix before release |
| Warning | Best practice violation | Should fix |
| Info | Passed or informational | No action needed |

## CI/CD Integration

Add to your GitHub Actions:

```yaml
name: QA
on: [push, pull_request]

jobs:
  qa:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npx playwright install chromium
      - run: npm run qa
```

## Adding New Tests

1. Create a new test file in `qa/tests/`:

```javascript
class MyTests {
  async run(templatePath, templateName) {
    const results = [];

    results.push({
      category: 'my-category',
      template: templateName,
      test: 'My test name',
      passed: true,
      message: 'Test passed',
      severity: 'info' // 'error', 'warning', or 'info'
    });

    return results;
  }
}

module.exports = MyTests;
```

2. Register in `qa/runner.js`:

```javascript
const MyTests = require('./tests/my.test');

// In constructor:
this.tests = {
  ...this.tests,
  'my-category': new MyTests()
};
```

## Best Practices Enforced

### HTML
- Semantic markup
- Accessibility attributes
- SEO meta tags
- Security headers (rel="noopener")

### CSS
- CSS custom properties for theming
- Mobile-first responsive design
- Focus states for keyboard navigation
- Reduced motion preference

### JavaScript
- Strict mode
- Module pattern (IIFE)
- No global pollution
- Error handling

### Performance
- File size limits
- Optimized assets
- Fast loading patterns

## Troubleshooting

### Tests hanging
```bash
# Kill stuck Playwright processes
pkill -f chromium
```

### Missing Playwright browsers
```bash
npx playwright install chromium
```

### Template not found
```bash
# Verify template exists
ls templates/ | grep "51-"
```
