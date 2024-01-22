import React from "react";
import "./ClickbleSection.css";
import { Button } from "@chakra-ui/react";
function ClickbleSection() {
  const [visible1, setvisible1] = React.useState(false);
  const [visible2, setvisible2] = React.useState(false);

  return (
    <div className="clickble-section-parent">
      <div className="clickble-section-child-div">
        <div
          className="text-section"
          onClick={() => {
            setvisible1(!visible1);
            setvisible2(false);
          }}
        >
          <h2>01</h2>
          <h2>Executive Program in UI/UX & Digital Design</h2>
        </div>
        {visible1 && (
          <div className="parent-div-container">
            <div>
              <div>
                <div className="image-and-text-section">
                  <img
                    src="https://atlasedge.in/wp-content/themes/astra/assets/images/homepage/schedule.svg"
                    alt=""
                  />
                  <p>11 Months</p>
                </div>
                <div className="image-and-text-section">
                  <img
                    src="https://atlasedge.in/wp-content/themes/astra/assets/images/homepage/highlight.svg"
                    alt=""
                  />
                  <p>At ATLAS Campus Mumbai</p>
                </div>
                <div className="image-and-text-section">
                  <img
                    src="https://atlasedge.in/wp-content/themes/astra/assets/images/homepage/time.svg"
                    alt=""
                  />
                  <p>3 days a week | 3 hours per day</p>
                </div>
              </div>
              <div className="heading-section-three-heading">
                <h3>Communication design portfolio</h3>
                <h3>
                  UI/UX industry-ready portfolio showcasing design expertise
                </h3>
                <h3>Proficiency in the latest UI/UX tools and technologies</h3>
              </div>
              <div className="button-section-and-image">
                <button>KNOW MORE</button>
                <button>APPLY NOW</button>
                <img
                  src="https://atlasedge.in/wp-content/themes/astra/assets/images/homepage/download.svg"
                  alt="download-image   "
                />
              </div>
            </div>
            <div className="image-div">
              <img
                src="https://atlasedge.in/wp-content/themes/astra/assets/images/homepage/ui-ux-listing.jpg"
                alt="main-image"
              />
            </div>
          </div>
        )}
      </div>
      <div
        className="clickble-section-child-div"
        onClick={() => {
          setvisible2(!visible2);
          setvisible1(false);
        }}
      >
        <div className="text-section">
          <h2>02</h2>
          <h2>⁠Executive Program in Fashion Business Management</h2>
        </div>
        {visible2 && (
          <div className="parent-div-container">
            <div>
              <div>
                <div className="image-and-text-section">
                  <img
                    src="https://atlasedge.in/wp-content/themes/astra/assets/images/homepage/schedule.svg"
                    alt=""
                  />
                  <p>11 Months</p>
                </div>
                <div className="image-and-text-section">
                  <img
                    src="https://atlasedge.in/wp-content/themes/astra/assets/images/homepage/highlight.svg"
                    alt=""
                  />
                  <p>At ATLAS Campus Mumbai</p>
                </div>
                <div className="image-and-text-section">
                  <img
                    src="https://atlasedge.in/wp-content/themes/astra/assets/images/homepage/time.svg"
                    alt=""
                  />
                  <p>3 days a week | 3 hours per day</p>
                </div>
              </div>
              <div className="heading-section-three-heading">
                <h3>
                  Your fashion brand – conceptualised, designed, and developed
                  during the course
                </h3>
                <h3>
                  Go-to-market strategy and business model for your fashion
                  brand
                </h3>
                <h3>Create a capsule collection for your brand</h3>
              </div>
              <div className="button-section-and-image">
                <button>KNOW MORE</button>
                <button>APPLY NOW</button>
                <img
                  src="https://atlasedge.in/wp-content/themes/astra/assets/images/homepage/download.svg"
                  alt="download-image   "
                />
              </div>
            </div>
            <div className="image-div">
              <img
              width={"100%"}
                src="https://atlasedge.in/wp-content/themes/astra/assets/images/homepage/fashion-design-listing.jpg"
                alt="main-image"
              />
            </div>
          </div>
        )}
      </div>
      <div className="Bottom-button-section" >
        <button>EXPLORE ALL PROGRAMS</button>
        <button>ENQUIRE NOW</button>
      </div>
    </div>
  );
}

export default ClickbleSection;
