import React from 'react';
import HOME from "../assets/me/home.jpeg"
import { Mail, ArrowRight, Code2, Database, Server } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Home = () => {
  return (
    <div className="relative min-h-screen pt-24 pb-12 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center">
      {/* Background Glow Effects (Blobs & Blurs) */}

      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="w-full flex justify-between flex-col lg:flex-row items-center min-h-[85vh] relative z-20"
      >
        {/* Left Side - FLOATING TEXT BLOCK */}
        <div className="flex flex-col items-center lg:items-start space-y-6 lg:w-1/2 w-full pt-12 lg:pt-0 z-10 relative">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight text-center lg:text-left">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              Alsan Roj
            </span>
          </h1>

          {/* Big Tagline */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-100 text-center lg:text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] leading-snug">
            I build modern, scalable <br className="hidden xl:block" /> web
            experiences
          </h2>

          {/* Subtext */}
          <h3 className="text-xl md:text-2xl text-gray-400 font-light flex flex-wrap justify-center lg:justify-start gap-2 items-center">
            Full Stack Developer{" "}
            <span className="text-cyan-400 font-bold px-1 opacity-70">|</span>{" "}
            MERN{" "}
          </h3>

          {/* Short Description */}
          <p className="text-gray-400 max-w-lg leading-relaxed text-lg font-light text-center lg:text-left">
            I specialize in helping businesses grow by transforming complex
            problems into elegant, real-world solutions with futuristic
            architectures.
          </p>

          {/* CTA Buttons - Vertical on mobile, Horizontal on target */}
          <div className="flex flex-col sm:flex-row items-center gap-5 pt-6 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-[#0a0a0a] font-extrabold hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              View Projects{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-900/50 backdrop-blur-xl border border-gray-700 hover:border-emerald-400 text-white hover:text-emerald-400 font-bold hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
            >
              Hire Me
            </a>
          </div>

          <p className="text-sm font-semibold text-cyan-400 tracking-wide transition duration-300 hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">
            Open to freelance work — let’s build something impactful 🚀
          </p>
          {/* Vertical / Horizontal Social Icons */}
          <div className="flex items-center gap-5 pt-6 w-full justify-center lg:justify-start">
            <a
              href="https://github.com/alsanroj"
              className="p-3 md:p-4 rounded-full bg-gray-900/40 border border-gray-800 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-500 group"
            >
              <GithubIcon className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/alsan-roj/"
              className="p-3 md:p-4 rounded-full bg-gray-900/40 border border-gray-800 text-gray-400 hover:border-emerald-400 hover:text-emerald-400 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-500 group"
            >
              <LinkedinIcon className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="mailto:augstinaugustin5@gmail.com"
              className="p-3 md:p-4 rounded-full bg-gray-900/40 border border-gray-800 text-gray-400 hover:border-purple-400 hover:text-purple-400 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-500 group"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>

        {/* Right Side - PROFILE & ORBITING TECH */}
        <div className="lg:w-1/2 w-full mt-24 lg:mt-0 flex justify-center relative">
          <div className="relative w-64 h-64 md:w-[26rem] md:h-[26rem] animate-float">
            {/* Center Avatar Container */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/30 p-4 drop-shadow-[0_0_60px_rgba(34,211,238,0.15)] flex items-center justify-center">
              {/* Pulsing Backglow */}
              <div
                className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(34,211,238,0.2)] animate-pulse"
                style={{ animationDuration: "3s" }}
              ></div>

              {/* Neon Glowing Border wrapper */}
              <div className="w-full h-full rounded-full border-2 border-cyan-500/50 group-hover:border-cyan-400 overflow-hidden relative shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-700">
                <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay z-10 pointer-events-none"></div>
                {/* Developer Illustration / Image */}
                <img
                  src={HOME}
                  alt="Alsan Roj Developer Avatar"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
                  loading="eager"
                />
              </div>
            </div>

            {/* FLOATING TECH GLASS CARDS Around the Hero */}
            <div className="absolute top-[0%] right-[-10%] md:right-[-5%] p-4 md:p-6 bg-gray-900/70 backdrop-blur-2xl border border-cyan-500/40 rounded-3xl shadow-[0_0_30px_rgba(34,211,238,0.3)] animate-float-reverse z-20 hover:scale-110 hover:border-cyan-400 transition-all duration-500">
              <div className="flex items-center justify-center">
                <Code2
                  className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            <div
              className="absolute bottom-[5%] left-[-15%] md:left-[-10%] p-4 md:p-6 bg-gray-900/70 backdrop-blur-2xl border border-emerald-500/40 rounded-3xl shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-float z-20 hover:scale-110 hover:border-emerald-400 transition-all duration-500"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex flex-col items-center justify-center">
                <Server
                  className="w-8 h-8 md:w-10 md:h-10 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            <div
              className="absolute top-[75%] right-[5%] md:right-[10%] p-3 md:p-5 bg-gray-900/70 backdrop-blur-2xl border border-purple-500/40 rounded-3xl shadow-[0_0_30px_rgba(168,85,247,0.3)] animate-float-fast z-20 hover:scale-110 hover:border-purple-400 transition-all duration-500"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex flex-col items-center justify-center">
                <Database
                  className="w-6 h-6 md:w-8 md:h-8 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downward Parallax Prompt */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity hidden md:flex group z-30"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 font-bold group-hover:text-cyan-400 transition-colors">
          Discover
        </span>
        <div className="w-6 h-10 border-[1.5px] border-gray-600 group-hover:border-cyan-400 rounded-full flex justify-center p-1 transition-colors">
          <div className="w-1.5 h-2.5 bg-cyan-400 rounded-full animate-bounce mt-1"></div>
        </div>
      </a>
    </div>
  );
};

export default Home;
