import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleTrails from './components/ParticleTrails'

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-400/30 selection:text-cyan-200 relative">
      <ParticleTrails />
      <Navbar />
      <main className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App