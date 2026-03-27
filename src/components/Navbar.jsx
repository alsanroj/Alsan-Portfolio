import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-cyan-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 z-50">
            <a
              href="#"
              className="group flex items-center gap-2 text-2xl font-bold tracking-tighter text-white"
            >
              <Terminal className="w-7 h-7 text-cyan-400 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              <span className="relative">
                Alsan
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              </span>
              <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                Roj
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide group"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-cyan-400 rounded-full transition-all duration-300 ease-out group-hover:w-full group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
              </a>
            ))}
          </div>

          {/* Right Section CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-cyan-400 transition-all duration-300 bg-transparent border-2 border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] group overflow-hidden"
            >
              <span className="relative z-10 font-bold transition-transform duration-300 group-hover:scale-105">
                Let's Connect
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-gray-300 hover:text-cyan-400 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-7 h-7 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-7 h-7 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/98 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center min-h-screen ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 w-full px-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
              style={{
                transform: isOpen ? "translateY(0)" : "translateY(40px)",
                opacity: isOpen ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms`,
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 px-8 py-3.5 text-lg font-bold text-black bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transform hover:-translate-y-1 transition-all duration-300"
            style={{
              transform: isOpen ? "translateY(0)" : "translateY(40px)",
              opacity: isOpen ? 1 : 0,
              transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${navLinks.length * 100}ms`,
            }}
          >
            Let's Connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
