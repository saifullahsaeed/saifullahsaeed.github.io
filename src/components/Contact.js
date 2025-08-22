import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'saifullahsaeed.work@gmail.com',
      link: 'mailto:saifullahsaeed.work@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+966 568584158',
      link: 'tel:+966568584158'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'As Sulay, Riyadh, Saudi Arabia',
      link: null
    },
    {
      icon: FaGlobe,
      title: 'Website',
      value: 'saifullahsaeed.github.io',
      link: 'https://saifullahsaeed.github.io'
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://linkedin.com/in/saifullahsaeed', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/saifullahsaeed', label: 'GitHub' },
    { icon: FaTwitter, url: 'https://twitter.com/saifullahsaeed', label: 'Twitter' }
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
            Let's work together on your next project. I'm always open to new opportunities!
          </p>
        </motion.div>
        
        <div className="contact-content">
          {/* Contact Info */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-description">
              Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
            </p>
            
            <motion.div 
              className="contact-items"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="contact-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="contact-icon">
                    <info.icon />
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-title">{info.title}</h4>
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

            {/* Social Links */}
            <motion.div 
              className="social-links"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="social-title">Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="form-title">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-textarea"
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
