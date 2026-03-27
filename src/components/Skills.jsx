import React from 'react';
import { Cpu, Server, Database, Palette, Terminal, Code2, Layers, Laptop, Shield } from 'lucide-react';
import { skills } from '../data/skills';

// Map icon strings to actual Lucide-React components
const iconMap = {
  react: Code2,
  server: Server,
  database: Database,
  palette: Palette,
  terminal: Terminal,
  cpu: Cpu,
  layers: Layers,
  laptop: Laptop,
  shield: Shield
};

const Skills = () => {
  return (
    <section id="skills" className="relative w-full min-h-screen bg-[#0a0a0a] text-white py-32 px-6 lg:px-12 overflow-hidden flex flex-col items-center">
      
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-cyan-500/10 blur-[150px] mix-blend-screen animate-pulse-glow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-emerald-500/10 blur-[150px] mix-blend-screen animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        {/* Subtle Stars/Dots */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        
        {/* HEADING SECTION */}
        <div className="text-center mb-32 flex flex-col items-center relative animate-float">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 relative inline-block">
            Skills
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] rounded-full"></span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light mt-8 tracking-wide">
            Technologies I work with to build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-medium">future</span>
          </p>
        </div>

        {/* CONDITIONAL RENDERING */}
        {skills.length === 0 ? (
          /* EMPTY STATE UI */
          <div className="w-full flex justify-center items-center mt-10 animate-float-reverse">
             <div className="bg-gray-900/30 backdrop-blur-3xl border border-cyan-500/30 px-16 py-20 rounded-[3rem] flex flex-col items-center text-center shadow-[0_0_60px_rgba(34,211,238,0.15)] hover:shadow-[0_0_80px_rgba(34,211,238,0.3)] hover:border-cyan-400 transition-all duration-700 hover:-translate-y-4">
               <Cpu className="w-24 h-24 text-cyan-400 mb-8 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)] animate-pulse" style={{ animationDuration: '3s' }} />
               <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Skills are evolving...</h3>
               <p className="text-cyan-400 text-xl font-medium tracking-widest uppercase">Gathering Intel 🚀</p>
             </div>
          </div>
        ) : (
          /* FLOATING CLUSTER LAYOUT (Antigravity Style) */
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-12 md:gap-x-12 max-w-5xl w-full mx-auto pb-32">
            {skills.map((skill, i) => {
               const IconComponent = iconMap[skill.icon] || Cpu;

               // Highly organic scatter logic mapped deterministically by index
               const translateYOffsets = [
                 'md:translate-y-0',
                 'md:-translate-y-16', 
                 'md:translate-y-12', 
                 'md:-translate-y-8', 
                 'md:translate-y-24', 
                 'md:-translate-y-24',
                 'md:translate-y-16',
                 'md:-translate-y-4'
               ];
               const floatAnimations = [
                 'animate-float',
                 'animate-float-reverse',
                 'animate-float-fast'
               ];

               const yOffset = translateYOffsets[i % translateYOffsets.length];
               const floatAnim = floatAnimations[i % floatAnimations.length];

               // Conditional glow logic based on assigned color
               const borderColors = {
                 cyan: 'hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]',
                 emerald: 'hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
                 purple: 'hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
                 blue: 'hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
                 yellow: 'hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]',
                 pink: 'hover:border-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]',
               };
               
               const hoverBorder = borderColors[skill.color] || borderColors.cyan;

               return (
                  <div 
                     key={skill.id} 
                     className={`relative group w-44 md:w-56 flex flex-col items-center justify-center bg-gray-900/40 backdrop-blur-2xl border border-gray-800 rounded-[2.5rem] p-8 md:p-10 transition-all duration-700 transform hover:scale-[1.15] hover:rotate-3 ${hoverBorder} ${yOffset} ${floatAnim} cursor-pointer z-10 hover:z-50`}
                     style={{ animationDelay: `${i * 0.4}s` }}
                  >
                     {/* Inner Glow Base */}
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity duration-700 pointer-events-none"></div>
                     
                     {/* The Icon */}
                     <div className="relative z-10 mb-6 p-4 rounded-3xl bg-black/50 border border-gray-700/50 group-hover:border-transparent transition-colors duration-500">
                        <IconComponent className="w-12 h-12 text-gray-400 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                        {/* Core glow behind icon */}
                        <div className={`absolute inset-0 rounded-3xl blur-[15px] opacity-0 group-hover:opacity-60 transition-opacity duration-500 bg-${skill.color || 'cyan'}-500`} style={{ zIndex: -1 }}></div>
                     </div>

                     {/* Text Block */}
                     <div className="relative flex flex-col items-center text-center z-10 space-y-3">
                       <h3 className="text-xl md:text-2xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300 drop-shadow-sm">{skill.name}</h3>
                       <span className="text-xs md:text-sm font-semibold tracking-widest uppercase bg-black/60 px-3 py-1.5 rounded-full border border-gray-700 group-hover:border-gray-500 text-gray-400 group-hover:text-white transition-all duration-500">
                          {skill.level}
                       </span>
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

export default Skills;
