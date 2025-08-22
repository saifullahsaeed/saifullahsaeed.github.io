import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/saifullahsaeed', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/saifullahsaeed', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/saifullahsaeed', label: 'Twitter' }
  ];

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-grid"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          {/* Left Side - Text Content */}
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="badge-text">🚀 Available for opportunities</span>
            </motion.div>

            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Hi, I'm <span className="gradient-text">Saifullah Saeed</span>
            </motion.h1>

            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Senior Software Engineer
            </motion.h2>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Crafting exceptional digital experiences with 6 years of expertise in full-stack development, 
              mobile applications, and AI integration. Passionate about building scalable solutions that drive business growth.
            </motion.p>

            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </motion.div>

            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span>View My Work</span>
                <FaArrowDown />
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                <span>Get In Touch</span>
              </button>
            </motion.div>

            <motion.div 
              className="hero-social"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-container">
              <motion.img 
                src="/img/mypic.jpg" 
                alt="Saifullah Saeed" 
                className="profile-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="image-overlay"></div>
              
              <motion.div 
                className="floating-card experience-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="card-icon">💼</div>
                <div className="card-content">
                  <span className="card-title">Senior Developer</span>
                  <span className="card-subtitle">at Nyoko Inc</span>
                </div>
              </motion.div>

              <motion.div 
                className="floating-card tech-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="card-icon">⚡</div>
                <div className="card-content">
                  <span className="card-title">Full Stack</span>
                  <span className="card-subtitle">React • Node • Flutter</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <motion.div 
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaArrowDown />
          </motion.div>
          <span className="scroll-text">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
