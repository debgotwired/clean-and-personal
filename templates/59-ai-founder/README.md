# 59 - AI Founder

A dark hacker aesthetic template with playful interactions: typewriter effect, custom cursor trail, and hidden Easter eggs.

## Inspiration

Based on [carsonkahn.com](https://carsonkahn.com) - a founder website that balances credibility with playfulness.

## Features

- **Typewriter Effect**: Name types out character by character
- **Custom Cursor**: Ghost trail follows your mouse (desktop only)
- **Konami Code**: Hidden Easter egg (↑↑↓↓←→←→BA)
- **Dark Theme**: Pure black background, high contrast
- **Yellow Selection**: Custom text selection color

## Interactive Elements

### Typewriter Effect

```javascript
const name = "YOUR NAME";
let i = 0;

function typeWriter() {
    if (i < name.length) {
        typedEl.textContent += name.charAt(i);
        i++;
        setTimeout(typeWriter, 44 + Math.random() * 55);
    }
}
```

### Custom Cursor

Uses canvas to draw a trailing ghost effect behind the cursor. Disabled on mobile for performance.

### Easter Egg

Enter the Konami code to reveal a hidden section and activate rainbow cursor mode.

## Customization

### Change Name

Edit in both `index.html` and `script.js`:

```javascript
const name = "YOUR NAME";
```

### Cursor Color

Edit in `script.js`:

```javascript
ctx.fillStyle = `rgba(58, 146, 197, ${p.life / 40})`; // Blue
```

### Affiliations

Replace text logos with actual images:

```html
<div class="logo-item">
    <img src="logo.png" alt="Company">
</div>
```

## File Structure

```
59-ai-founder/
├── index.html      # Main page
├── styles.css      # Dark theme styles
├── script.js       # Interactions & effects
├── config.json     # Template metadata
└── README.md       # This file
```

## Best For

- AI/tech founders
- Startup CEOs
- Tech investors
- Anyone building in AI
