import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import Biography from "./Biography/Biography";
import Sport from "./Sport/Sport";
import Interest from "./Interest/Interest";
import Programming from "./Programming/Programming";

export default function About() {
  return (
    <motion.div
      className="about"
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Biography/>
      <Programming/>
      <Interest/>
      <Sport/>
    </motion.div>
  );
}
