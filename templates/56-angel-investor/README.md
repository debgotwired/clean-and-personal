# 56 - Angel Investor

A portfolio website template for angel investors, featuring portfolio companies organized by sector and an antiportfolio section.

## Inspiration

Based on investor websites like [ivanbercovich.com](https://ivanbercovich.com) and [tim.blog/portfolio](https://tim.blog/portfolio).

## Features

- **Investment Thesis**: Clear statement of what you invest in
- **Portfolio by Sector**: Companies organized by category
- **Antiportfolio**: Transparent about missed opportunities
- **Pitch CTA**: Clear instructions for founders
- **Writing Section**: Share your thoughts

## The Antiportfolio

A unique feature popularized by Bessemer Venture Partners - sharing companies you passed on that went on to succeed. This builds trust and shows self-awareness.

## Customization

### Investment Details

Edit the thesis section in `index.html`:

```html
<div class="detail">
    <span class="label">Check Size</span>
    <span class="value">$25K - $100K</span>
</div>
```

### Adding Portfolio Companies

```html
<div class="sector-group">
    <h3>Your Sector</h3>
    <div class="company-grid">
        <a href="https://company.com" class="company">Company Name</a>
    </div>
</div>
```

### Colors

```css
:root {
    --accent: #2563eb;  /* Blue accent */
}
```

## File Structure

```
56-angel-investor/
├── index.html      # Main page
├── styles.css      # Clean investor aesthetic
├── script.js       # Interactions
├── config.json     # Template metadata
└── README.md       # This file
```

## Best For

- Angel investors
- Venture capitalists
- Family offices
- Syndicates
- Investment scouts
