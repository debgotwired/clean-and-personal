# Bento Grid Template

Modern modular card layout inspired by the 2026 bento grid design trend. Perfect for designers and creatives who want a contemporary, visual-first portfolio.

## Style
- Modular grid layout with variable card sizes
- Modern, clean aesthetic
- Space Grotesk typography
- Colorful gradient project cards
- Card-based organization inspired by Japanese bento boxes

## Features
- CSS Grid-based bento layout
- Three card sizes (small, medium, large)
- Hero card with gradient background
- Profile card with avatar and social links
- Stats showcase
- Project cards with gradients
- Services overview
- Experience timeline
- Client testimonial
- Newsletter signup
- Contact form
- Scroll animations with staggered timing
- Hover effects on all cards
- Mobile responsive (stacks to single column)
- Dark mode support

## Best For
- UI/UX designers
- Product designers
- Creative directors
- Digital artists
- Brand designers
- Multidisciplinary creatives
- Portfolio sites
- Agency showcases

## Sections
1. **Hero**: Large gradient card with headline and CTAs
2. **Profile**: Avatar, name, location, social links
3. **Stats**: Quick metrics (projects, experience)
4. **Skills**: Tool proficiency icons
5. **Projects**: Gradient cards showcasing work
6. **Quote**: Inspirational design quote
7. **Currently**: Availability status with pulse indicator
8. **Services**: What you offer
9. **Experience**: Timeline of roles
10. **Testimonial**: Client feedback
11. **Newsletter**: Email signup
12. **Contact**: Form with email and message

## Customization Guide

### Update Card Grid
Bento cards use a 12-column grid. Adjust card sizes with data attributes:
```html
<div class="bento-card" data-size="large">   <!-- 8 columns -->
<div class="bento-card" data-size="medium">  <!-- 6 columns -->
<div class="bento-card" data-size="small">   <!-- 4 columns -->
```

### Add New Cards
Create new bento cards:
```html
<div class="bento-card" data-size="medium">
    <h3>Card Title</h3>
    <p>Card content...</p>
</div>
```

### Customize Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary: #6366f1;
    --bg: #f9fafb;
    --card-bg: #ffffff;
}
```

### Change Project Gradients
Edit inline styles on project cards:
```html
<div class="project-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
```

### Update Profile
Edit the profile card section:
```html
<div class="avatar">👋</div>
<h3>Your Name</h3>
<p>Your Location</p>
```

### Modify Grid Layout
Adjust the bento grid structure in `styles.css`:
```css
.bento-grid {
    grid-template-columns: repeat(12, 1fr);
    gap: 1.5rem;
}
```

## Design Trend: Bento Grids
Bento grids are a major 2026 design trend inspired by Japanese bento boxes. Key characteristics:
- **Modular**: Different-sized cards create visual interest
- **Organized**: Clear visual hierarchy and grouping
- **Flexible**: Easy to add/remove/rearrange sections
- **Modern**: Popular in Apple designs and contemporary UIs
- **Responsive**: Gracefully adapts to different screen sizes

## Typography
- **Primary**: Space Grotesk - Modern geometric sans-serif perfect for contemporary designs

## Layout Tips
- Use large cards for hero and important content
- Group related small cards together
- Vary card sizes for visual rhythm
- Use gradients strategically to draw attention
- Keep important content in top rows
- Balance colorful and neutral cards

## Inspiration
Based on 2026 bento grid trend seen in Apple product pages, Notion layouts, and modern portfolio sites.

## Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/clean-and-personal/tree/main/templates/11-bento-grid)

## Performance
- Lightweight: ~35KB total (HTML + CSS + JS)
- CSS Grid for efficient layout
- Staggered animations for smooth entrance
- Optimized for fast initial render

## Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states for all interactive elements
- Reduced motion support
- High contrast ratios (WCAG 2.1 AA compliant)
- Logical tab order through cards

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Requires CSS Grid support
