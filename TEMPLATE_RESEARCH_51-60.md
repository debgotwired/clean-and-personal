# Template Research: Templates 51-60 for Clean and Personal

## Overview

This document contains comprehensive research for 10 new templates to add to the Clean and Personal template collection. All research has been gathered and is ready for implementation.

---

## Template 51: Signature Minimal

**Inspiration:** wlovedaypowell.com

### Design Specs

| Property | Value |
|----------|-------|
| **Background** | `#ffffff` (light), `#1a1a1a` (dark) |
| **Text** | `#1a1a1a` (light), `#f5f5f5` (dark) |
| **Accent** | Neutral tones, subtle shadows |
| **Font - Headings** | Playfair Display, 700 weight |
| **Font - Body** | Inter, 400/500 weight |

### Key Features
- Handwritten signature SVG element (animated with stroke-dasharray)
- Dark mode toggle with localStorage persistence
- Narrative-driven single column layout
- Generous whitespace (max-width: 680px content)
- Simple CTA at bottom

### Sections
1. Hero (Name + Title + Signature SVG)
2. Career narrative (chronological story)
3. Current focus
4. CTA + Contact

### Signature Animation CSS
```css
.signature path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 3s ease-out forwards;
}

@keyframes draw {
  to { stroke-dashoffset: 0; }
}
```

---

## Template 52: Now Page Focus

**Inspiration:** sive.rs (Derek Sivers)

### Design Specs

| Property | Value |
|----------|-------|
| **Background** | `#ffffff` |
| **Primary Text** | `#000000` |
| **Accent/Links** | `#20b` (blue), `#800` (dark red headers) |
| **Visited Links** | `#606` |
| **Font - Headings** | Tahoma, Verdana, sans-serif |
| **Font - Body** | Georgia, serif, 20px, line-height 1.5 |

### Key Features
- Anti-design/brutalist aesthetic
- No CSS classes - semantic HTML only
- `/now` page prominent in navigation
- Max-width: 40em centered
- Simple form elements with minimal styling

### CSS Pattern (SiversCSS)
```css
body {
  font: 20px/1.5 Georgia, serif;
  max-width: 40em;
  margin: 0 auto;
}

h1, h2, h3, small, footer {
  font-family: Tahoma, Verdana, sans-serif;
}

h1 { font-size: 3.5rem; color: #800; }
a { color: #20b; }
a:visited { color: #606; }

section { margin-bottom: 4rem; }
```

### Sections
1. Name + Brief intro
2. /now page (current activities)
3. Articles/Writing archive
4. Books
5. Projects
6. Contact (simple email)

---

## Template 53: Warm Essayist

**Inspiration:** henrikkarlsson.xyz (Escaping Flatland)

### Design Specs

| Property | Value |
|----------|-------|
| **Background** | `#f0efea` (warm cream) |
| **Surface** | `#ffffff` |
| **Text** | `#1a1a1a` |
| **Text Light** | `#6b7280` |
| **Accent** | `#b8860b` (warm gold) |
| **Footer BG** | `#2d2d2d` (charcoal) |
| **Font - Headings** | SF Pro Display / Inter |
| **Font - Body** | Spectral (Google Fonts serif) |

### Key Features
- Warm earth-tone color palette
- Magazine-style post grid
- Featured essays section
- Dual-tier content (public + private/paid)
- Serif body text for long-form reading

### CSS Variables
```css
:root {
  --bg: #f0efea;
  --surface: #ffffff;
  --text: #1a1a1a;
  --text-light: #6b7280;
  --accent: #b8860b;
  --border: #e5e0d5;
  --footer-bg: #2d2d2d;
}
```

### Sections
1. Header with newsletter subscribe
2. Featured essays (large cards)
3. Recent essays grid
4. About the author
5. Newsletter CTA
6. Footer

---

## Template 54: Craft Developer

**Inspiration:** paco.me (Paco Coursey)

### Design Specs

| Property | Value |
|----------|-------|
| **Background** | `#fafafa` |
| **Text** | `#171717` |
| **Text Light** | `#737373` |
| **Accent** | `#0066cc` |
| **Font - Headings** | Inter, 600 weight |
| **Font - Body** | Inter, 400 weight |
| **Font - Code** | Söhne Mono / JetBrains Mono |

### Key Features
- Ultra-minimalist, craft-focused
- Philosophy statement ("crafting interfaces")
- Underscore dividers between sections
- "Now" section for current focus
- Music/interests section (humanizing)

