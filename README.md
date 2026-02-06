# Clean and Personal

**Open source personal website builder with 10 clean, text-based templates.**

Build your personal website in minutes with Claude's help. No coding required (but you can customize everything if you want).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/clean-and-personal)

## ✨ Features

- 🎨 **10 Beautiful Templates** - From minimal to creative, light to dark
- 🤖 **Claude-Powered** - Customize conversationally: "make it blue", "add a contact form"
- 📄 **PDF Import** - Extract info from LinkedIn, resumes, Twitter automatically
- 🚀 **One-Click Deploy** - Free hosting on Vercel
- 💯 **No Build Tools** - Pure HTML/CSS/JS, works everywhere
- 📱 **Fully Responsive** - Looks great on all devices
- ⚡ **Fast & Clean** - Minimal, optimized, beautiful

## 🎯 Perfect For

- Founders & Entrepreneurs
- Software Engineers & Developers
- Designers & Creatives
- Product Managers
- Researchers & Writers
- Anyone who needs a clean personal site

## 🚀 Quick Start

### Option 1: Use Claude (Easiest)

1. **Fork this repo**
   ```bash
   git clone https://github.com/YOUR_USERNAME/clean-and-personal.git
   cd clean-and-personal
   ```

2. **Start Claude Code**
   ```bash
   claude
   ```

3. **Use the skill**
   ```
   /website-builder
   ```

4. **Tell Claude what you want**
   ```
   I'm a software engineer, want a dark mode portfolio
   ```

5. **Upload your data** (optional)
   - Drag and drop your LinkedIn PDF
   - Or resume
   - Or just type your info

6. **Claude builds it for you!**
   - Picks the right template
   - Customizes with your info
   - Helps you deploy

### Option 2: Manual Setup

1. **Choose a template**
   ```bash
   cd templates/01-founder  # or whichever you like
   ```

2. **Edit index.html**
   - Update your name, bio, links
   - Add your work experience
   - Customize sections

3. **Customize styles.css** (optional)
   - Change colors
   - Modify fonts
   - Adjust layout

4. **Deploy**
   - See [Deployment Guide](docs/DEPLOYMENT.md)

## 📚 Templates

