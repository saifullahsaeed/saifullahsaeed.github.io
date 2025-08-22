import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Saifullah Saeed</span>
            </h1>
            <h2 className="hero-subtitle">Senior Software Engineer</h2>
            <p className="hero-description">
              Crafting exceptional digital experiences with 6 years of expertise in full-stack development, 
              mobile applications, and AI integration. Passionate about building scalable solutions that drive business growth.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span>View My Work</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                <span>Get In Touch</span>
                <i className="fas fa-envelope"></i>
              </button>
            </div>
          </div>
          <div className="hero-image" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
            <div className="image-container">
              <img src="/img/mypic.jpg" alt="Saifullah Saeed" className="profile-image" />
              <div className="image-overlay"></div>
              <div className="floating-card">
                <i className="fas fa-code"></i>
                <span>6+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
