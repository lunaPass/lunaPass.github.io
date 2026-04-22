import './Contact.css'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Mensagem enviada! (backend required)')
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-box glass">
          <h2 className="section-title">Vamos <span className="highlight">Criar?</span></h2>
          <p>Tem um projeto em mente? Entre em contato e vamos fazer acontecer.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Seu Nome" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Seu Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Fale sobre seu projeto" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary glow-effect">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact