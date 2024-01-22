import React from "react";
import ReactPlayer from "react-player";

function WelcomToAtlusEdge() {
  return (
    <div className="common-section">
      <div id="atlas-edge-offer-wrapper">
        <div  id="second-content">
          <h3>Welcome to ATLAS Edge</h3>
          <article>
            Each corner of the ATLAS campus is designed to nurture every
            student’s potential. Located in the bustling heart of the business
            district of Mumbai, in BKC, you’ll find a place that’s more than
            just a campus - it’s an invitation to grow.
          </article>
        </div>
        <div id="atlas-edge-video-wrapper">
          <ReactPlayer
           width={"100%"}
            url={"https://youtu.be/ePRNeqFo0Do"}
            playing={true}
            loop
            muted
            controls={true}
          />
        </div>
      </div>
    </div>
  );
}

export default WelcomToAtlusEdge;
