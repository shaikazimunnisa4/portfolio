import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech',
      institution: 'NRI Institute of Technology',
      location: 'Pothavarapadu',
      status: 'In Progress',
      description: 'Pursuing Bachelor of Technology with focus on computer science and engineering.',
    },
    {
      degree: 'Intermediate',
      institution: 'Sri Chaitanya Junior College',
      location: 'Vijayawada',
      cgpa: '7.9/10',
      description: 'Completed intermediate education with strong foundation in mathematics and sciences.',
    },
    {
      degree: 'Secondary School',
      institution: 'RK High School',
      location: 'VDPURAM, Vijayawada',
      cgpa: '8.7/10',
      description: 'Completed secondary education with excellent academic performance.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-300">My academic journey and achievements</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  {index < education.length - 1 && (
                    <div className="w-0.5 h-20 bg-gradient-to-b from-emerald-400 to-purple-400 mx-auto mt-4"></div>
                  )}
                </div>
                
                <motion.div
                  className="flex-grow bg-gradient-to-r from-gray-700 to-gray-600 p-6 rounded-2xl border border-gray-500 hover:border-emerald-400 transition-all duration-300"
                  whileHover={{ scale: 1.02, rotateX: 2 }}
                >
                  <h3 className="text-2xl font-bold text-emerald-400 mb-2">{edu.degree}</h3>
                  <h4 className="text-xl font-semibold mb-2">{edu.institution}</h4>
                  
                  <div className="flex items-center text-gray-300 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{edu.location}</span>
                  </div>
                  
                  {edu.cgpa && (
                    <div className="text-purple-400 font-semibold mb-3">
                      CGPA: {edu.cgpa}
                    </div>
                  )}
                  
                  {edu.status && (
                    <div className="text-yellow-400 font-semibold mb-3">
                      Status: {edu.status}
                    </div>
                  )}
                  
                  <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;