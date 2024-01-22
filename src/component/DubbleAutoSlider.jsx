import React, { useState, useEffect } from "react";
import "./DubbleAutoSlider.css"; // Import your CSS file

const Slider = ({ slides, interval, controlledIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, interval);

      return () => clearInterval(intervalId);
  }, [currentIndex, slides.length, interval, controlledIndex]);

  useEffect(() => {
    if (controlledIndex !== undefined) {
      setCurrentIndex(controlledIndex);
    }
  }, [controlledIndex]);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

const DubbleAutoSlider = () => {
  const [index, setIndex] = useState(0);
  const slides1 = ["1", "2", "3"]; // Replace with your content
  const slides2 = ["A", "B", "C"]; // Replace with your content
  const interval = 5000; // Adjust the interval as needed

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides1.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides1.length) % slides1.length);
  };

  return (
    <div className="app-container">
      <Slider slides={slides1} interval={interval} controlledIndex={index} />
      <Slider slides={slides2} interval={interval} controlledIndex={index}/>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default DubbleAutoSlider;
