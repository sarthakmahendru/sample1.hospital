# MediCare Hospital - React Website

A modern, responsive hospital website built with React, Vite, and Tailwind CSS.

## 📋 Features

- ✅ Fully Responsive Design (Mobile, Tablet, Desktop)
- ✅ Modern UI with Tailwind CSS
- ✅ React Router for Navigation
- ✅ Service Cards & Testimonials
- ✅ Contact Form
- ✅ Fast Loading with Vite
- ✅ SEO Friendly
- ✅ No Backend Required (Static Frontend)

## 🚀 Quick Start

### 1. Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### 2. Installation

```bash
# Clone the repository or extract the folder
cd medicare-hospital-website

# Install dependencies
npm install
```

### 3. Development Server

```bash
# Start the development server
npm run dev

# The app will open at http://localhost:3000
```

### 4. Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
medicare-hospital-website/
├── public/                 # Static files
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ServiceCard.jsx
│   │   └── StatCard.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Dependencies
```

## 🌐 Deployment Guide

### Option 1: GitHub Pages (FREE)

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Name it `medicare-hospital-website` or your preferred name
   - Click "Create repository"

2. **Initialize Git & Push Code**
   ```bash
   cd medicare-hospital-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/medicare-hospital-website.git
   git push -u origin main
   ```

3. **Configure for GitHub Pages**
   - Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/medicare-hospital-website/', // Change to your repo name
     plugins: [react()],
     server: { port: 3000 },
     build: { outDir: 'dist' }
   })
   ```

4. **Install & Configure gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

5. **Update package.json**
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview",
       "deploy": "npm run build && npx gh-pages -d dist"
     },
     "homepage": "https://YOUR-USERNAME.github.io/medicare-hospital-website"
   }
   ```

6. **Deploy**
   ```bash
   npm run deploy
   ```

7. **Enable GitHub Pages**
   - Go to your repo Settings → Pages
   - Select "Deploy from a branch"
   - Select "gh-pages" branch
   - Click Save

### Option 2: Vercel (Recommended - FREE)

1. **Go to Vercel**
   - Visit https://vercel.com/
   - Click "Sign Up" and use GitHub account

2. **Connect Repository**
   - First push your code to GitHub (follow steps 1-2 from GitHub Pages option)
   - Click "New Project" in Vercel dashboard
   - Import your GitHub repository

3. **Configure & Deploy**
   - Vercel auto-detects React + Vite
   - Click "Deploy"
   - Your site will be live in minutes!

### Option 3: Netlify (FREE)

1. **Go to Netlify**
   - Visit https://netlify.com/
   - Click "Sign up" with GitHub

2. **Connect Repository**
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your repository

3. **Configure**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

### Option 4: Firebase Hosting (FREE)

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase login
   firebase init hosting
   ```
   - Choose your Firebase project
   - Set public directory to `dist`
   - Configure single page app: Yes

3. **Build & Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#YOUR-COLOR',
  secondary: '#YOUR-COLOR'
}
```

### Change Hospital Name
Search and replace "MediCare" with your hospital name in:
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- All `.jsx` files

### Update Contact Information
Edit in `src/components/Navbar.jsx`, `src/components/Footer.jsx`, and `src/pages/Contact.jsx`:
- Phone number
- Email
- Address
- Hours

### Add Images
Replace image URLs in components with your own:
```javascript
src="https://your-image-url.jpg"
```

## 📝 Environment Setup (Optional)

Create `.env` file for API endpoints (if adding backend later):
```
VITE_API_URL=https://your-api.com
```

## 🔧 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**GitHub Pages shows 404?**
- Ensure `base` in vite.config.js matches your repo name
- Check that gh-pages branch exists in GitHub

## 📚 Technologies Used

- **React 18** - UI Framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons

## 🤝 Support

For issues or questions:
1. Check project documentation
2. Review Vite docs: https://vitejs.dev/
3. Review React docs: https://react.dev/
4. Review Tailwind CSS: https://tailwindcss.com/

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Coding! 🚀**
