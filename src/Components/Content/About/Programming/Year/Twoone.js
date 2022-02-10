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
            Had a couple weeks of break, discovered Web Development and started
            learning HTML, CSS, Javascript. Attended an online Web Development
            bootcamps which covers full stack development. Started my web
            development journey.
          </p>
          <h4>Dec 2021</h4>
          <p>
            Finished My Internship and started to focus on my personal skill
            sets. I built a couple of projects and tried out Odin Projects where
            I learnt a lot about the basics of the Web.
          </p>
        </div>
        <div className="column">
          <h4>Sept 2021</h4>
          <p>
            Tried to seek different job opportunities. Accepted an internship
            offer after getting rejected many times by different companies.
            Worked with new and different technologies. Grateful for the
            opportunities given and learnt a lot from many people during the
            internship.
          </p>
        </div>
      </section>
    </div>
  );
}
