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
      title: 'FormJem',
      subtitle: 'Advanced Form Builder Platform',
      description: 'Transform your lead generation with this powerful drag-and-drop form builder. Seamlessly integrates with major marketing platforms including Facebook, TikTok, and Google Ads.',
      image: '/img/port1.jpg',
      tech: ['React.js', 'Node.js', 'Marketing APIs', 'Lead Generation'],
      liveUrl: 'https://formjem.com',
      githubUrl: null,
      category: 'SaaS Platform',
      type: 'live',
      status: 'Live & Active'
    },
    {
      title: 'Habbitable',
      subtitle: 'Smart Habit Tracking App',
      description: 'A beautifully crafted Flutter mobile app that helps users build lasting habits. Features real-time synchronization and comprehensive progress analytics.',
      image: '/img/port2.jpg',
      tech: ['Flutter', 'NestJS', 'TypeScript', 'Real-time Sync'],
      liveUrl: null,
      githubUrl: {
        frontend: 'https://github.com/saifullahsaeed/habbitable',
        backend: 'https://github.com/saifullahsaeed/habit-planner'
      },
      category: 'Mobile App',
      type: 'github',
      status: 'Open Source'
    },
    {
      title: 'BudgetFlow',
      subtitle: 'AI-Powered Financial Assistant',
      description: 'Revolutionary budget tracking app with AI-driven insights. Provides personalized financial advice and optimization suggestions to help users achieve their financial goals.',
      image: '/img/port3.jpg',
      tech: ['Flutter', 'AI/ML', 'OpenAI API', 'Financial Analytics'],
      liveUrl: 'https://play.google.com/store/apps/details?id=com.pynese.expense_tracker',
      githubUrl: null,
      category: 'FinTech App',
      type: 'playstore',
      status: 'Published'
    },
    {
      title: 'RootTask',
      subtitle: 'Visual Task Management System',
      description: 'Next-generation task management with React Flow visualization. Create complex workflows with parent-child relationships and collaborate with your team in real-time.',
      image: '/img/port4.jpg',
      tech: ['Next.js', 'React Flow', 'Real-time Collaboration', 'Workflow Engine'],
      liveUrl: 'https://roottask.vercel.app',
      githubUrl: 'https://github.com/saifullahsaeed/roottask',
      category: 'Productivity Tool',
      type: 'live',
      status: 'Live Demo'
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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
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
            Real-world applications that solve complex problems and deliver exceptional user experiences
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
              onClick={() => handleProjectClick(project)}
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
                        onClick={(e) => e.stopPropagation()}
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
                        onClick={(e) => e.stopPropagation()}
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
                        onClick={(e) => e.stopPropagation()}
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
                        onClick={(e) => e.stopPropagation()}
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
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-status">{project.status}</span>
                </div>
                <h4 className="project-subtitle">{project.subtitle}</h4>
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
                    <a href={project.githubUrl.frontend} target="_blank" rel="noopener noreferrer" className="repo-link" onClick={(e) => e.stopPropagation()}>
                      Frontend Repository
                    </a>
                    <a href={project.githubUrl.backend} target="_blank" rel="noopener noreferrer" className="repo-link" onClick={(e) => e.stopPropagation()}>
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
