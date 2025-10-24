const express = require('express');
const router = express.Router();

// Import route modules
const projectsRoutes = require('./projects');
const resumeRoutes = require('./resume');

// Use routes
router.use('/projects', projectsRoutes);
router.use('/resume', resumeRoutes);

module.exports = router;
