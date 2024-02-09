import React, { useState } from 'react';

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevSlide}>Prev</button>
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      </div>
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
}

export default Carousel;
