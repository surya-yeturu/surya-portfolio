// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://surya-portfolio-8cih.onrender.com/api',
  TIMEOUT: 10000,
}

export const ENDPOINTS = {
  PROJECTS: '/projects',
  RESUME: '/resume',
  HEALTH: '/health',
}
