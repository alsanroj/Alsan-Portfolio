import React, { useEffect, useRef } from 'react';

const ParticleTrails = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Disable strictly on mobile for maximum performance priority
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
         if (window.innerWidth >= 768) setCanvasSize();
      }, 200);
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const MAX_PARTICLES = 40;
    const colors = ['#22d3ee', '#34d399']; // Soft neon blue, Emerald glow

    let mouse = {
      x: null,
      y: null,
      radius: 120 // Gravitational pull radius
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;

      // Spawn subtle trail gently around cursor
      if (particles.length < MAX_PARTICLES && Math.random() < 0.4) {
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        particles.push(new Particle(mouse.x + offsetX, mouse.y + offsetY, true));
      }
    };

    const handleMouseClick = (event) => {
      // Small controlled burst effect on click
      for (let i = 0; i < 6; i++) {
        if (particles.length < MAX_PARTICLES + 15) {
          particles.push(new Particle(event.clientX, event.clientY, false, true));
        }
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);
    window.addEventListener('mouseout', handleMouseLeave);

    class Particle {
      constructor(x, y, isTrail = false, isBurst = false) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 1; // Extremely small (1px to 2.5px) for premium feel
        this.baseSize = this.size;
        
        const speed = isBurst ? 3 : isTrail ? 0.5 : 0.2;
        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;

        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = isBurst ? 0.8 : isTrail ? 0.5 : 0.2;
        this.fadeRate = isBurst ? 0.02 : isTrail ? 0.01 : 0.002;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Soft Glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        
        ctx.fillStyle = `rgba(${this.hexToRgb(this.color)}, ${this.opacity})`;
        ctx.fill();
        
        ctx.shadowBlur = 0; // Reset for performance
      }

      update() {
        // Cursor Interaction (Gentle pull / swarm effect)
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            // Gentle acceleration towards mouse
            this.vx += (dx / distance) * force * 0.02;
            this.vy += (dy / distance) * force * 0.02;
          }
        }

        // Friction for Apple-level smooth deceleration
        this.vx *= 0.98;
        this.vy *= 0.98;

        // Apply velocity
        this.x += this.vx;
        this.y += this.vy;

        // Shrink slightly on disappear
        if (this.opacity < 0.2) {
           this.size = Math.max(0, this.size - 0.05);
        }

        // Fade out
        this.opacity -= this.fadeRate;

        // Idle floating logic - gently wrap around screen if drifting off
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? 
          `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
          : '255, 255, 255';
      }
    }

    // Initialize strict idle background particles
    for (let i = 0; i < 15; i++) {
       particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Maintain idle population gently
      if (particles.length < 15 && Math.random() < 0.02) {
         particles.push(new Particle());
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Cull dead particles
        if (particles[i].opacity <= 0 || particles[i].size <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[100] hidden md:block"
      style={{ opacity: 0.8 }}
    />
  );
};

export default ParticleTrails;
