import React from "react";
import { motion } from "framer-motion";
import "./Resume.css";
// import Skill from "./ResumeItem/Skill";
// import AboutMe from "./ResumeItem/AboutMe";
// import Experience from "./ResumeItem/Experience";
// import Education from "./ResumeItem/Education";
// import ContactMe from "./ResumeItem/ContactMe";
// import Projects from "./ResumeItem/Projects";
// import Others from "./ResumeItem/Others";

export default function Resume() {
  return (
    <motion.div
      className="resume"
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* <header className="name-title">TANG WEI CHERNG</header>
      <div className="row">
        <div className="column col-padding">
          <section>
            <h2 className="section">ABOUT ME</h2>
            <AboutMe />
          </section>
          <section>
            <h2 className="section">EXPERIENCE</h2>
            <Experience />
          </section>
          <section>
            <h2 className="section">EDUCATION</h2>
            <Education />
          </section>
          <section>
            <h2 className="section">OTHER</h2>
            <Others />
          </section>
          <section>
            <h2 className="section">CONTACT</h2>
            <ContactMe />
          </section>
        </div>

        <div className="column col-padding">
          <section>
            <h2 className="section">PROJECTS</h2>
            <Projects />
          </section>
          <section>
            <h2 className="section">SKILLS</h2>
            <Skill />
          </section>
        </div>
      </div> */}
      <section>Sorry! Under Construction 🚚</section>
    </motion.div>
  );
}
