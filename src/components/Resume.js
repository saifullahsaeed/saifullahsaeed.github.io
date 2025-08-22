import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload, FaFilePdf, FaEye } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const downloadPDF = () => {
    // For now, we'll just show an alert since html2pdf requires additional setup
    alert('PDF download functionality would be implemented here. For now, you can print this page or save as PDF.');
  };

  const viewResume = () => {
    // Open resume in new tab or modal
    window.open('/data/Saifullah-Saeed-Resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="resume" ref={ref}>
      <div className="resume-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">
            Download my detailed resume to learn more about my experience and skills
          </p>
        </motion.div>

        <motion.div 
          className="resume-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="resume-card">
            <div className="resume-icon">
              <FaFilePdf />
            </div>
            <div className="resume-info">
              <h3 className="resume-title">Saifullah Saeed - Resume</h3>
              <p className="resume-description">
                Comprehensive overview of my professional experience, technical skills, and achievements in software development.
              </p>
              <div className="resume-details">
                <span className="resume-detail">6+ Years Experience</span>
                <span className="resume-detail">Full-Stack Development</span>
                <span className="resume-detail">Mobile & Web Apps</span>
              </div>
            </div>
            <div className="resume-actions">
              <motion.button 
                className="btn btn-primary"
                onClick={downloadPDF}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                <span>Download PDF</span>
              </motion.button>
              <motion.button 
                className="btn btn-secondary"
                onClick={viewResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye />
                <span>View Online</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
