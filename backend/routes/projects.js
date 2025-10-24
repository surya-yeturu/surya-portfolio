const express = require('express');
const router = express.Router();

// Sample projects data - you can replace this with a database later
const projects = [
  {
    id: 1,
    name: "FinBank",
    description: "Modern full-stack banking demo with Node.js/Express, MongoDB, and a React + Vite + Tailwind UI. Features user authentication, balance transfers, mini statements (PDF/CSV), student account applications, and spending analytics with charts.",
    image: "/images/finbank-preview.jpg",
    techStack: ["Node.js", "Express.js", "MongoDB", "React", "Vite", "Tailwind CSS", "JWT", "bcrypt", "pdfkit"],
    githubUrl: "https://github.com/surya-yeturu/finbank",
    liveUrl: null, // Add live URL if available
    category: "Full Stack",
    featured: true
  },
  {
    id: 2,
    name: "BlogersHub",
    description: "Full Stack Blog Application built with React (Vite) and FastAPI. Features user authentication, CRUD blog posts, image upload support, comment system, search functionality, user profiles, dark theme, and responsive design.",
    image: "/images/blogershub-preview.jpg",
    techStack: ["React", "Vite", "TypeScript", "Tailwind CSS", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/surya-yeturu/BlogersHub",
    liveUrl: "https://blogers-hub.vercel.app",
    category: "Full Stack",
    featured: true
  },
  {
    id: 3,
    name: "Quiz App",
    description: "Interactive quiz application with multiple question types, scoring system, and user-friendly interface. Built with modern web technologies for an engaging user experience.",
    image: "/images/quiz-app-preview.jpg",
    techStack: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    githubUrl: "https://github.com/surya-yeturu/QUIZ-APP",
    liveUrl: null,
    category: "Frontend",
    featured: false
  },
  {
    id: 4,
    name: "Weather App",
    description: "Real-time weather application that provides current weather conditions, forecasts, and location-based weather information with a clean and intuitive user interface.",
    image: "/images/weather-app-preview.jpg",
    techStack: ["JavaScript", "HTML5", "CSS3", "Weather API", "Fetch API"],
    githubUrl: "https://github.com/surya-yeturu/Wheather-app",
    liveUrl: null,
    category: "Frontend",
    featured: false
  }
];

// GET /api/projects - Get all projects
router.get('/', (req, res) => {
  try {
    const { category, featured } = req.query;
    let filteredProjects = [...projects];

    // Filter by category if provided
    if (category) {
      filteredProjects = filteredProjects.filter(project => 
        project.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by featured if provided
    if (featured === 'true') {
      filteredProjects = filteredProjects.filter(project => project.featured);
    }

    res.json({
      success: true,
      data: filteredProjects,
      total: filteredProjects.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch projects',
      message: error.message
    });
  }
});

// GET /api/projects/:id - Get single project
router.get('/:id', (req, res) => {
  try {
    const projectId = parseInt(req.params.id);
    const project = projects.find(p => p.id === projectId);

    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }

    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch project',
      message: error.message
    });
  }
});

module.exports = router;
