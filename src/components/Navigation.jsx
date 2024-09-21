import React from 'react';
import './Navigation.css';
import logoImage from '../../public/logo.png';

const Navigation = ({ activeSection, scrollToSection }) => {
  const navItems = ['home', 'services', 'about', 'testimonials', 'contact'];

  return (
    <nav className="navigation">
      <div className="logo">
        <img src={logoImage} alt="M PHOTO GROUP" />
      </div>
      <ul>
        {navItems.map((item) => (
          <li key={item} className={activeSection === item ? 'active' : ''}>
            <button onClick={() => scrollToSection(item)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;