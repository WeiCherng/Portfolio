import React from "react";
import Wrapper from "../../../../Helper/Wrapper";
import "./Project.css";

export default function Project() {
  const projects = [
    {
      id: 1,
      img: "expense.png",
      title: "Expense Tracker",
      desc: "React Expense Tracker with Pie Chart",
      link: "https://expense-tracker-wei-cherng.netlify.app/",
    },
    {
      id: 2,
      img: "todo.png",
      title: "Todo List",
      desc: "React todolist",
      link: "https://weicherng.github.io/TodoList/",
    },
    {
      id: 3,
      img: "calculator.png",
      title: "Calculator",
      desc: "Simple Calculator",
      link: "https://weicherng.github.io/Calculator/",
    },
    {
      id: 4,
      img: "game.png",
      title: "Rock Paper Scissors",
      desc: "A simple game",
      link: "https://weicherng.github.io/Rock-Paper-Scissor/",
    },
    {
      id: 5,
      img: "countdown.png",
      title: "Countdown Timer",
      desc: "Countdown Timer to New Years Eve",
      link: "https://weicherng.github.io/Countdown-Timer/",
    },
  ];

  return (
    <Wrapper>
      {projects.map((item) => {
        return (
          <section key={item.id} className="row">
            <div className="column project-cont">
              <div className="project-img-cont">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.img} className="project-img" alt={item.alt} />
                </a>
              </div>
            </div>
            <div className="column">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </section>
        );
      })}
    </Wrapper>
  );
}
