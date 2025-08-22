import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Saifullah Saeed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
