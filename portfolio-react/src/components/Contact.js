import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'saifullahsaeed.work@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+966 568584158'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'As Sulay, Riyadh, Saudi Arabia'
    },
    {
      icon: 'fas fa-globe',
      title: 'Website',
      value: 'saifullahsaeed.github.io'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together on your next project</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right" data-aos-duration="800">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  <i className={info.icon}></i>
                </div>
                <div className="contact-details">
                  <h4>{info.title}</h4>
                  <p>{info.value}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="contact-form" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
