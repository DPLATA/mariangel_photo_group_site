import React from 'react';
import './About.css';
import ppic from '../../public/ppic.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>La persona detrás del lente</h2>
      <div className="about-content">
        <div className="about-image">
            <img src={ppic} alt="Mariángel" />
        </div>
        <div className="about-text">
          <p>Hola! Mi nombre es Mariángel</p>
          <blockquote>
            "Photography is like poetry, only visual. There are so many stories and meanings one picture can portray, it all depends on who's looking at the photo and whether they are paying enough attention."
          </blockquote>
          <p><em>Desde que tengo memoria, siempre he tenido una fascinación por la fotografía, por la manera en que una imagen puede capturar un momento, una emoción o una historia entera. Me encanta crear imágenes que sean verdaderamente únicas y auténticas. Desde los detalles más pequeños hasta los momentos más grandes y emocionantes, me esfuerzo por capturar todo lo que hace que cada momento sea especial, significativo y se pueda guardar para siempre.</em></p>
        </div>
      </div>
    </section>
  );
};

export default About;