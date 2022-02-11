import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Twozero.css";

export default function Twozero(props) {
  const closeHandler = () => {
    props.close();
  };
  return (
    <div className="two-zero">
      <header className="zero-header">
        <h3>2020</h3>
        <h2 className="zero-title">The Start of My Programming</h2>
        <div className="close-container" onClick={closeHandler}>
          <AiOutlineClose />
        </div>
      </header>
      <section className="zero-desc">
        <div className="column year-col">
          <h4>May 2020</h4>
          <p>
            Started Learning Basic of Python in College. I Learned the basic
            concepts of programming such as loops, functions, variables etc. I
            Did my first programming assignment with coursemates and built a
            program together.
          </p>
          <h4>Dec 2020</h4>
          <p>
            Trying out different programming languages and started learning C++
            with visual studio 2019. Very rough at first with the installation
            and concepts which are different from python.
          </p>
        </div>
        <div className="column year-col">
          <h4>Sept 2020</h4>
          <p>
            Gained interest in python and started learning from youtube videos
            such as freecodecamp and have a deeper understanding on how pythons
            work.
          </p>
        </div>
      </section>
    </div>
  );
}
