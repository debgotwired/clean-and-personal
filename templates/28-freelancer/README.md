# Template 28: Freelancer

Versatile portfolio for freelancers across disciplines, showcasing client work, availability, and diverse skills with an approachable, friendly design.

## Features

- **Availability Status**: Real-time availability indicator with pulsing animation
- **Hourly Rate Display**: Clear pricing information upfront
- **Services Showcase**: Multiple service offerings with feature lists
- **Portfolio Grid**: Filterable project showcase
- **Client Testimonials**: Social proof from satisfied clients
- **Skills Display**: Visual skill bars with animations
- **Warm Design**: Friendly purple and pink color scheme
- **Responsive**: Mobile-optimized layout

## Best For

- Freelance Designers
- Freelance Developers
- Freelance Writers
- Freelance Consultants
- Multi-discipline Freelancers
- Independent Creatives

## Color Scheme

- Primary: `#8b5cf6` (Purple)
- Secondary: `#ec4899` (Pink)
- Accent: `#f59e0b` (Amber)
- Background: `#fafafa` (Light Gray)
- Text: `#1f2937` (Dark Gray)

## Fonts

- Headings: Outfit (Modern, rounded)
- Body: Inter (Clean, readable)

## Sections

1. **Hero** - Introduction with availability badge and quick info
2. **About** - Personal intro with skill bars
3. **Services** - Service offerings with features
4. **Portfolio** - Filterable project showcase
5. **Testimonials** - Client reviews
6. **Availability** - Current availability and booking info
7. **Contact** - Project inquiry form

## Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #8b5cf6;
    --secondary: #ec4899;
    --accent: #f59e0b;
}
```

### Update Availability Status

Change the availability badge in `index.html`:

```html
<div class="availability-badge">
    <span class="status-dot"></span>
    Available for new projects
</div>
```

For unavailable status:
```html
<div class="availability-badge" style="background: #fee2e2; color: #991b1b;">
    <span class="status-dot" style="background: #ef4444;"></span>
    Fully booked
</div>
```

### Modify Services

Update services in `index.html`:

```html
<div class="service-card">
    <div class="service-icon">🎨</div>
    <h3 class="service-title">Your Service</h3>
    <p class="service-desc">Description</p>
    <ul class="service-features">
        <li>Feature 1</li>
        <li>Feature 2</li>
    </ul>
</div>
```

### Update Portfolio Items

Edit portfolio items in `index.html`:

```html
<article class="portfolio-item" data-category="design">
    <div class="portfolio-image">
        <!-- Add your image here -->
    </div>
    <div class="portfolio-content">
        <div class="portfolio-tag">Category</div>
        <h3 class="portfolio-title">Project Title</h3>
        <p class="portfolio-desc">Description</p>
    </div>
</article>
```

### Adjust Skill Bars

Modify skill levels in `index.html`:

```html
<div class="skill-item">
    <div class="skill-name">Skill Name</div>
    <div class="skill-bar">
        <div class="skill-fill" style="width: 95%"></div>
    </div>
</div>
```

## Technical Details

- Pure HTML/CSS/JavaScript (no frameworks)
- Animated counters
- Project filtering system
- Skill bar animations
- Intersection Observer for scroll animations
- Smooth scroll navigation
- Form validation
- Mobile responsive
- Accessibility compliant

## Key Features Implementation

### Availability Indicator
Pulsing dot animation shows real-time availability:
```css
.status-dot {
    animation: pulse 2s infinite;
}
```

### Portfolio Filtering
Click filter buttons to show/hide projects by category:
- All
- Design
- Development
- Branding

### Animated Skill Bars
Skill proficiency visualized with animated progress bars that trigger on scroll.

### Counter Animation
Numbers count up when scrolled into view for engaging stat display.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Lightweight (< 100KB total)
- Fast loading times
- Optimized animations
- Minimal JavaScript

## Accessibility

- ARIA labels for interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Focus indicators
- Alt text for images (add when replacing placeholders)

## Form Integration

The contact form is ready for integration with:
- Email services (e.g., FormSpree, EmailJS)
- CRM systems
- Custom backend APIs

Replace the form submission handler in `script.js` with your integration code.

## Customization Tips

1. **Personal Branding**: Update name, colors, and fonts
2. **Profile Photo**: Replace profile placeholder with your photo
3. **Hourly Rate**: Update rate in hero section
4. **Services**: Customize service offerings
5. **Portfolio**: Add your actual project work with images
6. **Skills**: Update skill list and proficiency levels
7. **Testimonials**: Include real client feedback
8. **Availability**: Keep availability status current
9. **Social Links**: Update contact section with your social profiles

## SEO Optimization

- Update meta title and description in `index.html`
- Add relevant keywords for your services
- Include structured data for person/professional
- Add alt text to images

## Conversion Optimization

Strategic CTAs placed at:
- Hero section (primary action)
- Navigation bar
- Availability section
- Contact section

## License

MIT License - Free to use for personal and commercial projects
