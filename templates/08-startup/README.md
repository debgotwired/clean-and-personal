# Startup Template

Bold, achievement-oriented design perfect for startup founders who want to showcase traction, growth metrics, and team credibility.

## Style
- High-energy gradient accents (indigo to purple)
- Bold typography with strong hierarchy
- Animated counter metrics
- Modern, confident aesthetic
- Clear call-to-actions throughout

## Features
- Animated traction metrics with counters
- Hero section with funding announcement badge
- Mission and vision showcase
- Product features grid with hover effects
- Team member profiles with social links
- Contact form with multiple inquiry types
- Hiring banner for recruitment
- Scroll-triggered animations
- Sticky navigation
- Fully responsive design
- Dark mode support
- Mobile menu

## Best For
- Startup founders
- Early-stage companies showcasing traction
- YC companies and accelerator alumni
- Businesses raising funding
- Teams recruiting talent
- B2B SaaS companies
- Tech startups with strong metrics

## Sections
1. **Hero**: Bold headline with funding announcement, CTA buttons, investor logos
2. **Traction**: Animated metrics showcasing growth (users, ARR, satisfaction, etc.)
3. **Mission**: Company story with key milestones and stats
4. **Product**: Feature grid highlighting key capabilities
5. **Team**: Team member profiles with roles and backgrounds
6. **Contact**: Multi-purpose form for waitlist, investment, partnerships, careers

## Customization Guide

### Update Company Info
Edit the hero section in `index.html`:
```html
<h1>Building the Future of<br><span class="gradient-text">Your Industry</span></h1>
<p class="hero-lead">Your mission statement here...</p>
```

### Update Metrics
Change the `data-target` values in the metrics section:
```html
<div class="metric-value" data-target="50000">0</div>
```

### Update Colors
Modify the CSS variables in `styles.css`:
```css
:root {
    --primary: #6366f1;      /* Brand color */
    --secondary: #8b5cf6;    /* Accent color */
    --success: #10b981;      /* Growth indicators */
}
```

### Update Team Members
Edit the team grid in `index.html`:
```html
<div class="team-card">
    <div class="team-photo">👤</div>
    <h3>Name</h3>
    <div class="team-role">Title</div>
    <p>Background info...</p>
    <div class="team-links">
        <a href="...">𝕏</a>
        <a href="...">in</a>
    </div>
</div>
```

### Customize Features
Add or modify product features in the feature grid:
```html
<div class="feature-card">
    <div class="feature-icon">⚡</div>
    <h3>Feature Name</h3>
    <p>Feature description...</p>
</div>
```

### Form Integration
Replace the form handler in `script.js` with your API:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, interest, message })
})
```

## Inspiration
Based on successful YC startup sites and growth-focused company pages that lead with metrics and traction.

## Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/clean-and-personal/tree/main/templates/08-startup)

## Performance
- Lightweight: ~35KB total (HTML + CSS + JS)
- Animated counters trigger only on scroll
- Smooth scroll behavior
- GPU-accelerated animations
- Mobile-optimized

## Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states for all interactive elements
- Reduced motion support for accessibility preferences
- High contrast ratios (WCAG 2.1 AA compliant)
