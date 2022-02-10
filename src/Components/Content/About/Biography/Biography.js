import React from "react";
import "./Biography.css";

export default function Biography() {
  return (
    <div className="row">
      <div className="column">
        <header className="bio-title">BIOGRAPHY</header>
        <p className="bio-desc">
          I'm Tang Wei Cherng, a 20 year old student pursuing a Software
          Engineering degree. I love to code but I'm not the best at it. I've
          been learning how to code from my school and through really wonderful
          resources online. Learning process has been fun and very challenging
          at times. Nevertheless, it has always been my dream job to be a web
          developer. I started my programming career when I was 18 and it has
          been great since.
        </p>
        <p className="bio-desc">
          Click the timeline below to learn more about my programming career!
        </p>
      </div>
      <div className="column"></div>
    </div>
  );
}
