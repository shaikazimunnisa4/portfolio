import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Mail, Gamepad2 } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Contact Form Project',
      icon: Mail,
      description: 'A secure, fully functional contact form with advanced validation and spam protection.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Google reCAPTCHA', 'SendGrid'],
      features: [
        'Client-side and server-side form validation',
        'Google reCAPTCHA integration for bot protection',
        'SendGrid API for reliable email delivery',
        'Responsive design for all devices',
        'Live server deployment and testing'
      ],
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      title: 'Rock Paper Scissors Game',
      icon: Gamepad2,
      description: 'An interactive web-based game with real-time score tracking and dynamic feedback.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Interactive gameplay against computer AI',
        'Real-time score tracking system',
        'Dynamic visual feedback and animations',
        'Clean, intuitive user interface',
        'DOM manipulation for state updates'
      ],
      gradient: 'from-emerald-500 to-teal-400',
      link: '#'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 border border-gray-600 hover:border-purple-400 transition-all duration-500 h-full"
                whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2 }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mr-4`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    {project.link && (
                      <div className="flex space-x-3">
                        <a
                          href={project.link}
                          className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-purple-400">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full text-sm font-medium hover:from-purple-600 hover:to-purple-500 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-emerald-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="text-gray-300 flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;