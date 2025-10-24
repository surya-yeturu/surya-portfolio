# Surya Yeturu - Portfolio Website

A modern, responsive portfolio website built with React and Express.js, featuring a dark theme with neon accents and smooth animations.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and neon gradients
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Dynamic Content**: Projects and resume served from Express.js backend
- **SEO Optimized**: Meta tags and clean structure for better search visibility
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Axios** - HTTP client

### Backend
- **Express.js** - Web framework for Node.js
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Node.js** - JavaScript runtime

## 📁 Project Structure

```
surya-portfolio/
├── backend/
│   ├── routes/
│   │   ├── index.js
│   │   ├── projects.js
│   │   └── resume.js
│   ├── public/
│   │   └── resume.pdf
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd surya-portfolio
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Add your resume file**
   - Place your resume PDF file in `backend/public/resume.pdf`

5. **Environment setup**
   - Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📝 API Endpoints

### Projects API
- `GET /api/projects` - Get all projects
- `GET /api/projects?category=frontend` - Filter by category
- `GET /api/projects?featured=true` - Get featured projects
- `GET /api/projects/:id` - Get single project

### Resume API
- `GET /api/resume` - Download resume PDF

## 🎨 Customization

### Adding New Projects
Edit the `projects` array in `backend/routes/projects.js`:

```javascript
const projects = [
  {
    id: 5,
    name: "New Project",
    description: "Project description",
    image: "/images/project-preview.jpg",
    techStack: ["React", "Node.js"],
    githubUrl: "https://github.com/username/repo",
    liveUrl: "https://project-url.com",
    category: "Full Stack",
    featured: true
  }
]
```

### Updating Personal Information
- Update the About section in `frontend/src/components/About.jsx`
- Update contact information in `frontend/src/components/Contact.jsx`
- Update the Hero section in `frontend/src/components/Hero.jsx`

### Changing Colors and Theme
Modify the color scheme in `frontend/tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  neon: {
    blue: '#00f5ff',
    green: '#39ff14',
    purple: '#bf00ff',
    pink: '#ff10f0',
  }
}
```

## 🚀 Deployment

### Frontend Deployment (Netlify/Vercel)

1. **Build the project**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add environment variable: `VITE_API_BASE_URL=https://your-backend-url.com/api`

3. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Set build command: `npm run build`
   - Set output directory: `dist`

### Backend Deployment (Render/Railway)

1. **Prepare for deployment**
   - Add `"start": "node server.js"` to backend package.json
   - Set environment variables in your hosting platform

2. **Deploy to Render**
   - Connect your GitHub repository
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Add environment variables

3. **Deploy to Railway**
   - Connect your GitHub repository
   - Railway will auto-detect Node.js and install dependencies
   - Add environment variables

## 🔧 Development Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🎯 Performance Features

- **Lazy Loading**: Components load as they come into view
- **Optimized Images**: Compressed and optimized images
- **Code Splitting**: Automatic code splitting with Vite
- **Caching**: Proper HTTP caching headers
- **Compression**: Gzip compression for faster loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Surya Yeturu**
- Email: yeturusurya2@gmail.com
- GitHub: [@surya-yeturu](https://github.com/surya-yeturu)
- LinkedIn: [Surya Yeturu](https://www.linkedin.com/in/surya-yeturu)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons
- Animations powered by Framer Motion
- Styling with Tailwind CSS

---

Made with ❤️ by Surya Yeturu
