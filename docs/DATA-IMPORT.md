# Data Import Guide

How to import your information from various sources into your personal website.

## Supported Sources

- LinkedIn PDFs
- Resume/CV PDFs
- Twitter/X profiles
- Substack articles
- GitHub profile
- Plain text documents
- Any PDF with relevant information

## Using Claude for Import

The easiest way is to use the Claude skill:

1. Start Claude Code in your project directory
2. Upload your document (drag and drop PDF into Claude)
3. Claude will:
   - Read and parse the document
   - Extract relevant information (name, title, experience, etc.)
   - Show you what it found
   - Ask for confirmation
   - Update your HTML automatically

### Example Session

```
You: I want to build a site with my LinkedIn info

[Upload LinkedIn PDF]

Claude: I extracted:
- Name: John Doe
- Title: Senior Product Manager at Google
- Experience:
  * Google - Senior PM (2022-present)
  * Meta - Product Manager (2020-2022)
  * Startup Inc - Associate PM (2018-2020)
- Education: MIT, Computer Science

Should I create your site using the Founder template?

You: Yes, use template 01

Claude: [Creates site with your information]
Done! Your site is ready at ./my-website/
```

## Manual Import

If you prefer to do it manually:

### From LinkedIn PDF

1. Open your LinkedIn PDF
2. Copy relevant sections
3. Update `index.html`:
   - Name → `<h1 class="name">Your Name</h1>`
   - Title → `<p class="tagline">Your Title</p>`
   - Experience → Add `<div class="job">` entries
   - Education → Add to bio section

### From Resume

1. Extract:
   - Contact info → Update meta tags and links
   - Work history → Add to experience section
   - Projects → Add to projects section
   - Skills → Add tech stack tags

### From Twitter Profile

1. Get your bio and links
2. Update:
   - Tagline with your Twitter bio
   - Add Twitter link to social links
   - Optional: Pull in recent tweets as "writing"

### From Substack

1. Export your article list
2. Add to writing section:
```html
<li>
    <a href="your-article-url">Article Title</a>
    <span class="date">2026-01-15</span>
</li>
```

## PDF Parsing Tips

### What Claude Can Extract

- ✅ **Text content** - Names, titles, descriptions
- ✅ **Dates** - Employment dates, education years
- ✅ **URLs** - LinkedIn, GitHub, personal sites
- ✅ **Lists** - Skills, achievements, projects
- ✅ **Structured data** - Work history, education

### What Doesn't Work Well

- ❌ Complex formatting - Tables with merged cells
- ❌ Images - Profile pictures (upload separately)
- ❌ Scanned documents - Need to be text-based PDFs

### Best Practices

1. **Use text-based PDFs** - Not scanned images
2. **Clean data first** - Remove irrelevant sections from PDF
3. **Verify extracted data** - Always review before applying
4. **Update incrementally** - Start with basic info, then add details

## Data Structures

### Work Experience Format

```json
{
  "title": "Senior Engineer",
  "company": "Google",
  "dates": "2022 - Present",
  "description": "Led development of X feature..."
}
```

Becomes:

```html
<div class="job">
    <div class="job-header">
        <h3>Senior Engineer</h3>
        <span class="date">2022 - Present</span>
    </div>
    <p class="company">Google</p>
    <p>Led development of X feature...</p>
</div>
```

### Projects Format

```json
{
  "name": "Project Name",
  "description": "What it does",
  "url": "https://github.com/you/project",
  "tech": ["React", "Node.js"]
}
```

Becomes:

```html
<div class="project">
    <h3>
        <span class="folder-icon">📁</span>
        Project Name
        <a href="https://github.com/you/project" class="external-link">↗</a>
    </h3>
    <p>What it does</p>
    <div class="tech-stack">
        <span>React</span>
        <span>Node.js</span>
    </div>
</div>
```

## Privacy & Security

- **Review before publishing** - PDFs might contain private info
- **Remove sensitive data** - Phone numbers, addresses, etc.
- **Use professional email** - Not personal/private email
- **Check links** - Ensure all links go to public profiles

## Troubleshooting

### Claude can't read my PDF
- Make sure it's a text-based PDF, not a scanned image
- Try a different PDF export option
- Copy/paste text manually as fallback

### Formatting is messy
- PDFs don't always parse perfectly
- Review and clean up extracted data
- Use Claude to reformat: "Clean up the formatting of this text"

### Missing information
- Claude only extracts what's clearly visible
- Add missing info manually
- Update incrementally

## Next Steps

After importing your data:

1. **Review** - Check all information is correct
2. **Customize** - Adjust colors, fonts, layout
3. **Test** - View in browser, test mobile
4. **Deploy** - Push to GitHub and Vercel

See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment guide.
