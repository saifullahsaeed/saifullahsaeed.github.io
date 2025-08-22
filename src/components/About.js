import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaMobile, FaBrain, FaRocket, FaUsers, FaLightbulb, FaGraduationCap, FaAward, FaGlobe, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95, icon: FaCode, color: '#f7df1e' },
    { name: 'React.js/Next.js', level: 92, icon: FaCode, color: '#61dafb' },
    { name: 'Node.js/NestJS', level: 90, icon: FaCode, color: '#339933' },
    { name: 'Flutter/Mobile', level: 88, icon: FaMobile, color: '#02569b' },
    { name: 'Python/Django', level: 85, icon: FaCode, color: '#3776ab' },
    { name: 'AI/ML Integration', level: 82, icon: FaBrain, color: '#ff6b6b' }
  ];

  const expertise = [
    {
      icon: FaRocket,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with modern frameworks, microservices architecture, and cloud deployment.',
      color: '#3b82f6'
    },
    {
      icon: FaMobile,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile apps with Flutter, native solutions, and seamless API integrations.',
      color: '#8b5cf6'
    },
    {
      icon: FaBrain,
      title: 'AI Integration',
      description: 'Implementing AI/ML features, LLM APIs, and intelligent automation for enhanced user experiences.',
      color: '#06b6d4'
    },
    {
      icon: FaUsers,
      title: 'Team Leadership',
      description: 'Leading development teams, mentoring junior developers, and managing project delivery.',
      color: '#10b981'
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solving',
      description: 'Architecting innovative solutions for complex business challenges and technical problems.',
      color: '#f59e0b'
    },
    {
      icon: FaGlobe,
      title: 'DevOps & CI/CD',
      description: 'Setting up automated deployment pipelines, cloud infrastructure, and monitoring systems.',
      color: '#ef4444'
    }
  ];

  const stats = [
    { number: '6+', label: 'Years Experience', icon: FaAward },
    { number: '50+', label: 'Projects Completed', icon: FaRocket },
    { number: '15+', label: 'Technologies Mastered', icon: FaCode },
    { number: '100%', label: 'Client Satisfaction', icon: FaHeart }
  ];

  const education = [
    {
      degree: 'Bachelor of Software Engineering',
      institution: 'University of Haripur',
      year: '2018',
      description: 'Studied core software engineering subjects including programming, algorithms, databases, and software design.'
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
            Passionate software engineer crafting digital solutions that make a difference
          </p>
        </motion.div>

        <div className="about-content">
          {/* Left Side - About Text & Stats */}
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
              <motion.div className="intro-section" variants={itemVariants}>
                <h3 className="intro-title">Hello! I'm Saifullah 👋</h3>
                <p className="intro-text">
                  A <strong>Senior Software Engineer</strong> with 6 years of experience crafting exceptional digital experiences.
                  My journey in software development has been driven by a passion for creating innovative solutions that solve real-world problems.
                </p>
              </motion.div>

              <motion.div className="journey-section" variants={itemVariants}>
                <h4 className="journey-title">My Journey</h4>
                <p className="journey-text">
                  I specialize in <strong>full-stack development</strong> using modern technologies like React, Node.js, and Flutter.
                  My expertise extends to AI/ML integration, where I've successfully implemented intelligent features using LLM APIs and machine learning models.
                </p>
              </motion.div>

              <motion.div className="current-section" variants={itemVariants}>
                <h4 className="current-title">Currently</h4>
                <p className="current-text">
                  Working as a <strong>Senior Developer at Nyoko Inc</strong>, I lead backend development and manage cross-platform mobile applications.
                  I've successfully delivered 50+ projects across various domains, always focusing on scalability, performance, and user experience.
                </p>
              </motion.div>

              <motion.div className="passion-section" variants={itemVariants}>
                <h4 className="passion-title">What Drives Me</h4>
                <p className="passion-text">
                  I'm passionate about <strong>clean code</strong>, <strong>performance optimization</strong>, and creating user experiences that make a difference.
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring fellow developers.
                </p>
              </motion.div>
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
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="stat-icon">
                    <stat.icon />
                  </div>
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
              <p className="skills-subtitle">Technologies I work with daily</p>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-item"
                    variants={itemVariants}
                  >
                    <div className="skill-header">
                      <div className="skill-icon-wrapper" style={{ backgroundColor: skill.color + '20' }}>
                        <skill.icon className="skill-icon" style={{ color: skill.color }} />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)` }}
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
              <p className="expertise-subtitle">What I bring to the table</p>
              <div className="expertise-grid">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    className="expertise-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="expertise-icon" style={{ backgroundColor: item.color + '20' }}>
                      <item.icon style={{ color: item.color }} />
                    </div>
                    <h4 className="expertise-card-title">{item.title}</h4>
                    <p className="expertise-card-description">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="education-section"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <h3 className="education-title">Education</h3>
              <div className="education-list">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="education-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="education-icon">
                      <FaGraduationCap />
                    </div>
                    <div className="education-content">
                      <h4 className="education-degree">{edu.degree}</h4>
                      <p className="education-institution">{edu.institution}</p>
                      <span className="education-year">{edu.year}</span>
                      <p className="education-description">{edu.description}</p>
                    </div>
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
