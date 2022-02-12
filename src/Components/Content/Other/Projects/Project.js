import React from "react";
import Wrapper from "../../../../Helper/Wrapper";
import "./Project.css";

export default function Project() {
  const projects = [
    {
      id: 7,
      img: "sentence.png",
      title: "Sentence",
      desc: "Random Sentence generator",
      link: "https://sentence-weicherng.netlify.app/"
    },
    {
      id: 1,
      img: "expense.png",
      title: "Expense Tracker",
      desc: "An Expense Tracker built with React, styling with CSS and pie chart withreact-minimal-pie-chart. Add your expense through the form and it filters by year and type of expense. Anaylize your yearly expense through a simple pie chart.",
      link: "https://expense-tracker-wei-cherng.netlify.app/",
    },
    {
      id: 2,
      img: "todo.png",
      title: "Todo List",
      desc: "An Todo List built with React and CSS. Keep track your todo and clear them off when your done with each tasks!",
      link: "https://weicherng.github.io/TodoList/",
    },
    {
      id: 3,
      img: "calculator.png",
      title: "Calculator",
      desc: "A Simple Javascript Calculator with does Addition, Subtraction, Multiplication and Division. Builth with HTML, CSS and Javascript.",
      link: "https://weicherng.github.io/Calculator/",
    },
    {
      id: 4,
      img: "game.png",
      title: "Rock Paper Scissors",
      desc: "A childhood game of Rock Paper Scissors. Play with a Computer and see who wins in the end! Built with HTML, CSS and Javascript",
      link: "https://weicherng.github.io/Rock-Paper-Scissor/",
    },
    {
      id: 5,
      img: "countdown.png",
      title: "Countdown Timer",
      desc: "A Countdown Timer to New Years Eve so you wont forget when to celebrate! Built with HTML, CSS and Javascript.",
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
            <div className="column project-item">
              <h3>{item.title}</h3>
              <p className="project-item-desc">{item.desc}</p>
            </div>
          </section>
        );
      })}
    </Wrapper>
  );
}
