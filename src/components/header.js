import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Mainlogo from '../assets/images/logo.webp';
import '../assets/css/header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsOpen(false); // Optional: close the menu on link click
    console.log(`Active link set to: ${path}`);
  };

  return (
    <header>
      <div className="main-header">
        <div className="container">
          <div 
            className={`menu-Bar ${isOpen ? 'open' : ''}`} 
            onClick={toggleMenu} 
            role="button" 
            aria-label="Toggle menu" 
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="row">
            <div className="col-md-2 position-relative">
              <Link to="/" className="logo logobefore">
                <img src={Mainlogo} alt="Main Logo" />
              </Link>
            </div>
            <div className="col-md-10 text-right">
              <div className={`menuWrap ${isOpen ? 'open' : ''}`}>
                <ul className="menu">
                  <li className="nav-item">
                    <Link 
                      className={`nav-link text-white ${activeLink === '/' ? 'active' : ''}`} 
                      to="/" 
                      onClick={() => handleLinkClick('/')}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link text-white ${activeLink === '/about' ? 'active' : ''}`} 
                      to="/about" 
                      onClick={() => handleLinkClick('/about')}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link text-white ${activeLink === '/academic-offerings' ? 'active' : ''}`} 
                      to="/academic-offerings" 
                      onClick={() => handleLinkClick('/academic-offerings')}
                    >
                      Academic Offerings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link text-white ${activeLink === '/music-room' ? 'active' : ''}`} 
                      to="/music-room" 
                      onClick={() => handleLinkClick('/music-room')}
                    >
                      Music Room
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link text-white ${activeLink === '/events' ? 'active' : ''}`} 
                      to="/events" 
                      onClick={() => handleLinkClick('/events')}
                    >
                      Events
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link text-white ${activeLink === '/student-works' ? 'active' : ''}`} 
                      to="/student-works" 
                      onClick={() => handleLinkClick('/student-works')}
                    >
                      Students Work
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link text-white ${activeLink === '/contact' ? 'active' : ''}`} 
                      to="/contact" 
                      onClick={() => handleLinkClick('/contact')}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
        className={`overlay ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu} 
        role="button" 
        aria-label="Close menu"
      ></div>
    </header>
  );
};

export default Header;
