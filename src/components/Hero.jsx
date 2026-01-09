import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import ThreeDBackground from "./ThreeDBackground";

const Hero = () => {
  const imageRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Ultra-smooth springs for the hero image tilt
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 18 });

  // Increase tilt range to 15deg for a stronger effect
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-4 py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 order-last md:order-first"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Building Scalable MERN Solutions with Precision.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            I am Alsan Roj, a Full Stack Developer specializing in React.js,
            Node.js, and modern web automation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Contact Me
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image with 3D Background */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center relative order-first md:order-last"
        >
          {/* 3D Background Canvas */}
          <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <ThreeDBackground />
              </Suspense>
            </Canvas>
          </div>

          <motion.div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative z-10 perspective-1000"
          >
            {/* Outer rotating cyber ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-red-700/30"
              style={{ boxShadow: "0 0 18px rgba(220,38,38,0.18)" }}
              animate={{ rotate: 360, opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              whileHover={{
                boxShadow: "0 0 80px rgba(220,38,38,0.9)",
                opacity: 1,
              }}
            />

            {/* Inner static ring */}
            <motion.div
              className="absolute inset-3 rounded-full border-2 border-red-600/40"
              whileHover={{
                opacity: 0.95,
                boxShadow: "0 0 40px rgba(220,38,38,0.6)",
              }}
            />

            {/* subtle glare overlay */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none mix-blend-screen"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(255,80,80,0.12), transparent 40%)",
              }}
            />

            {/* Profile Image */}
            <motion.img
              src="/profile.jpg"
              alt="Alsan Roj"
              className="w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full object-cover relative z-10"
              style={{ transform: "translateZ(75px)" }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
