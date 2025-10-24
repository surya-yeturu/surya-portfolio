# 🚀 Portfolio Setup Guide

## ✅ Issues Fixed

I've resolved all the frontend errors you encountered:

1. **API Configuration**: Fixed API endpoint URLs to properly connect frontend and backend
2. **Build Errors**: Fixed SVG syntax error in Hero component
3. **Dependencies**: All packages are properly installed
4. **Configuration**: Created centralized API configuration

## 🎯 Quick Start

### 1. Install Dependencies
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 2. Add Your Resume
- Place your resume PDF file in `backend/public/resume.pdf`
- The file should be named exactly `resume.pdf`

### 3. Start Development Servers

#### Option A: Use the provided scripts
```bash
# Windows
./start-dev.bat

# Mac/Linux
./start-dev.sh
```

#### Option B: Manual start
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### 4. Access Your Portfolio
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/health

## 🔧 Configuration

### API Configuration
The API configuration is centralized in `frontend/src/config/api.js`:

```javascript
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  TIMEOUT: 10000,
}
```

### Environment Variables
For production deployment, set:
```env
VITE_API_BASE_URL=https://your-backend-url.com/api
```

## 📁 Project Structure

```
surya-portfolio/
├── backend/
│   ├── routes/          # API routes
│   │   ├── index.js
│   │   ├── projects.js
│   │   └── resume.js
│   ├── public/          # Static files
│   │   └── resume.pdf   # Your resume file
│   ├── server.js        # Main server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── config/      # Configuration
│   │   ├── utils/       # Utilities
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## 🎨 Features Working

✅ **Hero Section**: Typing animation with your name and skills  
✅ **About Section**: Personal info, skills, education  
✅ **Projects Section**: Dynamic project cards with GitHub links  
✅ **Contact Section**: Contact form and social links  
✅ **Navigation**: Smooth scrolling navigation  
✅ **Responsive Design**: Works on all devices  
✅ **Resume Download**: Download functionality from backend  

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build: `npm run build`
2. Deploy to Netlify or Vercel
3. Set environment variable: `VITE_API_BASE_URL=https://your-backend-url.com/api`

### Backend (Render/Railway)
1. Deploy to Render or Railway
2. Set environment variables
3. The backend will serve your projects API and resume

## 🔍 Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure backend is running on port 5000
2. **API Not Found**: Check that backend server is running
3. **Resume Not Found**: Ensure `resume.pdf` is in `backend/public/`
4. **Build Errors**: Run `npm install` in both frontend and backend directories

### Development Tips:

1. **Hot Reload**: Both servers support hot reload during development
2. **API Testing**: Test API endpoints at http://localhost:5000/health
3. **Console Logs**: Check browser console for any frontend errors
4. **Network Tab**: Check Network tab in browser dev tools for API calls

## 📞 Support

If you encounter any issues:
1. Check the console for error messages
2. Ensure both servers are running
3. Verify your resume file is in the correct location
4. Check that all dependencies are installed

Your portfolio is now ready to use! 🎉
