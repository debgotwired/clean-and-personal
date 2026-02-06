# Template 37: Timeline

Chronological timeline layout perfect for showcasing career journeys, project histories, or any story-based content with scroll animations and alternating left/right layout.

## Features

- **Vertical Timeline**: Clean center-aligned timeline with connecting line
- **Scroll Animations**: Timeline items fade in as you scroll
- **Alternating Layout**: Items alternate between left and right sides
- **Date Markers**: Clear date indicators for each milestone
- **Interactive Cards**: Hover effects and smooth transitions
- **Milestone Highlights**: Bullet points with animated reveals
- **Responsive**: Converts to single-column on mobile devices
- **Keyboard Navigation**: Arrow key support for accessibility

## Best For

- Career Portfolios
- Project Histories
- Company Timelines
- Life Stories
- Event Chronicles
- Achievement Showcases
- Professional Journeys

## Color Scheme

- Primary: `#3b82f6` (Blue)
- Secondary: `#06b6d4` (Cyan)
- Accent: `#f59e0b` (Amber)
- Background: `#ffffff` (White)
- Text: `#1f2937` (Dark Gray)

## Fonts

- Headings: Crimson Pro (Elegant serif for storytelling)
- Body: Open Sans (Clean, readable sans-serif)

## Sections

1. **Hero** - Introduction to your journey
2. **Timeline** - Chronological milestones with 6 sample entries
3. **About** - Personal bio and skills showcase
4. **Contact** - Contact form and social links

## Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #3b82f6;
    --secondary: #06b6d4;
    --accent: #f59e0b;
    --timeline-line: #cbd5e1;
}
```

### Add Timeline Items

Add new timeline entries in `index.html`:

```html
<!-- Right-side item -->
<div class="timeline-item right">
    <div class="timeline-content">
        <div class="timeline-date">2024 - Present</div>
        <div class="timeline-card">
            <div class="timeline-icon">🚀</div>
            <h3 class="timeline-title">Position Title</h3>
            <h4 class="timeline-company">Company Name</h4>
            <p class="timeline-description">
                Description of your role and achievements...
            </p>
            <ul class="timeline-highlights">
                <li>Achievement 1</li>
                <li>Achievement 2</li>
                <li>Achievement 3</li>
            </ul>
        </div>
    </div>
    <div class="timeline-marker"></div>
</div>

<!-- Left-side item -->
<div class="timeline-item left">
    <!-- Same structure as above -->
</div>
```

**Important**: Alternate between `right` and `left` classes for proper layout.

### Customize Icons

Change the emoji icons to match your content:

```html
<div class="timeline-icon">🎓</div> <!-- Education -->
<div class="timeline-icon">💼</div> <!-- Work -->
<div class="timeline-icon">🏆</div> <!-- Achievement -->
<div class="timeline-icon">🚀</div> <!-- Launch -->
```

Or use Font Awesome or other icon libraries.

### Adjust Animation Speed

Modify the transition timing in `styles.css`:

```css
.timeline-item {
    transition: opacity 0.8s ease, transform 0.8s ease;
}
```

## Technical Details

- Pure HTML/CSS/JavaScript (no frameworks)
- Intersection Observer API for scroll animations
- Responsive CSS Grid for layout
- Semantic HTML5 structure
- CSS custom properties for easy theming
- Smooth scroll behavior
- Form validation
- Mobile-first responsive design

## JavaScript Features

- Scroll-triggered timeline animations
- Staggered highlight list animations
- Timeline card hover effects
- Mobile navigation toggle
- Smooth scrolling to anchors
- Form submission handling
- Keyboard navigation (Arrow keys)
- Responsive menu behavior
- Scroll progress tracking

## Animation Details

1. **Timeline Items**: Fade in and slide up when scrolling into view
2. **Markers**: Pulse effect when item becomes visible
3. **Highlights**: Staggered fade-in for bullet points
4. **Icons**: Rotate and scale on card hover
5. **Cards**: Lift effect on hover with shadow

## Responsive Breakpoints

- **Desktop** (> 768px): Two-column alternating layout
- **Tablet** (≤ 768px): Single-column left-aligned
- **Mobile** (≤ 480px): Compact spacing and typography

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility

- Semantic HTML structure
- ARIA labels for navigation
- Keyboard navigation support
- Focus states for interactive elements
- Sufficient color contrast (WCAG AA)
- Screen reader friendly

## Usage Tips

1. **Chronological Order**: List items from newest to oldest (top to bottom)
2. **Consistent Dates**: Use consistent date format throughout
3. **Concise Highlights**: Keep bullet points brief (5-10 words)
4. **Visual Balance**: Alternate left/right for visual symmetry
5. **Icon Selection**: Choose icons that represent each milestone
6. **Description Length**: Keep descriptions to 2-3 sentences
7. **Mobile Testing**: Ensure timeline reads well on small screens

## Performance Tips

- Timeline items load only when scrolling into view
- CSS animations use transform/opacity (GPU-accelerated)
- Intersection Observer for efficient scroll detection
- Minimal JavaScript for fast load times

## Advanced Customization

### Add Images to Timeline Cards

```html
<div class="timeline-card">
    <img src="image.jpg" alt="Description" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;">
    <!-- Rest of card content -->
</div>
```

### Change Timeline Line Style

```css
.timeline::before {
    background: linear-gradient(to bottom, #3b82f6, #06b6d4);
    width: 4px;
}
```

### Add Progress Indicator

The template includes a scroll progress feature that can be enhanced to show visual progress along the timeline line.

## License

MIT License - Free to use for personal and commercial projects
