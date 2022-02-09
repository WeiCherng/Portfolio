import React from "react";
import "./Twoone.css";

export default function Twoone(props) {
  const closeHandler = () => {
    props.close();
  };
  return (
    <div className="two-one">
      <header className="one-header">
        <h3>2021</h3>
        <div onClick={closeHandler}>X</div>
      </header>
      <section className="one-desc">
        <div className="column">
          <h4>May 2021</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit
            amet tellus cras adipiscing enim eu turpis.
          </p>
          <h4>Dec 2021</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit
            amet tellus cras adipiscing enim eu turpis.
          </p>
        </div>
        <div className="column">
          <h4>Sept 2021</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            suspendisse faucibus interdum posuere lorem ipsum dolor.
          </p>
        </div>
      </section>
    </div>
  );
}
