import { useState } from 'react';
import { Link } from 'react-router-dom'

import './Nav.css'
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Nav() {
  const [active, setActive] = useState(false)

  const toggleButton = (e) => {
    e.preventDefault();
    setActive(!active);
  }

  return (
    <nav className='nav'>
      <div className='nav-logo'>
        <Link to="/" className="logo">pH</Link>
      </div>

      <div className="nav-links-container">
        <ul id={active ? 'linksActive' : ''} className='nav-links'>
          <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
            <li>about</li>
          </Link>
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf6GCtwXjkJ8gYDHEV-DIYm0MG3ePEr8wyy2eie_HTJwpsLlQ/viewform?usp=sf_link" style={{ textDecoration: 'none', color: 'black' }}>
            <li>contact</li>
          </Link>
          <Link to="https://docs.google.com/document/d/1Wdv9sAmA9bY5EdefQM3Yuj-IdR5S0lzoreggjQcCRDw/edit" style={{ textDecoration: 'none', color: 'black' }}>
            <li>resume</li>
          </Link>
        </ul>
      </div>
      
      <div className="nav-socials-container">
        <ul id={active ? 'socialsActive' : ''} className='nav-socials'>
          <li>
            <Link to={`https://github.com/heramil`} style={{ textDecoration: 'none', color: 'black' }}>
              <i class="bi bi-github"></i>
            </Link>
          </li>
          <li>
            <Link to={`https://www.instagram.com/pheramil/`} style={{ textDecoration: 'none', color: 'black' }}>
              <i class="bi bi-instagram"></i>
            </Link>
          </li>
          <li>
            <Link to={`https://www.linkedin.com/in/prakash-heramil/`} style={{ textDecoration: 'none', color: 'black' }}>
              <i class="bi bi-linkedin"></i>
            </Link>
          </li>
          <li>
            <Link to={`https://twitter.com/pheramil`} style={{ textDecoration: 'none', color: 'black' }}>
              <i class="bi bi-twitter"></i>
            </Link>
          </li>
        </ul>
      </div>

      <a href="" className="nav-burger" onClick={toggleButton}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </a>
    </nav>
  )
}

