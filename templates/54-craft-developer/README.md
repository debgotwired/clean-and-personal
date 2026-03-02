# 54 - Craft Developer

An ultra-minimalist developer portfolio template focused on craft, philosophy, and attention to detail.

## Inspiration

Based on [paco.me](https://paco.me) (Paco Coursey) - a developer known for creating polished tools like cmdk, next-themes, and Sonner.

## Philosophy

This template embodies the craft mindset:

- **Less is more**: No unnecessary decoration
- **Details matter**: Subtle typography and spacing
- **Philosophy section**: Share what drives you
- **Quality over quantity**: Highlight your best work

## Features

- **Underscore Dividers**: Clean section separation
- **Italic Emphasis**: Newsreader serif for emphasis
- **Now Section**: Share your current focus
- **Project List**: Showcase open source work
- **Minimal JavaScript**: Just essential interactions

## Typography

- **Body**: Inter (15px) - clean and readable
- **Emphasis**: Newsreader (serif, italic) - adds warmth

## Customization

### Colors

```css
:root {
    --bg: #fafafa;
    --text: #171717;
    --text-light: #737373;
    --accent: #0066cc;
}
```

### Adding Projects

Edit the project list in `index.html`:

```html
<li>
    <a href="https://github.com/you/project">
        <span class="project-name">Project Name</span>
        <span class="project-desc">One-line description.</span>
    </a>
</li>
```

## File Structure

```
54-craft-developer/
├── index.html      # Single-page layout
├── styles.css      # Minimal styles
├── script.js       # Subtle interactions
├── config.json     # Template metadata
└── README.md       # This file
```

## Best For

- Open source developers
- Design engineers
- Frontend developers
- Anyone who values craft
