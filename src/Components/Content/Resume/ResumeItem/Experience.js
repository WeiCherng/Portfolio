import "./Experience.css";
import React from "react";

export default function Experience() {
  return (
    <div>
      <header>
        <h3 className="item-title">
          <a
            className="item-title side-margin"
            href="https://mereka.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mere.ka.io
          </a>
        </h3>
        <p className="item-date">
          Sep 2021 - Dec 2021 | Full Stack Development Intern
        </p>
      </header>
      <p className="item-desc">
        Work with modern web application frameworks - Angular 10+ and above,
        HTML5, JavaScript/Typescript, ES6, ES7, CSS/SASS.
      </p>
    </div>
  );
}
