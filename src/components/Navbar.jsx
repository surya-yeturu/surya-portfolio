import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDownloadResume = () => {
    const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Surya_Yeturu_Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SY</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">Surya Yeturu</span>
            </motion.div>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center flex-1 max-w-md">
            <nav className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-neon-blue transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-neon-blue transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-neon-blue transition-colors duration-300 font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-neon-blue transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Desktop Actions - Right */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="btn-secondary flex items-center space-x-2 px-4 py-2"
            >
              <FaDownload className="w-4 h-4" />
              <span>Resume</span>
            </motion.button>
            
            <div className="flex items-center space-x-3">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://github.com/surya-yeturu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300 p-2"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                href="https://www.linkedin.com/in/surya-yeturu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300 p-2"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://twitter.com/surya_yeturu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300 p-2"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-neon-blue transition-colors duration-300"
          >
            {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect rounded-lg mt-2 p-6"
          >
            <div className="flex flex-col space-y-6">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-left font-medium py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-left font-medium py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-left font-medium py-2"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-left font-medium py-2"
                >
                  Contact
                </button>
              </div>
              
              {/* Mobile Actions */}
              <div className="border-t border-gray-600 pt-4">
                <button
                  onClick={handleDownloadResume}
                  className="btn-secondary flex items-center space-x-2 w-full justify-center py-3"
                >
                  <FaDownload className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
              </div>
              
              {/* Mobile Social Links */}
              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-center space-x-6">
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="https://github.com/surya-yeturu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300 p-2"
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="https://www.linkedin.com/in/surya-yeturu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300 p-2"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="https://twitter.com/surya_yeturu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300 p-2"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
