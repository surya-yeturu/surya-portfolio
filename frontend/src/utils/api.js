import axios from 'axios'
import { API_CONFIG, ENDPOINTS } from '../config/api'

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add any auth tokens or other headers here if needed
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 404) {
      console.error('Resource not found')
    } else if (error.response?.status >= 500) {
      console.error('Server error')
    } else if (error.code === 'ECONNABORTED') {
      console.error('Request timeout')
    }
    
    return Promise.reject(error)
  }
)

// API functions
export const projectsApi = {
  // Get all projects
  getAll: async () => {
    const response = await api.get(ENDPOINTS.PROJECTS)
    return response.data
  },

  // Get projects by category
  getByCategory: async (category) => {
    const response = await api.get(`${ENDPOINTS.PROJECTS}?category=${category}`)
    return response.data
  },

  // Get featured projects
  getFeatured: async () => {
    const response = await api.get(`${ENDPOINTS.PROJECTS}?featured=true`)
    return response.data
  },

  // Get single project
  getById: async (id) => {
    const response = await api.get(`${ENDPOINTS.PROJECTS}/${id}`)
    return response.data
  },
}

export const resumeApi = {
  // Download resume
  download: async () => {
    const response = await api.get(ENDPOINTS.RESUME, {
      responseType: 'blob'
    })
    return response.data
  }
}

export default api
