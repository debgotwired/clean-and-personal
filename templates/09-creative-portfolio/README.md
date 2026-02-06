# Creative Portfolio Template

Visual-first design perfect for designers, photographers, illustrators, and creative professionals who want to showcase their work beautifully.

## Style
- Elegant serif typography (Playfair Display for headings)
- Clean, spacious layout with focus on visuals
- Sophisticated color palette with subtle purple accent
- Large, immersive imagery
- Minimal, refined aesthetic

## Features
- Filterable portfolio grid (All, Branding, Photography, Web, Illustration)
- Large format image placeholders for work showcase
- Client testimonials section
- About section with achievement stats
- Contact form with project type selection
- Smooth scroll animations
- Fade-in effects on scroll
- Parallax hero effect
- Sticky navigation
- Mobile responsive with hamburger menu
- Dark mode support
- Keyboard navigation

## Best For
- Graphic designers
- Photographers
- Illustrators
- Creative directors
- Art directors
- UI/UX designers
- Brand designers
- Visual artists
- Creative agencies

## Sections
1. **Hero**: Large statement headline with creative title and tagline
2. **Portfolio**: Filterable grid of work samples with categories
3. **Testimonials**: Client reviews and feedback
4. **About**: Personal story with stats (projects, clients, awards)
5. **Contact**: Form with project type selection and social links

## Customization Guide

### Update Personal Info
Edit the hero section in `index.html`:
```html
<h1 class="hero-title">
    Visual Storyteller<br>
    <span class="hero-subtitle">& Creative Director</span>
</h1>
<p class="hero-tagline">Your tagline here...</p>
```

### Add Portfolio Items
Add new gallery items with your work:
```html
<article class="gallery-item" data-category="branding">
    <div class="item-image" style="background: url('your-image.jpg') center/cover;">
        <div class="item-placeholder">Project Name</div>
    </div>
    <div class="item-info">
        <h3>Project Title</h3>
        <p>Project description...</p>
        <span class="item-category">Category</span>
    </div>
</article>
```

### Customize Colors
Modify the CSS variables in `styles.css`:
```css
:root {
    --primary: #667eea;      /* Accent color */
    --text: #1a1a1a;         /* Main text */
    --bg: #ffffff;           /* Background */
}
```

### Update Stats
Change the about section numbers in `index.html`:
```html
<div class="stat">
    <div class="stat-number">150+</div>
    <div class="stat-label">Your achievement</div>
</div>
```

### Add Filter Categories
To add new portfolio categories, update both HTML and JS:

1. Add filter button:
```html
<button class="filter-btn" data-filter="your-category">Your Category</button>
```

2. Add gallery items with matching data-category:
```html
<article class="gallery-item" data-category="your-category">
```

### Replace Placeholder Images
Replace the placeholder gradients with real images:
```html
<div class="item-image" style="background: url('path/to/image.jpg') center/cover;">
```

### Update Testimonials
Edit client testimonials in the testimonials section:
```html
<blockquote class="testimonial">
    <p>"Your testimonial quote here..."</p>
    <cite>
        <strong>Client Name</strong>
        <span>Title, Company</span>
    </cite>
</blockquote>
```

### Form Integration
Replace the form handler in `script.js` with your API:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
```

## Typography
- **Headings**: Playfair Display (serif) - elegant, sophisticated
- **Body**: Inter (sans-serif) - clean, readable
- Combination creates visual hierarchy and refined aesthetic

## Layout Tips
- Use high-quality images for portfolio items
- Keep project descriptions concise (1-2 sentences)
- Limit portfolio to your best 9-12 pieces
- Update testimonials with real client feedback
- Use consistent image aspect ratios (4:3 recommended)

## Inspiration
Based on leading creative portfolio sites like Behance, Dribbble showcases, and award-winning designer portfolios.

## Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/clean-and-personal/tree/main/templates/09-creative-portfolio)

## Performance
- Lightweight: ~40KB total (HTML + CSS + JS)
- Lazy loading support for images
- Smooth animations with GPU acceleration
- Optimized for large image galleries
- Intersection Observer for efficient scroll animations

## Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation for gallery
- Focus states for all interactive elements
- Reduced motion support
- High contrast ratios (WCAG 2.1 AA compliant)
- Alt text support for images (add to your content)

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)
