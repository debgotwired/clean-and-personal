# 51 - Signature Minimal

A minimalist personal website template featuring a handwritten signature element and dark mode support.

## Inspiration

Based on the design aesthetic of [wlovedaypowell.com](https://www.wlovedaypowell.com/) - clean, narrative-driven, with a personal touch through the signature element.

## Features

- **Dark Mode Toggle**: Respects system preference, persists user choice
- **Animated Signature**: SVG signature with draw-on animation
- **Scroll Animations**: Subtle fade-in effects on scroll
- **Responsive Design**: Mobile-first, works on all devices
- **Accessible**: Reduced motion support, focus indicators

## Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --bg: #ffffff;
    --text: #1a1a1a;
    --text-light: #6b7280;
}

[data-theme="dark"] {
    --bg: #1a1a1a;
    --text: #f5f5f5;
}
```

### Signature

Replace the SVG path in `index.html` with your own signature. You can:
1. Draw your signature and convert to SVG
2. Use a tool like [Signature Maker](https://signature-maker.net/)
3. Commission a custom signature SVG

### Profile Image

Replace `assets/profile.jpg` with your photo.

## File Structure

```
51-signature-minimal/
├── index.html      # Main HTML
├── styles.css      # Styles with dark mode
├── script.js       # Theme toggle & animations
├── config.json     # Template metadata
├── README.md       # This file
└── assets/
    └── profile.jpg # Your photo
```

## Browser Support

- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Graceful degradation for older browsers
