import React from 'react';
import { Terminal, Mail, MapPin, Heart, ArrowRight } from 'lucide-react';

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

const Footer = () => {
  const socials = [
    {
      icon: <GithubIcon className="w-5 h-5" />,
      href: "https://github.com/alsanroj",
      borderHover: "hover:border-cyan-400",
      textHover: "group-hover:text-cyan-400",
      shadowHover: "hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]",
      delay: "0.1s",
    },
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/alsan-roj/",
      borderHover: "hover:border-emerald-400",
      textHover: "group-hover:text-emerald-400",
      shadowHover: "hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]",
      delay: "0.3s",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:augstinaugustin5@gmail.com",
      borderHover: "hover:border-purple-400",
      textHover: "group-hover:text-purple-400",
      shadowHover: "hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]",
      delay: "0.5s",
    },
  ];

  return (
    <footer className="relative w-full bg-[#0a0a0a] text-white pt-24 pb-8 px-6 lg:px-12 overflow-hidden border-t border-gray-900">
      
      {/* GLOWING TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>

      {/* BACKGROUND PARTICLES & GLOW */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-20%] left-[15%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/5 blur-[120px] mix-blend-screen animate-pulse-glow"></div>
        <div className="absolute top-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-emerald-500/5 blur-[120px] mix-blend-screen animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)]" style={{ backgroundSize: '40px 40px' }}></div>
      </div>

      {/* FOOTER CONTENT (4 COLUMNS) */}
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 text-center md:text-left">
        
        {/* COLUMN 1: BRAND / ABOUT */}
        <div className="flex flex-col items-center md:items-start space-y-6 animate-float">
          <a href="#home" className="group flex items-center gap-2 text-3xl font-extrabold tracking-tighter text-white hover:text-cyan-400 transition-colors">
              <Terminal className="w-8 h-8 text-cyan-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-transform duration-300" />
              <span className="relative">
                Alsan Roj
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)] rounded-full"></span>
              </span>
          </a>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
            Building modern, scalable web experiences for businesses.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
            Focused on clean UI, performance, and real-world solutions.
          </p>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div className="flex flex-col items-center md:items-start space-y-5 animate-float-reverse">
          <h4 className="text-xl font-bold text-white mb-2 tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Quick Links</h4>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link, i) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="group relative text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 font-medium"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
               <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-cyan-400" />
               {link}
               <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(34,211,238,0.8)] rounded-full"></span>
            </a>
          ))}
        </div>

        {/* COLUMN 3: SERVICES */}
        <div className="flex flex-col items-center md:items-start space-y-5 animate-float">
          <h4 className="text-xl font-bold text-white mb-2 tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Services</h4>
          {['Web Development', 'MERN Stack Apps', 'UI/UX Design', 'Responsive Websites'].map(service => (
            <span key={service} className="text-gray-400 hover:text-emerald-400 hover:translate-x-2 transition-all duration-300 cursor-default font-medium">
               {service}
            </span>
          ))}
        </div>

        {/* COLUMN 4: CONTACT & SOCIAL */}
        <div className="flex flex-col items-center md:items-start space-y-6 animate-float-fast">
          <h4 className="text-xl font-bold text-white mb-2 tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Connect</h4>
          
          <div className="flex flex-col space-y-4">
            <a href="mailto:augstinaugustin5@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group font-medium">
              <Mail className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
              contact @ Alsan Roj
            </a>
            <div className="flex items-center gap-3 text-gray-400 cursor-default group hover:text-blue-400 transition-colors font-medium">
              <MapPin className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
              India
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            {socials.map((social, i) => (
              <a 
                key={i} 
                href={`${social.toLowerCase()}`}
                className={`p-3 md:p-4 rounded-full bg-gray-900/40 backdrop-blur-xl border border-gray-800 transition-all duration-500 hover:scale-[1.15] hover:-translate-y-2 ${social.borderHover} ${social.shadowHover} group animate-float-reverse`}
                style={{ animationDelay: social.delay }}
              >
                 <div className={`text-gray-400 transition-colors duration-500 ${social.textHover}`}>
                   {social.icon}
                 </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* DIVIDER LINE */}
      <div className="max-w-7xl mx-auto relative mt-24 mb-8 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.2)] animate-pulse-glow z-10"></div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center text-center gap-4 text-sm font-medium text-gray-500 animate-float">
         <p>© 2026 Alsan Roj. All rights reserved.</p>
         <p className="flex items-center gap-2 tracking-wide">
           Designed & Built with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" style={{ animationDuration: '1s' }} /> using <span className="text-cyan-400">React</span> & <span className="text-cyan-400">Tailwind</span>
         </p>
      </div>

    </footer>
  );
};

export default Footer;
