import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <div className="flip">
        <div className="avatar"></div>
        <div className="backside"></div>
      </div>
      <div className="outer-circle"></div>
      <div className="inner-circle"></div>
    </div>
  );
}
