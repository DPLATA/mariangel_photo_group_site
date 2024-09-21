import React from 'react';
import './Services.css';

const Services = () => {
  const services = ['Weddings', 'Civil Weddings', 'Engagements'];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service) => (
          <div key={service} className="service-item">
            <h3>{service}</h3>
            <p>Capturing your special moments with elegance and style.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;