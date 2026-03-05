# 61 - Friendly Blogger

A warm, personal blog template inspired by [endler.dev](https://endler.dev/). Features rotating international greetings, a light/dark theme toggle, and an author sidebar with social links.

## Preview

Open `index.html` in your browser to preview.

## Features

- **Rotating Greetings**: Header displays random greetings like "Servus", "Aloha", "Howdy", "Ciao" on each page load
- **Light/Dark Theme**: Toggle with localStorage persistence, respects system preference
- **Author Sidebar**: Sticky profile card with photo, bio, and social links
- **Blog-First Layout**: Chronological articles with dates and excerpts
- **Social Integration**: GitHub, Mastodon, X (Twitter), and RSS icons

## Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --accent: #c44d58;     /* Accent color (greeting, links) */
    --link: #2a6496;       /* Link color */
    --bg: #fafafa;         /* Background */
}
```

### Greetings

Add/remove greetings in `script.js`:

```js
const greetings = [
    'Servus', 'Aloha', 'Howdy', 'Ahoi', 'Ohai', 'Yo', 'Hey', 'Hola', 'Bonjour', 'Ciao'
];
```

### Fonts

Uses Google Fonts:
- **Outfit** - Headings and UI text
- **Merriweather** - Body text (serif for readability)
- **JetBrains Mono** - Code blocks

## Files

- `index.html` - Main page structure
- `styles.css` - Styling with light/dark themes
- `script.js` - Theme toggle and greeting rotation
- `config.json` - Template metadata
- `favicon.svg` - Simple SVG favicon

## Ideal For

- Personal tech blogs
- Developer journals
- Writers and essayists
- Anyone wanting a friendly, approachable online presence
