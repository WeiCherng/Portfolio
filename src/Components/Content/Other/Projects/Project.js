import React from "react";
import Wrapper from "../../../../Helper/Wrapper";
import { data } from "./List";
import "./Project.css";

export default function Project() {
  const projects = data;

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
              <h3 className="project-item-title">{item.title}</h3>
              <p className="project-item-desc">{item.desc}</p>
            </div>
          </section>
        );
      })}
    </Wrapper>
  );
}
