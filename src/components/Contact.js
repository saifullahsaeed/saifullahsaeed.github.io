import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'saifullahsaeed.work@gmail.com',
      link: 'mailto:saifullahsaeed.work@gmail.com',
      color: '#ea4335'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+966 568584158',
      link: 'tel:+966568584158',
      color: '#25d366'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'As Sulay, Riyadh, Saudi Arabia',
      link: null,
      color: '#ff6b6b'
    },
    {
      icon: FaGlobe,
      title: 'Website',
      value: 'saifullahsaeed.github.io',
      link: 'https://saifullahsaeed.github.io',
      color: '#667eea'
    }
  ];

  const socialLinks = [
    { 
      icon: FaLinkedin, 
      url: 'https://linkedin.com/in/saifullahsaeed', 
      label: 'LinkedIn',
      color: '#0077b5'
    },
    { 
      icon: FaGithub, 
      url: 'https://github.com/saifullahsaeed', 
      label: 'GitHub',
      color: '#333'
    },
    { 
      icon: FaTwitter, 
      url: 'https://twitter.com/saifullahsaeed', 
      label: 'Twitter',
      color: '#1da1f2'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to collaborate? Let's discuss your next project
          </p>
        </motion.div>
        
        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="contact-info-section">
            <motion.div 
              className="contact-info-grid"
              variants={itemVariants}
            >
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="contact-card"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="contact-icon" style={{ backgroundColor: info.color }}>
                    <info.icon />
                  </div>
                  <div className="contact-details">
                    <h3 className="contact-title">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="contact-value"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="contact-value">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="social-section"
            variants={itemVariants}
          >
            <h3 className="social-title">Connect With Me</h3>
            <p className="social-subtitle">
              Follow me on social media for updates and insights
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url} 
                  className="social-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ '--social-color': social.color }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
