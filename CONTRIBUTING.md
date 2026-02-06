# Contributing to Clean and Personal

Thank you for your interest in contributing! This project is open source and welcomes contributions from the community.

## 🎯 Ways to Contribute

### 1. Report Bugs
Found a bug? Please [open an issue](https://github.com/debgotwired/clean-and-personal/issues) with:
- Clear description of the issue
- Template name and number
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/device information

### 2. Suggest Enhancements
Have an idea? [Open an issue](https://github.com/debgotwired/clean-and-personal/issues) with:
- Clear description of the feature
- Why it would be useful
- Example use cases
- Any reference designs or implementations

### 3. Submit Templates
Want to add a new template? Great! Please:
- Follow the existing template structure
- Ensure mobile responsiveness
- Include preview screenshots
- Add documentation
- Test across browsers
- Follow the code style

### 4. Fix Bugs or Improve Code
- Check [open issues](https://github.com/debgotwired/clean-and-personal/issues)
- Comment on the issue you'd like to work on
- Fork the repo and create a branch
- Make your changes
- Submit a pull request

### 5. Improve Documentation
Documentation improvements are always welcome:
- Fix typos or unclear explanations
- Add examples or tutorials
- Improve code comments
- Update outdated information

---

## 🚀 Getting Started

### Prerequisites
- Git
- Node.js 18+ (for screenshot generation)
- A code editor (VS Code recommended)

### Setup
```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/clean-and-personal.git
cd clean-and-personal

# Install dependencies (for screenshot generation only)
npm install

# Open templates in your browser
# No build tools needed! Just open any template/*/index.html
```

### Development Workflow
1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Test thoroughly (see Testing section below)
4. Commit with clear messages
5. Push to your fork
6. Open a pull request

---

## 📋 Template Contribution Guidelines

### File Structure
Each template must include:
```
templates/XX-template-name/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript (if needed)
├── preview.png         # Desktop preview (1200x800)
├── mobile-preview.png  # Mobile preview (375x800)
└── full-preview.png    # Full page screenshot
```

### Template Requirements

#### HTML
- Valid HTML5
- Semantic markup (`<header>`, `<main>`, `<section>`, etc.)
- Proper meta tags (viewport, description)
- Content Security Policy meta tag
- Accessible (ARIA labels, keyboard navigation)
- External links with `rel="noopener noreferrer"`

#### CSS
- Mobile-first responsive design
- CSS custom properties for theming
- Smooth transitions and animations
- Cross-browser compatibility
- No hardcoded colors (use CSS variables)

#### JavaScript
- Vanilla JS only (no frameworks)
- No jQuery or external libraries
- Proper event listener cleanup
- Intersection Observer for scroll effects
- Mobile viewport height fix if using 100vh
- ARIA state management for toggles

#### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast
- Focus indicators
- Dynamic ARIA states

#### Performance
- No build tools required
- Minimal external dependencies
- Optimized images (<500KB)
- Fast loading (<3s)
- Lighthouse score >90

### Preview Images
Generate screenshots using the provided tool:
```bash
npm run screenshot -- XX-template-name
```

Or manually:
- Desktop: 1200x800px
- Mobile: 375x800px
- Full-page: Entire scrollable page

---

## 🧪 Testing

### Before Submitting
Test your changes:

**Browsers:**
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)

**Devices:**
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

**Functionality:**
- [ ] All links work
- [ ] Smooth scrolling
- [ ] Mobile menu toggles
- [ ] Form submissions (if applicable)
- [ ] Animations play correctly
- [ ] No console errors

**Accessibility:**
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] ARIA states update
- [ ] Focus indicators visible
- [ ] Color contrast sufficient

**Performance:**
- [ ] Page loads <3 seconds
- [ ] No layout shift
- [ ] Images optimized
- [ ] No memory leaks

---

## 💻 Code Style

### General Guidelines
- Use tabs for indentation (HTML, CSS, JS)
- Clear, descriptive variable names
- Comments for complex logic only
- Consistent naming conventions
- Keep functions small and focused

### HTML
```html
<!-- Good -->
<section class="hero" id="home">
    <h1 class="hero-title">Welcome</h1>
    <p class="hero-subtitle">Subtitle here</p>
</section>

<!-- Avoid -->
<div class="section1">
    <div class="title1">Welcome</div>
    <div class="text1">Subtitle here</div>
</div>
```

### CSS
```css
/* Good */
:root {
    --primary: #667eea;
    --text: #1f2937;
}

.hero {
    background: var(--primary);
    color: var(--text);
}

/* Avoid hardcoded colors */
.hero {
    background: #667eea;
    color: #1f2937;
}
```

### JavaScript
```javascript
// Good - descriptive, clear
const animateCounter = (element, target, duration) => {
    // Implementation
};

// Avoid - unclear
const anim = (el, t, d) => {
    // Implementation
};
```

---

## 📝 Commit Messages

Use clear, descriptive commit messages:

**Good:**
- `Add dark mode toggle to template 01-founder`
- `Fix mobile menu not closing on iOS Safari`
- `Optimize preview images for templates 26-30`
- `Update README with new template showcase`

**Avoid:**
- `fix bug`
- `updates`
- `wip`
- `changes`

**Format:**
```
<type>: <short summary>

<optional detailed description>

<optional breaking changes>
```

**Types:**
- `feat`: New feature or template
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks

---

## 🔍 Pull Request Process

1. **Fork & Branch**
   - Fork the repository
   - Create a feature branch from `main`
   - Use descriptive branch names: `feat/new-template-name` or `fix/mobile-menu-bug`

2. **Make Changes**
   - Follow the code style guidelines
   - Test thoroughly (see Testing section)
   - Update documentation if needed
   - Add screenshots for visual changes

3. **Commit**
   - Write clear commit messages
   - Keep commits focused and atomic
   - Sign your commits if possible

4. **Submit PR**
   - Push to your fork
   - Open a pull request to `main`
   - Fill out the PR template
   - Link related issues

5. **Review Process**
   - Maintainers will review your PR
   - Address any feedback
   - Make requested changes
   - Once approved, it will be merged

### PR Checklist
- [ ] Follows code style guidelines
- [ ] All tests pass
- [ ] Documentation updated
- [ ] Screenshots added (if UI changes)
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Accessible (WCAG 2.1 AA)
- [ ] Commit messages are clear

---

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## 💬 Questions?

- Open a [GitHub Issue](https://github.com/debgotwired/clean-and-personal/issues)
- Tag it with `question` label
- Maintainers will respond within 48 hours

---

## 🙏 Thank You!

Every contribution makes this project better for everyone. Thank you for being part of the community!

---

**Maintained by [@debgotwired](https://github.com/debgotwired)**
