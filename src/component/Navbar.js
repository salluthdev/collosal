import { Link } from 'react-router-dom';
import Button from './Button';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" style={{textDecoration: 'none'}}>
        <div className="logo">
          <img src="img/logo.svg" />
          <h2>Collosal.</h2>
        </div>
      </Link>
      <nav>
        <ul>
          <Link to="/services" style={{textDecoration: 'none'}}>
            <li>Services</li>
          </Link>
          <Link to="/how-we-work" style={{textDecoration: 'none'}}>
            <li>How We Work</li>
          </Link>
          <Link to="/projects" style={{textDecoration: 'none'}}>
            <li>Projects</li>
          </Link>
          <Link to="/about" style={{textDecoration: 'none'}}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
      <div className="btn-contact">
        <Link to="/contact">
          <Button variant="light" size="small">Contact</Button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;