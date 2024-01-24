import React from "react";
import "./AtlasEdgeOffer.css";
import ReactPlayer from "react-player";
function AtlasEdgeOffer() {
  return (
    <div className="common-section">
      <div className="atlas-edge-offer-wrapper">
        <div className="atlas-edge-offer-content">
          <h3>
            ATLAS Edge offers executive and professional programs for the
            industry, by the industry and of the industry.
          </h3>
          <article>
            We recognise the need for ‘workforce-ready’ education. Our vision
            and pedagogy are geared to address the demands of the industry and
            the needs of professionals at various stages in their careers. Our
            upskilling programs are meticulously designed and delivered by
            industry experts, ensuring that you experience a blend of academic
            and practical insights, tailored to accelerate your professional
            journey.
          </article>
        </div>
        <div className="atlas-edge-video-wrapper">
          {/* <ReactPlayer
            style={{ display: "block", margin: "auto" }}
            className="atlas-edge-video"
            url={"https://youtu.be/VhWExH3zajM"}
            playing={true}
            loop
            muted
            controls={true}
          /> */}
          <iframe
            className="atlas-edge-video"
            style={{ display: "block", margin: "auto" }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VhWExH3zajM?autoplay=1&mute=1&loop=1&playlist=VhWExH3zajM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AtlasEdgeOffer;
