import "./Sidebar.css";
import { motion } from "framer-motion";
import React from "react";
import Avatar from "./Avatar/Avatar";
import SiderbarItem from "./SidebarItem/SidebarItem";
import Joke from "./Joke/Joke";

export default function Sidebar(props) {
  return (
    <motion.div
      className="siderbar-container"
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <section>
        <div onClick={props.close} className="web-hide">X</div>
        <Avatar></Avatar>
        <SiderbarItem onSelect={props.select}></SiderbarItem>
      </section>
      <Joke />
    </motion.div>
  );
}
