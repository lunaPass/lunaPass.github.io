import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

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
    </>
  )
}

export default App