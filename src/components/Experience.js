import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Nyoko Inc',
      location: 'Doha, Qatar',
      period: '07/2022 – Present',
      description: 'Leading backend development and mobile app development with a team of 4 developers.',
      achievements: [
        'Led backend development using Django & Django REST Framework for web and mobile applications',
        'Built and deployed cross-platform mobile apps with Flutter, integrating APIs and third-party services',
        'Managed a team of 4 developers, overseeing code quality, feature delivery, and task coordination',
        'Handled CI/CD pipelines, deployments, and production maintenance to ensure reliability and scalability',
        'Collaborated with stakeholders to translate requirements into technical solutions'
      ],
      technologies: ['Django', 'Flutter', 'Django REST', 'CI/CD', 'Team Leadership'],
      type: 'Full-time'
    },
    {
      title: 'MERN Stack Developer',
      company: 'Turing',
      location: 'Remote',
      period: '09/2022 – 10/2023',
      description: 'Full-stack development with blockchain integration and smart contracts.',
      achievements: [
        'Developed full-stack features for a client using Next.js, handling both frontend and backend responsibilities',
        'Integrated Solidity smart contracts within the application workflow, enabling seamless blockchain interactions',
        'Collaborated with stakeholders to translate requirements into functional components',
        'Maintained quality, responsiveness, and clarity in delivery across web and mobile interfaces'
      ],
      technologies: ['Next.js', 'Solidity', 'Blockchain', 'Full-stack', 'Smart Contracts'],
      type: 'Contract'
    },
    {
      title: 'Freelance Web Developer',
      company: 'Fiverr',
      location: 'Remote',
      period: '2020 – 2022',
      description: 'Custom web development and e-commerce solutions for various clients.',
      achievements: [
        'Delivered custom web applications using Laravel and CodeIgniter, tailored to client needs',
        'Built and customized Shopify themes and plugins, improving store functionality and design',
        'Assisted clients with digital marketing setups to enhance online presence and sales',
        'Maintained high client satisfaction through quality deliverables and timely communication'
      ],
      technologies: ['Laravel', 'CodeIgniter', 'Shopify', 'E-commerce', 'Digital Marketing'],
      type: 'Freelance'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My journey through various roles and companies, building expertise in modern technologies
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-company">
                      <FaBriefcase className="company-icon" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="experience-meta">
                    <div className="experience-period">
                      <FaCalendarAlt className="meta-icon" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="experience-location">
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="experience-type">
                      <span className={`type-badge ${exp.type.toLowerCase()}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="experience-content">
                  <p className="experience-description">{exp.description}</p>

                  <div className="experience-achievements">
                    <h4 className="achievements-title">Key Achievements:</h4>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="achievement-item">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-technologies">
                    <h4 className="technologies-title">Technologies Used:</h4>
                    <div className="technologies-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="technology-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="experience-timeline-dot">
                  <div className="dot-inner"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Resume CTA */}
        <div className="resume-cta">
          <div className="cta-content">
            <h3 className="cta-title">Want to see more details?</h3>
            <p className="cta-description">
              Download my complete resume for a detailed overview of my experience and skills
            </p>
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('resume').scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Download Resume</span>
              <FaExternalLinkAlt />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
