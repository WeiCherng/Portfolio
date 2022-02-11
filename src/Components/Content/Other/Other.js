import React from "react";
import { motion } from "framer-motion";
import "./Other.css";
import Project from "./Projects/Project";

export default function Other() {
  return (
    <motion.div
      className="other"
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <section className="purpose">
        <h2 className="other-title">What is This Website For?</h2>
        <p className="other-desc">
          This website is my first ever portfolio to showcase my interest and
          who am I. The design of the website is inspired by many wonderfully
          built websites throughout the web. I build every component from
          scratch and some from online resources. I had a blast building my own
          website and I hope you enjoyed it too. Feel free to contact me if
          theres any problem with this website.
        </p>
      </section>
      <section>
        <h2 className="other-title">My Projects</h2>
        <p className="other-desc">
          Some explanation, thoughts and approach to each of my proejcts
        </p>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </section>
    </motion.div>
  );
}
