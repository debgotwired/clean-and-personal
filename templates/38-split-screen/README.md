# Template 38: Split Screen

Modern dual-pane split screen design with fixed left panel and scrollable right content, perfect for personal portfolios and profile sites.

## Features

- **50/50 Split Layout**: Fixed left sidebar, scrollable right content
- **Fixed Left Panel**: Profile, navigation, and social links stay visible
- **Scrollable Right Content**: Main content scrolls independently
- **Contrasting Themes**: Dark left panel, light right panel
- **Smooth Navigation**: Active link tracking on scroll
- **Responsive Stacking**: Converts to mobile menu on small screens
- **Parallax Effect**: Subtle parallax on desktop
- **Keyboard Navigation**: Page Up/Down support

## Best For

- Personal Portfolios
- Developer Profiles
- Designer Showcases
- Resume Sites
- About Me Pages
- Minimal Portfolios
- Professional Profiles

## Color Scheme

- Primary: `#6366f1` (Indigo)
- Secondary: `#f43f5e` (Rose)
- Left Background: `#0f172a` (Dark Blue-Gray)
- Right Background: `#ffffff` (White)
- Text: `#1f2937` (Dark Gray)

## Fonts

- Headings: Space Grotesk (Modern, geometric)
- Body: Inter (Clean, readable)

## Sections

### Left Panel (Fixed)
- Profile Image
- Name & Title
- Navigation Menu
- Social Links
- Availability Status

### Right Panel (Scrollable)
1. **About** - Introduction and quote
2. **Experience** - Work history with tags
3. **Projects** - Featured project cards
4. **Skills** - Categorized skill lists
5. **Contact** - Contact form

## Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #6366f1;
    --secondary: #f43f5e;
    --left-bg: #0f172a;
    --right-bg: #ffffff;
}
```

### Update Profile Information

Edit the left panel in `index.html`:

```html
<h1 class="name">Your Name</h1>
<p class="title">Your Title</p>
```

### Add Navigation Links

Add new links to the side navigation:

```html
<a href="#new-section" class="nav-link">New Section</a>
```

Then add corresponding section in right panel:

```html
<section id="new-section" class="content-section">
    <h2 class="section-title">Section Title</h2>
    <!-- Content -->
</section>
```

### Customize Social Links

Update social links with your profiles:

```html
<a href="https://github.com/yourusername" class="social-link">
    <span class="social-icon">💻</span>
</a>
```

### Add Experience Entries

```html
<article class="experience-item">
    <div class="exp-header">
        <div>
            <h3 class="exp-title">Job Title</h3>
            <p class="exp-company">Company Name • Location</p>
        </div>
        <span class="exp-date">Start - End</span>
    </div>
    <p class="exp-description">Description...</p>
    <div class="exp-tags">
        <span class="tag">Skill 1</span>
        <span class="tag">Skill 2</span>
    </div>
</article>
```

### Add Project Cards

```html
<article class="project-card">
    <div class="project-image">
        <div class="project-placeholder" style="background: linear-gradient(135deg, #6366f1, #8b5cf6);">
            <span class="project-icon">🎨</span>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Description...</p>
        <div class="project-links">
            <a href="#" class="project-link">View Project →</a>
        </div>
    </div>
</article>
```

## Technical Details

- Pure HTML/CSS/JavaScript (no frameworks)
- CSS Flexbox for split layout
- Fixed positioning for left panel
- Intersection Observer for scroll animations
- Smooth scroll behavior
- Mobile-first responsive design
- Hamburger menu for mobile
- Form validation

## JavaScript Features

- **Mobile Menu Toggle**: Hamburger menu with animation
- **Active Nav Tracking**: Updates active link based on scroll position
- **Smooth Scrolling**: Animated scrolling to sections
- **Section Animations**: Fade in as sections enter viewport
- **Parallax Effect**: Subtle movement on left panel (desktop only)
- **Form Handling**: Contact form submission
- **Keyboard Navigation**: Page Up/Down to navigate sections
- **Hover Enhancements**: Additional effects on interactive elements

## Responsive Breakpoints

- **Desktop** (> 1024px): 40/60 split layout
- **Tablet** (768-1024px): 45/55 split layout
- **Mobile** (≤ 768px): Stacked layout with slide-in menu

## Mobile Behavior

On mobile devices:
- Left panel slides in from the left
- Hamburger menu button in top-right
- Full-width right panel
- Navigation closes when clicking outside
- Touch-friendly interactions

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility

- Semantic HTML structure
- ARIA labels for navigation
- Keyboard navigation support
- Focus states on all interactive elements
- Sufficient color contrast
- Screen reader friendly
- Alt text ready for images

## Usage Tips

1. **Profile Image**: Replace avatar placeholder with actual photo
2. **Navigation**: Keep 4-6 sections for optimal UX
3. **Content Length**: Balance sections for smooth scrolling
4. **Social Links**: Add only relevant platforms
5. **Status Badge**: Update availability status as needed
6. **Mobile Testing**: Always test on actual devices
7. **Content Hierarchy**: Most important info should be early

## Performance Tips

- Fixed left panel reduces repaints
- CSS animations use transform/opacity (GPU-accelerated)
- Intersection Observer for efficient scroll detection
- Lazy loading for section content
- Minimal JavaScript dependencies

## Advanced Customization

### Add Background Image to Left Panel

```css
.left-panel {
    background-image: linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)),
                      url('your-image.jpg');
    background-size: cover;
    background-position: center;
}
```

### Change Split Ratio

Adjust the width percentages in CSS:

```css
.left-panel {
    width: 35%; /* Change from 40% */
}

.right-panel {
    margin-left: 35%;
    width: 65%; /* Change from 60% */
}
```

### Add Scroll Progress Bar

Add this HTML before closing body tag:

```html
<div class="scroll-progress" id="scroll-progress"></div>
```

Add this CSS:

```css
.scroll-progress {
    position: fixed;
    top: 0;
    left: 40%;
    height: 4px;
    background: var(--primary);
    width: 0%;
    z-index: 1001;
    transition: width 0.1s;
}
```

Add this JavaScript:

```javascript
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-progress').style.width = scrolled + '%';
});
```

## Troubleshooting

**Issue**: Left panel not staying fixed
- Check CSS `position: fixed` is applied
- Ensure `z-index` is higher than content

**Issue**: Mobile menu not appearing
- Verify `mobile-menu-toggle` button is visible
- Check JavaScript is loaded correctly

**Issue**: Smooth scroll not working
- Ensure `scroll-behavior: smooth` is in CSS
- Check for conflicting JavaScript

## License

MIT License - Free to use for personal and commercial projects
