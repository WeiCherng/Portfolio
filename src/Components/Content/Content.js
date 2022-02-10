import { motion } from "framer-motion";
import "./Content.css";
import Sidebar from "../Siderbar/Sidebar";
import Resume from "./Resume/Resume";
import { useEffect, useState } from "react";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Other from "./Other/Other";
import MobileSidebar from "../Siderbar/mobileSidebar/mobileSidebar";

export default function Content() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const screen = window.innerWidth;
    if (screen <= 768) {
      setMobile(true);
    }
  }, []);

  let title;
  const [select, setSelect] = useState(2);
  if (select === 1) {
    title = "About";
  } else if (select === 2) {
    title = "Resume";
  } else if (select === 3) {
    title = "Other";
  } else {
    title = "Contact";
  }

  return (
    <div className="content-container">
      {mobile ? <MobileSidebar setSelect={setSelect}/> : <Sidebar select={setSelect}/>}
      <motion.div
        className="info-container"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="selected">{title}</h1>
        {select === 1 && <About />}
        {select === 2 && <Resume />}
        {select === 3 && <Other />}
        {select === 4 && <Contact />}
      </motion.div>
    </div>
  );
}
