# Template 33: Side Navigation

Modern documentation-style template with fixed sidebar navigation, dark theme sidebar, and comprehensive features for technical content.

## Features

- **Fixed Sidebar**: Always-visible navigation on desktop
- **Collapsible Sections**: Expandable menu groups
- **Search Functionality**: Built-in search (ready for integration)
- **Dark Mode Toggle**: Switch between light and dark themes
- **Table of Contents**: Sticky TOC for easy page navigation
- **Responsive Drawer**: Mobile-friendly slide-out menu
- **Code Blocks**: Syntax highlighting with copy buttons
- **Info Boxes**: Styled callouts for important information
- **Breadcrumbs**: Page hierarchy navigation
- **Keyboard Shortcuts**: Cmd/Ctrl+K for search, ESC to close menu

## Best For

- Documentation Sites
- Technical Blogs
- API References
- Developer Portfolios
- Knowledge Bases
- Product Docs
- Tutorial Sites

## Color Scheme

- Primary: `#6366f1` (Indigo)
- Secondary: `#10b981` (Green)
- Sidebar: `#0f172a` (Dark Slate)
- Background: `#ffffff` (White) / `#0f172a` (Dark mode)
- Text: `#1f2937` (Gray) / `#f1f5f9` (Dark mode)

## Fonts

- Main: Inter (Clean, modern, excellent readability)
- Code: JetBrains Mono (Monospace for code blocks)

## Components

### Sidebar Navigation
```html
<div class="nav-section">
    <button class="nav-section-title" data-section="guides">
        <span>Guides</span>
        <span class="chevron">▼</span>
    </button>
    <div class="nav-section-content" data-content="guides">
        <a href="#guide-1" class="nav-item">Guide 1</a>
    </div>
</div>
```

### Info Boxes
```html
<div class="info-box">
    <div class="info-box-icon">💡</div>
    <div class="info-box-content">
        <strong>Tip:</strong> Your message here
    </div>
</div>
```

Available types: `info-box`, `warning-box`, `success-box`

### Code Blocks
```html
<div class="code-block">
    <div class="code-header">
        <span>JavaScript</span>
        <button class="copy-btn">Copy</button>
    </div>
    <pre><code>// Your code here</code></pre>
</div>
```

### Table of Contents
```html
<aside class="toc">
    <h4>On This Page</h4>
    <nav class="toc-nav">
        <a href="#section-1" class="toc-link">Section 1</a>
    </nav>
</aside>
```

## Customization

### Change Sidebar Width
```css
:root {
    --sidebar-width: 300px; /* Default is 280px */
}
```

### Customize Colors
```css
:root {
    --primary: #your-color;
    --secondary: #your-color;
    --sidebar-bg: #your-color;
}
```

### Add Dark Mode Colors
```css
[data-theme="dark"] {
    --background: #your-color;
    --surface: #your-color;
}
```

### Modify Navigation
Edit the sidebar HTML to add/remove sections:
```html
<div class="nav-section">
    <a href="#new-section" class="nav-item">
        <span class="nav-icon">🔥</span>
        <span>New Section</span>
    </a>
</div>
```

## Features Guide

### Search
The search input is ready for integration. Connect it to your search backend:
```javascript
searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    // Implement your search logic
});
```

### Dark Mode
Theme preference is saved to localStorage and persists across sessions.

### Copy Code
All code blocks include copy buttons that automatically copy code to clipboard.

### Keyboard Shortcuts
- `Cmd/Ctrl + K`: Focus search
- `Escape`: Close mobile menu

## Mobile Behavior

- Sidebar collapses to off-canvas menu
- Hamburger menu in top bar
- Full-screen overlay when menu is open
- Swipe-friendly navigation

## Technical Details

- **Pure Vanilla JavaScript**: No frameworks
- **CSS Grid Layout**: Modern, flexible layout
- **Sticky Positioning**: TOC and top bar remain visible
- **LocalStorage**: Theme preference persistence
- **Intersection Observer**: Could be added for scroll spy
- **Semantic HTML5**: Proper document structure

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- **Lightweight**: ~20KB total (gzipped)
- **Fast Rendering**: Optimized CSS
- **Smooth Animations**: 60fps transitions
- **No Dependencies**: Pure HTML/CSS/JS

## Accessibility

- Semantic HTML structure
- ARIA labels for controls
- Keyboard navigation support
- Focus management
- Screen reader friendly

## Best Practices

1. **Content Structure**: Use proper heading hierarchy (h1 > h2 > h3)
2. **Code Examples**: Always provide language labels
3. **Navigation**: Keep sections organized and logical
4. **Search**: Implement server-side search for large sites
5. **Performance**: Lazy load images and heavy content

## Integration Tips

### Adding Syntax Highlighting
Integrate with Prism.js or Highlight.js:
```html
<link rel="stylesheet" href="prism.css">
<script src="prism.js"></script>
```

### Adding Search
Integrate with Algolia, ElasticSearch, or Lunr.js:
```javascript
// Example with Lunr.js
const idx = lunr(function () {
    this.field('title')
    this.field('content')
    // Add documents
});
```

### Analytics
Add event tracking for navigation:
```javascript
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Track navigation
        analytics.track('Navigation Click', {
            section: item.textContent
        });
    });
});
```

## License

MIT License - Free to use for personal and commercial projects
