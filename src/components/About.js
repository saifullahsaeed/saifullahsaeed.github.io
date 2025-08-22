import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: 'fab fa-js-square',
      tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      icon: 'fas fa-server',
      tags: ['Node.js', 'NestJS', 'Django', 'Express.js']
    },
    {
      category: 'Mobile',
      icon: 'fas fa-mobile-alt',
      tags: ['Flutter', 'GetX', 'Provider', 'Workmanager']
    },
    {
      category: 'AI & ML',
      icon: 'fas fa-brain',
      tags: ['LLM APIs', 'Neural Networks', 'Data Preprocessing', 'Prompt Engineering']
    },
    {
      category: 'Python',
      icon: 'fab fa-python',
      tags: ['Django REST', 'Web Scraping', 'Automation', 'CLI Tools']
    },
    {
      category: 'DevOps',
      icon: 'fas fa-cloud',
      tags: ['GitHub Actions', 'Docker', 'AWS', 'Firebase']
    }
  ];

  const stats = [
    { number: '6+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '15+', label: 'Technologies' },
    { number: '4', label: 'Team Leadership' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate about technology and innovation</p>
        </div>
        
        <div className="about-content">
          <div className="about-text" data-aos="fade-right" data-aos-duration="800">
            <h3>Who I Am</h3>
            <p>
              I'm a Senior Software Engineer with 6 years of experience designing, developing, and deploying 
              scalable web and mobile applications. My expertise spans modern frameworks including React.js, 
              Next.js, NestJS, Django, and Flutter, with a strong focus on AI integration and cloud deployments.
            </p>
            <p>
              Currently leading development at Nyoko Inc, I manage teams, architect solutions, and deliver 
              high-quality products that drive business success. I'm passionate about clean code, performance, 
              and creating user experiences that make a difference.
            </p>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-section" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            <h3>Technical Expertise</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-category">
                  <h4><i className={skill.icon}></i> {skill.category}</h4>
                  <div className="skill-tags">
                    {skill.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
