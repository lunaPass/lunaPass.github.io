import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const WHATSAPP_MESSAGES = {
  pt: {
    chatboxMessage: 'Olá! Vim pelo seu portfólio e gostaria de fazer um orçamento.',
    chatMessage: 'Olá! Como posso te ajudar? 😊',
    statusMessage: 'Costumo responder em até 1 hora',
    placeholder: 'Digite uma mensagem...',
  },
  en: {
    chatboxMessage: 'Hello! I came through your portfolio and would like a quote.',
    chatMessage: 'Hello! How can I help you? 😊',
    statusMessage: 'Usually replies within 1 hour',
    placeholder: 'Type a message...',
  },
  es: {
    chatboxMessage: '¡Hola! Vine a través de tu portafolio y me gustaría un presupuesto.',
    chatMessage: '¡Hola! ¿Cómo puedo ayudarte? 😊',
    statusMessage: 'Normalmente respondo en 1 hora',
    placeholder: 'Escribe un mensaje...',
  },
  fr: {
    chatboxMessage: 'Bonjour! Je suis venu via votre portfolio et je voudrais un devis.',
    chatMessage: 'Bonjour! Comment puis-je vous aider? 😊',
    statusMessage: 'Je réponds généralement en 1 heure',
    placeholder: 'Tapez un message...',
  },
  de: {
    chatboxMessage: 'Hallo! Ich bin über Ihr Portfolio gekommen und möchte ein Angebot.',
    chatMessage: 'Hallo! Wie kann ich Ihnen helfen? 😊',
    statusMessage: 'Ich antworte normalerweise innerhalb von 1 Stunde',
    placeholder: 'Nachricht eingeben...',
  },
}

const DEFAULT_LANG = 'pt'

function App() {
  const [messages, setMessages] = useState(WHATSAPP_MESSAGES[DEFAULT_LANG])

  useEffect(() => {
    const lang = navigator.language.split('-')[0]
    setMessages(WHATSAPP_MESSAGES[lang] || WHATSAPP_MESSAGES[DEFAULT_LANG])
  }, [])

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
      <FloatingWhatsApp
        phoneNumber="5581994123995"
        accountName="HELOÍSA LUNA"
        avatar="/hl-avatar.png"
        chatboxMessage={messages.chatboxMessage}
        chatMessage={messages.chatMessage}
        statusMessage={messages.statusMessage}
        placeholder={messages.placeholder}
        notification={true}
        notificationDelay={30}
      />
    </>
  )
}

export default App