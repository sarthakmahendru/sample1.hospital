================================================================
STEP-BY-STEP DEPLOYMENT GUIDE
================================================================

Choose ONE of the deployment options below and follow the steps carefully.

================================================================
OPTION 1: VERCEL (⭐ RECOMMENDED - EASIEST)
================================================================

⏱ Time Required: 5 minutes
💰 Cost: FREE
🚀 Speed: Fastest
📊 Performance: Excellent

STEP 1: Push Code to GitHub
---
1. Go to https://github.com and create an account (if you don't have one)

2. Create a new repository:
   - Click "+" icon (top right)
   - Click "New repository"
   - Name: "medicare-hospital-website"
   - Make it PUBLIC
   - Click "Create repository"

3. In your terminal, go to your project folder:
   ```bash
   cd medicare-hospital-website
   ```

4. Initialize and push code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Hospital website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/medicare-hospital-website.git
   git push -u origin main
   ```

STEP 2: Deploy on Vercel
---
1. Go to https://vercel.com

2. Click "Sign Up" and select "Continue with GitHub"

3. Authorize Vercel to access your GitHub

4. After signing in, you'll see "New Project" button
   - Click it
   - Find your "medicare-hospital-website" repository
   - Click "Import"

5. Vercel auto-detects your setup (React + Vite)
   - Framework: React (auto-selected)
   - Build Command: npm run build (auto-filled)
   - Output Directory: dist (auto-filled)
   - Click "Deploy"

6. Wait 1-2 minutes for deployment
   - You'll see a success message
   - Your site is now LIVE!

7. Your website is available at:
   - https://[random-name].vercel.app
   - Or connect your custom domain (see below)

STEP 3: Add Custom Domain (Optional)
---
1. In Vercel dashboard, click your project

2. Go to "Settings" → "Domains"

3. Add your domain:
   - Click "Add Domain"
   - Enter your domain (e.g., medicarehospital.com)
   - Click "Add"

4. Follow DNS configuration instructions provided

5. Wait 24-48 hours for DNS to propagate

DONE! 🎉

---

================================================================
OPTION 2: GITHUB PAGES (Free, Simple)
================================================================

⏱ Time Required: 15 minutes
💰 Cost: FREE
🚀 Speed: Good
📊 Performance: Good

STEP 1: Modify vite.config.js
---
Open your `vite.config.js` and add `base` configuration:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/medicare-hospital-website/',  // Add this line
  plugins: [react()],
  server: { port: 3000 },
  build: { outDir: 'dist' }
})
```

⚠️ Important: Replace "medicare-hospital-website" with your EXACT repository name

STEP 2: Push Code to GitHub
---
1. Create GitHub account and repository (see Vercel Option - Step 1)

2. In terminal:
   ```bash
   cd medicare-hospital-website
   git init
   git add .
   git commit -m "Hospital website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/medicare-hospital-website.git
   git push -u origin main
   ```

STEP 3: Install gh-pages
---
```bash
npm install --save-dev gh-pages
```

STEP 4: Update package.json
---
Add deployment commands to "scripts" section:

```json
{
  "name": "medicare-hospital-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  ...
}
```

STEP 5: Deploy
---
```bash
npm run deploy
```

Wait 1-2 minutes, then visit:
https://YOUR-USERNAME.github.io/medicare-hospital-website

STEP 6: Enable GitHub Pages
---
1. Go to your GitHub repository
2. Click "Settings"
3. Click "Pages" (left sidebar)
4. Check if it shows:
   - Branch: gh-pages
   - Folder: / (root)
5. Save settings

DONE! 🎉

---

================================================================
OPTION 3: NETLIFY (Free, Easy)
================================================================

⏱ Time Required: 10 minutes
💰 Cost: FREE
🚀 Speed: Very Good
📊 Performance: Excellent

STEP 1: Push Code to GitHub
---
Follow GitHub steps from OPTION 1 or 2

STEP 2: Sign Up on Netlify
---
1. Go to https://app.netlify.com

2. Click "Sign up" and choose "GitHub"

3. Authorize Netlify to access GitHub

STEP 3: Create New Site
---
1. Click "New site from Git"

2. Select GitHub and authorize

3. Choose "medicare-hospital-website" repository

4. Configure build settings:
   - Build command: npm run build
   - Publish directory: dist

5. Click "Deploy site"

6. Wait 2-3 minutes for deployment

7. Your site is live at:
   https://[random-name].netlify.app

STEP 4: Connect Custom Domain (Optional)
---
1. In Netlify dashboard, go to "Domain settings"

2. Click "Add custom domain"

3. Enter your domain

4. Follow DNS instructions

DONE! 🎉

---

