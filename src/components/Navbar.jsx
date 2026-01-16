import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          REWE
        </Link>
        <div className="navbar-links">
          <Link 
            to="/option4" 
            className={`navbar-link ${location.pathname === '/option4' ? 'active' : ''}`}
          >
            Entwurf
          </Link>
          <Link 
            to="/galerie" 
            className={`navbar-link ${location.pathname === '/galerie' ? 'active' : ''}`}
          >
            Galerie
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

