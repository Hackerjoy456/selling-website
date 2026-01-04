# GitHub & Cloudflare Pages Setup Guide

## Quick Setup Steps

### 1. Initialize Git (if not done)

```bash
git init
git branch -M main
```

### 2. Add Remote Repository

```bash
git remote add origin https://github.com/Hackerjoy456/selling-website.git
```

### 3. Commit and Push

```bash
git add .
git commit -m "Initial commit: RANDOM CHEAT SELLING website with Cloudflare Pages support"
git push -u origin main
```

**Note**: If the repository is empty on GitHub, you may need to:
1. Create a README.md file on GitHub first
2. Then pull it: `git pull origin main --allow-unrelated-histories`
3. Then push your code

### 4. Deploy to Cloudflare Pages

1. Go to https://dash.cloudflare.com/
2. Navigate to **Workers & Pages** → **Create Application** → **Pages** → **Connect to Git**
3. Select your GitHub account and repository: `Hackerjoy456/selling-website`
4. Configure:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**

Your site will be live in 2-5 minutes!

## Files Created for Deployment

- ✅ `.gitignore` - Excludes node_modules, dist, etc.
- ✅ `public/_redirects` - SPA routing for Cloudflare Pages
- ✅ `README.md` - Updated with deployment instructions
- ✅ `DEPLOYMENT.md` - Complete deployment guide
- ✅ `.cloudflare/README.md` - Cloudflare-specific notes

## Your Live URL

After deployment, your site will be at:
- `https://selling-website-<random>.pages.dev`

You can add a custom domain later in Cloudflare Pages settings.

