import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">REWE</span>
            <p className="footer-tagline">Deinen Traum</p>
          </div>
          <div className="footer-links">
            <Link to="/option4" className="footer-link">Entwurf</Link>
            <Link to="/galerie" className="footer-link">Galerie</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} REWE. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
