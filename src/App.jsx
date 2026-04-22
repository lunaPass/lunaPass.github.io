import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function App() {
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
        chatboxMessage="Olá! Vim pelo seu portfólio e gostaria de fazer um orçamento."
        notification={true}
        notificationDelay={30}
      />
    </>
  )
}

export default App