### Typography Pattern (Paco)
```css
body {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: #171717;
  background: #fafafa;
}

h1, h2 {
  font-weight: 600;
  letter-spacing: -0.02em;
}

.section-divider {
  width: 100%;
  height: 1px;
  background: #e5e5e5;
  margin: 3rem 0;
}
```

### Sections
1. Name + Tagline (one-liner)
2. Building (current project)
3. Projects (grid of links)
4. Writing (blog posts)
5. Now (current focus)
6. Connect (social links)

---

## Template 55: Academic Researcher

**Inspiration:** benjaminmoll.com

### Design Specs

| Property | Value |
|----------|-------|
| **Background** | `#ffffff` |
| **Primary** | `#527CB0` (professional blue) |
| **Secondary** | `#14AFF4` (cyan accent) |
| **Text** | `#333333` |
| **Font - Headings** | Arial, Helvetica, sans-serif |
| **Font - Body** | Arial, 16px |

### Key Features
- Institutional credibility
- Papers/Lectures/Codes trifecta navigation
- Direct PDF download links
- CV download prominent
- Google Scholar link

### Layout Pattern
```css
.nav-icons {
  display: flex;
  gap: 2rem;
  font-size: 1.25rem;
}

.nav-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--primary);
}

.nav-icon svg { font-size: 2rem; }
.nav-icon span { font-size: 0.875rem; margin-top: 0.5rem; }
```

### Sections
1. Header (Name + Title + Institution)
2. Navigation (Papers / Lectures / Codes icons)
3. Bio paragraph
4. Recent work highlights
5. CV download + photo
6. Contact

---

## Template 56: Angel Investor

**Inspiration:** ivanbercovich.com, tim.blog/portfolio, vincentweisser.com

### Design Specs

| Property | Value |
|----------|-------|
| **Background** | `#fafafa` |
| **Surface** | `#ffffff` |
| **Text** | `#1a1a1a` |
| **Accent** | `#2563eb` (blue) |
| **Font - Headings** | Inter, 700 weight |
| **Font - Body** | Inter, 400 weight |

### Key Features
- Portfolio grid with sector categories
- **Antiportfolio section** (missed investments, lessons)
- Investment thesis statement
- Check size and focus areas
- Contact for pitches

### Portfolio Structure
```html
<section class="portfolio">
  <h2>Portfolio</h2>
  <div class="sector-group">
    <h3>AI</h3>
    <div class="company-grid">
      <a href="#" class="company">OpenAI</a>
      <a href="#" class="company">Anthropic</a>
    </div>
  </div>
</section>

<section class="antiportfolio">
  <h2>Antiportfolio</h2>
  <p>Companies I passed on and lessons learned...</p>
</section>
```

### Sections
1. Name + Title + Thesis
2. Investment Focus (sectors, check size)
3. Portfolio (categorized by sector)
4. Antiportfolio
5. Writing/Thinking
6. Contact

---

## Template 57: Knowledge Base

**Inspiration:** Notion-style, digital garden aesthetic

### Design Specs

| Property | Value |
|----------|-------|
| **Background** | `#ffffff` (light), `#191919` (dark) |
| **Surface** | `#f7f6f3` (light), `#2f2f2f` (dark) |
| **Text** | `#37352f` (Notion default) |
| **Accent** | `#2eaadc` (Notion blue) |
| **Tag Colors** | Multi-color (Notion palette) |
| **Font** | -apple-system, system-ui, sans-serif |

### Key Features
- Sidebar navigation
- Card grid layout
- Tag/category system
- Search functionality
- Breadcrumb navigation
- Backlinks section

### Tag Color System
```css
.tag-red { background: #fbe4e4; color: #5a0000; }
.tag-orange { background: #faebdd; color: #6b3a00; }
.tag-yellow { background: #fbf3db; color: #5c4800; }
.tag-green { background: #ddedea; color: #0c4a3e; }
.tag-blue { background: #ddebf1; color: #0b4a6b; }
.tag-purple { background: #eae4f2; color: #412a5e; }
.tag-pink { background: #f4dfeb; color: #5c1d47; }
.tag-gray { background: #ebeced; color: #373c3f; }
```

### Sections
1. Sidebar (search + categories)
2. Main content area (card grid)
3. Note cards with tags
4. Backlinks section
5. Footer

