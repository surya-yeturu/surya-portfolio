import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaMobile, FaDownload } from 'react-icons/fa'

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 95, icon: FaCode },
    { name: 'Backend Development', level: 90, icon: FaServer },
    { name: 'Database Design', level: 85, icon: FaDatabase },
  ]

  const technologies = [
    'React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'TypeScript',
    'Python', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Git', 'Docker'
  ]

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

  return (
    <section id="about" className="section-padding bg-dark-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-white mb-6">Who Am I?</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer currently pursuing B.Tech in Artificial Intelligence & Data Science. 
                I love creating innovative web applications that solve real-world problems and provide exceptional user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                With a strong foundation in both frontend and backend technologies, I enjoy building scalable applications 
                from concept to deployment. I'm always eager to learn new technologies and contribute to meaningful projects.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="btn-primary flex items-center space-x-2"
              >
                <FaDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </motion.button>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold text-white mb-6">Personal Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-neon-blue font-medium min-w-[100px]">Birthdate:</span>
                  <span className="text-gray-300">16/12/2004</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-neon-blue font-medium min-w-[100px]">Email:</span>
                  <span className="text-gray-300">yeturusurya2@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-neon-blue font-medium min-w-[100px]">Phone:</span>
                  <span className="text-gray-300">+91 6309135509</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-neon-blue font-medium min-w-[100px]">Location:</span>
                  <span className="text-gray-300">Nellore, India</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-neon-blue font-medium min-w-[100px]">Education:</span>
                  <span className="text-gray-300">B.Tech AI & DS (4th Year)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Skills Progress */}
            <div className="card">
              <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="w-5 h-5 text-neon-blue" />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="card">
              <h3 className="text-2xl font-bold text-white mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 glass-effect rounded-full text-sm text-gray-300 hover:text-neon-blue transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-neon-blue pl-4">
                <h4 className="text-lg font-semibold text-white">B.Tech Artificial Intelligence & Data Science</h4>
                <p className="text-neon-blue font-medium">2024 - Present</p>
                <p className="text-gray-300">NBKRIST, Vidyanagar - 4th Year</p>
              </div>
              <div className="border-l-4 border-neon-purple pl-4">
                <h4 className="text-lg font-semibold text-white">Intermediate</h4>
                <p className="text-neon-purple font-medium">2020 - 2022</p>
                <p className="text-gray-300">Narayana Junior College, Gudur - 82%</p>
              </div>
              <div className="border-l-4 border-neon-pink pl-4">
                <h4 className="text-lg font-semibold text-white">High School</h4>
                <p className="text-neon-pink font-medium">2010 - 2020</p>
                <p className="text-gray-300">CBSE LAP School - 92%</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-6">Achievements</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-neon-blue pl-4">
                <h4 className="text-lg font-semibold text-white">Critical Thinking Certification</h4>
                <p className="text-gray-300">Completed certification on EDX Platform</p>
              </div>
              <div className="border-l-4 border-neon-purple pl-4">
                <h4 className="text-lg font-semibold text-white">Entrepreneurship Webinar</h4>
                <p className="text-gray-300">Participated at IIT Hyderabad - Blood Saving System</p>
              </div>
              <div className="border-l-4 border-neon-pink pl-4">
                <h4 className="text-lg font-semibold text-white">Technical Fest Prizes</h4>
                <p className="text-gray-300">1st, 2nd & 3rd prizes at SVCE, NBKR, NARAYANA</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
