# Surya Yeturu - Portfolio Website

A modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**, featuring a dark theme with neon accents and smooth animations. Automatically deployed to **GitHub Pages**.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and neon gradients
- **Responsive Layout**: Fully responsive design optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Direct Resume Download**: Download resume directly from static assets
- **SEO Optimized**: Meta tags, OpenGraph tags, and semantic structure
- **Automated Deployment**: GitHub Actions workflow for automatic deployment to GitHub Pages on `git push`

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📁 Project Structure

```
surya-yeturu.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── public/
│   └── resume.pdf           # Downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Header and navigation
│   │   ├── Hero.jsx         # Hero section with animated intro
│   │   ├── About.jsx        # About me & skills section
│   │   ├── Projects.jsx     # Featured projects showcase
│   │   ├── Contact.jsx      # Contact information & message form
│   │   └── Footer.jsx       # Footer component
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/surya-yeturu/surya-yeturu.github.io.git
   cd surya-yeturu.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deploying to GitHub Pages

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`). 

To activate automated deployment:
1. Push your changes to the `main` branch.
2. In GitHub repository settings, go to **Pages** (`Settings > Pages`).
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. Every push to `main` will automatically build and publish your site at `https://surya-yeturu.github.io/`.

## 👨‍💻 Author

**Surya Yeturu**
- Email: yeturusurya2@gmail.com
- GitHub: [@surya-yeturu](https://github.com/surya-yeturu)
- LinkedIn: [Surya Yeturu](https://www.linkedin.com/in/surya-yeturu)
