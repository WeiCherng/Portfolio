import React from "react";
import "./Biography.css";

export default function Biography() {
  // const birthYear = 2002;
  // const currentYear = new Date().getFullYear();
  // const age = currentYear - birthYear;

  return (
    <div className="row bio-row">
      <div className="column">
        <header>
          <h2 className="bio-title">Who Am I</h2>
          <h3 className="bio-greetings">
            Greetings! 👋 My Name Is{" "}
            <span className="bio-name">WeiCherng</span>.
          </h3>
        </header>
        <p className="bio-desc">
          I'm a Software Engineering student. Code is cool and been learning how to code from my school and
          friends. Yippy Yap Yap. Ngl React &gt Angular all day
        </p>
        <p className="bio-desc">
          Click the timeline below to learn more about thing i do
        </p>
      </div>
      <div className="column bio-img-cont">
        <div className="bio-img-cont">
          <img className="bio-young" src="young.png" alt="young" />
          <p className="bio-img-desc">
            Look at this handsome guy
          </p>
        </div>
      </div>
    </div>
  );
}
