import "./Projects.css";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import Wrapper from "../../../../Helper/Wrapper";

export default function Projects() {
  return (
    <Wrapper>
      <div>
        <header>
          <h3 className="item-title side-title">
            My Portfolio <FiExternalLink className="link" />
          </h3>
          <p className="item-date">Jan 2022 | React </p>
        </header>
        <p className="item-desc">
          My very own website which displays information about what I do and
          what I love. Design by me with inspiration of others wonderful
          websites on the web.
        </p>
      </div>
      <div>
        <header>
          <h3 className="item-title side-title">
            Sentence
            <FiExternalLink className="link" />
          </h3>
          <p className="item-date">Dec 2021 | MERN</p>
        </header>
        <p className="item-desc">
          A random sentence generator which gives funny and sometimes unfunny
          sentences. Designed with some simple colour combinations.
        </p>
      </div>
      <div>
        <header>
          <h3 className="item-title">Yelp-Camp</h3>
          <p className="item-date">July 2021 | Javascript</p>
        </header>
        <p className="item-desc">
          A clone of yelp but instead of restaurants , its for campgrounds.
          Build during my online Web Developer bootcamp.
        </p>
      </div>
      <div>
        <section className="side-project">
          <h3 className="side-margin">
            <a
              className="item-title side-margin"
              href="https://expense-tracker-wei-cherng.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Expense Tracker
              <FiExternalLink className="link" />
            </a>
          </h3>
          <p className="item-desc side side-margin">
            React Expense Tracker with Pie Chart
          </p>
        </section>
        <section className="side-project">
          <h3 className="side-margin">
            <a
              className="item-title side-margin"
              href="https://weicherng.github.io/TodoList/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Todo List
              <FiExternalLink className="link" />
            </a>
          </h3>
          <p className="item-desc side side-margin">React Todo List</p>
        </section>
        <section className="side-project">
          <h3 className="side-margin">
            <a
              className="item-title side-margin"
              href="https://weicherng.github.io/Calculator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Calculator <FiExternalLink className="link" />
            </a>
          </h3>
          <p className="item-desc side side-margin">
            Simple Javascript Calculator
          </p>
        </section>
        <section className="side-project">
          <h3 className="side-margin">
            <a
              className="item-title side-margin"
              href="https://weicherng.github.io/Rock-Paper-Scissor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rock Paper Scissors <FiExternalLink className="link" />
            </a>
          </h3>
          <p className="item-desc side side-margin">
            Simple Game of Rock Paper Scissors
          </p>
        </section>
        <section className="side-project">
          <h3 className="item-title side-margin">
            <a
              className="item-title side-margin"
              href="https://weicherng.github.io/Countdown-Timer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Countdown Timer <FiExternalLink className="link" />
            </a>
          </h3>
          <p className="item-desc side side-margin">
            A Javascript countdown timer to New Year Eves
          </p>
        </section>
      </div>
    </Wrapper>
  );
}
