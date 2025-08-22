import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaMobile, FaBrain, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95, icon: FaCode },
    { name: 'React.js/Next.js', level: 90, icon: FaCode },
    { name: 'Node.js/NestJS', level: 88, icon: FaCode },
    { name: 'Flutter/Mobile', level: 85, icon: FaMobile },
    { name: 'Python/Django', level: 82, icon: FaCode },
    { name: 'AI/ML Integration', level: 78, icon: FaBrain }
  ];

  const expertise = [
    {
      icon: FaRocket,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with modern frameworks and best practices.'
    },
    {
      icon: FaMobile,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile apps with Flutter and native solutions.'
    },
    {
      icon: FaBrain,
      title: 'AI Integration',
      description: 'Implementing AI/ML features and LLM APIs for intelligent applications.'
    },
    {
      icon: FaUsers,
      title: 'Team Leadership',
      description: 'Leading development teams and mentoring junior developers.'
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solving',
      description: 'Architecting solutions for complex business challenges.'
    },
    {
      icon: FaCode,
      title: 'DevOps & CI/CD',
      description: 'Setting up automated deployment pipelines and cloud infrastructure.'
    }
  ];

  const stats = [
    { number: '6+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '15+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Client Satisfaction' }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate software engineer with expertise in modern web and mobile technologies
          </p>
        </motion.div>

        <div className="about-content">
          {/* Left Side - About Text */}
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="about-description"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.p variants={itemVariants}>
                I'm a <strong>Senior Software Engineer</strong> with 6 years of experience crafting exceptional digital experiences. 
                My journey in software development has been driven by a passion for creating innovative solutions that solve real-world problems.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                I specialize in <strong>full-stack development</strong> using modern technologies like React, Node.js, and Flutter. 
                My expertise extends to AI/ML integration, where I've successfully implemented intelligent features using LLM APIs and machine learning models.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                Currently working as a <strong>Senior Developer at Nyoko Inc</strong>, I lead backend development and manage cross-platform mobile applications. 
                I've successfully delivered 50+ projects across various domains, always focusing on scalability, performance, and user experience.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="about-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Skills & Expertise */}
          <motion.div 
            className="about-skills"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Skills Progress */}
            <motion.div 
              className="skills-section"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <h3 className="skills-title">Technical Skills</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="skill-item"
                    variants={itemVariants}
                  >
                    <div className="skill-header">
                      <skill.icon className="skill-icon" />
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Expertise Areas */}
            <motion.div 
              className="expertise-section"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <h3 className="expertise-title">Areas of Expertise</h3>
              <div className="expertise-grid">
                {expertise.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="expertise-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="expertise-icon">
                      <item.icon />
                    </div>
                    <h4 className="expertise-card-title">{item.title}</h4>
                    <p className="expertise-card-description">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
