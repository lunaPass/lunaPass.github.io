import { useState } from 'react'
import './Work.css'

const projects = [
  { id: 1, title: 'Viral Lifestyle Short', category: 'shorts', desc: 'Edición dinámica para Instagram Reels' },
  { id: 2, title: 'Tech Review 2024', category: 'youtube', desc: 'Ritmo acelerado y motion graphics' },
  { id: 3, title: 'Gaming Highlights', category: 'shorts', desc: 'Efectos visuales y diseño de sonido' },
  { id: 4, title: 'Vlog de Viaje', category: 'youtube', desc: 'Color grading cinematográfico' },
]

function Work() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="work" className="work-section">
      <div className="container">
        <h2 className="section-title">Proyectos <span className="highlight">Recientes</span></h2>
        
        <div className="category-tabs">
          <button 
            className={`tab-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todos
          </button>
          <button 
            className={`tab-btn ${filter === 'shorts' ? 'active' : ''}`}
            onClick={() => setFilter('shorts')}
          >
            Shorts/Reels
          </button>
          <button 
            className={`tab-btn ${filter === 'youtube' ? 'active' : ''}`}
            onClick={() => setFilter('youtube')}
          >
            YouTube Largo
          </button>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className={`project-card ${project.category === 'shorts' ? 'vertical' : 'horizontal'}`}
            >
              <div className={`card-image placeholder-gradient-${project.id}`}>
                <div className="play-icon">▶</div>
              </div>
              <div className="card-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work