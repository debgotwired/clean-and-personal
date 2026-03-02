# 52 - Now Page Focus

A brutalist, anti-design personal website template with a prominent "Now" page, inspired by Derek Sivers' website (sive.rs).

## Philosophy

This template follows the principles of the [Brutalist Web Design](https://brutalist-web.design/) movement:

- **Content is readable** on all reasonable screens
- **Only hyperlinks and buttons respond** to clicks
- **Hyperlinks are underlined** and buttons look like buttons
- **The back button works** as expected
- **View source is not blocked** or obfuscated
- **No heavy frameworks** - pure HTML and CSS

## Inspiration

Based on [sive.rs](https://sive.rs), Derek Sivers' personal website, which exemplifies:

- Georgia serif for body text (20px)
- Tahoma/Verdana for headings
- Maximum width of 40em for readability
- Dark red (#800) for headings
- Blue (#20b) for links
- No CSS classes - semantic HTML only

## The /now Page

The centerpiece of this template is the "Now" page - a concept popularized by Derek Sivers. It answers the question "What are you focused on right now?"

Learn more: [nownownow.com](https://nownownow.com/about)

## Customization

### Colors

Edit the CSS directly (no variables needed for simplicity):

```css
h1, h2 { color: #800; }  /* Dark red */
a { color: #20b; }        /* Blue */
a:visited { color: #606; } /* Purple */
```

### Typography

The template uses system fonts:
- Body: Georgia (serif)
- Headings: Tahoma, Verdana (sans-serif)

No external font loading required.

## File Structure

```
52-now-page-focus/
├── index.html      # All content in one page
├── styles.css      # Simple, class-free CSS
├── script.js       # Minimal enhancements
├── config.json     # Template metadata
└── README.md       # This file
```

## Performance

This template is extremely lightweight:
- No external fonts
- No images required
- Minimal CSS (~3KB)
- Minimal JS (~1KB)
- Loads in <1 second on any connection

## Browser Support

Works in any browser that supports basic CSS. Degrades gracefully in older browsers.
