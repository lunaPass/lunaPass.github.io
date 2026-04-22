import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">V/EDITOR</div>
        <p>&copy; {year} Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="#">YT</a>
          <a href="#">IG</a>
          <a href="#">TW</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer