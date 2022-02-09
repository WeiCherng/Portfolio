import React from "react";
import { motion } from "framer-motion";
import "./Resume.css";
import ResumeItem from "./ResumeItem/ResumeItem";
import Skill from "./ResumeItem/Skill";

export default function Resume() {
  return (
    <motion.div
      className="resume"
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <header className="name-title">TANG WEI CHERNG</header>
      <div className="row">
        <div className="column col-padding">
          <section>
            <h2 className="section">ABOUT ME</h2>
            <ResumeItem />
          </section>
          <section>
            <h2 className="section">EXPERIENCE</h2>
            <ResumeItem />
          </section>
          <section>
            <h2 className="section">EDUCATION</h2>
            <ResumeItem />
          </section>
          <section>
            <h2 className="section">CONTACT</h2>
            <ResumeItem />
          </section>
        </div>

        <div className="column col-padding">
          <section>
            <h2 className="section">PROJECTS</h2>
            <ResumeItem />
          </section>
          <section>
            <h2 className="section">SKILLS</h2>
            <ResumeItem />
            <Skill/>
          </section>
          <section>
            <h2 className="section">OTHER</h2>
            <ResumeItem />
            <ResumeItem />
          </section>
        </div>
      </div>
    </motion.div>
  );
}
