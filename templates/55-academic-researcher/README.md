# 55 - Academic Researcher

A professional academic website template with sections for papers, lectures, and research code.

## Inspiration

Based on [benjaminmoll.com](https://benjaminmoll.com) - a clean, professional academic website that showcases research effectively.

## Features

- **Papers Section**: List publications with PDF, slides, and code links
- **Lectures Section**: Share course materials and talks
- **Codes Section**: Link to research code repositories
- **CV Download**: Prominent link to download full CV
- **Google Scholar Link**: Direct link to your Google Scholar profile
- **Mobile Responsive**: Works on all devices

## Customization

### Colors

```css
:root {
    --primary: #527CB0;      /* Professional blue */
    --primary-hover: #14AFF4; /* Lighter blue for hover */
}
```

### Adding Papers

Edit the paper list in `index.html`:

```html
<li>
    <span class="paper-title">Your Paper Title</span>
    <span class="paper-meta">Journal Name, Year</span>
    <div class="paper-links">
        <a href="paper.pdf">PDF</a>
        <a href="slides.pdf">Slides</a>
    </div>
</li>
```

### CV Download

Place your CV PDF in an `assets` folder and update the link:

```html
<a href="assets/CV.pdf" class="cv-download">download full CV (PDF)</a>
```

## File Structure

```
55-academic-researcher/
├── index.html      # Main page
├── styles.css      # Professional styles
├── script.js       # Navigation interactions
├── config.json     # Template metadata
├── README.md       # This file
└── assets/
    └── CV.pdf      # Your CV
```

## Best For

- Professors
- PhD students
- Research scientists
- Economists
- Anyone in academia
