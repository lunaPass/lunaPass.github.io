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

const MESSAGES = {
  pt: 'Olá! Vim pelo seu portfólio e gostaria de fazer um orçamento.',
  es: '¡Hola! Vi tu portafolio y me gustaría hacer un presupuesto.',
  en: 'Hello! I saw your portfolio and would like to get a quote.',
}

function App() {
  const [chatMessage, setChatMessage] = useState(MESSAGES.pt)

  useEffect(() => {
    const lang = navigator.language.split('-')[0]
    setChatMessage(MESSAGES[lang] || MESSAGES.pt)
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
        phoneNumber="819994123995"
        accountName="HELOÍSA LUNA"
        avatar="/hl-avatar.png"
        chatboxMessage={chatMessage}
        notification={true}
        notificationDelay={30}
      />
    </>
  )
}

export default App