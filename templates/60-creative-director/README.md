# 60 - Creative Director

A professional services template for creative directors, brand strategists, and consultants with services grid, client logos, and testimonials.

## Inspiration

Based on [amyleisner.com](https://amyleisner.com) - a clean, professional creative director portfolio.

## Features

- **Story Section**: Personal narrative with image
- **Services Grid**: 4 service offerings
- **Client Logos**: Show who you've worked with
- **Testimonials**: Social proof from past clients
- **Sticky Header**: Fixed navigation
- **Scroll Animations**: Subtle fade-in effects

## Sections

1. **Hero**: Name, title, tagline
2. **Story**: Your background and approach
3. **Services**: What you offer
4. **Clients**: Logo grid of past clients
5. **Testimonials**: Client quotes
6. **Contact**: CTA section

## Customization

### Services

Edit the service cards in `index.html`:

```html
<div class="service-card">
    <h3>Service Name</h3>
    <p>Service description...</p>
</div>
```

### Client Logos

Replace text with actual logos:

```html
<div class="client-logo">
    <img src="logo.png" alt="Client Name">
</div>
```

### Testimonials

```html
<div class="testimonial">
    <blockquote>"Quote here..."</blockquote>
    <cite>
        <strong>Name</strong>
        <span>Title, Company</span>
    </cite>
</div>
```

### Colors

```css
:root {
    --accent: #32373c;  /* Dark gray buttons */
    --surface: #f9f9f9; /* Section backgrounds */
}
```

## File Structure

```
60-creative-director/
├── index.html      # Main page
├── styles.css      # Professional styles
├── script.js       # Smooth scroll & animations
├── config.json     # Template metadata
└── README.md       # This file
```

## Best For

- Creative directors
- Brand strategists
- Design consultants
- Freelance creatives
- Marketing consultants
