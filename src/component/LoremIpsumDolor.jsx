import React from "react";
import img1 from "./image/1P5A3844.png";
import img2 from "./image/Canteen.png";
import "./LoremIpsumDolor.css";
function LoremIpsumDolor() {
  return (
    <div id="main-wrapper">
      <div className="content-wrapper">
        <img src={img1}  alt="image 1" />
        <h3>Lorem ipsum dolor sit amet ut magna aliqua dummy text</h3>
        <a>READ MORE</a>
      </div>
      <hr />
      <div className="content-wrapper">
        <img src={img2}  alt="image 2" />
        <h3>Lorem ipsum dolor sit amet ut magna aliqua</h3>
        <a>READ MORE</a>
      </div>
    </div>
  );
}

export default LoremIpsumDolor;
