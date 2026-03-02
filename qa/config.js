/**
 * QA Suite Configuration
 * Clean and Personal Template Collection
 */

const path = require('path');

module.exports = {
  // Paths
  templatesDir: path.join(__dirname, '..', 'templates'),
  reportsDir: path.join(__dirname, 'reports'),

  // Viewport sizes for responsive testing
  viewports: {
    mobile: { width: 375, height: 667, name: 'iPhone SE' },
    tablet: { width: 768, height: 1024, name: 'iPad' },
    desktop: { width: 1280, height: 800, name: 'Desktop' },
    wide: { width: 1920, height: 1080, name: 'Wide Desktop' }
  },

  // Required files for each template
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

  // HTML validation rules
  htmlRules: {
    requiredMeta: ['charset', 'viewport', 'description'],
    requiredTags: ['<!DOCTYPE html>', '<html', '<head>', '<body>', '</html>', '</body>'],
    requiredAttributes: {
      'img': ['alt'],
      'a[target="_blank"]': ['rel'],
      'html': ['lang']
    }
  },

  // CSS validation rules
  cssRules: {
    requiredSelectors: [':root', 'body'],
    maxFileSize: 50000, // 50KB
    forbiddenPatterns: [
      /!important/g, // Should be minimal
    ]
  },

  // Accessibility requirements
  a11yRules: {
    minContrastRatio: 4.5,
    requiredAria: ['aria-label', 'aria-labelledby'],
    focusIndicators: true,
    reducedMotion: true
  },

  // Performance thresholds
  performance: {
    maxHtmlSize: 30000, // 30KB
    maxCssSize: 50000,  // 50KB
    maxJsSize: 20000,   // 20KB
    maxImageSize: 500000, // 500KB per image
    maxTotalSize: 2000000 // 2MB total
  },

  // Test categories
  testCategories: [
    'structure',      // File structure validation
    'html',           // HTML validation
    'css',            // CSS validation
    'javascript',     // JS syntax and patterns
    'accessibility',  // A11y checks
    'responsive',     // Responsive design
    'performance',    // File sizes and optimization
    'screenshots',    // Visual validation
    'links',          // Link checking
    'content'         // Content validation
  ]
};
