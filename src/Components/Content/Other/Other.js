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
        <h2>What is This Website For?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
          pulvinar sapien et ligula ullamcorper. Ut tellus elementum sagittis
          vitae. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras.
        </p>
      </section>
      <section>
        <h2>My Projects</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
