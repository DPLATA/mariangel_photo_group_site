import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(null);
    setLightboxOpen(false);
  };

  const nextImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
  };

  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => openLightbox(image)}>
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
      {lightboxOpen && (
        <div className="lightbox">
          <button className="close-button" onClick={closeLightbox}>&times;</button>
          <button className="nav-button prev" onClick={prevImage}>&lt;</button>
          <img src={currentImage} alt="Lightbox" />
          <button className="nav-button next" onClick={nextImage}>&gt;</button>
        </div>
      )}
    </section>
  );
};

export default Gallery;