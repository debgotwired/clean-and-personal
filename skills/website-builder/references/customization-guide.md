# Customization Guide

Detailed patterns for customizing Clean and Personal templates.

## File Structure

Every template has 5-6 core files:

```
templates/XX-template-name/
├── index.html         # Content & structure (8-25KB, max 30KB)
├── styles.css         # Colors, layout, animations (12-50KB, max 50KB)
├── script.js          # Interactivity & effects (8-15KB, max 20KB)
├── config.json        # Template metadata
├── README.md          # Template documentation
├── preview.png        # Desktop preview
├── mobile-preview.png # Mobile preview (some templates)
└── full-preview.png   # Full-page preview (some templates)
```

## Color Customization

### CSS Custom Properties

Most templates define colors as CSS custom properties in `:root`:

```css
:root {
    --primary: #22c55e;
    --secondary: #16a34a;
    --background: #fafafa;
    --text: #2d3d2d;
    --accent: #16a34a;
    --border: #e5e5e5;
    --card-bg: #ffffff;
    --hover: #f0fdf4;
}
```

Change these values to retheme the entire site. All components reference these variables.

### Common Color Palettes

**Dark mode conversion:**
```css
:root {
    --background: #0a0a0a;
    --text: #e5e5e5;
    --card-bg: #171717;
    --border: #262626;
    --hover: #1a1a1a;
}
```

**Warm tones:**
```css
:root {
    --primary: #d97706;
    --background: #fffbeb;
    --text: #451a03;
    --accent: #b45309;
}
```

**Cool/professional:**
```css
:root {
    --primary: #2563eb;
    --background: #f8fafc;
    --text: #1e293b;
    --accent: #3b82f6;
}
```

### Templates Without CSS Variables

Some templates (especially 26-50) define colors inline. Search for hex values in `styles.css` and replace them. Common patterns:
- Background colors in `body`, `.container`, `.card` selectors
- Text colors in `body`, `h1-h6`, `p`, `a` selectors
- Accent colors in `.btn`, `a:hover`, border properties

## Font Customization

### Step 1: Update Google Fonts Link

In `index.html`, find and replace the `<link>` tag:

```html
<!-- Before -->
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">

<!-- After -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
```

### Step 2: Update CSS font-family

```css
/* Before */
font-family: 'JetBrains Mono', monospace;

/* After */
font-family: 'Space Grotesk', sans-serif;
```

### Popular Font Pairings

| Style | Heading | Body |
|---|---|---|
| Modern tech | Space Grotesk | Inter |
| Editorial | Playfair Display | Source Serif Pro |
| Minimal | Inter | Inter |
| Creative | Fraunces | Outfit |
| Terminal | JetBrains Mono | JetBrains Mono |
| Playful | Caveat | Inter |
| Swiss | Helvetica Neue | Helvetica Neue |

## Content Editing

### Work Experience

```html
<div class="job">
    <div class="job-header">
        <h3>Senior Engineer</h3>
        <span class="date">2022 - Present</span>
    </div>
    <p class="company">Google</p>
    <p>Led development of core search infrastructure, improving query latency by 40%.</p>
</div>
```

### Projects

```html
<div class="project">
    <h3>
        <span class="folder-icon">&#128193;</span>
        Project Name
        <a href="https://github.com/user/project" class="external-link" rel="noopener noreferrer" target="_blank">&#8599;</a>
    </h3>
    <p>Description of what the project does and why it matters.</p>
    <div class="tech-stack">
        <span>Python</span>
        <span>React</span>
        <span>PostgreSQL</span>
    </div>
</div>
```

### Writing/Articles

```html
<li>
    <a href="https://blog.example.com/article-slug" target="_blank" rel="noopener noreferrer">
        Article Title
    </a>
    <span class="date">2026-01-15</span>
</li>
```

### Social Links

```html
<div class="links">
    <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">Twitter</a>
    <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="mailto:you@email.com">Email</a>
</div>
```

## Section Management

### Adding a Section

