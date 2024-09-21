import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>
      <p>Let's capture your special moments together!</p>
      <div className="contact-info">
        <p>Email: info@mphotogroup.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <a href="https://wa.me/1234567890" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        Contact via WhatsApp
      </a>
    </section>
  );
};

export default Contact;