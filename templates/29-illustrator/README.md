# Template 29: Illustrator

Visual-first portfolio for illustrators showcasing artwork in a beautiful masonry gallery layout with lightbox functionality and commission information.

## Features

- **Masonry Gallery Grid**: Pinterest-style layout with tall/wide items
- **Lightbox Viewer**: Click to view full artwork details
- **Category Filtering**: Filter by character, editorial, brand, personal
- **Commission Info**: Detailed pricing and packages
- **Art Shop Link**: Connect to external shop/store
- **Creative Design**: Colorful, expressive aesthetic
- **Process Showcase**: Visual workflow explanation
- **Responsive**: Mobile-optimized masonry layout

## Best For

- Digital Illustrators
- Traditional Artists
- Character Designers
- Editorial Illustrators
- Concept Artists
- Visual Artists

## Color Scheme

- Primary: `#e11d48` (Rose)
- Secondary: `#7c3aed` (Purple)
- Accent: `#f59e0b` (Amber)
- Background: `#ffffff` (White)
- Text: `#18181b` (Zinc)

## Fonts

- Headings: Comfortaa (Playful, artistic)
- Body: Nunito (Friendly, readable)

## Sections

1. **Hero** - Creative introduction with animated showcase
2. **Gallery** - Filterable masonry grid with lightbox
3. **About** - Artist bio with stats and tools
4. **Process** - 4-step creative workflow
5. **Commissions** - Service packages with pricing
6. **Shop** - Link to external shop/prints
7. **Contact** - Commission inquiry form

## Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #e11d48;
    --secondary: #7c3aed;
    --accent: #f59e0b;
}
```

### Update Gallery Items

Add/edit gallery items in `index.html`:

```html
<div class="gallery-item" data-category="character">
    <div class="gallery-image">
        <!-- Add your image here -->
    </div>
    <div class="gallery-overlay">
        <h3>Artwork Title</h3>
        <p>Category</p>
    </div>
</div>
```

Gallery item modifiers:
- `.tall` - Takes 2 rows (portrait)
- `.wide` - Takes 2 columns (landscape)
- No modifier - Square (1x1)

### Update Commission Packages

Edit commission cards in `index.html`:

```html
<div class="commission-card">
    <div class="commission-icon">👤</div>
    <h3 class="commission-title">Package Name</h3>
    <div class="commission-price">Starting at $XXX</div>
    <ul class="commission-features">
        <li>Feature 1</li>
        <li>Feature 2</li>
    </ul>
    <a href="#contact" class="btn btn-primary">Inquire</a>
</div>
```

### Change Commission Status

Update availability in contact section:

```html
<!-- Open for commissions -->
<div class="status-indicator open"></div>

<!-- Closed for commissions -->
<div class="status-indicator" style="background: #ef4444; animation: none;"></div>
```

## Technical Details

- Pure HTML/CSS/JavaScript (no frameworks)
- Masonry CSS Grid layout
- Lightbox modal for artwork viewing
- Category filtering system
- Intersection Observer animations
- Animated counters
- Smooth scroll navigation
- Form validation
- Mobile responsive
- Accessibility compliant

## Key Features Implementation

### Masonry Gallery
Uses CSS Grid with different item sizes:
```css
.gallery-item.tall { grid-row: span 2; }
.gallery-item.wide { grid-column: span 2; }
```

### Lightbox Viewer
Click any gallery item to open lightbox:
- Full-screen overlay
- Image preview
- Title and category
- Click outside or press ESC to close

### Category Filtering
Filter artwork by:
- All Work
- Character Design
- Editorial
- Brand Illustration
- Personal Projects

### Commission Packages
Three-tier pricing:
- Character Design ($400+)
- Editorial Illustration ($600+)
- Brand Illustration ($800+)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Lightweight (< 120KB total)
- Optimized grid layout
- Smooth animations
- Minimal JavaScript

## Accessibility

- ARIA labels for interactive elements
- Keyboard navigation (ESC to close lightbox)
- Semantic HTML structure
- Focus indicators
- Alt text for images (add when replacing placeholders)

## Form Integration

The contact form is ready for integration with:
- Email services (e.g., FormSpree, EmailJS)
- CRM systems
- Custom backend APIs

Replace the form submission handler in `script.js` with your integration code.

## Customization Tips

1. **Gallery Images**: Replace emoji placeholders with actual artwork images
2. **Profile Photo**: Add your artist photo to about section
3. **Commission Pricing**: Update pricing based on your rates
4. **Shop Link**: Connect to Etsy, Gumroad, or your shop
5. **Tools**: Update tools you actually use
6. **Process**: Customize workflow steps
7. **Social Links**: Add Instagram, Behance, ArtStation links
8. **Commission Status**: Keep availability current

## Adding Real Images

Replace placeholders with images:

```html
<div class="gallery-image">
    <img src="path/to/image.jpg" alt="Artwork description">
</div>
```

Update CSS for image styling:

```css
.gallery-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## SEO Optimization

- Update meta title and description
- Add structured data for creative work
- Include alt text for all artwork
- Add Open Graph tags for social sharing

## Conversion Optimization

Strategic CTAs placed at:
- Hero section
- Navigation bar
- Commission section
- Contact section

## License

MIT License - Free to use for personal and commercial projects
