import React from 'react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/saifullahsaeed' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/saifullahsaeed' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/saifullahsaeed' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2024 Saifullah Saeed. All rights reserved.</p>
          </div>
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                className="social-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
