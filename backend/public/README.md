# Backend Public Directory

This directory contains static files served by the Express.js backend.

## Resume File

Place your resume PDF file here as `resume.pdf` to enable the resume download functionality.

### Instructions:

1. Save your resume as `resume.pdf`
2. Place it in this directory (`backend/public/resume.pdf`)
3. The resume will be available for download at `/api/resume`

### Supported Formats:
- PDF (recommended)
- The filename should be `resume.pdf`

### File Size:
- Keep the file size under 5MB for optimal performance
- Consider compressing the PDF if it's too large

## Other Static Files

You can also place other static files here that you want to serve from the backend, such as:
- Project images
- Documents
- Media files

These files will be accessible at `http://localhost:5000/filename.ext`
