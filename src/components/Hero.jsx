import { useRef, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const hero = heroRef.current
      if (hero) {
        hero.style.setProperty('--x', `${e.clientX}px`)
        hero.style.setProperty('--y', `${e.clientY}px`)
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <header id="hero" className="hero-section" ref={heroRef}>
      <div className="hero-light-effect"></div>
      <div className="hero-scan-light"></div>
      <div className="hero-bg-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="name-small">HELOÍSA</span>
          <span className="name-large">LUNA</span>
        </h1>
        <p className="hero-subtitle">Editora de video</p>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary">Contacto</a>
          <a href="#work" className="btn-secondary">Portafolio</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </div>
    </header>
  )
}

export default Hero