import React from "react";
import "./Sport.css";

export default function Sport() {
  return (
    <div className="row sport-row">
      <div className="column">
        <div className="sport-img-cont">
          <img src="ball.png" alt="ball" className="sport-img" />
          <p className="sport-pic-desc">Young Ball</p>
        </div>
      </div>
      <div className="column">
        <header className="sport-title">SPORT</header>
        <p className="sport-desc">Fun Fact I played ball but not now</p>
        <p className="sport-desc">Ball is cool but game is even cooler</p>
      </div>
    </div>
  );
}
