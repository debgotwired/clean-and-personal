# Template 35: Magazine Layout

Editorial-style portfolio with magazine layout, featuring elegant typography, multi-column grids, pull quotes, and drop caps. Perfect for writers, designers, and creative professionals.

## Features

- **Editorial Design**: Classic magazine-inspired layout
- **Multi-Column Grid**: Flexible masonry-style article layout
- **Drop Caps**: Traditional editorial typography
- **Pull Quotes**: Highlighted quote sections
- **Category Filtering**: Interactive content filtering
- **Featured Hero**: Large hero article with imagery
- **Reading Progress**: Visual scroll progress indicator
- **Elegant Typography**: Serif fonts for sophisticated feel
- **Responsive Grid**: Adapts beautifully to all screen sizes

## Best For

- Writers & Authors
- Journalists
- Design Portfolios
- Creative Agencies
- Editorial Projects
- Content Creators
- Bloggers
- Publishers

## Color Scheme

- Primary: `#dc2626` (Red)
- Secondary: `#1f2937` (Dark Gray)
- Accent: `#f59e0b` (Amber)
- Background: `#ffffff` (White)
- Text: `#111827` (Near Black)

## Fonts

- Headings: Playfair Display (Elegant serif)
- Body: Lora (Readable serif with personality)

## Sections

1. **Header** - Masthead with publication info
2. **Featured Article** - Hero article with drop cap
3. **Categories Bar** - Sticky filtering navigation
4. **Article Grid** - Masonry layout with various sizes
5. **About** - Author/studio information
6. **Expertise** - Areas of specialization
7. **Contact** - Multiple contact methods
8. **Footer** - Traditional magazine footer

## Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #dc2626;
    --secondary: #1f2937;
    --accent: #f59e0b;
}
```

### Modify Grid Layout

Adjust article card sizes:

```css
.article-large {
    grid-column: span 8; /* Spans 8 columns */
}

.article-medium {
    grid-column: span 6; /* Spans 6 columns */
}

.article-small {
    grid-column: span 4; /* Spans 4 columns */
}
```

### Add New Categories

1. Add button in HTML:
```html
<button class="category-btn" data-category="photography">
    Photography
</button>
```

2. Add category to articles:
```html
<article class="article-card" data-category="photography">
    <!-- Content -->
</article>
```

### Customize Typography

```css
body {
    font-size: 18px; /* Increase for easier reading */
    line-height: 1.9; /* More spacing */
}
```

## Components

### Article Card Sizes

**Large** - Featured articles with image
```html
<article class="article-card article-large" data-category="design">
    <div class="article-image">...</div>
    <div class="article-content">...</div>
</article>
```

**Medium** - Standard articles
```html
<article class="article-card article-medium" data-category="dev">
    <div class="article-image">...</div>
    <div class="article-content">...</div>
</article>
```

**Small** - Brief articles, no image
```html
<article class="article-card article-small" data-category="tips">
    <span class="article-tag">Tips</span>
    <h3 class="article-title">Title</h3>
    <p class="article-excerpt">Text...</p>
</article>
```

### Pull Quote
```html
<aside class="pull-quote">
    <blockquote>
        "Your inspirational quote here."
    </blockquote>
    <cite>— Author Name</cite>
</aside>
```

### Drop Cap
```html
<p>
    <span class="drop-cap">F</span>irst paragraph with
    large decorative first letter...
</p>
```

## Editorial Best Practices

1. **Hierarchy**: Use different article sizes to create visual hierarchy
2. **White Space**: Don't overcrowd - let content breathe
3. **Typography**: Keep line length between 60-75 characters for readability
4. **Images**: Use high-quality imagery that supports content
5. **Pull Quotes**: Highlight key insights to break up text

## Grid System

The layout uses a 12-column grid system:
- **Full width**: span 12
- **Large**: span 8
- **Medium**: span 6
- **Small**: span 4
- **Pull Quote**: span 4

Mix and match to create interesting layouts that add up to 12 columns per row.

## Features Guide

### Category Filtering
Click category buttons to filter content. Uses smooth fade animations.

### Reading Progress Bar
Automatically tracks scroll progress with red bar at top of page.

### Parallax Effect
Subtle parallax on featured article image for depth.

### Lazy Loading
Ready for image lazy loading with IntersectionObserver.

### Keyboard Shortcuts
- `1` - Jump to Work section
- `2` - Jump to About section
- `3` - Jump to Contact section

## Adding Images

Replace placeholder divs with actual images:

```html
<!-- Instead of: -->
<div class="image-placeholder">📐</div>

<!-- Use: -->
<img src="your-image.jpg" alt="Description" class="lazy" data-src="your-image.jpg">
```

## Typography Scale

- Masthead: 4rem (64px)
- Featured Title: 3.5rem (56px)
- Section Heading: 3rem (48px)
- Article Title (Large): 1.75rem (28px)
- Article Title (Small): 1.25rem (20px)
- Body: 1rem (16px) base, 1.125-1.25rem for featured text

## Print Styles

The template includes print-optimized styles for creating physical/PDF versions.

## SEO Considerations

- Semantic HTML5 structure
- Proper heading hierarchy
- Meta tags for social sharing
- Alt text for images (add to your images)
- Clean, descriptive URLs
- Schema markup (can be added)

## Performance

- **Lightweight**: ~18KB total (gzipped)
- **Fast Loading**: Minimal assets
- **Smooth Animations**: Hardware-accelerated transforms
- **Lazy Loading**: Images load as needed
- **Optimized Fonts**: Two font families, specific weights

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility

- Semantic HTML elements
- Proper heading structure
- Color contrast ratios meet WCAG AA
- Keyboard navigation support
- Focus states on interactive elements

## Integration Ideas

### Adding a CMS
Easily integrate with:
- WordPress (custom theme)
- Contentful
- Sanity
- Strapi

### Analytics
Track article engagement:
```javascript
articleCards.forEach(card => {
    card.addEventListener('click', () => {
        // Send to your analytics
        gtag('event', 'article_view', {
            title: card.querySelector('.article-title').textContent
        });
    });
});
```

### Newsletter Signup
Add subscription form in featured article or footer.

### Social Sharing
Add share buttons to articles for Twitter, LinkedIn, etc.

## License

MIT License - Free to use for personal and commercial projects
