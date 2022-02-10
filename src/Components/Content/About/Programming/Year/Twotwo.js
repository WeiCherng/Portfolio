import React from "react";
import "./Twotwo.css";

export default function Twotwo(props) {
  const closeHandler = () => {
    props.close();
  };
  return (
    <div className="two-two">
      <header className="two-header">
        <h3>2022</h3>
        <div onClick={closeHandler}>X</div>
      </header>
      <section className="two-desc">
        <div className="column">
          <h4>Jan 2022</h4>
          <p>
            Learning Redux and trying out different CSS animation library.
            Started builing my own portfoilio.
          </p>
        </div>
        <div className="column">
          <h4>Current</h4>
          <p>
            Happy and gratefull to everyone who has help and given me advice.
            Continue to learn more and ready to improve!
          </p>
        </div>
      </section>
    </div>
  );
}
