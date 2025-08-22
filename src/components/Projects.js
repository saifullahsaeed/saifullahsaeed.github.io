import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const projects = [
    {
      title: 'BudgetFlow - AI-Powered Budget Tracker',
      description: 'A comprehensive budget management mobile app with AI assistance, expense tracking, and personalized financial insights.',
      image: '/img/port1.jpg',
      tech: ['Flutter', 'AI/ML', 'LLM APIs', 'Financial Tech'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Mobile App'
    },
    {
      title: 'FormJem - Form Builder Platform',
      description: 'A drag-and-drop form builder with marketing platform integrations for lead generation and business automation.',
      image: '/img/port2.jpg',
      tech: ['React.js', 'Node.js', 'Marketing APIs', 'Lead Generation'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web App'
    },
    {
      title: 'Modern E-commerce Platform',
      description: 'A full-featured e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.',
      image: '/img/port3.jpg',
      tech: ['Next.js', 'Django', 'Stripe API', 'Analytics'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'E-commerce'
    },
    {
      title: 'AI-Powered Chat Assistant',
      description: 'An intelligent chatbot with natural language processing capabilities, integrated with multiple AI services for enhanced user experience.',
      image: '/img/port4.jpg',
      tech: ['Python', 'OpenAI API', 'NLP', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'AI/ML'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management platform with real-time updates, team collaboration features, and progress tracking.',
      image: '/img/port5.jpg',
      tech: ['React.js', 'Socket.io', 'MongoDB', 'Real-time'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web App'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and featuring smooth animations and professional design.',
      image: '/img/port6.jpg',
      tech: ['React.js', 'Framer Motion', 'CSS3', 'Responsive'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Design'
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my best work across different technologies and domains
          </p>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <div className="project-category">
                    <span>{project.category}</span>
                  </div>
                  <div className="project-links">
                    <motion.a 
                      href={project.liveUrl} 
                      className="project-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaEye />
                    </motion.a>
                    <motion.a 
                      href={project.githubUrl} 
                      className="project-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects CTA */}
        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="cta-content">
            <h3 className="cta-title">Want to see more?</h3>
            <p className="cta-description">
              Check out my GitHub for more projects and contributions
            </p>
            <motion.a 
              href="https://github.com/saifullahsaeed"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View GitHub</span>
              <FaExternalLinkAlt />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
