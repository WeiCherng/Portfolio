import "./ContactMe.css";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

export default function ContactMe() {
  return (
    <div>
      <p className="item-desc contact-me contact-padding">weicherng0719@gmail.com</p>
      <p className="contact-me contact-padding">
        <a
          className="item-desc contact-me"
          href="https://www.linkedin.com/in/tangweicherng/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/tangweicherng <FiExternalLink className="link" />
        </a>
      </p>
      <p className="contact-me contact-padding">
        <a
          className="item-desc contact-me"
          href="https://github.com/WeiCherng"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/WeiCherng <FiExternalLink className="link" />
        </a>
      </p>
      <p className="item-desc contact-padding">(+60 ) 19-7501 501</p>
      <p className="item-desc contact-padding">Kota Tinggi, Johor</p>
    </div>
  );
}
