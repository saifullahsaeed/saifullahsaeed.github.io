import React from 'react';
import './Resume.css';

const Resume = () => {
  const downloadPDF = () => {
    const element = document.createElement('div');
    element.innerHTML = `
      <div style="padding: 40px; font-family: 'Plus Jakarta Sans', sans-serif;">
        <h1 style="color: #1a1a1a; margin-bottom: 10px;">Saifullah Saeed</h1>
        <h2 style="color: #667eea; margin-bottom: 30px;">Senior Software Engineer</h2>
        
        <div style="margin-bottom: 30px;">
          <p style="color: #666; line-height: 1.6;">
            Software Engineer with 6 years of experience in designing, developing, and deploying scalable web and mobile applications. 
            Skilled in modern frameworks including Node.js, React.js, Next.js, NestJS, and Django, with hands-on expertise in Flutter for cross-platform mobile apps.
          </p>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 style="color: #1a1a1a; border-bottom: 2px solid #667eea; padding-bottom: 5px;">Professional Experience</h3>
          <div style="margin-bottom: 20px;">
            <h4 style="color: #667eea; margin-bottom: 5px;">Senior Software Developer - Nyoko Inc</h4>
            <p style="color: #666; font-style: italic; margin-bottom: 10px;">July 2022 - Present | Doha, Qatar</p>
            <ul style="color: #666; padding-left: 20px;">
              <li>Led backend development using Django & Django REST Framework</li>
              <li>Built and deployed cross-platform mobile apps with Flutter</li>
              <li>Managed a team of 4 developers</li>
              <li>Handled CI/CD pipelines and production maintenance</li>
            </ul>
          </div>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 style="color: #1a1a1a; border-bottom: 2px solid #667eea; padding-bottom: 5px;">Technical Skills</h3>
          <p style="color: #666;"><strong>Frontend:</strong> React.js, Next.js, TypeScript, Tailwind CSS</p>
          <p style="color: #666;"><strong>Backend:</strong> Node.js, NestJS, Django, Express.js</p>
          <p style="color: #666;"><strong>Mobile:</strong> Flutter, GetX, Provider</p>
          <p style="color: #666;"><strong>AI & ML:</strong> LLM APIs, Neural Networks, Data Preprocessing</p>
          <p style="color: #666;"><strong>DevOps:</strong> GitHub Actions, Docker, AWS, Firebase</p>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 style="color: #1a1a1a; border-bottom: 2px solid #667eea; padding-bottom: 5px;">Contact</h3>
          <p style="color: #666;">Email: saifullahsaeed.work@gmail.com</p>
          <p style="color: #666;">Phone: +966 568584158</p>
          <p style="color: #666;">Location: As Sulay, Riyadh, Saudi Arabia</p>
        </div>
      </div>
    `;
    
    // For now, we'll just show an alert since html2pdf requires additional setup
    alert('PDF download functionality would be implemented here. For now, you can print this page or save as PDF.');
    
    // Uncomment the following code when html2pdf is properly configured
    /*
    const opt = {
      margin: 0.5,
      filename: 'Saifullah-Saeed-Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
    */
  };

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="resume-content" data-aos="fade-up">
          <h2>Download My Resume</h2>
          <p>Get a detailed overview of my experience, skills, and achievements</p>
          <button className="btn btn-primary" onClick={downloadPDF}>
            <i className="fas fa-download"></i>
            <span>Download PDF Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
