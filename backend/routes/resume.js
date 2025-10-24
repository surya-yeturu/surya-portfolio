const express = require('express');
const path = require('path');
const router = express.Router();

// GET /api/resume - Download resume PDF
router.get('/', (req, res) => {
  try {
    const resumePath = path.join(__dirname, '../public/resume.pdf');
    
    // Check if resume file exists
    const fs = require('fs');
    if (!fs.existsSync(resumePath)) {
      return res.status(404).json({
        success: false,
        error: 'Resume not found',
        message: 'Please add your resume.pdf file to the backend/public/ directory'
      });
    }

    // Set headers for file download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Surya_Yeturu_Resume.pdf"');
    
    // Send the file
    res.sendFile(resumePath);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to download resume',
      message: error.message
    });
  }
});

module.exports = router;