### 1. Founder
**Style:** Professional, light green gradient
**Best for:** Founders, entrepreneurs, startup operators
**Example:** [debmukherjee.com](https://debmukherjee.com)
[Preview](templates/01-founder/) | [Demo](https://debmukherjee.com)

### 2. Developer Dark Mode
**Style:** Terminal aesthetic, neon green on black
**Best for:** Engineers, technical founders
**Inspiration:** [fareedmosavat.com](http://fareedmosavat.com/)
[Preview](templates/02-developer-dark/)

### 3. Text Scholar
**Style:** Ultra-minimalist, long-form reading
**Best for:** Researchers, writers, academics
**Inspiration:** [gwern.net](https://gwern.net)
[Preview](templates/03-text-scholar/)

### 4. Minimal Clean
**Style:** Markdown-style, simple and clean
**Best for:** Designers, minimalists
**Inspiration:** [paco.me](https://paco.me)
[Preview](templates/04-minimal-clean/)

### 5. Playful Developer
**Style:** Colorful accents, fun and approachable
**Best for:** Developer advocates, educators
**Inspiration:** [cassidoo.co](https://cassidoo.co)
[Preview](templates/05-playful-developer/)

### 6. Blog-First
**Style:** Content-focused with essays prominent
**Best for:** Technical writers, thought leaders
**Inspiration:** [swyx.io](https://www.swyx.io/)
[Preview](templates/06-blog-first/)

### 7. Resume/CV
**Style:** Traditional one-page layout
**Best for:** Job seekers, freelancers
[Preview](templates/07-resume/)

### 8. Startup
**Style:** Business-focused, achievement-oriented
**Best for:** Startup founders, entrepreneurs
[Preview](templates/08-startup/)

### 9. Creative Portfolio
**Style:** Artistic, photography/design showcase
**Best for:** Designers, photographers, artists
[Preview](templates/09-creative-portfolio/)

### 10. Project Showcase
**Style:** Card/grid layout for projects
**Best for:** Product managers, builders
[Preview](templates/10-project-showcase/)

See [docs/TEMPLATES.md](docs/TEMPLATES.md) for detailed descriptions.

## 🤖 Claude Skill

This project includes a Claude Code skill that makes customization conversational:

```bash
# Load the skill
/website-builder

# Then talk naturally:
"I want a dark mode site for developers"
"Change the green to blue"
"Add a projects section"
"Make the font bigger"
"Import my LinkedIn PDF"
```

The skill can:
- ✅ Help you choose templates
- ✅ Parse PDFs and extract information
- ✅ Make design changes conversationally
- ✅ Add/remove/modify sections
- ✅ Help with deployment
- ✅ Answer questions about customization

See [skills/website-builder.md](skills/website-builder.md) for details.

## 📄 Import Your Data

Claude can automatically import from:

- **LinkedIn PDFs** - Work history, education, skills
- **Resume/CV** - All professional information
- **Twitter/X** - Bio, links, recent posts
- **Substack** - Writing samples, articles
- **GitHub** - Projects, bio, activity
- **Any PDF** - Just upload and Claude extracts what it can

See [docs/DATA-IMPORT.md](docs/DATA-IMPORT.md) for guide.

## 🎨 Customization

### Colors

Each template uses CSS variables for easy customization:

```css
:root {
    --primary: #22c55e;
    --background: #fafafa;
    --text: #2d3d2d;
}
```

Or ask Claude: "Make the primary color blue"

### Fonts

All templates use Google Fonts. Change in `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
```

### Layout

Each template is fully customizable:
- Add/remove sections
- Change order
- Modify spacing
- Adjust responsive breakpoints

Claude can help with all of this conversationally!

## 🚢 Deployment

Deploy for **FREE** to Vercel:

1. Push to GitHub
2. Import to Vercel
3. Deploy (automatic)

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for full guide including:
- Custom domains
- HTTPS setup
- Performance optimization
- Analytics

## 📖 Documentation

- [Template Overview](docs/TEMPLATES.md) - All 10 templates explained
- [Data Import Guide](docs/DATA-IMPORT.md) - How to import PDFs, LinkedIn, etc.
- [Deployment Guide](docs/DEPLOYMENT.md) - Step-by-step deployment
- [Claude Skill](skills/website-builder.md) - How to use Claude for customization

## 🤝 Contributing

This is an open source project! Contributions welcome:

- **New templates** - Add more designs
- **Features** - Improve existing templates
- **Documentation** - Help others get started
- **Bug fixes** - Report and fix issues

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 💡 Examples

Sites built with Clean and Personal:

- [debmukherjee.com](https://debmukherjee.com) - Founder template
- Add yours! Submit a PR

## 🛠 Tech Stack

- Pure HTML5, CSS3, JavaScript
- No framework required
- No build tools needed
- Works anywhere (Vercel, Netlify, GitHub Pages)
- Mobile-first responsive design

## 📜 License

MIT License - use for personal or commercial projects, totally free.

See [LICENSE](LICENSE) for details.

## ⭐ Star & Fork

If you find this useful, please star the repo and share with friends!

Fork it to make it your own.

## 🙏 Credits

Created by [Deb Mukherjee](https://debmukherjee.com)

Inspired by the best personal websites on the internet:
- [fareedmosavat.com](http://fareedmosavat.com/) - Dark mode terminal aesthetic
- [gwern.net](https://gwern.net) - Minimalist text-focused
- [paco.me](https://paco.me) - Clean markdown style
- [cassidoo.co](https://cassidoo.co) - Playful and approachable
- [swyx.io](https://www.swyx.io/) - Blog-first layout

And many more listed in [docs/TEMPLATES.md](docs/TEMPLATES.md)

## 📧 Contact

Questions? Found a bug? Want to contribute?

- Open an [Issue](https://github.com/YOUR_USERNAME/clean-and-personal/issues)
- Submit a [Pull Request](https://github.com/YOUR_USERNAME/clean-and-personal/pulls)
- Email: [your@email.com](mailto:your@email.com)

---

**Built with ♥ using Claude**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/clean-and-personal)
