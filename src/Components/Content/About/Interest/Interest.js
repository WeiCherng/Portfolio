import React from "react";
import "./Interest.css";

export default function Interest() {
  return (
    <div className="row interest-cont">
      <div className="column">
        <header className="interest-title">MY INTEREST</header>
        <p className="interest-desc">
          I love to play games. Games always been fun for me and I enjoyed
          playing it whenever I have free time. I like to play fps and story
          based games. One of the best story games Ive played is RDR2. Really
          Fun!
        </p>
        <p className="interest-desc">
          I love computers hardware too. Watching youtubers such as LTT build
          cool computers and servers are fun to watch. Building a PC is totally
          one of my bucketlist I wish to complete.
        </p>
        <p className="interest-desc">
          Funny enough I love to watch memes. I love to create meme videos too.
          Its broken humor but I totally love it!
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
