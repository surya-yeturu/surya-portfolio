import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobile, FaBrain } from 'react-icons/fa';

const Projects = () => {
  // Hardcoded projects data
  const projects = [
    {
      id: 1,
      name: "BlogersHub",
      description: "Full Stack Blog Application built with React (Vite) and FastAPI. Features user authentication, CRUD blog posts, image upload support, comment system, search functionality, user profiles, dark theme, and responsive design.",
      techStack: ["React", "Vite", "TypeScript", "Tailwind CSS", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT"],
      githubUrl: "https://github.com/surya-yeturu/BlogersHub",
      liveUrl: "https://blogers-hub.vercel.app",
      category: "Full Stack",
      featured: true,
      icon: FaCode
    },
    {
      id: 2,
      name: "FinBank",
      description: "Modern full-stack banking demo with Node.js/Express, MongoDB, and a React + Vite + Tailwind UI. Features user authentication, balance transfers, mini statements (PDF/CSV), student account applications, and spending analytics with charts.",
      techStack: ["Node.js", "Express.js", "MongoDB", "React", "Vite", "Tailwind CSS", "JWT", "bcrypt", "pdfkit"],
      githubUrl: "https://github.com/surya-yeturu/finbank",
      liveUrl: null,
      category: "Full Stack",
      featured: true,
      icon: FaServer
    },
    {
      id: 3,
      name: "Weather App",
      description: "Real-time weather application that provides current weather conditions, forecasts, and location-based weather information with a clean and intuitive user interface.",
      techStack: ["JavaScript", "HTML5", "CSS3", "Weather API", "Fetch API"],
      githubUrl: "https://github.com/surya-yeturu/Wheather-app",
      liveUrl: null,
      category: "Frontend",
      featured: false,
      icon: FaMobile
    },
    {
      id: 4,
      name: "Expense Tracker",
      description: "Personal finance management application that helps users track their expenses, categorize spending, and visualize their financial data with interactive charts and reports.",
      techStack: ["JavaScript", "HTML5", "CSS3", "Local Storage", "Chart.js"],
      githubUrl: "https://github.com/surya-yeturu/Expense_tracker",
      liveUrl: null,
      category: "Frontend",
      featured: false,
      icon: FaMobile
    },
    {
      id: 5,
      name: "Sales Copilot AI Agent",
      description: "AI-powered Sales Research Assistant designed to help sales representatives prepare thoroughly before their calls. Conducts research on prospects & companies, analyzes LinkedIn profiles, and generates structured Pre-Call Reports with actionable insights.",
      techStack: ["AI/ML", "Python", "LinkedIn API", "Web Scraping", "Natural Language Processing"],
      githubUrl: "https://lnkd.in/gB2hPVbm",
      liveUrl: "https://lnkd.in/gB2hPVbm",
      category: "AI/ML",
      featured: true,
      icon: FaBrain
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-200">
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
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development, 
            frontend technologies, and AI/ML applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <project.icon className="w-6 h-6 text-neon-blue" />
                  <span className="text-sm font-medium text-neon-blue bg-neon-blue/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                {project.featured && (
                  <span className="text-xs font-medium text-neon-pink bg-neon-pink/10 px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                {project.name}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0, 4).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 py-1 glass-effect rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="text-xs px-2 py-1 glass-effect rounded-full text-gray-300">
                    +{project.techStack.length - 4} more
                  </span>
                )}
              </div>

              <div className="flex space-x-3">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg text-white hover:text-neon-blue transition-colors duration-300 flex-1 justify-center"
                >
                  <FaGithub className="w-4 h-4" />
                  <span className="text-sm font-medium">Code</span>
                </motion.a>
                
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white hover:shadow-lg transition-all duration-300 flex-1 justify-center"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <motion.a
            href="https://github.com/surya-yeturu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <FaGithub className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
