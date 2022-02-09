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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit
            amet tellus cras adipiscing enim eu turpis.
          </p>
        </div>
        <div className="column">
          <h4>Feb 2022</h4>
          <p>Current</p>
        </div>
      </section>
    </div>
  );
}