---

## Template 58: Scrollytelling

**Inspiration:** NYT Snowfall, The Pudding, SCMP features

### Design Specs

| Property | Value |
|----------|-------|
| **Background** | Dynamic per section |
| **Text** | `#ffffff` on dark, `#1a1a1a` on light |
| **Font - Display** | Playfair Display, 700 weight |
| **Font - Body** | Inter, 400 weight |

### Key Features
- Full-screen sections with scroll-snap
- Intersection Observer for animations
- Sticky elements for scroll-triggered reveals
- Parallax backgrounds
- Progress indicator

### Scroll Animation JS
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

### CSS Animations
```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.sticky-section {
  position: sticky;
  top: 0;
  height: 100vh;
}
```

### Sections
1. Full-screen hero with scroll indicator
2. Chapter 1 (sticky + parallax)
3. Chapter 2 (reveal on scroll)
4. Key moment (full-screen media)
5. Conclusion
6. Contact

---

## Template 59: AI Founder

**Inspiration:** carsonkahn.com

### Design Specs

| Property | Value |
|----------|-------|
| **Background** | `#000000` |
| **Text** | `#ffffff` |
| **Selection** | `color: yellow; background: black` |
| **Cursor Effects** | Ghost trail, rainbow, particles |
| **Font** | System sans-serif |

### Key Features
- Dark hacker aesthetic
- Typewriter effect on name
- Custom cursor effects (canvas-based)
- Easter eggs (Konami code)
- Playful yet credible

### Typewriter Effect
```javascript
const text = "CARSON KAHN";
const el = document.getElementById('name');
let i = 0;

function type() {
  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(type, 44 + Math.random() * 55);
  }
}
type();
```

### Custom Cursor (Ghost Trail)
```javascript
const canvas = document.getElementById('cursor-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

document.addEventListener('mousemove', (e) => {
  particles.push({ x: e.clientX, y: e.clientY, life: 40 });
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.life--;
    if (p.life <= 0) particles.splice(i, 1);
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.life / 4, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(58, 146, 197, ${p.life / 40})`;
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
```

### Sections
1. Hero (name with typewriter)
2. Mission statement
3. Current company/project
4. Affiliations (logos)
5. Angel investments
6. Contact links

---

## Template 60: Creative Director

**Inspiration:** amyleisner.com

### Design Specs

| Property | Value |
|----------|-------|
| **Background** | `#ffffff` |
| **Text** | `#000000` |
| **Accent** | `#32373c` (dark gray buttons) |
| **Font - Headings** | System stack |
| **Font - Body** | System stack, 16-18px |

### Key Features
- Monochromatic minimalist palette
- Services grid (4-5 offerings)
- Testimonials (grid, not carousel)
- Client logo gallery
- Origin story narrative
- Personal photography

### Services Grid
```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  padding: 2rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
}

.service-card h3 { font-size: 1.25rem; margin-bottom: 1rem; }
.service-card p { color: #666; }
```

### Testimonial Grid
```css
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial {
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
}

.testimonial blockquote {
  font-style: italic;
  margin-bottom: 1rem;
}

.testimonial cite {
  font-weight: 600;
}
```

### Sections
1. Hero (tagline + name)
2. About/Story (chronological narrative)
3. Services grid
4. Client logos
5. Testimonials
6. Contact CTA

---

## Common Code Patterns

### Dark Mode Toggle
```javascript
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

root.setAttribute('data-theme', savedTheme);

function toggleTheme() {
  const current = root.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}
```

### Scroll Reveal Animation
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '-50px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
```

### Sticky ScrollSpy Navigation
```javascript
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});
```

### Portfolio Filter
```javascript
const filterBtns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    items.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
        item.classList.add('fade-in');
      } else {
        item.style.display = 'none';
      }
    });
  });
});
```

---

## Google Font Pairings

| Template | Heading Font | Body Font |
|----------|--------------|-----------|
| 51-signature-minimal | Playfair Display | Inter |
| 52-now-page-focus | Tahoma/Verdana | Georgia |
| 53-warm-essayist | Inter | Spectral |
| 54-craft-developer | Inter | Inter |
| 55-academic-researcher | Arial | Arial |
| 56-angel-investor | Inter | Inter |
| 57-knowledge-base | System Stack | System Stack |
| 58-scrollytelling | Playfair Display | Inter |
| 59-ai-founder | System Sans | System Sans |
| 60-creative-director | System Stack | System Stack |

---

## Implementation Order (Priority)

1. **51-signature-minimal** - High demand, unique signature element
2. **52-now-page-focus** - Derek Sivers style is influential
3. **55-academic-researcher** - Large underserved market
4. **56-angel-investor** - No existing template covers this
5. **53-warm-essayist** - Newsletter/Substack era
6. **59-ai-founder** - Timely, AI wave
7. **54-craft-developer** - Differentiates from existing dev templates
8. **60-creative-director** - Services-focused gap
9. **57-knowledge-base** - PKM/Notion audience
10. **58-scrollytelling** - Most complex, save for last

---

## File Structure Per Template

```
templates/51-signature-minimal/
├── index.html
├── styles.css
├── script.js
├── config.json
├── README.md
└── assets/
    └── signature.svg
