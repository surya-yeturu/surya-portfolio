import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobile } from 'react-icons/fa'
import axios from 'axios'
import { API_CONFIG, ENDPOINTS } from '../config/api'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_CONFIG.BASE_URL}${ENDPOINTS.PROJECTS}`)
        setProjects(response.data.data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch projects')
        setLoading(false)
        console.error('Error fetching projects:', err)
      }
    }

    fetchProjects()
  }, [])

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category.toLowerCase() === filter.toLowerCase()
  )

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return FaCode
      case 'backend':
        return FaServer
      case 'full stack':
        return FaCode
      case 'mobile':
        return FaMobile
      default:
        return FaCode
    }
  }

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-dark-300">
        <div className="max-w-7xl mx-auto text-center">
          <div className="loading-dots mx-auto">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className="text-gray-300 mt-4">Loading projects...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="section-padding bg-dark-300">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-400 text-lg">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="section-padding bg-dark-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['all', 'frontend', 'full stack', 'backend'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                  : 'glass-effect text-gray-300 hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category)
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                    <CategoryIcon className="w-16 h-16 text-neon-blue opacity-50" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                      {project.githubUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center text-white hover:bg-white/30 transition-colors duration-300"
                        >
                          <FaGithub className="w-5 h-5 mx-auto mb-1" />
                          <span className="text-xs">Code</span>
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center text-white hover:bg-white/30 transition-colors duration-300"
                        >
                          <FaExternalLinkAlt className="w-5 h-5 mx-auto mb-1" />
                          <span className="text-xs">Live</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                      {project.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.featured 
                        ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white' 
                        : 'glass-effect text-gray-300'
                    }`}>
                      {project.featured ? 'Featured' : project.category}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-dark-200 text-xs text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 bg-dark-200 text-xs text-gray-300 rounded-md">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-secondary text-center flex items-center justify-center space-x-2"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span>View Code</span>
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary text-center flex items-center justify-center space-x-2"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to take on new projects and challenges. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
