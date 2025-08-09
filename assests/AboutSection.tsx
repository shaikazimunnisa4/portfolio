import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Server } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    { icon: Code, name: 'Programming', skills: ['C', 'Java', 'Python', 'JavaScript'] },
    { icon: Globe, name: 'Frontend', skills: ['HTML5', 'CSS3', 'React', 'Three.js'] },
    { icon: Server, name: 'Backend', skills: ['Node.js', 'PHP', 'APIs'] },
    { icon: Database, name: 'Database', skills: ['SQL', 'Oracle'] },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
           I'm a skilled web developer with experience in HTML, CSS, and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I have also mastered programming languages like C, Java, and Python.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.name}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl border border-gray-600 hover:border-blue-400 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-8 h-8 text-blue-400 mr-3 group-hover:text-emerald-400 transition-colors duration-300" />
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    • {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;