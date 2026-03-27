import React from 'react';
import { User, Code, Database, Layout, Smartphone, Zap, Rocket, Star, Code2, Layers, Cpu, Server, Command } from 'lucide-react';
import ABOUT from "../assets/me/about.jpg"

const About = () => {
  return (
    <div
      id="about"
      className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden py-32 px-6 lg:px-12 selection:bg-cyan-400/30 selection:text-cyan-200"
    >
      {/* GLOBAL SPACE BACKGROUND & ORBS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-cyan-500/10 blur-[150px] mix-blend-screen animate-pulse-glow"></div>
        <div className="absolute top-[40%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-emerald-500/10 blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-purple-500/10 blur-[150px] mix-blend-screen animate-pulse-glow"></div>
        {/* Subtle Stars/Dots */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] opacity-30"
          style={{ backgroundSize: "50px 50px" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* 1. & 2. FLOATING HERO INTRO & PROFILE CARD (Split Layout) */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between min-h-[70vh] gap-16">
          {/* Left: About Text */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6 animate-float-reverse">
            <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2">
              <span className="w-8 h-[1px] bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              Origin Story
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] relative inline-block">
                Me
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] rounded-full"></span>
              </span>
            </h2>
            <p className="text-2xl md:text-3xl font-light text-gray-300 mt-6 leading-relaxed">
              I build modern, scalable web experiences that help businesses{" "}
              <span className="text-white font-semibold flex items-center inline-flex gap-2 relative">
                grow <Rocket className="text-cyan-400 w-6 h-6 animate-bounce" />
              </span>
              .
            </p>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg mt-4">
              My journey started with a deep curiosity about how things work on
              the internet. Since then, I've dedicated my time to mastering
              full-stack technologies and delivering high-performance, beautiful
              applications.
            </p>
          </div>

          {/* Right: Floating Profile Card */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-float">
            <div className="relative w-80 h-[450px] group rounded-[2.5rem] bg-gray-900/30 backdrop-blur-xl border border-cyan-500/30 overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.1)] hover:shadow-[0_0_80px_rgba(34,211,238,0.3)] transition-all duration-700 transform hover:rotate-y-6 hover:-rotate-x-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-emerald-500/10 mix-blend-overlay"></div>
              <div className="relative w-full h-full flex items-center justify-center p-8 bg-black/40 overflow-hidden group">
                {/* Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 blur-2xl opacity-60 group-hover:opacity-100 transition duration-500"></div>

                {/* Floating Wrapper */}
                <div className="relative z-10 w-full h-full animate-[float_5s_ease-in-out_infinite]">
                  <img
                    src={ABOUT}
                    alt="About"
                    className="w-full h-full object-cover rounded-2xl transition-all duration-500 
      group-hover:scale-105 
      drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] 
      group-hover:drop-shadow-[0_0_50px_rgba(34,211,238,0.9)]"
                  />
                </div>
                {/* Light Sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
              </div>
              {/* Glowing borders */}
              <div className="absolute inset-0 border-[3px] border-transparent group-hover:border-cyan-400/60 rounded-[2.5rem] transition-colors duration-700 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* 3. SET THE SCENE FOR ORBIT - Skips flex centering issues */}
        {/* 3. FLOATING SKILLS ORBIT */}
        <div className="w-full flex flex-col items-center mt-40 mb-20 relative">
          <div className="text-center mb-24 animate-float-fast">
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
              Tech{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Ecosystem
              </span>
            </h3>
          </div>

          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
            {/* Center Gravity Node */}
            <div className="absolute w-28 h-28 bg-black/80 backdrop-blur-xl rounded-full border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.6)] z-20 hover:scale-110 hover:shadow-[0_0_60px_rgba(34,211,238,0.9)] transition-all duration-500 group">
              <User className="w-12 h-12 text-cyan-400 group-hover:text-white transition-colors" />
            </div>

            {/* Orbit Rings */}
            <div className="absolute w-full h-full rounded-full border border-dashed border-gray-700/50"></div>
            <div className="absolute w-[200px] h-[200px] md:w-[320px] md:h-[320px] rounded-full border border-dashed border-gray-700/50"></div>

            {/* Orbital Items */}
            {/* Orbit 1 (Inner) */}
            <div className="absolute w-[200px] h-[200px] md:w-[320px] md:h-[320px] animate-spin-slow">
              {/* React */}
              <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-16 h-16 bg-black/80 backdrop-blur-xl rounded-2xl border border-cyan-400/50 flex flex-col items-center justify-center animate-spin-slow-reverse hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] hover:scale-125 transition-all cursor-pointer group">
                <Code2 className="w-8 h-8 text-cyan-400" />
                <span className="absolute -bottom-8 bg-[#0a0a0a] px-2 py-1 rounded text-xs font-bold text-cyan-400 opacity-0 group-hover:opacity-100 whitespace-nowrap border border-cyan-400/20">
                  React
                </span>
              </div>
              {/* Node */}
              <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-16 h-16 bg-black/80 backdrop-blur-xl rounded-2xl border border-emerald-400/50 flex items-center justify-center animate-spin-slow-reverse hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.8)] hover:scale-125 transition-all cursor-pointer group">
                <Server className="w-8 h-8 text-emerald-400" />
                <span className="absolute -bottom-8 bg-[#0a0a0a] px-2 py-1 rounded text-xs font-bold text-emerald-400 opacity-0 group-hover:opacity-100 whitespace-nowrap border border-emerald-400/20">
                  Node.js
                </span>
              </div>
            </div>

            {/* Orbit 2 (Outer) */}
            <div
              className="absolute w-full h-full animate-spin-slower"
              style={{ animationDirection: "reverse" }}
            >
              {/* MongoDB */}
              <div
                className="absolute top-1/2 left-[-30px] -translate-y-1/2 w-16 h-16 bg-black/80 backdrop-blur-xl rounded-2xl border border-purple-400/50 flex items-center justify-center animate-spin-slower-reverse hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] hover:scale-125 transition-all cursor-pointer group"
                style={{ animationDirection: "reverse" }}
              >
                <Database className="w-8 h-8 text-purple-400" />
                <span className="absolute -bottom-8 bg-[#0a0a0a] px-2 py-1 rounded text-xs font-bold text-purple-400 opacity-0 group-hover:opacity-100 whitespace-nowrap border border-purple-400/20">
                  MongoDB
                </span>
              </div>
              {/* Tailwind */}
              <div
                className="absolute top-1/2 right-[-30px] -translate-y-1/2 w-16 h-16 bg-black/80 backdrop-blur-xl rounded-2xl border border-blue-400/50 flex items-center justify-center animate-spin-slower-reverse hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] hover:scale-125 transition-all cursor-pointer group"
                style={{ animationDirection: "reverse" }}
              >
                <Layout className="w-8 h-8 text-blue-400" />
                <span className="absolute -bottom-8 bg-[#0a0a0a] px-2 py-1 rounded text-xs font-bold text-blue-400 opacity-0 group-hover:opacity-100 whitespace-nowrap border border-blue-400/20">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. SERVICES FLOATING CARDS */}
        <div className="w-full mt-40 relative min-h-[600px] flex flex-col items-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-wide text-center mb-20 animate-float">
            Galactic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              Services
            </span>
          </h3>

          <div className="relative w-full max-w-6xl h-full flex flex-wrap md:block gap-8 md:gap-0">
            <div className="md:absolute top-0 left-[2%] bg-gray-900/30 backdrop-blur-xl w-full md:w-80 p-10 rounded-[2rem] border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] animate-float transition-all duration-500 group">
              <Code className="w-12 h-12 text-cyan-400 mb-6 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-transform duration-500" />
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                Web Development
              </h4>
              <p className="text-gray-400 leading-relaxed">
                High-performance, beautifully designed web applications tailored
                to your business needs.
              </p>
            </div>

            <div className="md:absolute top-[160px] right-[2%] bg-gray-900/30 backdrop-blur-xl w-full md:w-80 p-10 rounded-[2rem] border border-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] animate-float-reverse transition-all duration-500 group z-10">
              <Server className="w-12 h-12 text-emerald-400 mb-6 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-transform duration-500" />
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                MERN Stack Apps
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Full stack architecture leveraging MongoDB, Express.js, React,
                and Node.js beautifully linked.
              </p>
            </div>

            <div className="md:absolute top-[320px] left-[15%] bg-gray-900/30 backdrop-blur-xl w-full md:w-80 p-10 rounded-[2rem] border border-purple-500/20 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] animate-float-fast transition-all duration-500 group">
              <Layout className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] transition-transform duration-500" />
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                UI/UX Design
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Sleek, futuristic, and highly intuitive user interfaces designed
                to captivate your audience.
              </p>
            </div>

            <div className="md:absolute top-[480px] right-[15%] bg-gray-900/30 backdrop-blur-xl w-full md:w-80 p-10 rounded-[2rem] border border-blue-500/20 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] animate-float transition-all duration-500 group pb-10 mb-10 md:mb-0">
              <Smartphone className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-transform duration-500" />
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                Responsive Design
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Mobile-first fluid layouts ensuring an incredible user
                experience on any device size.
              </p>
            </div>
          </div>
        </div>

        {/* 5. WHY CHOOSE ME (GRAVITY BREAK GRID) */}
        <div className="w-full mt-24 md:mt-[35rem] mb-32 relative text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-20 tracking-tighter animate-float-reverse">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              Choose Me
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
            {[
              {
                title: "Clean Code",
                icon: <Code className="w-8 h-8" />,
                color: "text-cyan-400",
                border: "hover:border-cyan-400",
                shadow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]",
                bg: "bg-cyan-500/10",
              },
              {
                title: "Fast Delivery",
                icon: <Zap className="w-8 h-8" />,
                color: "text-yellow-400",
                border: "hover:border-yellow-400",
                shadow: "hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]",
                bg: "bg-yellow-500/10",
              },
              {
                title: "Modern UI",
                icon: <Layout className="w-8 h-8" />,
                color: "text-purple-400",
                border: "hover:border-purple-400",
                shadow: "hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]",
                bg: "bg-purple-500/10",
              },
              {
                title: "Scalable Apps",
                icon: <Layers className="w-8 h-8" />,
                color: "text-emerald-400",
                border: "hover:border-emerald-400",
                shadow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]",
                bg: "bg-emerald-500/10",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-gray-900/30 backdrop-blur-xl border border-gray-800/80 rounded-[2rem] p-10 flex flex-col items-center justify-center transform transition-all duration-500 hover:scale-[1.08] hover:rotate-3 ${item.shadow} ${item.border} group w-full ${i % 2 !== 0 ? "lg:translate-y-8" : ""}`}
              >
                <div
                  className={`mb-6 p-5 rounded-full ${item.bg} ${item.color} group-hover:scale-125 transition-transform duration-500`}
                >
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* 6. JOURNEY TIMELINE (FLOAT PATH) */}
        <div className="w-full relative mt-40 mb-40 text-center flex flex-col items-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-widest mb-28 animate-float">
            Journey{" "}
            <span className="text-cyan-400 font-light italic">Timeline</span>
          </h3>

          {/* Timeline Line */}
          <div className="absolute top-[180px] md:bottom-auto w-[2px] h-[80%] md:w-full md:h-[2px] bg-gradient-to-b md:bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-16 blur-[1px] rounded-full left-[28px] md:left-auto flex items-center shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>

          <div className="relative w-full flex flex-col md:flex-row justify-between pl-16 md:pl-0 space-y-24 md:space-y-0 text-left md:text-center mt-8 px-4 z-10">
            {[
              { title: "EEE Student", date: "2023", icon: <Command /> },
              { title: "IEEE Member", date: "2024", icon: <Star /> },
              { title: "MERN Developer", date: "2025", icon: <Database /> },
              { title: "Freelancer", date: "Present", icon: <Cpu /> },
            ].map((item, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-start md:items-center group w-full md:w-1/4 animate-float"
                style={{ animationDelay: `${i * 1.5}s` }}
              >
                {/* Floating Dot Node */}
                <div className="w-6 h-6 rounded-full bg-[#0a0a0a] border-[4px] border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)] absolute left-[-48px] top-1/2 -translate-y-1/2 md:top-[-45px] md:left-1/2 md:-translate-x-1/2 group-hover:scale-[1.8] group-hover:bg-cyan-400 transition-all duration-500"></div>
                <span className="text-cyan-400 font-mono font-bold text-sm tracking-widest bg-cyan-900/20 border border-cyan-400/30 px-3 py-1 rounded-full inline-block mb-4 md:-mt-24 absolute left-[-45px] top-[-35px] md:static md:mb-6 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                  {item.date}
                </span>
                <div className="bg-gray-900/60 backdrop-blur-xl w-full rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:-translate-y-3 transition-all duration-500">
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
