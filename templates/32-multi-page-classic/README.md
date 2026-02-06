# Template 32: Multi Page Classic

Traditional multi-page website with classic serif typography, professional layout, and comprehensive navigation structure.

## Features

- **Multi-Page Structure**: Separate HTML files for different sections
- **Classic Navigation**: Top navigation bar with dropdown support
- **Breadcrumbs**: Page hierarchy navigation for better UX
- **Footer Sitemap**: Comprehensive footer with all page links
- **SEO-Friendly**: Semantic HTML5 with proper meta tags
- **Professional Design**: Classic serif typography with modern touches
- **Responsive Layout**: Mobile-friendly design across all pages

## Pages Included

1. **index.html** - Home page with overview and key information
2. **about.html** - Company history, values, team, and timeline
3. **services.html** - Detailed service descriptions
4. **portfolio.html** - Project showcase and case studies
5. **blog.html** - Blog listing page
6. **contact.html** - Contact form and information

## Best For

- Professional Services Firms
- Consulting Companies
- Law Firms
- Financial Advisors
- Corporate Websites
- Agencies
- Traditional Businesses

## Color Scheme

- Primary: `#1e40af` (Professional Blue)
- Secondary: `#64748b` (Slate Gray)
- Accent: `#dc2626` (Red)
- Background: `#ffffff` (White)
- Surface: `#f8fafc` (Light Blue-Gray)
- Text: `#1e293b` (Dark Slate)

## Fonts

- Headings: Libre Baskerville (Classic serif, traditional)
- Body: Source Sans Pro (Clean, professional sans-serif)

## File Structure

```
32-multi-page-classic/
├── index.html          # Home page
├── about.html          # About us page
├── services.html       # Services page
├── portfolio.html      # Portfolio page
├── blog.html           # Blog listing
├── contact.html        # Contact page
├── styles.css          # Unified stylesheet
├── script.js           # Shared JavaScript
├── config.json         # Template configuration
└── README.md           # Documentation
```

## Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #1e40af;
    --secondary: #64748b;
    --accent: #dc2626;
}
```

### Add New Pages

1. Copy an existing page (e.g., `about.html`)
2. Update the `<title>` and meta description
3. Change breadcrumb navigation
4. Update active state in navigation
5. Add link to footer sitemap
6. Customize content

### Modify Navigation

Edit the navigation in each HTML file's `<nav class="main-nav">` section:

```html
<nav class="main-nav">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="your-page.html">Your Page</a></li>
        <!-- Add more items -->
    </ul>
</nav>
```

### Update Footer

The footer is repeated across all pages for consistency. To update, modify the footer in each HTML file or use a templating system.

## Components

### Breadcrumbs
Shows page hierarchy and aids navigation:
```html
<nav class="breadcrumbs">
    <ol>
        <li><a href="index.html">Home</a></li>
        <li aria-current="page">Current Page</li>
    </ol>
</nav>
```

### Service Cards
Feature boxes with icons and descriptions:
```html
<div class="service-card">
    <div class="service-icon">📊</div>
    <h3>Service Title</h3>
    <p>Description...</p>
</div>
```

### Timeline
Visual timeline for company history:
```html
<div class="timeline-item">
    <div class="timeline-year">2026</div>
    <div class="timeline-content">
        <h3>Event</h3>
        <p>Description...</p>
    </div>
</div>
```

### Team Members
Profiles with avatars:
```html
<div class="team-member">
    <div class="member-avatar">JD</div>
    <h3>Name</h3>
    <p class="member-title">Title</p>
    <p class="member-bio">Bio...</p>
</div>
```

## SEO Features

- Semantic HTML5 structure
- Descriptive meta tags on each page
- Proper heading hierarchy
- Alt attributes for images
- Breadcrumb navigation
- Clean URL structure
- Footer sitemap

## Technical Details

- **Pure HTML/CSS/JavaScript**: No frameworks required
- **Responsive Design**: Mobile-first approach
- **Cross-Browser**: Compatible with modern browsers
- **Performance**: Optimized loading with minimal assets
- **Accessibility**: Semantic HTML and ARIA labels
- **Form Validation**: Built-in HTML5 validation

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Mobile Responsive

All pages adapt to mobile devices with:
- Hamburger menu for navigation
- Stacked layouts for better readability
- Touch-friendly buttons and links
- Optimized images and spacing

## Best Practices

1. **Consistency**: Keep header and footer identical across pages
2. **Navigation**: Always show current page in navigation
3. **Breadcrumbs**: Update for each page's position
4. **Internal Linking**: Link related pages together
5. **Forms**: Always provide feedback on submission
6. **External Links**: Open in new tabs with rel="noopener"

## Customization Examples

### Change Layout Width
```css
.container {
    max-width: 1400px; /* Default is 1200px */
}
```

### Adjust Spacing
```css
.content-section {
    padding: 6rem 0; /* Default is 5rem */
}
```

### Modify Typography
```css
body {
    font-size: 18px; /* Default is 16px */
    line-height: 1.8; /* Default is 1.7 */
}
```

## License

MIT License - Free to use for personal and commercial projects
