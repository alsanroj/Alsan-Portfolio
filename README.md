# Alsan Roj — Portfolio Website

A modern, cyber-themed portfolio showcasing a MERN Stack Developer with subtle cyber UI elements, ultra-smooth interactions, and mobile-first responsiveness.

---

## 🔧 Key Features

- Cyber Loading Screen (glitch text, scanner + progress bar) with Framer Motion fade-out ✅
- Hero section with ultra-smooth 3D image tilt and rotating double-ring cyber border ✅
- Reusable Skill cards (glassmorphism) with tilt interactions and responsive sizing ✅
- Experience timeline with responsive, mobile-friendly layout and power-line visuals ✅
- Projects, Contact form (EmailJS-ready), Footer with LinkedIn & GitHub links ✅
- Subtle scanline overlay for cyber aesthetic and mobile optimizations ✅

---

## 🧰 Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- @react-three/fiber (Three.js for background/particles)
- Lucide icons

---

## 🚀 Getting Started

Clone and install:

```bash
git clone <your-repo-url>
cd Portfolio
npm install
```

Run dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview build locally:

```bash
npm run preview
```

---

## 🗂 Important Files

- `src/App.jsx` — App shell, loader integration, background overlays
- `src/index.css` — Global styles, loader/glitch/scanline styles
- `src/components/Loader.jsx` — Cyber loading screen component
- `src/components/Hero.jsx` — Hero layout, CTA buttons, 3D profile image
- `src/components/TiltCard.jsx` — Reusable tilt wrapper (disables on touch)
- `src/components/SkillCard.jsx` — Reusable skill card (glassmorphism)
- `src/components/Skills.jsx` — Skills section and layout
- `src/components/Experience.jsx` — Timeline (Loremore, Codesoft) and mobile behavior
- `src/components/Contact.jsx` — Contact form and submit handling
- `src/components/Footer.jsx` — Social links (LinkedIn & GitHub) and tagline

---

## ⚙️ Customization & Tips

- Loader timing: adjust `duration` in `src/components/Loader.jsx` for minimum display time.
- Tilt behavior: `src/components/TiltCard.jsx` uses media queries to disable tilt on touch devices (`(hover: hover) and (pointer: fine)`). Tweak `stiffness`/`damping` there to change the "spring" feel.
- Skill cards: change sizes or layout in `src/components/SkillCard.jsx` and `src/components/Skills.jsx` (uses `flex-wrap` + responsive sizes).
- Hero image: outer ring, glow and rotation are set in `src/components/Hero.jsx` — adjust durations and shadows there.
- Scanlines & glitch intensity: edit `src/index.css` (`.scanlines`, `.glitch` keyframes) to increase/decrease visual noise.

---

## 📱 Mobile & Accessibility

- Buttons are full-width on mobile (`w-full sm:w-auto`) for better thumb reach.
- Timeline collapses to a single-column vertical layout on small screens to avoid overflow.
- Tilt interactions are disabled on touch devices to prevent motion lag.
- Consider adding `aria-label` attributes to skill and CTA elements for screen readers.

---

## ✅ Build Notes

- Dev: `npm run dev` (hot reload)
- Prod build: `npm run build`
- If bundle size is a concern, consider code-splitting heavy modules (Three.js, large components) via dynamic `import()`.

---

## 👤 Author / Contact

Alsan Roj — MERN Stack Developer

- GitHub: `https://github.com/alsanroj` (see `src/components/Footer.jsx`)
- LinkedIn: `https://linkedin.com/in/alsan-roj-a-a01116295`

---

## License

MIT — feel free to reuse and adapt (please keep attribution).

---

If you'd like, I can also add a short `CONTRIBUTING.md` or examples for quick edits (exact lines to tweak for tilt, loader, scanline intensity).
