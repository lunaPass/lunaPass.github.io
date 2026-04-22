import { useState, useEffect } from 'react'
import './Contact.css'

const WEB3FORMS_ACCESS_KEY = '6e2ca98b-896e-4334-903e-48f20144dc04'

const SUCCESS_MESSAGES = {
  pt: { title: 'Mensagem enviada!', text: 'Obrigada pelo contato. Responderei em breve.' },
  en: { title: 'Message sent!', text: 'Thanks for reaching out. I will get back to you soon.' },
  es: { title: '¡Mensaje enviado!', text: 'Gracias por contactarme. Te responderé pronto.' },
  fr: { title: 'Message envoyé!', text: 'Merci pour votre message. Je vous répondrai bientôt.' },
  de: { title: 'Nachricht gesendet!', text: 'Danke für Ihre Nachricht. Ich werde bald antworten.' },
}

const DEFAULT_LANG = 'pt'

function Contact() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [autoHideTimer, setAutoHideTimer] = useState(null)

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus)
    if (newStatus === 'success') {
      setShowSuccess(true)
      const timer = setTimeout(() => {
        setStatus('idle')
        setShowSuccess(false)
      }, 5000)
      setAutoHideTimer(timer)
    }
  }

  useEffect(() => {
    return () => {
      if (autoHideTimer) clearTimeout(autoHideTimer)
    }
  }, [autoHideTimer])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('contact') === 'success') {
      setShowSuccess(true)
      setTimeout(() => {
        window.history.replaceState({}, '', window.location.pathname)
      }, 3000)
    }
  }, [])

  const getSuccessMessage = () => {
    const lang = navigator.language.split('-')[0]
    return SUCCESS_MESSAGES[lang] || SUCCESS_MESSAGES[DEFAULT_LANG]
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
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
        handleStatusChange('success')
        e.target.reset()
      } else {
        handleStatusChange('error')
        setErrorMessage(data.message || 'Erro ao enviar')
      }
    } catch {
      handleStatusChange('error')
      setErrorMessage('Erro de conexão')
    }
  }

  const successMsg = getSuccessMessage()

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-box glass">
          <h2 className="section-title">Vamos <span className="highlight">Criar?</span></h2>
          <p>Tem um projeto em mente? Entre em contato e vamos fazer acontecer.</p>
          {showSuccess || status === 'success' ? (
            <div className="success-message">
              <div className="check-icon">
                <svg viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>{successMsg.title}</h3>
              <p>{successMsg.text}</p>
            </div>
          ) : (
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
              <button type="submit" className="btn-primary glow-effect" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <span className="btn-loading">
                    <span className="spinner"></span>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>
              {status === 'error' && <p className="form-result error">{errorMessage}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact