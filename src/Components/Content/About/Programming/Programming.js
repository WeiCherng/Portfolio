import React, { useState } from "react";
import "./Programming.css";
import Twoone from "./Year/Twoone";
import Twotwo from "./Year/Twotwo";
import Twozero from "./Year/Twozero";

export default function Programming() {
  const [year, setYear] = useState(2022)

  const yearHandler = (e) => {
    if(e.target.className === "first-dot"){
      setYear(2021)
    } else if(e.target.className === "second-dot"){
      setYear(2020)
    } else if(e.target.className === "third-dot"){
      setYear(2022)
    }
  }
  return (
    <div className="prom">
      <header className="prom-title">My Programming Career Timeline</header>
      <section className="year">
        <span>2020</span>
        <span>2021</span>
        <span>2022</span>
      </section>
      <div className="timeline"></div>
      <div onClick={yearHandler} className={ year === 2021 ? "first-dot active" : "first-dot"}></div>
      <div onClick={yearHandler} className={ year === 2020 ? "second-dot active" : "second-dot"}></div>
      <div onClick={yearHandler} className={ year === 2022 ? "third-dot active" : "third-dot"}></div>
      <section className="years">
        {year === 2020 && <Twozero close={setYear}/>}
        {year === 2021 && <Twoone close={setYear}/>}
        {year === 2022 && <Twotwo close={setYear}/>}
      </section>
    </div>
  );
}
