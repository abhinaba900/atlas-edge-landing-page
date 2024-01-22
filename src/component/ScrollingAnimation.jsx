import React from 'react'
import './ScrollingAnimation.css'
import Image1 from "./image/black-programs.png"
import image2 from "./image/white-programs.png"
function ScrollingAnimation() {
  const textGroups = [Image1, image2];

  return (
    <div as="div" className="appContainer">
      <div as="div" className="wrapper">
        <main className="marquee">
          <div className="marqueeGroup">
            {textGroups.map((image, index) => (
              <div key={index} className="imageGroup">
                <img src={image} alt="image group" />
              </div>
            ))}
          </div>
          <div className="marqueeGroup">
            {textGroups.map((image, index) => (
              <div key={index} className="imageGroup">
                <img src={image} alt="image group" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default ScrollingAnimation
