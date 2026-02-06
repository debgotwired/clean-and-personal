# Template 42: Startup Founder

Pitch-focused founder portfolio with traction metrics, vision statement, and investor CTAs for fundraising and building credibility.

## Features

- **Bold Hero Section**: Immediate impact with founder name and mission
- **Vision Statement**: Clear articulation of the problem and solution
- **Animated Traction Metrics**: Real-time counter animations for key KPIs
- **Product Overview**: Feature showcase with benefits
- **Team Showcase**: Leadership credentials and backgrounds
- **Investor Logos**: Social proof from funding partners
- **Press Mentions**: Media coverage highlights
- **Pitch Deck Download**: CTA for investor materials
- **Contact Form**: Multiple inquiry types for different audiences
- **Responsive Design**: Perfect on all devices

## Best For

- Startup Founders
- Entrepreneurs
- CEOs building companies
- Innovators seeking funding
- Fundraisers pitching to investors

## Color Scheme

- Primary: `#6366f1` (Vibrant Indigo)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#f59e0b` (Amber)
- Background: `#fafafa` (Light Gray)
- Text: `#1f2937` (Dark Gray)

## Fonts

- Headings: Poppins (Bold, modern, impactful)
- Body: Inter (Clean, professional)

## Sections

1. **Hero** - Name, mission, key metrics, and CTAs
2. **Vision** - Problem statement, solution, and achievements
3. **Traction** - Animated metrics showing growth and validation
4. **Product** - Feature cards explaining the offering
5. **Team** - Leadership profiles with credentials
6. **Investors** - Funding partners, press coverage, and pitch deck CTA
7. **Contact** - Multi-purpose contact form

## Customization

### Update Metrics

Edit the data-target attributes for counters:

```html
<div class="stat-number" data-target="2.5">0</div>
```

The script automatically formats:
- Funding amounts (adds $ and M)
- User counts (adds + and commas)
- Percentages (adds %)
- Ratings (decimal format)

### Add Team Members

Insert new team member cards:

```html
<div class="team-member">
    <div class="member-photo">AB</div>
    <h3>Name</h3>
    <p class="member-role">Title</p>
    <p class="member-bio">Bio text</p>
    <div class="member-social">
        <!-- Social links -->
    </div>
</div>
```

### Modify Product Features

Add or edit feature cards:

```html
<div class="feature-card">
    <div class="feature-icon">🚀</div>
    <h3>Feature Name</h3>
    <p>Feature description</p>
</div>
```

### Change Colors

Edit CSS variables:

```css
:root {
    --primary: #6366f1;
    --secondary: #8b5cf6;
    --accent: #f59e0b;
}
```

## Technical Details

- Pure HTML/CSS/JavaScript (no frameworks)
- Intersection Observer for scroll animations
- Animated counters with smart formatting
- Parallax hero effect
- Gradient backgrounds
- Glassmorphism effects
- Form validation
- Mobile responsive
- Touch-friendly

## Pitch Deck Integration

The download button is ready for integration:

```javascript
function downloadDeck() {
    // Option 1: Direct file download
    window.location.href = '/path/to/pitch-deck.pdf';

    // Option 2: Google Drive
    window.open('https://drive.google.com/file/d/YOUR_FILE_ID/view');

    // Option 3: Protected link with email capture
    // Show modal to collect email before download
}
```

## Form Integration

Ready for backend integration:

- **Formspree**: Add action URL
- **Netlify Forms**: Add data-netlify attribute
- **EmailJS**: Client-side email
- **Custom API**: POST to your endpoint

Example with segmented handling:

```javascript
const inquiry = formData.inquiry;
if (inquiry === 'investing') {
    // Send to investors@company.com
} else if (inquiry === 'partnership') {
    // Send to partnerships@company.com
}
```

## Traction Metrics Tips

### What to Showcase

1. **Growth Metrics**: MoM/YoY growth percentage
2. **Revenue**: ARR, MRR, or revenue growth
3. **Users**: Active users, signups, or engagement
4. **Product**: Rating, NPS, retention
5. **Market Validation**: Partnerships, certifications
6. **Efficiency**: CAC, LTV, burn multiple

### Format Examples

```html
<!-- Revenue -->
<div data-target="1.2">0</div> <!-- Displays as $1.2M -->

<!-- Percentage -->
<div data-target="250">0</div> <!-- Displays as 250% -->

<!-- Large numbers -->
<div data-target="150000">0</div> <!-- Displays as 150,000+ -->

<!-- Rating -->
<div data-target="4.8">0</div> <!-- Displays as 4.8 -->
```

## Press & Media

Add logos or mentions:

```html
<div class="press-logo">Publication Name</div>
```

For images instead of text:

```html
<img src="logo.svg" alt="Publication" class="press-logo">
```

## Investor CTA Best Practices

1. **Clear Value Prop**: State the opportunity
2. **Easy Access**: One-click pitch deck download
3. **Multiple Paths**: Deck download + meeting booking
4. **Urgency**: "Currently raising Series A"
5. **Social Proof**: Show existing investors
6. **Credibility**: Highlight traction and validation

## SEO Optimization

Update meta tags for discoverability:

```html
<title>Your Name - Founder of Company Name</title>
<meta name="description" content="Building Company - Brief pitch in one sentence">
<meta property="og:title" content="Your Name - Founder">
<meta property="og:description" content="Your elevator pitch">
<meta property="og:image" content="social-share-image.jpg">
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Lightweight assets
- Lazy loading for images
- Optimized animations
- Fast initial load
- Smooth scroll performance

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliant
- Screen reader friendly

## License

MIT License - Free to use for personal and commercial projects

## Tips for Founders

1. **Be Specific**: Use real numbers, not "growing fast"
2. **Tell a Story**: Problem → Solution → Traction
3. **Show Momentum**: Emphasize growth trajectory
4. **Build Credibility**: Team backgrounds, advisors, partners
5. **Clear CTA**: Make it easy to take next step
6. **Keep Updated**: Refresh metrics monthly
7. **Mobile First**: Many investors browse on mobile
8. **Fast Load**: First impression matters
