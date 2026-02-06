# Deployment Guide

How to deploy your personal website to the internet.

## Quick Deploy (Recommended)

The easiest way is to deploy to Vercel - it's free, fast, and automatic.

### Option 1: Deploy via GitHub + Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   # If you haven't already
   git init
   git add .
   git commit -m "Initial commit"

   # Create repo on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login (can use GitHub account)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Done!**
   - Your site is live at: `your-project.vercel.app`
   - Every git push automatically deploys updates

### Option 2: Direct Deploy to Vercel

If you don't want to use GitHub:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd your-template-folder
vercel

# Follow prompts
```

## Custom Domain

Want your site at `yourname.com` instead of `*.vercel.app`?

### Step 1: Buy a Domain

Buy from:
- [Namecheap](https://www.namecheap.com) (recommended, cheap)
- [Google Domains](https://domains.google)
- [GoDaddy](https://www.godaddy.com)

### Step 2: Add to Vercel

1. In Vercel dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `yourname.com`)
3. Vercel will show DNS records you need

### Step 3: Update DNS

**Option A: Use Vercel Nameservers (Easiest)**
1. In your domain registrar (Namecheap, etc.)
2. Change nameservers to Vercel's:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
3. Wait 24-48 hours for propagation

**Option B: Add A Records (Faster)**
1. In your domain's DNS settings
2. Add A record:
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`
3. Add CNAME record:
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`
4. Wait 5-15 minutes

### Step 4: Configure HTTPS

Vercel automatically provisions SSL certificates. Just wait a few minutes after DNS propagates.

### Step 5: Redirect www

In Vercel:
- Add both `yourname.com` and `www.yourname.com`
- Set one to redirect to the other
- Choose which you prefer (usually non-www is cleaner)

## Other Deployment Options

### Netlify

Similar to Vercel:
1. Connect GitHub repo
2. Deploy
3. Add custom domain

[netlify.com](https://www.netlify.com)

### GitHub Pages

Free hosting for static sites:

1. Create repo named `USERNAME.github.io`
2. Push your template files
3. Enable GitHub Pages in repo settings
4. Site live at `username.github.io`

**Pros:** Free, simple
**Cons:** Limited features vs Vercel

### Cloudflare Pages

1. Connect GitHub
2. Deploy
3. Fast global CDN

[pages.cloudflare.com](https://pages.cloudflare.com)

## Environment Setup

### Prerequisites

- Git installed
- GitHub account
- Vercel account (free)

### Local Development

To preview locally:

1. **Simple HTTP Server:**
   ```bash
   # Python 3
   python3 -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (install http-server first)
   npx http-server
   ```

2. **Open browser:**
   ```
   http://localhost:8000
   ```

### Live Reload (Optional)

For auto-refresh during development:

```bash
# Install live-server
npm install -g live-server

# Run
live-server
```

## Troubleshooting

### "Domain not working"

- Wait 24-48 hours for DNS to propagate
- Check DNS records are correct
- Clear browser cache
- Try incognito mode

### "Site not updating"

- Check git push succeeded
- Vercel should auto-deploy (check dashboard)
- Clear cache: Settings → Clear Site Data
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### "HTTPS not working"

- Wait a few minutes for SSL cert
- Check domain is verified in Vercel
- Try accessing via `https://` explicitly

### "Broken links/images"

- Use absolute paths: `/image.png` not `image.png`
- Or use relative paths: `./image.png`
- Check case sensitivity (important for Linux servers)

## Performance Tips

### Optimize Images

```bash
# Resize images before uploading
# Recommended max width: 1200px for hero images

# Use WebP format for better compression
# Or PNG/JPG compressed to <200KB each
```

### Enable Caching

Vercel automatically sets cache headers. For manual:

```json
// vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=86400"
        }
      ]
    }
  ]
}
```

### Lighthouse Score

Test your site:
1. Open Chrome DevTools
2. Lighthouse tab
3. Generate report
4. Fix any issues

Aim for 90+ in all categories.

## Security

### HTTPS

Always use HTTPS (Vercel does this automatically).

### Security Headers

Add to `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## Monitoring

### Analytics

Free options:
- **Vercel Analytics** - Built-in, privacy-friendly
- **Plausible** - Privacy-focused, simple
- **Google Analytics** - Full-featured

### Uptime Monitoring

- **UptimeRobot** - Free, checks if site is up
- **StatusCake** - Free tier available

## Cost

### Free Options
- Vercel (hobby plan) - FREE
- Netlify (starter plan) - FREE
- GitHub Pages - FREE
- Cloudflare Pages - FREE

### Paid (only if needed)
- Domain name: ~$10-15/year
- Vercel Pro (if you need): $20/month
- Analytics (optional): $0-10/month

**Most users stay on free tier!**

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Add custom domain (optional)
3. ✅ Test on mobile
4. ✅ Share your site!
5. ✅ Update content regularly

Questions? Check the [FAQ](FAQ.md) or open an issue on GitHub.

---

**Congrats on launching your site! 🎉**
