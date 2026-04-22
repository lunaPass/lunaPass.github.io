import { useState, useEffect, useRef } from 'react'
import './About.css'

function About() {
  const statsRef = useRef(null)
  const [statsAnimated, setStatsAnimated] = useState(false)
  const stats = [
    { target: 500, label: 'Videos Editados' },
    { target: 10, label: 'M+ Visualizaciones' },
    { target: 50, label: 'Clientes Felices' },
  ]
  const [displayed, setDisplayed] = useState(stats.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !statsAnimated) {
        setStatsAnimated(true)
      }
    }, { threshold: 0.1 })
    
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [statsAnimated])

  useEffect(() => {
    if (!statsAnimated) return
    
    stats.forEach((stat, index) => {
      const duration = 2000
      const increment = stat.target / (duration / 16)
      let current = 0
      
      const updateCounter = () => {
        current += increment
        if (current < stat.target) {
          setDisplayed(prev => {
            const newArr = [...prev]
            newArr[index] = Math.ceil(current)
            return newArr
          })
          requestAnimationFrame(updateCounter)
        } else {
          setDisplayed(prev => {
            const newArr = [...prev]
            newArr[index] = stat.target
            return newArr
          })
        }
      }
      updateCounter()
    })
  }, [statsAnimated])

  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-text">
          <h2 className="section-title">Sobre <span className="highlight">Mí</span></h2>
          <p>Más que solo cortar videos, creo experiencias. Con 5 años de experiencia, entiendo el lenguaje de internet y lo que hace que un espectador se quede hasta el final.</p>
          <div className="stats-grid" ref={statsRef}>
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{displayed[index]}{index === 1 ? 'M+' : '+'}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-visual">
          <div className="visual-box glass">
            <div className="software-icon">PR</div>
            <div className="software-icon">AE</div>
            <div className="software-icon">PS</div>
            <div className="software-icon">AU</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About