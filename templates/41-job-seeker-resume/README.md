# Template 41: Job Seeker Resume

ATS-friendly hire-me focused resume website with downloadable PDF functionality and professional presentation.

## Features

- **ATS-Optimized Layout**: Clean, scannable structure preferred by Applicant Tracking Systems
- **PDF Download Button**: One-click resume download functionality
- **Skills Matrix**: Visual skill bars with expertise levels
- **Experience Timeline**: Chronological work history with achievements
- **Quick Facts**: Animated statistics highlighting career impact
- **Certifications**: Professional credentials showcase
- **Contact Form**: Multi-channel contact options
- **Responsive Design**: Mobile-first approach for all devices
- **Print-Friendly**: Optimized for PDF generation via browser print

## Best For

- Job Seekers
- Career Changers
- Recent Graduates
- Professionals seeking new opportunities
- Freelancers looking for full-time roles

## Color Scheme

- Primary: `#2563eb` (Professional Blue)
- Secondary: `#64748b` (Slate Gray)
- Accent: `#10b981` (Success Green)
- Background: `#ffffff` (White)
- Text: `#1e293b` (Dark Slate)

## Fonts

- Headings: Libre Franklin (Professional, readable)
- Body: Libre Baskerville (Classic serif for credibility)

## Sections

1. **Hero** - Name, title, contact info, and download CTA
2. **Summary** - Professional summary with key achievements
3. **Experience** - Detailed work history with measurable results
4. **Education** - Academic credentials and degrees
5. **Skills** - Technical and soft skills with proficiency levels
6. **Certifications** - Professional certifications and training
7. **Contact** - Multiple contact methods and inquiry form

## Customization

### Update Personal Information

Edit the hero section in `index.html`:

```html
<h1 class="hero-title">Your Name</h1>
<p class="hero-subtitle">Your Job Title</p>
<p class="hero-tagline">Your professional tagline</p>
```

### Add Work Experience

Add new timeline items in the experience section:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <!-- Your experience details -->
    </div>
</div>
```

### Modify Skills

Update skill bars and percentages:

```html
<div class="skill-item">
    <div class="skill-info">
        <span>Skill Name</span>
        <span>Proficiency Level</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #2563eb;
    --secondary: #64748b;
    --accent: #10b981;
}
```

## Technical Details

- Pure HTML/CSS/JavaScript (no frameworks required)
- Semantic HTML5 for ATS compatibility
- Intersection Observer for scroll animations
- Animated counters for statistics
- Form validation
- Keyboard shortcuts (Alt+D for PDF, Alt+C for contact)
- Print-optimized styles
- Mobile responsive (320px and up)

## ATS Optimization Tips

1. **Use Standard Section Headings**: Stick with "Work Experience", "Education", "Skills"
2. **Avoid Graphics for Key Info**: Keep text as text, not images
3. **Include Keywords**: Match job description terminology
4. **Simple Formatting**: Avoid complex tables or columns in key sections
5. **Standard Fonts**: Professional, web-safe fonts
6. **PDF Export**: Use browser print (Ctrl/Cmd + P) to save as PDF

## PDF Generation

To create a downloadable PDF version:

1. Open the page in Chrome or Firefox
2. Press Ctrl/Cmd + P to open print dialog
3. Select "Save as PDF" as destination
4. Adjust margins and settings as needed
5. Save the PDF

Alternatively, integrate with:
- jsPDF library for client-side generation
- Server-side PDF generation with Puppeteer or similar
- Third-party services like PDFShift or DocRaptor

## Form Integration

The contact form is ready for backend integration. Popular options:

- **Formspree**: Add action URL to form tag
- **Netlify Forms**: Add `data-netlify="true"` attribute
- **EmailJS**: Client-side email sending
- **Custom API**: POST to your backend endpoint

Example with Formspree:

```html
<form action="https://formspree.io/f/your-form-id" method="POST">
    <!-- Form fields -->
</form>
```

## Keyboard Shortcuts

- `Alt + D` - Download resume PDF
- `Alt + C` - Jump to contact section

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Color contrast WCAG AA compliant

## Performance

- No external dependencies
- Optimized images recommended
- Lazy loading for heavy content
- Minimal JavaScript
- Fast initial load time

## License

MIT License - Free to use for personal and commercial projects

## Tips for Job Seekers

1. **Quantify Achievements**: Use numbers, percentages, and dollar amounts
2. **Action Verbs**: Start bullet points with strong verbs (Led, Increased, Reduced)
3. **Tailor Content**: Customize for each job application
4. **Keep It Current**: Update regularly with recent accomplishments
5. **Proofread**: Zero typos - this is your first impression
6. **Test PDF**: Ensure downloaded PDF looks perfect
7. **Mobile Check**: Many recruiters review on mobile devices
