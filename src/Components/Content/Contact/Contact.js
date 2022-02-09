import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  return (
    <motion.div
      className="contact"
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <h2 className="contact-title">I Love To Hear From You</h2>
      <p className="contact-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mauris ultrices eros
        in cursus turpis massa tincidunt dui. Amet consectetur adipiscing elit
        pellentesque habitant morbi tristique senectus.
      </p>
      <section>
        <h3>My Contacts:</h3>
        <div className="contact-item">weicherng0719@gmail.com</div>
        <div className="contact-item">+60 19-7501 501</div>
        <div className="contact-item">github</div>
        <div className="contact-item">Linkedin</div>
        <div className="contact-item">Kota Tinggi, Johor</div>
      </section>
    </motion.div>
  );
}
