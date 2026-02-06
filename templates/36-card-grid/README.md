# Template 36: Card Grid

Pinterest-style card grid layout with hover zoom effects, category filtering, and lightbox gallery.

## Features

- **Responsive Card Grid**: Auto-fill grid that adapts to screen sizes
- **Hover Zoom Effects**: Smooth scale transitions on card hover
- **Category Filtering**: Filter projects by category with smooth animations
- **Lightbox Gallery**: Full-screen image viewer with overlay
- **Lazy Loading**: Performance-optimized image loading
- **Smooth Animations**: Staggered fade-in effects
- **Mobile Responsive**: Stacks beautifully on smaller screens

## Best For

- Photographers
- Designers
- Illustrators
- Artists
- Visual Portfolios
- Creative Agencies
- Design Studios

## Color Scheme

- Primary: `#ec4899` (Pink)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#14b8a6` (Teal)
- Background: `#fafafa` (Off-white)
- Text: `#1f2937` (Dark Gray)

## Fonts

- Headings: Plus Jakarta Sans (Bold, modern)
- Body: Inter (Clean, readable)

## Sections

1. **Hero** - Eye-catching introduction with gradient text
2. **Filters** - Sticky filter bar for easy category selection
3. **Card Grid** - Responsive grid with 12 project cards
4. **About** - Bio section with statistics
5. **Contact** - Form and contact information

## Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #ec4899;
    --secondary: #8b5cf6;
    --accent: #14b8a6;
}
```

### Add Cards

Add new cards in `index.html`:

```html
<article class="card" data-category="photography">
    <div class="card-image">
        <div class="placeholder-img" style="background: linear-gradient(135deg, #ec4899, #8b5cf6);">
            <span class="placeholder-icon">📷</span>
        </div>
        <div class="card-overlay">
            <button class="view-btn" data-title="Project Name" data-category="Photography">View</button>
        </div>
    </div>
    <div class="card-content">
        <h3 class="card-title">Project Name</h3>
        <p class="card-category">Photography</p>
    </div>
</article>
```

### Add Filter Categories

1. Add button in the filters section:

```html
<button class="filter-btn" data-filter="new-category">New Category</button>
```

2. Update cards with matching `data-category` attribute

### Replace Placeholder Images

Replace the placeholder gradients with actual images:

```html
<div class="card-image">
    <img src="your-image.jpg" alt="Project name">
    <div class="card-overlay">
        <!-- ... -->
    </div>
</div>
```

Add CSS for images:

```css
.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## Technical Details

- Pure HTML/CSS/JavaScript (no frameworks)
- CSS Grid for responsive layout
- Intersection Observer for scroll animations
- Lightbox modal with keyboard navigation (ESC to close)
- Sticky filter bar
- Smooth scroll anchors
- Mobile-first responsive design
- Semantic HTML5
- Accessibility features (ARIA labels)

## JavaScript Features

- Category filtering with animation
- Lightbox modal system
- Lazy loading observer
- Mobile navigation toggle
- Smooth scrolling
- Form validation
- Scroll-triggered animations
- Navbar transparency on scroll

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Tips

1. **Optimize Images**: Compress images and use WebP format
2. **Lazy Loading**: Images load as they enter viewport
3. **CSS Animations**: Hardware-accelerated transforms
4. **Minimal JavaScript**: Vanilla JS for best performance

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states on interactive elements
- Alt text ready for images
- Sufficient color contrast

## Usage Tips

- Use high-quality images for best visual impact
- Keep card titles concise (2-4 words)
- Organize projects into 3-5 categories maximum
- Update statistics in About section with real numbers
- Test filtering on different screen sizes

## License

MIT License - Free to use for personal and commercial projects
