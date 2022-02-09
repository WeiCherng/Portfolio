import React from "react";
import "./Twozero.css";

export default function Twozero(props) {
  const closeHandler = () => {
    props.close();
  };
  return (
    <div className="two-zero">
      <header className="zero-header">
        <h3>2022</h3>
        <div onClick={closeHandler}>X</div>
      </header>
      <section className="zero-desc">
        <div className="column">
          <h4>May 2020</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit
            amet tellus cras adipiscing enim eu turpis.
          </p>
          <h4>Dec 2020</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit
            amet tellus cras adipiscing enim eu turpis.
          </p>
        </div>
        <div className="column">
          <h4>Sept 2022</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labor</p>
        </div>
      </section>
    </div>
  );
}
