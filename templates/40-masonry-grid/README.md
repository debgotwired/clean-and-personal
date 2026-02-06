# Template 40: Masonry Grid

Variable-height masonry grid layout perfect for photography portfolios, art galleries, and dynamic content showcases with true masonry flow.

## Features

- **True Masonry Layout**: CSS column-based masonry (no JavaScript required)
- **Variable Heights**: Three height options (short, medium, tall)
- **Category Filtering**: Filter items by category with smooth animations
- **Lightbox Gallery**: Full-screen viewer with prev/next navigation
- **Lazy Loading**: Performance-optimized image loading
- **Load More**: Dynamic content loading
- **Responsive Columns**: Adapts column count based on screen size
- **Hover Effects**: Smooth zoom and overlay transitions

## Best For

- Photography Portfolios
- Art Galleries
- Design Showcases
- Blog Layouts
- Content Curators
- Visual Portfolios
- Product Galleries

## Color Scheme

- Primary: `#0ea5e9` (Sky Blue)
- Secondary: `#64748b` (Slate Gray)
- Accent: `#f59e0b` (Amber)
- Background: `#ffffff` (White)
- Text: `#1e293b` (Dark Slate)

## Fonts

- Headings: Sora (Modern, clean)
- Body: Inter (Readable, professional)

## Sections

1. **Hero** - Introduction with gradient text
2. **Filters** - Sticky category filter bar
3. **Masonry Grid** - Variable-height items (12 initial items)
4. **About** - Bio with statistics
5. **Contact** - Contact form and info

## Masonry Layout

This template uses **CSS Columns** for true masonry layout:

```css
.masonry-grid {
    column-count: 3;
    column-gap: 2rem;
}
```

### Height Variations

Items can have three different heights:
- **Short**: `aspect-ratio: 4/3`
- **Medium** (default): `aspect-ratio: 3/4`
- **Tall**: `aspect-ratio: 2/3`

## Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #0ea5e9;
    --secondary: #64748b;
    --accent: #f59e0b;
}
```

### Add Masonry Items

Add new items in `index.html`:

```html
<article class="masonry-item tall" data-category="nature">
    <div class="item-image">
        <div class="placeholder-img" style="background: linear-gradient(135deg, #0ea5e9, #06b6d4);">
            <span class="placeholder-icon">🌲</span>
        </div>
        <div class="item-overlay">
            <button class="view-btn" data-title="Item Title" data-category="Nature">View</button>
        </div>
    </div>
    <div class="item-content">
        <h3 class="item-title">Item Title</h3>
        <p class="item-category">Nature</p>
    </div>
</article>
```

**Height Classes**:
- No class = Medium height
- `class="masonry-item short"` = Short height
- `class="masonry-item tall"` = Tall height

### Add Filter Categories

1. Add button in filters section:

```html
<button class="filter-btn" data-filter="new-category">New Category</button>
```

2. Update items with matching `data-category` attribute

### Adjust Column Count

```css
/* Desktop - 3 columns */
.masonry-grid {
    column-count: 3;
}

/* Tablet - 2 columns */
@media (max-width: 1200px) {
    .masonry-grid {
        column-count: 2;
    }
}

/* Mobile - 1 column */
@media (max-width: 768px) {
    .masonry-grid {
        column-count: 1;
    }
}
```

### Replace Placeholder Images

Replace gradient placeholders with actual images:

```html
<div class="item-image">
    <img src="your-image.jpg" alt="Description">
    <div class="item-overlay">
        <!-- ... -->
    </div>
</div>
```

Add CSS:

```css
.item-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## Technical Details

- Pure HTML/CSS/JavaScript (no frameworks)
- CSS Columns for masonry layout
- Intersection Observer for lazy loading
- Category filtering with animations
- Lightbox with keyboard navigation
- Mobile-first responsive design
- Form validation
- Semantic HTML5

## JavaScript Features

- **Category Filtering**: Smooth show/hide animations
- **Lightbox System**: Full-screen viewer with navigation
- **Keyboard Navigation**: Arrow keys and Escape in lightbox
- **Load More**: Dynamically adds 6 items per click
- **Lazy Loading**: Images load as they enter viewport
- **Mobile Menu**: Responsive hamburger menu
- **Smooth Scrolling**: Animated anchor navigation
- **Form Handling**: Contact form submission

## Lightbox Features

- Click any item to open full-screen view
- Navigate with:
  - Previous/Next buttons
  - Arrow keys (← →)
  - Escape to close
  - Click outside to close
- Shows filtered items only
- Smooth transitions

## Responsive Breakpoints

- **Desktop** (> 1200px): 3-column masonry
- **Tablet** (768-1200px): 2-column masonry
- **Mobile** (< 768px): 1-column stacked layout

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility

- Semantic HTML structure
- ARIA labels on buttons
- Keyboard navigation in lightbox
- Focus states on interactive elements
- Alt text ready for images
- Sufficient color contrast

## Performance Tips

1. **CSS Columns**: Native browser support, very performant
2. **Lazy Loading**: Images load only when needed
3. **GPU Acceleration**: Transform/opacity for animations
4. **Optimized Images**: Compress images, use WebP
5. **Intersection Observer**: Efficient scroll detection

## Usage Tips

1. **Image Ratios**: Use consistent aspect ratios within height classes
2. **Content Mix**: Vary heights for visual interest
3. **Categories**: Keep to 4-6 categories maximum
4. **Load More**: Consider infinite scroll for large collections
5. **Mobile Testing**: Always test column layout on devices
6. **Alt Text**: Add descriptive alt text when using real images
7. **File Size**: Optimize images (aim for <200KB per image)

## CSS Columns vs JavaScript Masonry

This template uses **CSS Columns** instead of JavaScript libraries like Masonry.js:

**Advantages**:
- No external dependencies
- Better performance
- Simpler code
- Native browser support

**Considerations**:
- Items flow top-to-bottom, then left-to-right
- Order might differ from left-to-right layouts
- Less control over specific item positioning

For left-to-right flow, consider using CSS Grid or JavaScript libraries.

## Advanced Customization

### Add Gap Variations

```css
.masonry-grid {
    column-gap: 3rem; /* Increase horizontal gap */
}

.masonry-item {
    margin-bottom: 3rem; /* Increase vertical gap */
}
```

### Add Item Borders

```css
.masonry-item {
    border: 2px solid var(--border);
}
```

### Add Filter Animation

```css
.masonry-item {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.masonry-item.hiding {
    opacity: 0;
    transform: scale(0.8);
}
```

### Infinite Scroll

Replace "Load More" button with infinite scroll:

```javascript
let loading = false;

window.addEventListener('scroll', () => {
    if (loading) return;

    const scrolled = window.scrollY + window.innerHeight;
    const threshold = document.documentElement.scrollHeight - 500;

    if (scrolled > threshold) {
        loading = true;
        loadMoreItems();
        setTimeout(() => { loading = false; }, 1000);
    }
});
```

## Troubleshooting

**Issue**: Items not flowing correctly
- Check `break-inside: avoid` on items
- Ensure no fixed heights on items

**Issue**: Column count not changing on mobile
- Verify media queries are not overridden
- Check browser support for `column-count`

**Issue**: Gaps between items are uneven
- Ensure consistent `margin-bottom` on items
- Check for collapsing margins

**Issue**: Images not loading
- Check file paths
- Verify CORS settings for external images

## Alternative: CSS Grid Masonry

For browsers that support it, you can use CSS Grid Masonry (experimental):

```css
.masonry-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: masonry;
    gap: 2rem;
}
```

Note: Limited browser support as of 2026.

## License

MIT License - Free to use for personal and commercial projects
