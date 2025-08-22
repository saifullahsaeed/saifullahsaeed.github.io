import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub, FaEye, FaMobile } from 'react-icons/fa';
import ProjectDetails from './ProjectDetails';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'FormJem - Form Builder Platform',
      description: 'A drag-and-drop form builder with marketing platform integrations for lead generation and business automation.',
      image: '/img/port1.jpg',
      tech: ['React.js', 'Node.js', 'Marketing APIs', 'Lead Generation'],
      liveUrl: 'https://formjem.com',
      githubUrl: null,
      category: 'Web App',
      type: 'live'
    },
    {
      title: 'Habbitable - Habit Tracking App',
      description: 'A Flutter-based mobile application for habit tracking with separate backend and frontend architecture.',
      image: '/img/port2.jpg',
      tech: ['Flutter', 'NestJS', 'TypeScript', 'Mobile Development'],
      liveUrl: null,
      githubUrl: {
        frontend: 'https://github.com/saifullahsaeed/habbitable',
        backend: 'https://github.com/saifullahsaeed/habit-planner'
      },
      category: 'Mobile App',
      type: 'github'
    },
    {
      title: 'BudgetFlow - AI-Powered Budget Tracker',
      description: 'A comprehensive budget management mobile app with AI assistance, expense tracking, and personalized financial insights.',
      image: '/img/port3.jpg',
      tech: ['Flutter', 'AI/ML', 'Financial Tech', 'Play Store'],
      liveUrl: 'https://play.google.com/store/apps/details?id=com.pynese.expense_tracker',
      githubUrl: null,
      category: 'Mobile App',
      type: 'playstore'
    },
    {
      title: 'RootTask - Task Management System',
      description: 'A Next.js-based task management system with React Flow integration, allowing users to create parent-child card relationships and team collaboration.',
      image: '/img/port4.jpg',
      tech: ['Next.js', 'React Flow', 'Task Management', 'Team Collaboration'],
      liveUrl: 'https://roottask.vercel.app',
      githubUrl: 'https://github.com/saifullahsaeed/roottask',
      category: 'Web App',
      type: 'live'
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
              onClick={() => setSelectedProject(project)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <div className="project-category">
                    <span>{project.category}</span>
                  </div>
                  <div className="project-links">
                    {project.liveUrl && (
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
                    )}
                    {project.githubUrl && typeof project.githubUrl === 'string' && (
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
                    )}
                    {project.githubUrl && typeof project.githubUrl === 'object' && (
                      <motion.a 
                        href={project.githubUrl.frontend} 
                        className="project-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title="Frontend Repository"
                      >
                        <FaGithub />
                      </motion.a>
                    )}
                    {project.type === 'playstore' && (
                      <motion.a 
                        href={project.liveUrl} 
                        className="project-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title="Available on Play Store"
                      >
                        <FaMobile />
                      </motion.a>
                    )}
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
                {project.githubUrl && typeof project.githubUrl === 'object' && (
                  <div className="project-repos">
                    <a href={project.githubUrl.frontend} target="_blank" rel="noopener noreferrer" className="repo-link">
                      Frontend Repository
                    </a>
                    <a href={project.githubUrl.backend} target="_blank" rel="noopener noreferrer" className="repo-link">
                      Backend Repository
                    </a>
                  </div>
                )}
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

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetails 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
