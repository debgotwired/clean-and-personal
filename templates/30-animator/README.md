# Template 30: Animator

Motion-focused portfolio for animators with video showreel, project breakdowns, and dark theme optimized for showcasing motion work.

## Features

- **Showreel Section**: Hero video embed for main showreel
- **Video Project Grid**: Multiple project showcases with video placeholders
- **Process Timeline**: Visual workflow with animated timeline
- **Skills Showcase**: Software and specialization display
- **Client List**: Brand logos grid
- **Dark Theme**: Professional dark background optimized for video content
- **Animated UI**: Smooth transitions and motion throughout
- **Responsive**: Mobile-optimized video grid

## Best For

- Motion Designers
- 3D Animators
- 2D Animators
- VFX Artists
- Motion Graphics Designers
- Video Editors

## Color Scheme

- Primary: `#06b6d4` (Cyan)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#f472b6` (Pink)
- Background: `#0f172a` (Dark Slate)
- Text: `#f1f5f9` (Light Gray)

## Fonts

- Headings: Space Grotesk (Modern, bold)
- Body: Inter (Clean, readable)

## Sections

1. **Hero** - Introduction with animated background
2. **Showreel** - Main video showcase
3. **Projects** - Video project grid with details
4. **Process** - Animated timeline workflow
5. **Skills** - Software and specializations
6. **Clients** - Brand logos
7. **Contact** - Project inquiry form

## Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #06b6d4;
    --secondary: #8b5cf6;
    --accent: #f472b6;
    --background: #0f172a;
}
```

### Embed Video

Replace video placeholders with actual embeds:

```html
<!-- YouTube embed -->
<div class="showreel-video">
    <iframe width="100%" height="600"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            frameborder="0" allowfullscreen>
    </iframe>
</div>

<!-- Vimeo embed -->
<div class="showreel-video">
    <iframe width="100%" height="600"
            src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
            frameborder="0" allowfullscreen>
    </iframe>
</div>
```

### Update Projects

Edit project cards in `index.html`:

```html
<article class="project-card">
    <div class="project-video">
        <div class="video-thumb">
            <!-- Add video thumbnail or embed -->
        </div>
    </div>
    <div class="project-content">
        <div class="project-tags">
            <span class="tag">Tag 1</span>
            <span class="tag">Tag 2</span>
        </div>
        <h3 class="project-title">Project Title</h3>
        <p class="project-desc">Description</p>
        <div class="project-meta">
            <span>Client: Name</span>
            <span>Duration: XXs</span>
        </div>
    </div>
</article>
```

### Modify Skills

Update software and specializations in `index.html`:

```html
<div class="skill-item">
    <span class="skill-name">Software Name</span>
    <span class="skill-level">Expert/Advanced/Intermediate</span>
</div>
```

### Update Availability

Change availability status in contact section:

```html
<div class="availability-card">
    <div class="availability-icon">📅</div>
    <div class="availability-text">
        <strong>Current Availability</strong>
        <p>Status message here</p>
    </div>
</div>
```

## Technical Details

- Pure HTML/CSS/JavaScript (no frameworks)
- Dark theme optimized for video content
- Animated timeline with stagger effects
- Intersection Observer animations
- Parallax background effects
- Animated counters
- Smooth scroll navigation
- Form validation
- Mobile responsive
- Accessibility compliant

## Key Features Implementation

### Showreel Section
Featured video section with:
- Large video embed area
- Info grid with project details
- Optimized aspect ratio (16:9)

### Video Project Grid
Multiple project cards with:
- Video thumbnails/embeds
- Play button overlays
- Project tags and descriptions
- Client and duration info

### Animated Timeline
Process visualization with:
- Numbered markers
- Connecting lines
- Stagger animations on scroll

### Dark Theme
Professional dark background:
- Reduces eye strain
- Makes video content pop
- Modern, cinematic feel

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Lightweight (< 100KB total)
- Optimized animations
- Lazy loading for videos (when implemented)
- Minimal JavaScript

## Accessibility

- ARIA labels for interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Focus indicators
- High contrast dark theme

## Video Integration

### YouTube Integration

```javascript
// Replace placeholder with YouTube embed
const showreelContainer = document.querySelector('.showreel-video');
showreelContainer.innerHTML = `
    <iframe width="100%" height="600"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
    </iframe>
`;
```

### Vimeo Integration

```javascript
// Replace placeholder with Vimeo embed
const showreelContainer = document.querySelector('.showreel-video');
showreelContainer.innerHTML = `
    <iframe width="100%" height="600"
            src="https://player.vimeo.com/video/YOUR_VIDEO_ID?color=06b6d4&title=0&byline=0"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
    </iframe>
`;
```

## Form Integration

The contact form is ready for integration with:
- Email services (e.g., FormSpree, EmailJS)
- CRM systems
- Custom backend APIs

Replace the form submission handler in `script.js` with your integration code.

## Customization Tips

1. **Video Content**: Replace all placeholders with actual video embeds
2. **Project Thumbnails**: Add custom thumbnails for each project
3. **Showreel**: Feature your best work in main showreel
4. **Skills**: Update software list to match your expertise
5. **Clients**: Add actual client logos
6. **Process**: Customize timeline steps to your workflow
7. **Social Links**: Add Vimeo, Behance, Dribbble links
8. **Availability**: Keep status current

## Video Thumbnail Best Practices

1. Use high-quality thumbnails (1920x1080)
2. Include play button overlay
3. Show compelling frame from video
4. Optimize file size for web
5. Use consistent aspect ratio (16:9)

## SEO Optimization

- Update meta title and description
- Add structured data for creative work
- Include video schema markup
- Add alt text for thumbnails
- Optimize for "motion designer" keywords

## Conversion Optimization

Strategic CTAs placed at:
- Hero section (primary)
- Navigation bar
- After showreel
- Contact section

## License

MIT License - Free to use for personal and commercial projects
