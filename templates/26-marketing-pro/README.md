# Template 26: Marketing Pro

Campaign-focused portfolio for marketing professionals showcasing successful campaigns, metrics, and case studies.

## Features

- **Campaign Showcase**: Grid layout with filterable case studies
- **Animated Metrics**: Counter animations for impact numbers
- **Results-Driven**: Emphasis on ROI, conversion rates, and revenue
- **Client Testimonials**: Social proof from successful partnerships
- **Bold Design**: Confident typography and vibrant color scheme
- **Responsive**: Mobile-first design
- **Dark Mode**: Not included (bright, energetic design)

## Best For

- Marketing Managers
- Digital Marketers
- Growth Marketers
- Marketing Directors
- CMOs

## Color Scheme

- Primary: `#ff6b35` (Bold Orange)
- Secondary: `#004e89` (Professional Blue)
- Accent: `#f7931e` (Energetic Orange)
- Background: `#ffffff` (White)
- Text: `#1a1a1a` (Dark Gray)

## Fonts

- Headings: Poppins (Bold, confident)
- Body: Inter (Clean, readable)

## Sections

1. **Hero** - Bold statement with quick stats
2. **About** - Approach and specialties
3. **Campaigns** - Filterable case studies with metrics
4. **Metrics** - Impact numbers showcase
5. **Testimonials** - Client success stories
6. **Contact** - Lead generation form

## Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #ff6b35;
    --secondary: #004e89;
    --accent: #f7931e;
}
```

### Update Campaigns

Edit the campaigns in `index.html`:

```html
<article class="campaign-card" data-category="saas">
    <!-- Update campaign details -->
</article>
```

### Modify Metrics

Change the counter targets in `index.html`:

```html
<div class="metric-number" data-target="250">0</div>
```

## Technical Details

- Pure HTML/CSS/JavaScript (no frameworks)
- Intersection Observer for scroll animations
- Animated counters
- Campaign filtering system
- Mobile responsive
- Form validation
- Accessibility compliant

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - Free to use for personal and commercial projects
