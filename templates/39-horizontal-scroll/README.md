# Template 39: Horizontal Scroll

Experimental left-to-right horizontal scrolling portfolio with snap-to-section navigation, perfect for creative and interactive showcases.

## Features

- **Horizontal Scrolling**: Unique left-to-right navigation
- **Snap-to-Section**: Smooth snap scrolling between sections
- **Multiple Navigation**: Dots, arrows, keyboard, and mouse wheel
- **Progress Tracking**: Visual progress bar at bottom
- **Scroll Indicators**: Section counter and navigation dots
- **Keyboard Support**: Arrow keys, Home, End navigation
- **Touch Gestures**: Swipe support for mobile devices
- **Experimental Design**: Dark theme with vibrant gradients

## Best For

- Creative Agencies
- Interactive Portfolios
- Product Showcases
- Experimental Sites
- Storytelling Experiences
- Designer Portfolios
- Avant-garde Projects

## Color Scheme

- Primary: `#8b5cf6` (Purple)
- Secondary: `#ec4899` (Pink)
- Accent: `#f59e0b` (Amber)
- Background: `#0f172a` (Dark Blue-Gray)
- Text: `#f1f5f9` (Light Gray)

## Fonts

- Headings: Archivo Black (Bold, impactful display font)
- Body: Work Sans (Modern, readable sans-serif)

## Sections

1. **Intro** - Hero with large title
2. **About** - Introduction with statistics
3. **Work 1** - First project showcase
4. **Work 2** - Second project showcase
5. **Work 3** - Third project showcase
6. **Contact** - Contact form and social links

## Navigation Methods

1. **Scroll**: Natural horizontal scrolling
2. **Navigation Dots**: Click dots at top
3. **Arrow Buttons**: Left/right arrows on sides
4. **Keyboard**:
   - `→` Next section
   - `←` Previous section
   - `Home` First section
   - `End` Last section
5. **Mouse Wheel**: Scroll up/down to move left/right
6. **Touch**: Swipe left/right on mobile

## Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #8b5cf6;
    --secondary: #ec4899;
    --accent: #f59e0b;
    --background: #0f172a;
}
```

### Add Sections

1. Add HTML section:

```html
<section class="section section-7">
    <div class="section-content">
        <div class="section-number">07</div>
        <h2 class="section-title">New Section</h2>
        <!-- Content -->
    </div>
    <div class="section-bg-pattern pattern-1"></div>
</section>
```

2. Add navigation dot:

```html
<button class="dot" data-section="6" aria-label="Go to section 7"></button>
```

3. Update total sections in HTML:

```html
<span class="total-sections">07</span>
```

### Customize Background Patterns

Each section can have a unique pattern. Edit in `styles.css`:

```css
.pattern-7 {
    background: radial-gradient(circle, var(--primary) 1px, transparent 1px) 0 0 / 40px 40px;
}
```

### Change Work Showcase Layout

Modify `.work-showcase` grid in `styles.css`:

```css
.work-showcase {
    grid-template-columns: 1.5fr 1fr; /* Change ratio */
    gap: 3rem; /* Adjust spacing */
}
```

## Technical Details

- Pure HTML/CSS/JavaScript (no frameworks)
- CSS Scroll Snap for section alignment
- Intersection Observer for animations
- Smooth scroll behavior
- Touch event handling
- Keyboard event handling
- Responsive design with mobile optimization

## JavaScript Features

- **Section Tracking**: Monitors current section
- **Navigation Updates**: Syncs all navigation elements
- **Smooth Scrolling**: Animated transitions
- **Keyboard Control**: Arrow key navigation
- **Wheel Hijacking**: Converts vertical scroll to horizontal
- **Touch Support**: Swipe gestures
- **Progress Bar**: Real-time scroll progress
- **Auto-hide Hint**: Keyboard instruction fades out
- **Form Handling**: Contact form submission

## Responsive Behavior

- **Desktop**: Full horizontal scroll experience
- **Tablet**: Optimized layout with adjusted spacing
- **Mobile**: Touch-friendly with swipe gestures
- **All Devices**: Snap-to-section works everywhere

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Note: Older browsers may not support CSS Scroll Snap.

## Accessibility

- ARIA labels on navigation
- Keyboard navigation support
- Focus states on interactive elements
- Semantic HTML structure
- Clear visual indicators
- Screen reader friendly navigation counter

## Performance Tips

1. **Sections Load On-Demand**: Content appears as you scroll
2. **GPU Acceleration**: Uses transform for animations
3. **Scroll Optimization**: Debounced scroll events
4. **Preloading**: Next section preloaded for smooth transition
5. **Minimal Repaints**: Fixed positioning reduces reflows

## Usage Tips

1. **Content Length**: Keep sections concise (3-6 sections ideal)
2. **Mobile Testing**: Always test swipe gestures
3. **Navigation**: Provide multiple ways to navigate
4. **Hint**: The keyboard hint auto-hides after 3 seconds
5. **First Impression**: Hero section is crucial
6. **Flow**: Arrange content in logical left-to-right order
7. **Visual Hierarchy**: Use section numbers for clarity

## Known Considerations

- Horizontal scrolling is unconventional - consider your audience
- Some users may find it disorienting initially
- Provide clear navigation hints
- Not ideal for text-heavy content
- Best for visual portfolios and showcases

## Advanced Customization

### Add Vertical Scrolling Within Sections

For longer content in a section:

```css
.section-content {
    max-height: 80vh;
    overflow-y: auto;
}
```

### Add Section Transitions

```css
.section {
    transition: filter 0.5s ease;
}

.section:not(.active) {
    filter: grayscale(100%) brightness(0.3);
}
```

### Add Parallax Background

```css
.section-bg-pattern {
    transition: transform 0.5s ease;
}

/* Update in JavaScript on scroll */
pattern.style.transform = `translateX(${scrollAmount * 0.5}px)`;
```

## Troubleshooting

**Issue**: Sections not snapping properly
- Check CSS `scroll-snap-type: x mandatory` is applied
- Ensure sections have `scroll-snap-align: start`

**Issue**: Keyboard navigation not working
- Verify JavaScript is loaded
- Check for console errors

**Issue**: Mobile scrolling issues
- Add `-webkit-overflow-scrolling: touch`
- Test on actual devices, not just emulators

## License

MIT License - Free to use for personal and commercial projects