```

---

## Additional Code Patterns

### Notion Color System (Template 57)
```css
/* Notion Interface Colors */
:root {
  /* Light Mode */
  --notion-bg: #ffffff;
  --notion-sidebar: #f7f6f3;
  --notion-text: #37352f;

  /* Dark Mode */
  --notion-bg-dark: #191919;
  --notion-sidebar-dark: #2f2f2f;
  --notion-hover-dark: #373c3f;
}

/* Notion Tag Colors (Light Mode) */
.tag-gray { background: #ebeced; color: #373c3f; }
.tag-brown { background: #f4eeee; color: #5a3d2b; }
.tag-orange { background: #faebdd; color: #6b3a00; }
.tag-yellow { background: #fbf3db; color: #5c4800; }
.tag-green { background: #ddedea; color: #0c4a3e; }
.tag-blue { background: #ddebf1; color: #0b4a6b; }
.tag-purple { background: #eae4f2; color: #412a5e; }
.tag-pink { background: #f4dfeb; color: #5c1d47; }
.tag-red { background: #fbe4e4; color: #5a0000; }
```

### Sticky Sidebar (Template 57)
```css
/* Fixed sidebar approach */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100vh;
  overflow-y: auto;
  background: var(--notion-sidebar);
  border-right: 1px solid #e5e5e5;
  z-index: 100;
}

/* Sticky alternative (scrolls with parent) */
.sidebar-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  align-self: flex-start;
}

.main-content {
  margin-left: 260px;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  .sidebar.open { transform: translateX(0); }
  .main-content { margin-left: 0; }
}
```

### Client Logo Grid (Template 60)
```css
/* Flexbox approach - centers last row */
.logo-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 3rem 0;
}

.logo-grid img {
  width: 130px;
  height: 75px;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.logo-grid img:hover {
  filter: grayscale(0%);
  opacity: 1;
}

/* CSS Grid approach - equal spacing */
.logo-grid-alt {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  align-items: center;
}
```

### Search Filter (Template 57)
```javascript
const searchInput = document.getElementById('search');
const items = document.querySelectorAll('.searchable-item');

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    const match = text.includes(query);
    item.style.display = match ? '' : 'none';
    if (match && query) {
      item.classList.add('highlight');
    } else {
      item.classList.remove('highlight');
    }
  });
});

// Debounce for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
```

### Mobile Responsive Breakpoints (2024 Standard)
```css
/* Mobile-first approach with min-width */
/* X-Small: <576px (default, no query) */
/* Small: ≥576px (landscape phones) */
/* Medium: ≥768px (tablets) */
/* Large: ≥992px (desktops) */
/* X-Large: ≥1200px (large desktops) */
/* XX-Large: ≥1400px (larger desktops) */

.container {
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
}

@media (min-width: 576px) {
  .container { max-width: 540px; }
}

@media (min-width: 768px) {
  .container { max-width: 720px; }
}

@media (min-width: 992px) {
  .container { max-width: 960px; }
}

@media (min-width: 1200px) {
  .container { max-width: 1140px; }
}

@media (min-width: 1400px) {
  .container { max-width: 1320px; }
}
```

---

## Ready for Build Session

All research is gathered. When the 8-hour build session begins:

1. Start with template 51 (signature-minimal)
2. Use existing template patterns from 01-founder as base
3. Implement unique features per template
4. Test responsive design
5. Add dark mode where applicable
6. Write config.json and README.md
7. Commit and push

---

*Research compiled: March 2, 2026*
*Updated with additional code patterns from deep research*
