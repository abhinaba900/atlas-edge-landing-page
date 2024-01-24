import React from "react";
import ReactPlayer from "react-player";

function WelcomToAtlusEdge() {
  return (
    <div className="common-section">
      <div id="atlas-edge-offer-wrapper">
        <div id="second-content">
          <h3>
            The ATLAS campus inspires creativity, fosters collaboration and
            challenges the status quo.
          </h3>
          <article>
            Located in the heart of Mumbai, it is the perfect combination of
            ample breathing space to encourage growth, connectivity to the
            biggest companies in the country, and a vibrant culture steeped in
            business, art, cinema, and unique experiences. This, coupled with
            the tech-enabled spaces ensures that learning doesn’t stop at the
            campus gates.
          </article>
        </div>
        <div id="atlas-edge-video-wrapper">
          {/* <ReactPlayer
            width={"90%"}
            height={"100%"}
            style={{ objectFit: "cover" }}
            className="react-player"
            url={"https://youtu.be/ePRNeqFo0Do"}
            playing={true}
            loop
            muted
            controls={true}
          /> */}
          <iframe
            className="atlas-edge-video"
            style={{ display: "block", margin: "auto" }}
            width="100%" // Set your desired width
            height="100%" // Set your desired height
            src="https://www.youtube.com/embed/ePRNeqFo0Do?autoplay=1&mute=1&loop=1&playlist=ePRNeqFo0Do"
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

export default WelcomToAtlusEdge;
