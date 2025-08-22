import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Saifullah</span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button className="nav-link" onClick={() => scrollToSection('home')}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => scrollToSection('about')}>
              About
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => scrollToSection('experience')}>
              Experience
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => scrollToSection('projects')}>
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link resume-btn" onClick={() => scrollToSection('resume')}>
              Resume
            </button>
          </li>
        </ul>
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
