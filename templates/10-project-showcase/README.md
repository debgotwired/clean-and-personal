# Project Showcase Template

Developer-focused card-based layout perfect for showcasing projects, open source work, and technical experiments.

## Style
- Modern card-based design
- Developer-friendly aesthetic
- Blue gradient accents
- Code-friendly typography (JetBrains Mono)
- Clean, organized layout
- GitHub-style project cards

## Features
- Filterable project grid (All, Web Apps, Dev Tools, Libraries, Experiments)
- Featured project spotlight (2-column span)
- Project cards with:
  - Icons and categories
  - Tech stack tags
  - GitHub stats (stars, forks, downloads)
  - Links to code and live demos
- Skills section with technology categories
- Hero with achievement stats
- Mobile responsive with hamburger menu
- Scroll-triggered animations
- Dark mode support
- Keyboard navigation

## Best For
- Full-stack developers
- Open source maintainers
- Indie makers
- Developer advocates
- Technical bloggers
- Startup founders (technical)
- Tool builders
- Library authors

## Sections
1. **Hero**: Bold headline with GitHub stats (projects, stars, downloads)
2. **Projects**: Filterable grid of project cards with details
3. **Skills**: Technology categories (Frontend, Backend, DevOps, Other)
4. **About**: Personal story and contact links

## Customization Guide

### Update Personal Info
Edit the hero section in `index.html`:
```html
<h1>
    Building cool stuff<br>
    <span class="gradient-text">one project at a time</span>
</h1>
<p class="hero-description">Your description...</p>
```

### Add Projects
Add new project cards to the grid:
```html
<article class="project-card" data-category="web">
    <div class="project-header">
        <div class="project-icon">🚀</div>
        <div class="project-meta">
            <span class="tag-label">Web App</span>
        </div>
    </div>
    <h3>Project Name</h3>
    <p>Project description...</p>
    <div class="tech-stack">
        <span>React</span>
        <span>Node.js</span>
    </div>
    <div class="project-stats">
        <span>⭐ 1.2k</span>
        <span>🔱 200 forks</span>
    </div>
    <div class="project-links">
        <a href="#" class="btn btn-secondary">Code</a>
        <a href="#" class="btn btn-primary">Demo →</a>
    </div>
</article>
```

### Create Featured Project
Add `featured` class to make a project span 2 columns:
```html
<article class="project-card featured" data-category="web">
    <!-- Project content -->
</article>
```

### Update Colors
Modify CSS variables in `styles.css`:
```css
:root {
    --primary: #3b82f6;      /* Main accent */
    --secondary: #8b5cf6;    /* Secondary accent */
    --accent: #10b981;       /* Success/growth color */
}
```

### Update Skills
Edit the skills grid categories:
```html
<div class="skill-category">
    <h3>Category Name</h3>
    <div class="skill-tags">
        <span>Technology 1</span>
        <span>Technology 2</span>
    </div>
</div>
```

### Add Filter Categories
To add new project categories:

1. Add filter button:
```html
<button class="tag" data-filter="your-category">Your Category</button>
```

2. Add projects with matching data-category:
```html
<article class="project-card" data-category="your-category">
```

### GitHub Integration
Update the GitHub stats fetcher in `script.js`:
```javascript
const username = 'yourusername'; // Replace with your GitHub username
updateGitHubStats(); // Uncomment to enable
```

### Customize Stats
Update hero stats with your numbers:
```html
<div class="stat">
    <span class="stat-number">50+</span>
    <span class="stat-label">Projects</span>
</div>
```

## Typography
- **Body**: Inter (sans-serif) - clean, readable
- **Code**: JetBrains Mono (monospace) - perfect for tech stack tags and code references
- Combination creates developer-friendly aesthetic

## Layout Tips
- Feature your best 1-2 projects with `featured` class
- Keep project descriptions concise (1-2 sentences)
- Use real GitHub stats for credibility
- Group skills logically by category
- Include links to both code and live demos
- Use emoji icons for visual interest (🚀 🛠️ 📚 etc.)

## GitHub Stats
The template includes optional GitHub API integration:
- Automatically fetch repository stats
- Display stars, forks, and watch counts
- Update stats dynamically
- Cache results to avoid rate limiting

See `script.js` for implementation details.

## Inspiration
Based on developer portfolio sites, GitHub profiles, and maker showcases.

## Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/clean-and-personal/tree/main/templates/10-project-showcase)

## Performance
- Lightweight: ~38KB total (HTML + CSS + JS)
- Optimized card animations
- Efficient filtering with no DOM manipulation
- Lazy loading support
- Smooth scroll behavior

## Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation for filters
- Focus states for all interactive elements
- Reduced motion support
- High contrast ratios (WCAG 2.1 AA compliant)
- Screen reader friendly

## Advanced Features (Optional)

### Copy Tech Stack
Uncomment in `script.js` to enable copying tech stacks:
```javascript
addCopyButtons(); // Line ~180
```

### Scroll Progress Indicator
Uncomment in `script.js` to add progress bar:
```javascript
addScrollProgress(); // Line ~250
```

### GitHub Stats Auto-Update
Uncomment in `script.js` to fetch real stats:
```javascript
updateGitHubStats(); // Line ~90
```

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)
