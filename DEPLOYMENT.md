# Global Buying Solutions - Deployment Guide

## 🚀 Overview
This guide will walk you through deploying your website to Vercel using GitHub. The entire process takes about 10-15 minutes.

---

## Prerequisites

Before starting, you'll need:
1. **Git** installed on your computer
2. **GitHub account** (free)
3. **Vercel account** (free - sign up with GitHub)

---

## Step 1: Install Git (If Not Installed)

### Windows
1. Download Git from: https://git-scm.com/download/win
2. Run the installer with default settings
3. Open a **new** PowerShell window to verify:
   ```powershell
   git --version
   ```

---

## Step 2: Prepare Your Project

### Test Build Locally
First, ensure your project builds successfully:

```powershell
cd n:/GBS/website
npm run build
```

This will create a `dist` folder with your production files. You should see output like:
```
✓ built in 2.5s
dist/index.html                   0.36 kB
dist/assets/index-xyz.css        12.45 kB
dist/assets/index-abc.js         143.21 kB
```

> **Note**: The `dist` folder is already in `.gitignore` and won't be committed to GitHub.

---

## Step 3: Initialize Git Repository

In your project directory:

```powershell
cd n:/GBS/website

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Global Buying Solutions website"
```

---

## Step 4: Create GitHub Repository

### Option A: Using GitHub Website
1. Go to https://github.com/new
2. Repository name: `gbs-website` (or your preferred name)
3. Description: "Global Buying Solutions - Trade Infrastructure Website"
4. **Important**: Keep it **Private** (unless you want it public)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Link Local Repository to GitHub
GitHub will show you commands. Use these:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/gbs-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

---

## Step 5: Deploy to Vercel

### A. Sign Up for Vercel
1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub account

### B. Import Your Project
1. Once logged in, click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Find your `gbs-website` repository and click **"Import"**

### C. Configure Build Settings
Vercel should auto-detect Vite settings, but verify:

- **Framework Preset**: `Vite`
- **Root Directory**: `./` (leave as is)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### D. Deploy
1. Click **"Deploy"**
2. Wait 1-2 minutes for the build to complete
3. You'll get a live URL like: `https://gbs-website-xyz.vercel.app`

---

## Step 6: Configure Custom Domain (Optional)

Once deployed, you can add your own domain:

1. In your Vercel project, go to **Settings** → **Domains**
2. Enter your domain (e.g., `globalbuying.solutions`)
3. Follow Vercel's DNS instructions to point your domain

---

## Updating Your Site

After making changes to your code:

```powershell
# Navigate to project
cd n:/GBS/website

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Updated contact form styling"

# Push to GitHub
git push
```

**Vercel will automatically:**
- Detect the push to GitHub
- Build your updated code
- Deploy the new version (usually takes 1-2 minutes)

You'll get a notification in Vercel dashboard when deployment is complete.

---

## Environment Variables (If Needed Later)

If you add backend services or API keys:

1. In Vercel dashboard → **Settings** → **Environment Variables**
2. Add your variables (e.g., `VITE_API_KEY`)
3. Redeploy for changes to take effect

> **Note**: In Vite, environment variables must be prefixed with `VITE_` to be exposed to your code.

---

## Deployment Checklist

- [ ] Git installed and verified
- [ ] Project builds successfully locally (`npm run build`)
- [ ] Git repository initialized
- [ ] Code committed to local repository
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Build settings verified
- [ ] Successfully deployed
- [ ] Live URL working
- [ ] Custom domain configured (optional)

---

## Troubleshooting

### Build Fails on Vercel

**Issue**: Build succeeds locally but fails on Vercel

**Solutions**:
1. Check Node.js version compatibility
2. Ensure all dependencies are in `package.json`
3. Check build logs in Vercel dashboard for specific errors

### Images Not Loading

**Issue**: Images work locally but not in production

**Solutions**:
1. Verify images are in the `src/assets` folder
2. Ensure imports use relative paths
3. Check that images are committed to GitHub

### Contact Form Not Working

**Issue**: mailto link doesn't work as expected

**Note**: The `mailto:` protocol relies on the user's email client. This is expected behavior and doesn't require server-side configuration.

---

## Next Steps After Deployment

1. **Monitor Analytics**: Add Vercel Analytics or Google Analytics
2. **Set Up Monitoring**: Enable Vercel's Web Vitals monitoring
3. **SSL Certificate**: Vercel provides free SSL (HTTPS) automatically
4. **Performance**: Check Lighthouse scores and optimize if needed

---

## Support Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Vite Documentation**: https://vitejs.dev
- **GitHub Help**: https://docs.github.com

---

## Summary

Your deployment workflow is now:

```
Local Development ➜ Git Commit ➜ Push to GitHub ➜ Vercel Auto-Deploy ✨
```

The site will be live at your Vercel URL, with automatic deployments on every push to the `main` branch!
