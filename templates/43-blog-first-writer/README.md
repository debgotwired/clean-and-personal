# Template 43: Blog First Writer

Content-primary writer portfolio with article showcase, newsletter signup, and reading-optimized design for writers and bloggers.

## Features

- **Featured Articles**: Highlight best writing
- **Article Grid**: Clean post archive
- **Newsletter Signup**: Email list builder
- **Reading Time**: Estimated reading duration
- **Tag System**: Content categorization
- **About Section**: Author bio and stats
- **Reading Progress Bar**: Visual scroll indicator
- **Typography-Focused**: Optimized for long-form reading
- **Mobile Responsive**: Perfect reading experience on all devices

## Best For

- Writers & Essayists
- Bloggers
- Journalists
- Content Creators
- Thought Leaders

## Color Scheme

- Primary: `#1e293b` (Dark Slate)
- Secondary: `#64748b` (Gray)
- Accent: `#f43f5e` (Rose)
- Background: `#ffffff` (White)
- Text: `#0f172a` (Nearly Black)

## Fonts

- Headings: Merriweather (Classic serif for authority)
- Body: Georgia (Excellent readability)

## Sections

1. **Header** - Logo and navigation
2. **Hero** - Writer intro and tagline
3. **Featured** - Showcase best articles
4. **Posts** - All articles grid
5. **About** - Author bio and statistics
6. **Newsletter** - Email signup
7. **Contact** - Social links

## Customization

### Add New Posts

```html
<article class="post-card">
    <div class="post-meta">
        <span class="post-tag">Category</span>
        <span class="reading-time">X min</span>
    </div>
    <h3><a href="#">Post Title</a></h3>
    <p>Post excerpt...</p>
    <div class="post-footer">
        <time>Date</time>
    </div>
</article>
```

### Newsletter Integration

Popular services:
- **Substack**: Full platform
- **ConvertKit**: Professional email marketing
- **Mailchimp**: Classic choice
- **Buttondown**: Minimal, privacy-focused

Example integration:

```html
<form action="https://yourservice.com/subscribe" method="POST">
    <input type="email" name="email" required>
    <button type="submit">Subscribe</button>
</form>
```

## Technical Details

- Semantic HTML5
- Pure CSS (no frameworks)
- Vanilla JavaScript
- Reading progress indicator
- Smooth animations
- Optimized typography
- Fast loading

## License

MIT License - Free for personal and commercial use
