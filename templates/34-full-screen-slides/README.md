# Template 34: Full Screen Slides

Presentation-style portfolio with full-screen slides, keyboard navigation, and smooth transitions. Perfect for showcasing work in a bold, presentation format.

## Features

- **Keyboard Navigation**: Arrow keys, Space, PageUp/Down
- **Smooth Transitions**: Elegant slide animations
- **Progress Bar**: Visual indicator of presentation progress
- **Slide Counter**: Current slide / total slides
- **Touch Support**: Swipe gestures for mobile
- **Mouse Wheel**: Scroll to navigate
- **Speaker Notes**: Toggle-able notes panel
- **Keyboard Shortcuts**: Comprehensive shortcut system
- **Fullscreen Mode**: F key for fullscreen
- **Presentation Timer**: Automatic time tracking

## Best For

- Creative Portfolios
- Product Launches
- Agency Presentations
- Case Study Showcases
- Personal Brands
- Speaker Portfolios

## Color Scheme

- Primary: `#0ea5e9` (Sky Blue)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#f59e0b` (Amber)
- Background: `#0f172a` (Dark Navy)
- Text: `#f1f5f9` (Light Gray)

## Fonts

- Headings: Montserrat (Bold, impactful)
- Body: Source Sans Pro (Clean, readable)

## Keyboard Shortcuts

- `→` `↓` `Space` `Page Down` - Next slide
- `←` `↑` `Page Up` - Previous slide
- `Home` - First slide
- `End` - Last slide
- `N` - Toggle speaker notes
- `F` - Toggle fullscreen
- `?` - Show keyboard shortcuts help
- `Esc` - Close help/notes

## Customization

### Add New Slide

```html
<section class="slide" data-slide="6">
    <div class="slide-content">
        <h2 class="section-title">Your Title</h2>
        <p>Your content...</p>
    </div>
</section>
```

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #0ea5e9;
    --secondary: #8b5cf6;
    --accent: #f59e0b;
}
```

### Customize Transitions

Modify slide transition in CSS:

```css
.slide {
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Add Speaker Notes

Update notes object in `script.js`:

```javascript
const notes = {
    1: 'Your notes for slide 1',
    2: 'Your notes for slide 2',
    // ...
};
```

## Slide Layouts

### Title Slide
Full-screen title with centered content and decoration

### Split Content
Two-column layout for text and visual content

### Centered Content
Single column, centered layout for focused content

### Full Width
Use full width for timelines, processes, or large content

## Components

### Stats Row
```html
<div class="stats-row">
    <div class="stat">
        <div class="stat-value">150+</div>
        <div class="stat-label">Projects</div>
    </div>
</div>
```

### Project Card
```html
<div class="project-card">
    <div class="project-icon">🚀</div>
    <h4>Project Name</h4>
    <p>Description</p>
</div>
```

### Process Step
```html
<div class="process-step">
    <div class="step-number">1</div>
    <h3>Step Title</h3>
    <p>Description</p>
</div>
```

## Mobile Support

- Touch/swipe gestures
- Responsive layouts
- Optimized font sizes
- Touch-friendly buttons

## Presentation Tips

1. **Keep It Simple**: One main point per slide
2. **Use Visuals**: Icons and images over text
3. **High Contrast**: Dark background ensures readability
4. **Practice**: Use speaker notes for talking points
5. **Timing**: ~2-3 minutes per slide average

## Technical Details

- **Pure Vanilla JavaScript**: No dependencies
- **CSS Transitions**: Hardware-accelerated
- **Touch Events**: Native touch support
- **Fullscreen API**: Native browser fullscreen
- **LocalStorage**: Could be added for slide position

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Advanced Features

### Presentation Timer
Automatically tracks presentation time from when you advance from slide 1.

### Auto-Advance (Optional)
Add auto-advance functionality:

```javascript
let autoAdvanceInterval;
function startAutoAdvance(seconds) {
    autoAdvanceInterval = setInterval(() => {
        if (currentSlide < totalSlides) {
            nextSlide();
        } else {
            stopAutoAdvance();
        }
    }, seconds * 1000);
}
```

### Slide Fragments
Add progressive reveals:

```html
<div class="fragment">Content that appears on click</div>
```

```javascript
// Add fragment support
let fragmentIndex = 0;
const fragments = document.querySelectorAll('.fragment');
// Show fragments before advancing slide
```

## Exporting to PDF

To create a PDF of your presentation:

1. Open in Chrome/Edge
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
3. Set destination to "Save as PDF"
4. Print each slide separately or use print stylesheet

## License

MIT License - Free to use for personal and commercial projects
