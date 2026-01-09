import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-4"
        >
          <p>
            I am a Bachelor of Engineering student at <span className="text-crimson font-semibold">St. Joseph's College Of Engineering</span>, 
            passionate about building modern web applications using the MERN stack.
          </p>
          <p>
            With a strong foundation in full-stack development, I specialize in creating responsive, 
            high-performance web applications that deliver exceptional user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

