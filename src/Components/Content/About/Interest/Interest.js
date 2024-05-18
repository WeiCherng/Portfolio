import React from "react";
import "./Interest.css";

export default function Interest() {
  return (
    <div className="row interest-cont">
      <div className="column">
        <header className="interest-title">MY INTEREST</header>
        <p className="interest-desc">
          Game game game! RockStar{" "}
          <a
            className="interest-link"
            href="https://www.rockstargames.com/reddeadredemption2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RDR2
          </a>{" "}
          GOTY. Dont debate <br />
          See this not so cool clutch i did few years ago in 144p 
        </p>
      </div>
      <div className="column video-cont">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/jQdX-GURHK4"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
