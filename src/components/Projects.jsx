import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import TiltCard from "./TiltCard";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-red-600 via-red-500 to-dark-red-900 bg-clip-text text-transparent"
        >
          PROJECTS
        </motion.h2>

        <TiltCard>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/50 border border-gray-800 rounded-lg p-8 hover:border-red-600/50 transition-all"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Personal Portfolio Website
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              A modern, high-performance portfolio website built with React.js,
              featuring seamless EmailJS integration for contact forms and a
              mobile-first responsive design. The site showcases professional
              projects and skills with smooth animations and an elegant dark
              theme.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded text-sm text-gray-300">
                React.js
              </span>
              <span className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded text-sm text-gray-300">
                EmailJS
              </span>
              <span className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded text-sm text-gray-300">
                Mobile-First Design
              </span>
              <span className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded text-sm text-gray-300">
                Tailwind CSS
              </span>
              <span className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded text-sm text-gray-300">
                Framer Motion
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </motion.a>
              <motion.a
                href="https://github.com/alsanroj/Alsan-Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
                Source Code
              </motion.a>
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </section>
  );
};

export default Projects;
