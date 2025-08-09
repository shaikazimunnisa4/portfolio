import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shaikazimunnisa432@gmail.com',
      href: 'mailto:shaikazimunnisa432@gmail.com',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Azimunnisa Shaik',
      href: '#',
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vijayawada, India',
      href: '#',
      gradient: 'from-emerald-500 to-teal-400'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about web development and technology.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                className="flex items-center p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl border border-gray-600 hover:border-cyan-400 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400">{info.label}</h4>
                  <p className="text-gray-300">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-3xl border border-gray-600"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-cyan-400 mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Enter your name"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-cyan-400 mb-2">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Enter your email"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-cyan-400 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold flex items-center justify-center space-x-2 hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;