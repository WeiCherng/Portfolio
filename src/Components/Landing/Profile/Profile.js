import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <div className="flip">
        <img src="avatar.png" alt="avatar" className="avatar"/>
        <div className="backside"></div>
      </div>
      <div className="outer-circle"></div>
      <div className="inner-circle"></div>
    </div>
  );
}
