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
        Feel free to contact me if there is any issuses with the website. I
        would very much appereciate any feedbacks and suggestions towards this
        website. Besides that, contact me anytime if you have any inquries or
        you just want to say hi!
      </p>
      <section>
        <h3>Below are my contact list:</h3>
        <div className="contact-item">weicherng0719@gmail.com</div>
        <div className="contact-item">+60 19-7501 501</div>
        <div className="contact-item">github</div>
        <div className="contact-item">Linkedin</div>
        <div className="contact-item">Kota Tinggi, Johor</div>
      </section>
    </motion.div>
  );
}
