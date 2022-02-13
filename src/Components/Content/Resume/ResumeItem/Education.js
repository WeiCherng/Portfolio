import "./Education.css";
import React from "react";

export default function Education() {
  return (
    <div>
      <header>
        <h3 className="item-title">
          <a
            className="item-title side-margin"
            href="https://www.utar.edu.my/"
            target="_blank"
            rel="noopener noreferrer"
          >
            University Tunku Abdul Rahman
          </a>
        </h3>
        <p className="item-desc">Jan 2022 - Present | Software Engineering</p>
        <p className="item-desc">
          May 2021 - Jan 2022 | Foundation in Science{" "}
        </p>
      </header>
      <header>
        <h3 className="item-title">
          <a
            className="item-title side-margin"
            href="https://www.tunhabab.edu.my/portal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SMK Tun Habab
          </a>
        </h3>
        <p className="item-desc">2015 - 2020 | Science Stream</p>
      </header>
    </div>
  );
}
