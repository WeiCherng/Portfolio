import React from "react";
import "./SidebarItem.css";

export default function SiderbarItem(props) {
  const itemHandler = (e) => {
    props.onSelect(e.target.value);
  };

  return (
    <ul className="sidebar-items">
      <li className="sidebar-item" value="1" onClick={itemHandler}>
        About Me
      </li>
      <li className="sidebar-item" value="2" onClick={itemHandler}>
        Resume
      </li>
      <li className="sidebar-item" value="3" onClick={itemHandler}>
        Others
      </li>
      <li className="sidebar-item" value="4" onClick={itemHandler}>
        Contact
      </li>
    </ul>
  );
}
