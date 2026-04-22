import { useEffect } from 'react'
import './Cursor.css'

function Cursor() {
  useEffect(() => {
    const cursorDot = document.getElementById('cursor-dot')
    const cursorOutline = document.getElementById('cursor-outline')

    if (!cursorDot || !cursorOutline) return

    const handleMouseMove = (e) => {
      cursorDot.style.left = `${e.clientX}px`
      cursorDot.style.top = `${e.clientY}px`
      
      cursorOutline.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
      }, { duration: 500, fill: 'forwards' })
    }

    const handleMouseEnter = () => {
      cursorOutline.style.width = '60px'
      cursorOutline.style.height = '60px'
      cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
    }

    const handleMouseLeave = () => {
      cursorOutline.style.width = '30px'
      cursorOutline.style.height = '30px'
      cursorOutline.style.backgroundColor = 'transparent'
    }

    const interactiveElements = document.querySelectorAll('a, button, .project-card, input, textarea')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" id="cursor-dot"></div>
      <div className="cursor-outline" id="cursor-outline"></div>
    </>
  )
}

export default Cursor