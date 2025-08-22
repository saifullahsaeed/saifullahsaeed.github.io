import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaServer, FaCloud } from 'react-icons/fa';
import './ProjectDetails.css';

const ProjectDetails = ({ project, onClose }) => {
  const getProjectDetails = (projectTitle) => {
    const details = {
      'FormJem - Form Builder Platform': {
        overview: 'FormJem is a comprehensive form builder platform that enables businesses to create, manage, and analyze forms with advanced marketing integrations.',
        features: [
          'Drag-and-drop form builder with intuitive interface',
          'Marketing platform integrations (Facebook, TikTok, Google Ads)',
          'Lead generation and conversion tracking',
          'Real-time analytics and reporting',
          'Custom branding and white-label options',
          'API integrations for seamless workflow'
        ],
        techStack: {
          frontend: ['React.js', 'TypeScript', 'Tailwind CSS', 'React Hook Form'],
          backend: ['Node.js', 'Express.js', 'MongoDB', 'Redis'],
          integrations: ['Facebook Marketing API', 'Google Ads API', 'TikTok API', 'Stripe']
        },
        challenges: [
          'Implementing complex drag-and-drop functionality',
          'Integrating multiple marketing platform APIs',
          'Optimizing form performance for high traffic',
          'Ensuring data security and GDPR compliance'
        ],
        solutions: [
          'Used React DnD for smooth drag-and-drop experience',
          'Built modular API integration system',
          'Implemented caching and CDN for performance',
          'Added comprehensive data encryption and privacy controls'
        ]
      },
      'Habbitable - Habit Tracking App': {
        overview: 'A Flutter-based mobile application for habit tracking with a separate NestJS backend, featuring real-time synchronization and comprehensive analytics.',
        features: [
          'Habit creation and tracking with customizable categories',
          'Progress visualization with charts and statistics',
          'Real-time synchronization across devices',
          'Push notifications and reminders',
          'Social features for accountability',
          'Offline mode with data sync'
        ],
        techStack: {
          frontend: ['Flutter', 'Dart', 'Provider State Management', 'SQLite'],
          backend: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis'],
          deployment: ['Docker', 'Firebase', 'Google Cloud Platform']
        },
        challenges: [
          'Implementing real-time synchronization',
          'Managing offline data and conflict resolution',
          'Optimizing app performance on different devices',
          'Ensuring data consistency across platforms'
        ],
        solutions: [
          'Used WebSocket connections for real-time updates',
          'Implemented conflict resolution algorithms',
          'Optimized database queries and caching',
          'Built robust error handling and retry mechanisms'
        ]
      },
      'BudgetFlow - AI-Powered Budget Tracker': {
        overview: 'A comprehensive budget management mobile app with AI assistance, featuring expense tracking, financial insights, and personalized recommendations.',
        features: [
          'AI-powered expense categorization and insights',
          'Budget planning and goal setting',
          'Financial optimization suggestions',
          'Expense tracking with receipt scanning',
          'Investment tracking and portfolio management',
          'Personalized financial reports and analytics'
        ],
        techStack: {
          frontend: ['Flutter', 'Dart', 'GetX State Management', 'SQLite'],
          ai: ['OpenAI API', 'TensorFlow Lite', 'Natural Language Processing'],
          backend: ['Node.js', 'Express.js', 'MongoDB', 'Redis'],
          deployment: ['Google Play Store', 'Firebase', 'Google Cloud Platform']
        },
        challenges: [
          'Implementing AI-powered financial insights',
          'Ensuring data security for financial information',
          'Optimizing app performance with AI features',
          'Handling complex financial calculations accurately'
        ],
        solutions: [
          'Integrated OpenAI API for intelligent financial analysis',
          'Implemented end-to-end encryption for sensitive data',
          'Used TensorFlow Lite for on-device AI processing',
          'Built robust financial calculation engine with error handling'
        ]
      },
      'RootTask - Task Management System': {
        overview: 'A Next.js-based task management system with React Flow integration, allowing users to create complex workflows with parent-child relationships and team collaboration.',
        features: [
          'Visual task management with React Flow',
          'Parent-child card relationships',
          'Real-time team collaboration',
          'Workflow automation and templates',
          'Progress tracking and analytics',
          'Custom workspace and project organization'
        ],
        techStack: {
          frontend: ['Next.js', 'React', 'TypeScript', 'React Flow', 'Tailwind CSS'],
          backend: ['Next.js API Routes', 'Prisma ORM', 'PostgreSQL'],
          realtime: ['Socket.io', 'WebRTC'],
          deployment: ['Vercel', 'Supabase', 'Cloudflare']
        },
        challenges: [
          'Implementing complex React Flow interactions',
          'Managing real-time collaboration features',
          'Optimizing performance with large task graphs',
          'Ensuring data consistency in collaborative environment'
        ],
        solutions: [
          'Built custom React Flow nodes and edges',
          'Implemented WebSocket-based real-time updates',
          'Used virtualization for large task lists',
          'Implemented optimistic updates with conflict resolution'
        ]
      }
    };
    return details[projectTitle] || {};
  };

  const details = getProjectDetails(project.title);

  return (
    <motion.div 
      className="project-details-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="project-details-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <button className="close-btn" onClick={onClose}>
            <FaArrowLeft />
          </button>
          <h2 className="modal-title">{project.title}</h2>
        </div>

        <div className="modal-content">
          <div className="project-image-section">
            <img src={project.image} alt={project.title} className="project-detail-image" />
            <div className="project-links-section">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="detail-link">
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              )}
              {project.githubUrl && typeof project.githubUrl === 'string' && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="detail-link">
                  <FaGithub />
                  <span>Source Code</span>
                </a>
              )}
              {project.githubUrl && typeof project.githubUrl === 'object' && (
                <>
                  <a href={project.githubUrl.frontend} target="_blank" rel="noopener noreferrer" className="detail-link">
                    <FaCode />
                    <span>Frontend</span>
                  </a>
                  <a href={project.githubUrl.backend} target="_blank" rel="noopener noreferrer" className="detail-link">
                    <FaServer />
                    <span>Backend</span>
                  </a>
                </>
              )}
            </div>
          </div>

          <div className="project-info">
            <div className="overview-section">
              <h3>Overview</h3>
              <p>{details.overview}</p>
            </div>

            <div className="features-section">
              <h3>Key Features</h3>
              <ul>
                {details.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="tech-stack-section">
              <h3>Technology Stack</h3>
              {details.techStack && (
                <div className="tech-categories">
                  {details.techStack.frontend && (
                    <div className="tech-category">
                      <h4><FaCode /> Frontend</h4>
                      <div className="tech-tags">
                        {details.techStack.frontend.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {details.techStack.backend && (
                    <div className="tech-category">
                      <h4><FaServer /> Backend</h4>
                      <div className="tech-tags">
                        {details.techStack.backend.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {details.techStack.ai && (
                    <div className="tech-category">
                      <h4><FaCloud /> AI/ML</h4>
                      <div className="tech-tags">
                        {details.techStack.ai.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="challenges-section">
              <h3>Challenges & Solutions</h3>
              <div className="challenges-grid">
                <div className="challenges">
                  <h4>Challenges</h4>
                  <ul>
                    {details.challenges?.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div className="solutions">
                  <h4>Solutions</h4>
                  <ul>
                    {details.solutions?.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