1. Find a similar existing section in the template
2. Copy its HTML structure
3. Update the content
4. Add a nav link if the template has navigation:
```html
<a href="#new-section">New Section</a>
```
5. Add the section with matching ID:
```html
<section id="new-section">
    <h2>Section Title</h2>
    <!-- content -->
</section>
```

### Removing a Section

1. Remove the HTML `<section>` block
2. Remove its nav link (if any)
3. Check `script.js` for any references to the section ID (rare, but some templates have scroll observers targeting specific sections)

### Common Section Types to Add

**Skills/Tools:**
```html
<section id="skills">
    <h2>Skills</h2>
    <div class="skills-grid">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">TypeScript</span>
        <span class="skill-tag">AWS</span>
    </div>
</section>
```

**Testimonials:**
```html
<section id="testimonials">
    <h2>What People Say</h2>
    <blockquote>
        <p>"Quote text here."</p>
        <cite>Name, Title at Company</cite>
    </blockquote>
</section>
```

**Speaking/Events:**
```html
<section id="speaking">
    <h2>Speaking</h2>
    <div class="event">
        <h3>Talk Title</h3>
        <p class="venue">Conference Name, 2026</p>
        <a href="https://youtube.com/watch?v=..." target="_blank" rel="noopener noreferrer">Watch</a>
    </div>
</section>
```

## Layout Modifications

### Container Width

```css
.container {
    max-width: 720px;   /* narrow (reading-focused) */
    max-width: 960px;   /* standard */
    max-width: 1200px;  /* wide (portfolio/grid) */
    margin: 0 auto;
    padding: 0 24px;
}
```

### Responsive Breakpoints

Templates use these standard breakpoints:
```css
/* Mobile first (default styles) */

@media (min-width: 768px) {
    /* Tablet and up */
}

@media (min-width: 1024px) {
    /* Desktop */
}

@media (min-width: 1280px) {
    /* Wide desktop */
}
```

### Grid Layouts

```css
/* Two-column grid */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
}
@media (min-width: 768px) {
    .grid {
        grid-template-columns: 1fr 1fr;
    }
}

/* Three-column grid */
@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

## Data Import Formats

### LinkedIn PDF → HTML Mapping

| LinkedIn Field | HTML Target |
|---|---|
| Name | `<h1 class="name">` or `.hero h1` |
| Headline | `<p class="tagline">` or `.hero p` |
| About | Bio section paragraphs |
| Experience entries | `.job` divs with company, title, dates, description |
| Education | Education section or bio |
| Skills | `.skill-tag` spans in skills section |
| Profile URL | Social links section |

### Resume PDF → HTML Mapping

| Resume Field | HTML Target |
|---|---|
| Contact info | Meta tags, social links, email link |
| Summary | Hero tagline or about section |
| Work history | Experience section `.job` entries |
| Education | Education section |
| Projects | Projects section `.project` entries |
| Skills | Skills grid `.skill-tag` spans |
| Certifications | Credentials section or education |

## Accessibility Checklist

When customizing, maintain:

- [ ] Semantic HTML (`<main>`, `<nav>`, `<section>`, `<article>`, `<header>`, `<footer>`)
- [ ] Heading hierarchy (h1 → h2 → h3, no skipping)
- [ ] Alt text on all images
- [ ] `rel="noopener noreferrer"` on external links
- [ ] Focus-visible styles on interactive elements
- [ ] Color contrast ratio 4.5:1 minimum for text
- [ ] `prefers-reduced-motion` support (templates include this)
- [ ] Skip link present
- [ ] ARIA landmarks on major sections
- [ ] Touch targets 44px+ on mobile

## Performance Notes

- No build tools required — open `index.html` directly in browser
- All fonts loaded from Google Fonts CDN
- Images should be compressed (<200KB each)
- Canvas-based effects (gradient mesh, particles) are GPU-accelerated
- IntersectionObserver used for scroll animations (performant)
- `script.js` wrapped in IIFE, uses strict mode, minimal globals

## QA Validation

Run the project QA suite to validate changes:
```bash
cd ~/clean-and-personal
node qa/runner.js --template XX    # Test single template
npm run qa                         # Full suite (all 61)
```

Tests cover: structure, HTML validity, CSS quality, JS patterns, accessibility, responsiveness.
