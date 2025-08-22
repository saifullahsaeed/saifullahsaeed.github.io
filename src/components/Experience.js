import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Nyoko Inc',
      location: 'Doha, Qatar',
      duration: 'July 2022 - Present',
      achievements: [
        'Led backend development using Django & Django REST Framework for web and mobile applications',
        'Built and deployed cross-platform mobile apps with Flutter, integrating APIs and third-party services',
        'Managed a team of 4 developers, overseeing code quality, feature delivery, and task coordination',
        'Handled CI/CD pipelines, deployments, and production maintenance to ensure reliability and scalability',
        'Collaborated with stakeholders to translate requirements into technical solutions and shipped product updates on schedule'
      ],
      techStack: ['Django', 'Flutter', 'CI/CD', 'Team Leadership']
    },
    {
      title: 'MERN Stack Developer',
      company: 'Turing',
      location: 'Remote',
      duration: 'September 2022 - October 2023',
      achievements: [
        'Developed full-stack features for a client using Next.js, handling both frontend and backend responsibilities',
        'Integrated Solidity smart contracts within the application workflow, enabling seamless blockchain interactions',
        'Collaborated with stakeholders to translate requirements into functional components, maintaining quality and responsiveness'
      ],
      techStack: ['Next.js', 'Solidity', 'Blockchain', 'Full-Stack']
    },
    {
      title: 'Freelance Web Developer',
      company: 'Fiverr',
      location: 'Remote',
      duration: 'Freelance',
      achievements: [
        'Delivered custom web applications using Laravel and CodeIgniter, tailored to client needs',
        'Built and customized Shopify themes and plugins, improving store functionality and design',
        'Assisted clients with digital marketing setups to enhance online presence and sales'
      ],
      techStack: ['Laravel', 'Shopify', 'CodeIgniter', 'E-commerce']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">My journey in software development</p>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item" 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay={index * 200}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                  <div className="duration">{exp.duration}</div>
                </div>
                <div className="timeline-description">
                  <ul>
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="tech-stack">
                  {exp.techStack.map((tech, techIndex) => (
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

export default Experience;
