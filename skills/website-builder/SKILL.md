---
name: website-builder
description: Helps users build beautiful, minimal personal websites using the Clean and Personal template collection (https://github.com/debgotwired/clean-and-personal). Use when users want to create or customize a personal website, portfolio, resume site, or blog. Handles template selection, content customization, PDF/LinkedIn data import, color/layout changes, and Vercel deployment guidance.
user-invokable: true
args:
  - name: request
    description: What the user wants to build or customize (e.g., "build a portfolio for a software engineer", "dark mode developer site")
    required: false
---

# Clean and Personal - Website Builder

Build personal websites using the **Clean and Personal** template collection: 61 production-ready templates, pure HTML/CSS/JS, zero dependencies.

**Repo:** `~/clean-and-personal` (github.com/debgotwired/clean-and-personal)

## Workflow

### 1. Discovery

Ask the user (skip questions they've already answered):
- **Role:** What do you do? (engineer, designer, founder, writer, etc.)
- **Goal:** Portfolio, resume, blog, link-in-bio, landing page?
- **Aesthetic:** Light/dark? Minimal/bold? Any sites you like?
- **Content:** Do you have a LinkedIn PDF, resume, or existing site to import from?

### 2. Template Selection

> *Full catalog with sections, colors, and fonts: [references/template-catalog.md](references/template-catalog.md)*

**Quick selection by role:**

| Role | Top picks |
|---|---|
| Software Engineer | `02-developer-dark`, `22-software-engineer`, `54-craft-developer`, `59-ai-founder` |
| Founder / CEO | `01-founder`, `42-startup-founder`, `08-startup` |
| Designer (UI/UX) | `23-ui-ux-designer`, `24-product-designer`, `09-creative-portfolio` |
| Graphic Designer / Illustrator | `25-graphic-designer`, `29-illustrator`, `40-masonry-grid` |
| Writer / Blogger | `06-blog-first`, `43-blog-first-writer`, `53-warm-essayist`, `61-friendly-blogger` |
| Researcher / Academic | `55-academic-researcher`, `03-text-scholar`, `57-knowledge-base` |
| Job Seeker | `41-job-seeker-resume`, `07-resume` |
| Freelancer / Consultant | `28-freelancer`, `27-consultant`, `60-creative-director` |
| Speaker / Creator | `46-speaker`, `45-course-creator`, `47-podcast-host` |
| Investor | `56-angel-investor` |
| Community / OSS | `49-community-builder`, `50-open-source-maintainer` |
| Newsletter / Substack | `48-newsletter-writer` |
| Social / Link-in-Bio | `44-link-in-bio` |

**Quick selection by aesthetic:**

| Aesthetic | Templates |
|---|---|
| Minimal / Clean | `04-minimal-clean`, `51-signature-minimal`, `54-craft-developer` |
| Dark / Terminal | `02-developer-dark`, `59-ai-founder` |
| Bold / Expressive | `16-bold-typography`, `18-brutalist`, `13-y2k-retro`, `20-memphis-design` |
| Modern / Trendy | `11-bento-grid`, `12-glassmorphism`, `21-neumorphism` |
| Warm / Editorial | `53-warm-essayist`, `35-magazine-layout`, `52-now-page-focus` |
| Immersive / Effects | `58-scrollytelling`, `31-one-page-scroll`, `34-full-screen-slides` |
| Artistic / Hand-made | `15-hand-drawn`, `14-organic-shapes` |
| Grid / Card layouts | `36-card-grid`, `40-masonry-grid`, `11-bento-grid` |
| Swiss / Systematic | `19-swiss-style`, `37-timeline` |

Recommend 2-3 templates. Explain why each fits. Let the user choose.

### 3. Data Import

If the user provides a file (LinkedIn PDF, resume, etc.):

1. **Read** the file with the Read tool
2. **Extract** structured data:
   - Name, title, tagline
   - Work experience (company, role, dates, description)
   - Education
   - Projects (name, description, URL, tech stack)
   - Skills/tools
   - Social links
   - Writing/articles
3. **Confirm** extracted data with the user before applying
4. **Apply** to the template HTML

**Privacy:** Warn users to review for sensitive data (phone numbers, addresses) before deploying.

### 4. Setup & Customization

> *Detailed patterns: [references/customization-guide.md](references/customization-guide.md)*

**Copy template to working directory:**
```bash
cp -r ~/clean-and-personal/templates/XX-template-name/ ./my-website/
```

**Files to edit:**

| File | What to change |
|---|---|
| `index.html` | Content: name, bio, experience, projects, links |
| `styles.css` | Colors (CSS custom properties), fonts, spacing |
| `script.js` | Usually leave as-is (handles animations, interactions) |
| `config.json` | Template metadata (optional) |

**Color changes** — edit `:root` CSS custom properties:
```css
:root {
    --primary: #22c55e;
    --secondary: #16a34a;
    --background: #fafafa;
    --text: #2d3d2d;
    --accent: #16a34a;
    --border: #e5e5e5;
}
```

**Font changes** — update the Google Fonts `<link>` in `<head>` and `font-family` in CSS.

**Section changes** — add/remove/reorder HTML sections. Maintain semantic structure (`<section>`, `<article>`, proper headings).

**Conversational editing** — handle requests like:
- "Make it darker" → adjust `--background`, `--text`, etc.
- "Change the accent to blue" → update `--primary`/`--accent`
- "Add a speaking section" → clone an existing section structure, update content
- "Remove the blog section" → remove the HTML section and its nav link
- "Make the font bigger" → adjust `font-size` in CSS

### 5. Deployment

**Recommended: GitHub + Vercel (free)**

```bash
# 1. Initialize git
cd my-website
git init && git add . && git commit -m "Initial commit"

# 2. Push to GitHub
# Create repo on github.com first, then:
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# 3. Deploy on Vercel
# Go to vercel.com → Add New Project → Import repo → Deploy
# Site goes live at: your-project.vercel.app
```

**Custom domain:**
1. Buy domain (Namecheap, Google Domains, etc.)
2. In Vercel: Settings → Domains → Add domain
3. Update DNS: A record `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`
4. SSL auto-provisions

**Other free hosts:** Netlify, GitHub Pages (`USERNAME.github.io`), Cloudflare Pages.

## Guidelines

1. **Always read files before editing** — use Read tool first
2. **Preserve design integrity** — keep the template's aesthetic consistent when customizing
3. **Maintain accessibility** — semantic HTML, ARIA landmarks, color contrast, focus states, `prefers-reduced-motion`
4. **Keep it responsive** — test changes work at mobile (375px), tablet (768px), desktop (1280px)
5. **Be conversational** — offer suggestions, explain changes, iterate with the user
6. **Confirm before applying** — especially imported data and major layout changes
7. **No frameworks** — pure HTML/CSS/JS only, no React/Vue/Tailwind
8. **File size limits** — HTML <30KB, CSS <50KB, JS <20KB

## References

- **[references/template-catalog.md](references/template-catalog.md)** — Full 61-template catalog with descriptions, sections, colors, fonts
- **[references/customization-guide.md](references/customization-guide.md)** — Detailed CSS/HTML patterns, section structures, data formats
