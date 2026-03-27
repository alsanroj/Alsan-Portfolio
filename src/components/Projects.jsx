import React from 'react';
import { ExternalLink, FolderOpen, Code2 } from 'lucide-react';
import { projects } from '../data/projects';

// Custom Github SVG Icon
const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="relative w-full min-h-screen bg-[#0a0a0a] text-white py-32 px-6 lg:px-12 overflow-hidden flex flex-col items-center">
      
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-cyan-500/10 blur-[150px] mix-blend-screen animate-pulse-glow"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-blue-500/10 blur-[150px] mix-blend-screen animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        {/* Subtle Stars/Dots */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        
        {/* HEADING SECTION */}
        <div className="text-center mb-20 md:mb-32 flex flex-col items-center relative animate-float-reverse">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 relative inline-block">
            Projects
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] rounded-full"></span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light mt-8 tracking-wide">
            Some of my recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-medium">stellar</span> work
          </p>
        </div>

        {/* CONDITIONAL RENDERING */}
        {projects.length === 0 ? (
          /* EMPTY STATE UI */
          <div className="w-full flex justify-center items-center mt-10 animate-float">
             <div className="bg-gray-900/30 backdrop-blur-2xl border border-cyan-500/20 px-12 py-16 rounded-[3rem] flex flex-col items-center text-center shadow-[0_0_60px_rgba(34,211,238,0.1)] hover:shadow-[0_0_80px_rgba(34,211,238,0.2)] hover:border-cyan-500/40 transition-all duration-500">
               <FolderOpen className="w-24 h-24 text-cyan-400 mb-8 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] animate-bounce" style={{ animationDuration: '3s' }} />
               <h3 className="text-4xl font-extrabold text-white mb-4 tracking-tight">No Projects Yet</h3>
               <p className="text-gray-400 text-xl font-light">Exciting projects are coming soon <span className="inline-block animate-pulse">🚀</span></p>
             </div>
          </div>
        ) : (
          /* PROJECT CARDS (Antigravity Style Grid Breakdown) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full pb-32">
            {projects.map((proj, i) => {
               // Dynamic floating stagger logic for "Gravity Break"
               const staggeredMargin = i % 3 === 0 ? 'lg:mt-0' : i % 3 === 1 ? 'lg:mt-24' : 'lg:mt-48';
               const floatAnimation = i % 2 === 0 ? 'animate-float' : 'animate-float-reverse';

               return (
                  <div key={proj.id} className={`group relative w-full flex flex-col bg-black/40 backdrop-blur-xl border border-gray-800 rounded-[2rem] overflow-hidden transition-all duration-700 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:border-cyan-400/60 transform hover:-translate-y-4 hover:scale-[1.02] ${staggeredMargin} ${floatAnimation}`} style={{ animationDelay: `${i * 0.5}s` }}>
                     
                     {/* Floating Glow Behind Card */}
                     <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                     {/* Project Image Box */}
                     <div className="h-64 relative overflow-hidden border-b border-gray-800">
                        {(!proj.image || proj.image === '') ? (
                           <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                              <Code2 className="w-16 h-16 text-gray-700" />
                           </div>
                        ) : (
                           <>
                             <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                             <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110" />
                           </>
                        )}
                     </div>

                     {/* Content Box */}
                     <div className="p-8 flex-1 flex flex-col relative z-20">
                        <div className="flex justify-between items-start mb-5">
                           <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-500 drop-shadow-sm">{proj.title}</h3>
                           
                           {/* Action Links */}
                           <div className="flex space-x-4 ml-4">
                              {proj.github && (
                                <a href={proj.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                                   <GithubIcon className="w-6 h-6"/>
                                </a>
                              )}
                              {proj.live && (
                                <a href={proj.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                                   <ExternalLink className="w-6 h-6"/>
                                </a>
                              )}
                           </div>
                        </div>

                        <p className="text-gray-400 mb-8 leading-relaxed font-light flex-1">{proj.description}</p>
                        
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                           {proj.tech.map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-3 py-1.5 text-xs font-semibold tracking-wide text-cyan-400 bg-cyan-400/5 border border-cyan-400/20 rounded-full group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 transition-colors duration-300">
                                 {tag}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               );
            })}
          </div>
        )}
        
      </div>
    </section>
  );
};

export default Projects;
