# 53 - Warm Essayist

A magazine-style newsletter template with warm earth tones, designed for writers, essayists, and newsletter creators.

## Inspiration

Based on the aesthetic of [henrikkarlsson.xyz](https://henrikkarlsson.xyz) (Escaping Flatland) - warm colors, serif typography for reading, and a focus on long-form content.

## Features

- **Warm Color Palette**: Cream background (#f0efea) with golden accent (#b8860b)
- **Serif Body Text**: Spectral font for comfortable long-form reading
- **Featured Essay**: Prominent hero section for your best work
- **Essay Grid**: Magazine-style layout for recent posts
- **Newsletter Signup**: Built-in email capture form
- **Dark Footer**: Contrast footer section

## Typography

- **Headings**: Inter (sans-serif) - clean and modern
- **Body**: Spectral (serif) - optimized for reading

## Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --bg: #f0efea;          /* Warm cream background */
    --surface: #ffffff;      /* Card background */
    --accent: #b8860b;       /* Golden accent */
}
```

### Newsletter Integration

Replace the form handling in `script.js` with your newsletter provider:

- **Substack**: Use their embed code
- **ConvertKit**: Use their form action
- **Buttondown**: Use their API

## File Structure

```
53-warm-essayist/
├── index.html      # Main template
├── styles.css      # Warm earth-tone styles
├── script.js       # Newsletter & interactions
├── config.json     # Template metadata
└── README.md       # This file
```

## Best For

- Newsletter writers
- Personal essayists
- Bloggers
- Substack alternatives
- Long-form content creators
