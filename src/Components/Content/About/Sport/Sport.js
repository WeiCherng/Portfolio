import React from "react";
import "./Sport.css";

export default function Sport() {
  return (
    <div className="row">
      <div className="column">
        <div className="sport-img-cont">
          <img src="ball.png" alt="ball" className="sport-img"/>
          <p className="sport-pic-desc">Im so stressed out in this picture (Number 13)</p>
        </div>
      </div>
      <div className="column">
        <header className="sport-title">SPORT</header>
        <p className="sport-desc">
          Being 6 feet in my area is considered a giant.
        </p>
        <p className="sport-desc">
          So naturely I was selected to play basketball and volleyball. Trained
          for 3 times a week when i was 16 and got a chance to represent my
          local town to play. Did not make it but Won a game and lose 2. Had a
          blast of a time though!
        </p>
      </div>
    </div>
  );
}
