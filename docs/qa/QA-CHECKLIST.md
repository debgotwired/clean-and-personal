# Quality Assurance Checklist

## Engineering Standards & Best Practices

Every template must pass these quality gates before being marked complete.

---

## Checkpoint 1: HTML Quality

### Semantic HTML
- [ ] Uses proper semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- [ ] No div soup - meaningful structure
- [ ] Proper heading hierarchy (h1 → h2 → h3, no skipping)

### Accessibility (WCAG 2.1 AA)
- [ ] All images have alt text
- [ ] Proper ARIA labels where needed
- [ ] Color contrast ratio ≥ 4.5:1 for normal text
- [ ] Color contrast ratio ≥ 3:1 for large text
- [ ] Keyboard navigation works (tab through all interactive elements)
- [ ] Focus states visible on all interactive elements
- [ ] Skip links for keyboard users
- [ ] Form labels properly associated

### Meta Tags & SEO
- [ ] Proper `<title>` tag
- [ ] Meta description present
- [ ] Open Graph tags (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags
- [ ] Favicon included
- [ ] Language attribute on `<html>` tag
- [ ] Viewport meta tag for mobile

### Performance
- [ ] No unnecessary inline styles (except critical CSS if needed)
- [ ] External CSS in `<head>`
- [ ] External JS at end of `<body>` or with defer/async
- [ ] No blocking resources
- [ ] Fonts preconnected

---

## Checkpoint 2: CSS Quality

### Code Quality
- [ ] CSS organized logically (reset → layout → components → utilities)
- [ ] Proper commenting for major sections
- [ ] No !important unless absolutely necessary
- [ ] CSS variables used for theming
- [ ] Consistent naming convention (BEM, utility, or semantic)

### Responsive Design
- [ ] Mobile-first approach
- [ ] Works on screens 320px - 2560px+
- [ ] Breakpoints at common device sizes (768px, 1024px, 1440px)
- [ ] Text readable without zoom on mobile
- [ ] Touch targets ≥ 44x44px on mobile
- [ ] No horizontal scroll on any screen size

### Cross-Browser Compatibility
- [ ] Works in Chrome, Firefox, Safari, Edge
- [ ] Vendor prefixes where needed (-webkit-, -moz-)
- [ ] Fallbacks for newer CSS features
- [ ] Graceful degradation

### Performance
- [ ] Critical CSS inline or fast-loading
- [ ] Animations use transform/opacity (GPU accelerated)
- [ ] No layout thrashing
- [ ] Efficient selectors (no deep nesting >3 levels)

### Accessibility
- [ ] Sufficient color contrast
- [ ] Focus states styled
- [ ] No reliance on color alone
- [ ] Reduced motion support (`prefers-reduced-motion`)
- [ ] Dark mode support (`prefers-color-scheme`) where appropriate

---

## Checkpoint 3: JavaScript Quality

### Code Quality
- [ ] ES6+ syntax used appropriately
- [ ] Proper error handling
- [ ] No console.logs in production code
- [ ] Commented for complex logic
- [ ] DRY principle followed
- [ ] Functions are focused and single-purpose

### Performance
- [ ] Event listeners cleaned up when not needed
- [ ] Debouncing/throttling on scroll/resize events
- [ ] No memory leaks
- [ ] Minimal DOM manipulation
- [ ] RequestAnimationFrame for animations

### Accessibility
- [ ] Keyboard event handlers where needed
- [ ] ARIA attributes updated dynamically if needed
- [ ] Focus management for modals/overlays

### Progressive Enhancement
- [ ] Site works without JavaScript (graceful degradation)
- [ ] JavaScript enhances, doesn't break
- [ ] No JavaScript errors break the page

---

## Checkpoint 4: Template Completeness

### Required Files
- [ ] index.html (complete and functional)
- [ ] styles.css (complete and organized)
- [ ] script.js (functional, even if minimal)
- [ ] config.json (template metadata)
- [ ] README.md (comprehensive documentation)

### README Quality
- [ ] Clear description of template
- [ ] Style/color/font info
- [ ] Best use cases listed
- [ ] Customization instructions
- [ ] Deployment button
- [ ] Inspiration credits

### Config File
- [ ] Valid JSON
- [ ] All metadata fields filled
- [ ] Colors documented
- [ ] Fonts documented
- [ ] Sections listed

---

## Checkpoint 5: Testing

### Manual Testing
- [ ] Viewed in browser at 320px, 768px, 1440px, 2560px
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari (if Mac available)
- [ ] Keyboard navigation tested
- [ ] Screen reader tested (VoiceOver/NVDA)

### Lighthouse Scores
- [ ] Performance: ≥90
- [ ] Accessibility: 100
- [ ] Best Practices: 100
- [ ] SEO: 100

### Validation
- [ ] HTML validates (W3C validator)
- [ ] CSS validates (W3C CSS validator)
- [ ] No JavaScript errors in console
- [ ] No accessibility errors in browser tools

---

## Checkpoint 6: Documentation

### Code Documentation
- [ ] CSS sections commented
- [ ] Complex JavaScript explained
- [ ] Customization points marked

### User Documentation
- [ ] README is clear and complete
- [ ] Setup instructions included
- [ ] Common customizations documented
- [ ] Troubleshooting section (if needed)

---

## Checkpoint 7: Best Practices

### Security
- [ ] External links have rel="noopener noreferrer"
- [ ] No inline event handlers (onclick, etc.)
- [ ] Content Security Policy friendly
- [ ] No XSS vulnerabilities

### Privacy
- [ ] No tracking scripts (user's choice to add)
- [ ] No external dependencies without disclosure
- [ ] GDPR considerations noted in README

### Sustainability
- [ ] Minimal file sizes
- [ ] Optimized assets
- [ ] Efficient code
- [ ] No unnecessary frameworks

---

## Review Process

Before moving to next template:

1. **Self-Review** - Developer checks all items
2. **Code Review** - Second pass on code quality
3. **User Testing** - Test as a non-technical user
4. **Accessibility Audit** - Specific focus on a11y
5. **Performance Audit** - Lighthouse + manual
6. **Documentation Review** - Is README clear?

## Quality Gates

**Must pass before commit:**
- Zero accessibility errors
- Lighthouse accessibility: 100
- Works on mobile
- No JavaScript errors
- Valid HTML/CSS

**Should pass before release:**
- All manual testing complete
- Documentation complete
- Cross-browser tested
- Performance optimized

---

## Template Approval

Template is complete when:
- ✅ All checkpoints passed
- ✅ All quality gates passed
- ✅ README reviewed
- ✅ Tested by non-technical user
- ✅ No known bugs
- ✅ Committed to repo

**Approved by:** [Developer name/AI]
**Date:** [Date]
**Template:** [Template name]

---

## Current Template Status

### Templates 1-4 (Retroactive Review Needed)
- [ ] Template 01: Founder - QA pending
- [ ] Template 02: Developer Dark - QA pending
- [ ] Template 03: Text Scholar - QA pending
- [ ] Template 04: Minimal Clean - QA pending

### Templates 5-10 (Building Now)
- [ ] Template 05: Playful Developer - In progress
- [ ] Template 06: Blog-First
- [ ] Template 07: Resume
- [ ] Template 08: Startup
- [ ] Template 09: Creative Portfolio
- [ ] Template 10: Project Showcase

---

**Next Action:** Conduct QA audit on existing templates 1-4 before continuing.
