import React, { useState, useEffect } from "react";
import "./DubbleAutoSlider.css"; // Import your CSS file

const Slider = ({ slides, interval, controlledIndex, isHtmlContent }) => {
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

  const renderSlide = (slide, index) => {
    if (isHtmlContent) {
      return (
        <div
          className="slide"
          key={index}
          dangerouslySetInnerHTML={{ __html: slide }}
        />
      );
    }
    return (
      <div className="slide" key={index}>
        <h2>{slide}</h2>
      </div>
    );
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {slides.map(renderSlide)}
      </div>
    </div>
  );
};

const DubbleAutoSlider = () => {
  const [index, setIndex] = useState(0);
  const slides1 = ["G", "E", "E", "D"]; // Replace with your content
  const slides2 = [
    ` <div class="textcontaner">
          <h3>Geographical EDGE</h3>
          <article>
            Our pedagogical approach involves a balanced mix of in-class
            tutorials, peer learning opportunities, industry networking, and
            hands-on live projects designed to upskill our students.
          </article>
        </div>`,
    ` <div class="textcontaner">
          <h3>Employability</h3>
          <article>
            We provide long-term career planning and support to our students.
            Our programs align with current industry needs, making us the ideal
            professional finishing school.
          </article>
        </div>`,
    ` <div class="textcontaner">
          <h3>Expert EDGE</h3>
          <article>
            Industry leaders and SMEs design, evaluate and teach our programs.
            Professionals from different specialities share their expertise and
            mentor our students.
          </article>
        </div>`,
    `  <div class="textcontaner">
          <h3>Delivery EDGE</h3>
          <article>
            Our pedagogical approach involves a balanced mix of in-class
            tutorials, peer learning opportunities, industry networking, and
            hands-on live projects designed to upskill our students.
          </article>
        </div>`,
  ]; // Replace with your content
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
      <Slider
        slides={slides2}
        interval={interval}
        controlledIndex={index}
        isHtmlContent={true}
      />
      <div className="button-container">
        <button id="prev-button" onClick={prevSlide}>
          Previous
        </button>
        <button id="next-button" onClick={nextSlide}>
          Next
        </button>
      </div>
      <div className="text-container-all-alpha"></div>
    </div>
  );
};

export default DubbleAutoSlider;
