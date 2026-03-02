# 57 - Knowledge Base

A Notion-style digital garden template with sidebar navigation, colored tags, and search functionality.

## Inspiration

Based on the Notion aesthetic and digital garden concept - a place for evolving notes and ideas.

## Features

- **Sidebar Navigation**: Fixed sidebar with category filters
- **Dark Mode**: System-aware with toggle
- **Search**: Filter notes by content
- **Category Tags**: Colored tags (Notion-style)
- **Card Grid**: Responsive note layout
- **Mobile Responsive**: Collapsible sidebar

## Tag Colors

Use Notion-inspired colors:

```css
.tag-blue { background: #ddebf1; color: #0b4a6b; }
.tag-green { background: #ddedea; color: #0c4a3e; }
.tag-purple { background: #eae4f2; color: #412a5e; }
.tag-orange { background: #faebdd; color: #6b3a00; }
.tag-red { background: #fbe4e4; color: #5a0000; }
```

## Adding Notes

Edit `index.html`:

```html
<article class="note-card" data-category="essay" data-searchable="keywords here">
    <div class="note-tags">
        <span class="tag tag-blue">Essay</span>
    </div>
    <h2><a href="#">Note Title</a></h2>
    <p>Note excerpt...</p>
    <footer class="note-meta">
        <time>Feb 2026</time>
    </footer>
</article>
```

## Customization

### Categories

Edit the sidebar nav in `index.html`:

```html
<a href="#" class="nav-item" data-filter="your-category">Your Category</a>
```

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --sidebar-bg: #f7f6f3;
    --accent: #2eaadc;
}
```

## File Structure

```
57-knowledge-base/
├── index.html      # Main layout
├── styles.css      # Notion-style CSS
├── script.js       # Filter & search
├── config.json     # Template metadata
└── README.md       # This file
```

## Best For

- Digital gardens
- Personal knowledge bases
- Note collections
- Learning logs
- Resource libraries
