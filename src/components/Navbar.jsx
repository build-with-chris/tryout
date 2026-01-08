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
            to="/" 
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Option 1
          </Link>
          <Link 
            to="/option2" 
            className={`navbar-link ${location.pathname === '/option2' ? 'active' : ''}`}
          >
            Option 2
          </Link>
          <Link 
            to="/option3" 
            className={`navbar-link ${location.pathname === '/option3' ? 'active' : ''}`}
          >
            Option 3
          </Link>
          <Link 
            to="/option4" 
            className={`navbar-link ${location.pathname === '/option4' ? 'active' : ''}`}
          >
            Option 4
          </Link>
          <Link 
            to="/gallerie" 
            className={`navbar-link ${location.pathname === '/gallerie' ? 'active' : ''}`}
          >
            Gallerie
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

