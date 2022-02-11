import React from "react";
import { motion } from "framer-motion";
import {
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
  AiFillGithub,
} from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
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
        <div className="contact-item">
          <AiFillMail />
          <span>weicherng0719@gmail.com</span>
        </div>
        <div className="contact-item">
          <AiFillPhone />
          <span>(+60) 19-7501 501</span>
        </div>
        <div>
          <a
            className="contact-item point"
            href="https://github.com/WeiCherng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
            <span>github.com/WeiCherng</span>
          </a>
        </div>
        <div>
          <a
            className="contact-item point"
            href="https://www.linkedin.com/in/tangweicherng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
            <span>linkedin.com/in/tangweicherng/</span>
          </a>
        </div>
        <div className="contact-item">
          <IoLocationSharp />
          <span>Kota Tinggi, Johor</span>
        </div>
      </section>
    </motion.div>
  );
}
