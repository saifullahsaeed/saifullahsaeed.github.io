import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'BudgetFlow - AI-Powered Budget Tracker',
      description: 'A comprehensive budget management mobile app with AI assistance, expense tracking, and personalized financial insights.',
      image: '/img/port1.jpg',
      tech: ['Flutter', 'AI/ML', 'LLM APIs', 'Financial Tech'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'FormJem - Form Builder Platform',
      description: 'A drag-and-drop form builder with marketing platform integrations for lead generation and business automation.',
      image: '/img/port2.jpg',
      tech: ['React.js', 'Node.js', 'Marketing APIs', 'Lead Generation'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Modern E-commerce Platform',
      description: 'A full-featured e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.',
      image: '/img/port3.jpg',
      tech: ['Next.js', 'Django', 'Stripe API', 'Analytics'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI-Powered Chat Assistant',
      description: 'An intelligent chatbot with natural language processing capabilities, integrated with multiple AI services for enhanced user experience.',
      image: '/img/port4.jpg',
      tech: ['Python', 'OpenAI API', 'NLP', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my best work</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card" 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay={index * 200}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
