import React from 'react';
import './About.css';
import ppic from '../../public/ppic.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Mariangel</h2>
      <div className="about-content">
        <div className="about-image">
            <img src={ppic} alt="Mariángel" />
        </div>
        <div className="about-text">
          <p>Mariangel is a passionate wedding photographer dedicated to capturing the beauty and emotion of your special day.</p>
          <blockquote>
            "Photography is like poetry, only visual. There are so many stories and meanings one picture can portray, it all depends on who's looking at the photo and whether they are paying enough attention."
          </blockquote>
          <p><em>My goal is to capture beautiful in-between moments that make your story so special</em></p>
        </div>
      </div>
    </section>
  );
};

export default About;