================================================================
OPTION 4: FIREBASE HOSTING (Google's Platform)
================================================================

⏱ Time Required: 15 minutes
💰 Cost: FREE
🚀 Speed: Very Good
📊 Performance: Excellent

STEP 1: Install Firebase CLI
---
```bash
npm install -g firebase-tools
```

STEP 2: Create Firebase Project
---
1. Go to https://console.firebase.google.com

2. Click "Create a project"

3. Name it "medicare-hospital"

4. Click through the setup (accept all defaults)

STEP 3: Initialize Firebase in Your Project
---
```bash
cd medicare-hospital-website
firebase login
firebase init hosting
```

Questions during init:
- Select your Firebase project
- Public directory: dist
- Single page app? Yes
- Overwrite dist/index.html? No

STEP 4: Build and Deploy
---
```bash
npm run build
firebase deploy
```

Your site is live at:
https://medicare-hospital.web.app

DONE! 🎉

---

================================================================
TROUBLESHOOTING DEPLOYMENT
================================================================

❌ ISSUE: "404 Not Found" error
✅ SOLUTION:
   - For GitHub Pages: Check `base` in vite.config.js matches repo name
   - For others: Check dist folder exists and has index.html
   - Run `npm run build` again and redeploy

❌ ISSUE: "Permission denied" on GitHub
✅ SOLUTION:
   - Create SSH key: ssh-keygen -t ed25519
   - Add to GitHub: Settings → SSH Keys → New SSH key
   - Use SSH URL instead of HTTPS

❌ ISSUE: Site shows blank page
✅ SOLUTION:
   - Open browser console (F12)
   - Check for errors
   - Verify images loading properly
   - Clear browser cache (Ctrl+Shift+Delete)

❌ ISSUE: Styles not loading
✅ SOLUTION:
   - Check `base` path in vite.config.js
   - Clear browser cache
   - Redeploy the site

❌ ISSUE: Can't find my deployment
✅ SOLUTION:
   - Check platform's deployment logs
   - Verify build completed successfully
   - Check site URL is correct
   - Wait 5 minutes for caching

---

================================================================
UPDATING YOUR WEBSITE AFTER DEPLOYMENT
================================================================

USING VERCEL (Easiest):
---
1. Make changes in your code
2. Save and commit:
   ```bash
   git add .
   git commit -m "Updated content"
   git push
   ```
3. Vercel auto-deploys in 1-2 minutes!
4. Changes go live automatically

USING GITHUB PAGES:
---
1. Make changes to your code
2. Commit and push:
   ```bash
   git add .
   git commit -m "Updated content"
   git push
   ```
3. Run deployment:
   ```bash
   npm run deploy
   ```
4. Wait 2-5 minutes

USING NETLIFY:
---
1. Make changes
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Updated content"
   git push
   ```
3. Netlify auto-deploys automatically!

USING FIREBASE:
---
1. Make changes
2. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```
3. Wait 1-2 minutes

---

================================================================
WHAT TO CUSTOMIZE AFTER DEPLOYMENT
================================================================

📝 UPDATE THESE FILES:

1. Hospital Name
   - src/components/Navbar.jsx (line ~12)
   - src/components/Footer.jsx (line ~28)
   - index.html (title tag)

2. Phone Number
   - src/components/Navbar.jsx
   - src/components/Footer.jsx
   - src/pages/Contact.jsx

3. Email Address
   - src/components/Footer.jsx
   - src/pages/Contact.jsx

4. Address
   - src/pages/Contact.jsx
   - src/components/Footer.jsx

5. Working Hours
   - src/pages/Contact.jsx
   - src/components/Footer.jsx

6. Colors (Hospital Branding)
   - tailwind.config.js (colors section)
   - Update entire site colors in 1 place

7. Add Images
   - Update image URLs in all .jsx files
   - Or create public/images folder and reference from there

---

================================================================
QUICK DEPLOYMENT CHECKLIST
================================================================

Before deploying:
☐ All images display correctly locally
☐ Contact form works
☐ Navigation links work
☐ Mobile version looks good
☐ No console errors (press F12)
☐ All text is correct
☐ Phone numbers are updated
☐ Address is updated
☐ Hours are correct

After deploying:
☐ Website loads
☐ Images display
☐ Links work
☐ Mobile responsive
☐ Forms work
☐ Contact info correct
☐ Google Maps loads
☐ All pages accessible

---

================================================================
WHICH OPTION SHOULD YOU CHOOSE?
================================================================

Choose VERCEL if:
✅ You want the easiest setup
✅ You want best performance
✅ You want auto-deployments
✅ You're using GitHub anyway
→ RECOMMENDED CHOICE

Choose GITHUB PAGES if:
✅ You only use GitHub
✅ You want absolute free (no third-party)
✅ You don't mind manual deployments

Choose NETLIFY if:
✅ You prefer user-friendly interface
✅ You want drag-drop file uploads
✅ You want fast deployment

Choose FIREBASE if:
✅ You use Google Cloud Services
✅ You want Google's infrastructure
✅ You plan to add backend later

---

FINAL TIPS:
1. Start with VERCEL - it's the simplest
2. Your site can move between platforms anytime
3. DNS changes take 24-48 hours
4. Test locally before pushing live
5. Keep backups in GitHub
6. Updates are just a few git commands away

Happy deploying! 🚀

================================================================
