import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './Contact.css'

const WEB3FORMS_ACCESS_KEY = '6e2ca98b-896e-4334-903e-48f20144dc04'

function Contact() {
  const [result, setResult] = useState('')
  const [searchParams] = useSearchParams()
  const redirectTo = searchParams.get('redirect') || ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    setResult('Enviando...')
    const formData = new FormData(e.target)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', 'Novo contato - Portfólio Luna')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setResult('Mensagem enviada com sucesso!')
        e.target.reset()
        if (redirectTo) {
          setTimeout(() => {
            window.location.href = redirectTo
          }, 1500)
        }
      } else {
        setResult('Erro ao enviar')
      }
    } catch {
      setResult('Erro de conexão')
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-box glass">
          <h2 className="section-title">Vamos <span className="highlight">Criar?</span></h2>
          <p>Tem um projeto em mente? Entre em contato e vamos fazer acontecer.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Seu Nome" required />
            </div>
            <div className="form-group">
              <input type="tel" name="whatsapp" placeholder="Seu WhatsApp" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Seu Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Fale sobre seu projeto" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary glow-effect">Enviar Mensagem</button>
            {result && <p className="form-result">{result}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact