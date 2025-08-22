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

        {/* Introduction Section */}
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="intro-content">
            <h3 className="intro-title">Hello! I'm Saifullah 👋</h3>
            <p className="intro-text">
              A <strong>Senior Software Engineer</strong> with 6 years of experience crafting exceptional digital experiences.
              My journey in software development has been driven by a passion for creating innovative solutions that solve real-world problems.
            </p>
            <p className="intro-text">
              I specialize in <strong>full-stack development</strong> using modern technologies like React, Node.js, and Flutter.
              My expertise extends to AI/ML integration, where I've successfully implemented intelligent features using LLM APIs and machine learning models.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="about-stats-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                variants={itemVariants}
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
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="about-skills-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="section-subtitle">Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="skill-header">
                  <div className="skill-icon-wrapper" style={{ backgroundColor: skill.color }}>
                    <skill.icon />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          className="about-expertise-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="section-subtitle">Areas of Expertise</h3>
          <div className="expertise-grid">
            {expertise.map((exp, index) => (
              <motion.div
                key={index}
                className="expertise-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="expertise-icon" style={{ color: exp.color }}>
                  <exp.icon />
                </div>
                <h4 className="expertise-title">{exp.title}</h4>
                <p className="expertise-description">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="about-education-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="section-subtitle">Education</h3>
          <div className="education-grid">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="education-icon">
                  <FaGraduationCap />
                </div>
                <div className="education-content">
                  <h4 className="education-degree">{edu.degree}</h4>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-year">{edu.year}</p>
                  <p className="education-description">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
