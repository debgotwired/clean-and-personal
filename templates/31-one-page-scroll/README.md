# Template 31: One Page Scroll

Modern single-page scrolling portfolio with full-screen sections, scroll-snap behavior, and parallax effects.

## Features

- **Full-Screen Sections**: Each section fills the entire viewport
- **Scroll-Snap Behavior**: Smooth snapping to sections while scrolling
- **Parallax Effects**: Dynamic background movements for depth
- **Section Navigation Dots**: Fixed side navigation with hover labels
- **Progress Indicator**: Top bar showing scroll progress
- **Keyboard Navigation**: Arrow keys, PageUp/Down, Home/End support
- **Animated Counters**: Numbers animate on scroll into view
- **Testimonial Slider**: Auto-rotating testimonials with manual controls
- **Smooth Animations**: Fade-in and slide-up effects throughout

## Best For

- Creative Portfolios
- Personal Websites
- Product Showcases
- Agency Presentations
- Modern Landing Pages

## Color Scheme

- Primary: `#2563eb` (Blue)
- Secondary: `#7c3aed` (Purple)
- Accent: `#f59e0b` (Amber)
- Background: `#ffffff` (White)
- Surface: `#f8fafc` (Light Gray)
- Text: `#0f172a` (Dark Blue-Gray)

## Fonts

- Headings: DM Sans (Clean, modern geometric)
- Body: Inter (Professional, readable)

## Sections

1. **Hero** - Full-screen introduction with CTA buttons
2. **About** - Skills showcase with animated statistics
3. **Work** - Portfolio grid with project cards
4. **Services** - Service offerings in card layout
5. **Testimonials** - Rotating client testimonials
6. **Contact** - Contact form and information

## Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #2563eb;
    --secondary: #7c3aed;
    --accent: #f59e0b;
}
```

### Add/Remove Sections

1. Add section HTML in `index.html`:
```html
<section id="new-section" class="section" data-section="6">
    <div class="parallax-bg" data-speed="0.4"></div>
    <div class="section-content">
        <!-- Your content -->
    </div>
</section>
```

2. Add navigation dot:
```html
<a href="#new-section" class="nav-dot" data-section="6">
    <span class="dot-label">New Section</span>
</a>
```

### Adjust Parallax Speed

Modify `data-speed` attribute (0.1 to 1.0):
```html
<div class="parallax-bg" data-speed="0.5"></div>
```

### Customize Counter Animations

Change `data-count` values:
```html
<div class="stat-number" data-count="150">0</div>
```

## Navigation Features

### Section Dots
- Fixed right-side navigation
- Hover to see section labels
- Click to jump to section
- Active state shows current section

### Keyboard Controls
- `Arrow Down` / `Page Down`: Next section
- `Arrow Up` / `Page Up`: Previous section
- `Home`: First section
- `End`: Last section

## Technical Details

- **Scroll-Snap CSS**: Native smooth scrolling between sections
- **Intersection Observer**: Efficient scroll-triggered animations
- **Parallax Effect**: Transform-based parallax for performance
- **Vanilla JavaScript**: No framework dependencies
- **Mobile Responsive**: Touch-friendly navigation
- **Semantic HTML5**: Proper landmark elements
- **Accessibility**: ARIA labels and keyboard navigation

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Note: Scroll-snap requires modern browsers. Gracefully degrades to standard scrolling in older browsers.

## Performance

- **Lightweight**: ~15KB total (HTML+CSS+JS gzipped)
- **Smooth 60fps**: Optimized animations using transform
- **Lazy Loading**: Images load as sections come into view
- **Fast Initial Load**: Minimal assets, no external dependencies

## Customization Tips

### Changing Section Order
Sections can be reordered in the HTML. Update `data-section` attributes and navigation dots to match.

### Disabling Scroll-Snap
Remove from `.scroll-container`:
```css
scroll-snap-type: none;
```

### Adjusting Section Height
Change `.section` height for partial-screen sections:
```css
.section {
    height: 80vh; /* Instead of 100vh */
}
```

### Adding Background Images
Replace `.parallax-bg` background:
```css
.section-hero .parallax-bg {
    background-image: url('your-image.jpg');
    background-size: cover;
    background-position: center;
}
```

## License

MIT License - Free to use for personal and commercial projects
