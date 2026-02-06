# Template 27: Consultant

Professional services-focused portfolio for business consultants showcasing expertise, services, case studies, and client success stories.

## Features

- **Services Showcase**: Detailed service offerings with pricing and deliverables
- **Expertise Display**: Industry specializations and proven methodologies
- **Case Studies**: In-depth client success stories with measurable results
- **Testimonials**: Client feedback and social proof
- **Credentials**: Education, certifications, and professional recognition
- **Professional Design**: Trustworthy corporate blue color scheme
- **Consultation CTA**: Strategic calls-to-action for booking consultations
- **Responsive**: Mobile-optimized layout

## Best For

- Business Consultants
- Strategy Consultants
- Management Consultants
- Independent Consultants
- Advisory Professionals
- Organizational Development Consultants

## Color Scheme

- Primary: `#1e3a8a` (Corporate Blue)
- Secondary: `#0891b2` (Professional Cyan)
- Accent: `#fbbf24` (Gold)
- Background: `#f8fafc` (Light Gray)
- Text: `#0f172a` (Dark Slate)

## Fonts

- Headings: Merriweather (Professional serif)
- Body: Source Sans Pro (Clean, readable)

## Sections

1. **Hero** - Professional introduction with credentials bar
2. **Services** - Detailed service offerings with pricing
3. **Expertise** - Industry specializations and methodologies
4. **Case Studies** - Client success stories with metrics
5. **Testimonials** - Client feedback and reviews
6. **Credentials** - Education, certifications, and recognition
7. **Contact** - Consultation request form

## Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #1e3a8a;
    --secondary: #0891b2;
    --accent: #fbbf24;
}
```

### Update Services

Edit the services in `index.html`:

```html
<div class="service-card">
    <div class="service-icon">📊</div>
    <h3 class="service-title">Your Service</h3>
    <!-- Update service details -->
</div>
```

### Modify Case Studies

Update case studies in `index.html`:

```html
<article class="case-study-card">
    <div class="case-study-header">
        <div class="case-study-company">Client Name</div>
        <div class="case-study-industry">Industry</div>
    </div>
    <!-- Update case study details -->
</article>
```

### Add Credentials

Add or modify credentials in `index.html`:

```html
<div class="credential-card">
    <div class="credential-type">Education</div>
    <h3>Degree Name</h3>
    <p>Institution</p>
    <div class="credential-year">Year</div>
</div>
```

## Technical Details

- Pure HTML/CSS/JavaScript (no frameworks)
- Semantic HTML5 structure
- CSS custom properties for theming
- Intersection Observer for scroll animations
- Smooth scroll navigation
- Form validation
- Mobile responsive
- Accessibility compliant

## Key Features Implementation

### Services with Pricing
Each service card includes:
- Service description
- Deliverables list
- Starting price
- Featured service highlighting

### Case Study Metrics
Metrics displayed with:
- Large numbers for impact
- Clear labels
- Visual hierarchy

### Credentials Display
Professional credentials shown with:
- Type categorization
- Institution details
- Year information

### Consultation Flow
Strategic CTAs placed at:
- Hero section
- Navigation bar
- Contact section

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Lightweight (< 100KB total)
- Fast loading times
- Optimized images (use placeholders for demo)
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
- CRM systems (e.g., HubSpot, Salesforce)
- Custom backend APIs

Replace the form submission handler in `script.js` with your integration code.

## Customization Tips

1. **Personal Branding**: Update company name, colors, and fonts
2. **Services**: Customize service offerings and pricing
3. **Case Studies**: Replace with your actual client success stories
4. **Credentials**: Add your education and certifications
5. **Testimonials**: Include real client feedback
6. **Images**: Replace emoji placeholders with professional images
7. **Contact**: Update email, phone, and LinkedIn links

## SEO Optimization

- Update meta title and description in `index.html`
- Add relevant keywords
- Include structured data for services
- Add alt text to images

## License

MIT License - Free to use for personal and commercial projects
