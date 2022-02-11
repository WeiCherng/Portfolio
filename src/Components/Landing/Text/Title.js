import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function Title() {
  const placeholderText = [
    { type: "heading1", text: "Welcome to My Portfolio!" },
    {
      type: "paragraph",
      text: "Get Started By Clicking Any Of These Below",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  return (
    <motion.div
      className="App"
      initial="hidden"
      // animate="visible"
      animate={"visible"}
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}
