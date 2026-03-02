# 58 - Scrollytelling

An immersive storytelling template with full-screen chapters, parallax effects, and scroll-triggered animations.

## Inspiration

Based on award-winning scrollytelling features like:
- NYT Snowfall
- The Pudding
- SCMP multimedia features

## Features

- **Progress Bar**: Visual scroll progress indicator
- **Full-Screen Chapters**: Sticky sections with gradient backgrounds
- **Parallax Effects**: Subtle background movement
- **Reveal Animations**: Elements fade in on scroll
- **Counter Animation**: Stats animate when visible
- **Reduced Motion Support**: Respects user preferences

## How It Works

The template uses:
- `IntersectionObserver` for scroll-triggered animations
- `position: sticky` for chapter effects
- CSS transforms for parallax
- CSS transitions for smooth reveals

## Customization

### Chapter Colors

Edit gradients in `index.html`:

```html
<div class="chapter-background" style="background: linear-gradient(135deg, #your-color 0%, #your-color 100%);"></div>
```

### Adding Chapters

```html
<section class="chapter" data-chapter="4">
    <div class="sticky-container">
        <div class="chapter-background" style="background: your-gradient;"></div>
        <div class="chapter-content">
            <span class="chapter-number reveal">Chapter 4</span>
            <h2 class="reveal">Your Title</h2>
            <p class="reveal">Your content...</p>
        </div>
    </div>
</section>
```

### Stats

Edit the data-target attribute:

```html
<span class="stat-number" data-target="100">0</span>
```

## File Structure

```
58-scrollytelling/
├── index.html      # Story structure
├── styles.css      # Full-screen styles
├── script.js       # Scroll animations
├── config.json     # Template metadata
└── README.md       # This file
```

## Performance

- Animations use GPU-accelerated transforms
- IntersectionObserver is more efficient than scroll events
- Reduced motion support for accessibility

## Best For

- Personal stories
- Portfolio narratives
- Case studies
- About pages
- Brand stories
