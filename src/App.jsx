import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import ParticleField from "./components/ParticleField";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let minTimer = setTimeout(() => {}, 1500);
    const onLoad = () => {
      // Ensure at least 1.2s minimum display and then fade out
      const elapsed = Date.now();
      clearTimeout(minTimer);
      setTimeout(() => setIsLoading(false), 300);
    };

    if (document.readyState === "complete") {
      // already loaded
      setTimeout(() => setIsLoading(false), 1200);
    } else {
      window.addEventListener("load", onLoad);
      // safety: also hide after 2.5s even if load doesn't fire
      const fallback = setTimeout(() => setIsLoading(false), 2500);
      return () => {
        window.removeEventListener("load", onLoad);
        clearTimeout(fallback);
        clearTimeout(minTimer);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Particle Field Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>
        </Canvas>
      </div>

      {/* Red Radial Gradient Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(127, 29, 29, 0.15) 0%, transparent 70%)",
        }}
      ></div>

      {/* Subtle scan-line overlay for cyber aesthetic */}
      <div className="scanlines pointer-events-none fixed inset-0 z-5 opacity-5" />

      {/* Loader overlay (visible while isLoading) */}
      <Loader isActive={isLoading} />

      <div
        className={`relative z-10 transition-opacity duration-700 ease-out ${
          isLoading ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
