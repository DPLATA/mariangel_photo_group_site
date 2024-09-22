// App.js
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const galleryImages = [
    'https://images-pw.pixieset.com/elementfield/681327243/_DSC2292-3cf8e48b-1000.JPG',
    'https://images-pw.pixieset.com/elementfield/681327243/_DSC2369-2d01ad48-1000.JPG',
    'https://images-pw.pixieset.com/elementfield/370527243/63632db7b69fbc3cad1fc8a8b5aa2e0d-712a319a-1000.jpg',
    'https://images-pw.pixieset.com/elementfield/370527243/9e306f22b224f395923be30b7821a667-9264faaa-1000.jpg'
    // ... add more image paths
  ];
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero />
      <Services />
      <Gallery images={galleryImages} />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;