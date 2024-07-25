import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Mainlogo from '../assets/images/logo.webp';
import '../assets/css/header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
              <Link to="/music/" className="logo logobefore">
                <img src={Mainlogo} alt="Main Logo"  />
              </Link>
            </div>
            <div className="col-md-10 text-right">
              <div className={`menuWrap ${isOpen ? 'open' : ''}`}>
                <ul className="menu">
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/music/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="music/about/">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="music/academic-offerings/">Academic Offerings</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="music/music-room/">Music Room</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="music/events/">Events</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="music/student-works/">Students Work</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="music/contact/">Contact Us</Link>
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
