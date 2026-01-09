import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-red-600 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          {/* Copyright and Description */}
          <div className="flex flex-col items-center gap-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm md:text-base text-center"
            >
              © 2026 Alsan Roj. Built with React & Three.js.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-500 text-xs md:text-sm text-center"
            >
              MERN Stack Developer | Based in Tirunelveli, India
            </motion.p>
          </div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mt-2"
          >
            <motion.a
              href="https://linkedin.com/in/alsan-roj-a-a01116295"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-900/50 border border-gray-800 rounded-lg hover:bg-red-600/20 hover:border-red-600 transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-red-600 transition-colors" />
            </motion.a>

            <motion.a
              href="https://github.com/alsanroj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-900/50 border border-gray-800 rounded-lg hover:bg-red-600/20 hover:border-red-600 transition-all group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-red-600 transition-colors" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
