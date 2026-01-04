# Deployment Guide - Cloudflare Pages

Complete guide to deploy your website to Cloudflare Pages.

## Prerequisites

- GitHub account
- Cloudflare account (free tier works)
- Git installed on your computer

## Step 1: Push Code to GitHub

### If you haven't initialized Git yet:

```bash
# Navigate to your project directory
cd "C:\Users\joy16\Documents\website for mine"

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: RANDOM CHEAT SELLING website"

# Add your GitHub repository as remote
git remote add origin https://github.com/Hackerjoy456/selling-website.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### If you already have Git initialized:

```bash
# Check current status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Update: Add Cloudflare Pages deployment configuration"

# Push to GitHub
git push origin main
```

**Note**: If the repository is empty on GitHub, you may need to create a README first on GitHub, then pull it before pushing.

## Step 2: Deploy to Cloudflare Pages

### Option A: Via Cloudflare Dashboard (Recommended)

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com/
   - Sign in or create a free account

2. **Navigate to Workers & Pages**
   - Click on **Workers & Pages** in the left sidebar
   - Click **Create Application**
   - Select **Pages** tab
   - Click **Connect to Git**

3. **Connect GitHub**
   - Click **Connect to GitHub**
   - Authorize Cloudflare to access your GitHub account
   - Select the repository: `Hackerjoy456/selling-website`
   - Click **Begin setup**

4. **Configure Build Settings**
   - **Project name**: `selling-website` (or your preferred name)
   - **Production branch**: `main`
   - **Framework preset**: `Vite` (or select "None" and configure manually)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave as default)
   - **Environment variables**: None required for basic setup

5. **Deploy**
   - Click **Save and Deploy**
   - Wait for the build to complete (usually 2-5 minutes)
   - Your site will be live at: `https://selling-website.pages.dev` (or similar)

### Option B: Via Wrangler CLI (Advanced)

```bash
# Install Wrangler CLI globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy to Pages
wrangler pages deploy dist --project-name=selling-website
```

## Step 3: Custom Domain Setup (Optional)

1. **In Cloudflare Pages Dashboard**
   - Go to your project
   - Click **Custom domains** tab
   - Click **Set up a custom domain**

2. **Add Your Domain**
   - Enter your domain name (e.g., `yourdomain.com`)
   - Follow the DNS configuration instructions

3. **DNS Configuration**
   - Add a CNAME record pointing to your Pages domain
   - Or use Cloudflare's automatic DNS setup

## Step 4: Automatic Deployments

Cloudflare Pages automatically deploys when you push to your main branch:

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. Cloudflare will automatically build and deploy your changes

## Troubleshooting

### Build Fails

- Check build logs in Cloudflare dashboard
- Ensure Node version is 18 or higher
- Verify `package.json` has correct build script
- Check that all dependencies are listed in `package.json`

### Routing Issues

- The `public/_redirects` file handles SPA routing
- Ensure it's included in your build output
- Check Cloudflare Pages settings for redirect rules

### Assets Not Loading

- Verify assets are in the `public` folder
- Check file paths are correct (case-sensitive)
- Ensure assets are included in the build output

## Environment Variables (If Needed)

If you need environment variables:

1. Go to Cloudflare Pages dashboard
2. Select your project
3. Go to **Settings** → **Environment variables**
4. Add your variables for Production, Preview, and Development

## Performance Optimization

Cloudflare Pages automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ DDoS protection
- ✅ Fast edge caching
- ✅ Free SSL certificates

## Support

- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Cloudflare Community: https://community.cloudflare.com/

## Your Live URL

After deployment, your site will be available at:
- **Pages URL**: `https://selling-website-<random>.pages.dev`
- **Custom Domain**: `https://yourdomain.com` (if configured)

