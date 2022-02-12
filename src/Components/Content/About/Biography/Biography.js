import React from "react";
import "./Biography.css";

export default function Biography() {
  return (
    <div className="row bio-row">
      <div className="column">
        <header>
          <h2 className="bio-title">Who Am I</h2>
          <h3 className="bio-greetings">Greetings! 👋 My Name Is <span className="bio-name">Tang Wei Cherng</span>.</h3>
        </header>
        <p className="bio-desc">
          I'm a 20 year old student pursuing a Software Engineering degree. I
          love to code and I've been learning how to
          code from my school and through really wonderful resources online.
          Learning process has been fun and very challenging at times.
          Nevertheless, it has always been my dream job to be a web developer. I
          started my programming career when I was 18 and it has been great
          since.
        </p>
        <p className="bio-desc">
          Click the timeline below to learn more about my programming career!
        </p>
      </div>
      <div className="column bio-img-cont">
        <div className="bio-img-cont">
          <img className="bio-young" src="young.png" alt="young"/>
          <p className="bio-img-desc">Look How Savage I look when I was young 🤣</p>
        </div>
      </div>
    </div>
  );
}
