import React from 'react'
import './ScrollingAnimation.css'
function ScrollingAnimation() {
  const textGroups = ["PROGRAMS", "PROGRAMS"];

  return (
     <div as="div" className="appContainer">
      <div as="div" className="wrapper">
        <main className="marquee">
          <div className="marqueeGroup">
            {textGroups.map((image, index) => (
              <div key={index} className="imageGroup">
                <p key={index} as={"p"}>
                  {textGroups[index]}
                </p>
              </div>
            ))}
          </div>
          <div className="marqueeGroup">
            {textGroups.map((image, index) => (
              <div key={index} className="imageGroup">
                <p key={index} as={"p"}>
                  {textGroups[index]}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ScrollingAnimation
