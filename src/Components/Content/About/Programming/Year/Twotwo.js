import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Twotwo.css";

export default function Twotwo(props) {
  const closeHandler = () => {
    props.close();
  };
  return (
    <div className="two-two">
      <header className="two-header">
        <h3>2022</h3>
        <h2 className="two-title">New Year New Me</h2>
        <div className="close-container" onClick={closeHandler}>
          <AiOutlineClose />
        </div>
      </header>
      <section className="two-desc">
        <div className="column year-col">
          <h4>Jan 2022</h4>
          <p>
            Learning Redux and trying out different CSS animation library.
            Started builing my own portfolio.
          </p>
        </div>
        <div className="column year-col">
          <h4>Current</h4>
          <p>
            Im too lazy to update this cuz i code it so bad its so hard to maintain
          </p>
        </div>
      </section>
    </div>
  );
}
