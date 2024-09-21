import React from 'react';
import './Testimonials.css';



const Testimonials = () => {
  const testimonials = [
    { id: 1, text: "Desde el inicio fue súper fácil el trato con Mariangel, súper accesible y responde súper rápido. En el evento se presentaron antes de tiempo para poder hacer el scouting del lugar. Al momento de las fotos nos hicieron sentir súper especiales y estuvieron pendientes de cada detalle y cada evento importante del día. Las fotos están increíbles. Revivimos el día de nuestra boda al ver las fotos y los videos. Además estuvieron listas en el día acordado, un mes después de la boda. Recomiendo a Mariángel sin dudar", client: "Ana & Mario" },
    { id: 2, text: "Eternamente agradecidos con Mariángel por capturar uno de los días más importantes de nuestras vidas! Quedamos fascinados con su profesionalismo y calidad!", client: "Javi & Ale" },
    { id: 3, text: "Mariangel y equipo demuestran su profesionalidad desde el momento de pedir una cotización. Es un grupo con quien puedes confiar que capten los mejores momentos de uno de los días más especiales de tú vida. Durante el evento, muestran su expertise en todo momento, incitando que la gente se emocione más. ¡Sin duda, son una empresa recomendada para todo tipo de eventos!", client: "Emi & Ara" },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Couples Say</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <p>"{testimonial.text}"</p>
            <p className="client-name">- {testimonial.client}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;