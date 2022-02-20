import "./mobileSidebar.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Wrapper from "../../../Helper/Wrapper";
import Sidebar from "../Sidebar";

export default function MobileSidebar(props) {
  const [show, setShow] = useState(false);
  return (
    <Wrapper>
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="mobileSidebar"
      >
        <section onClick={() => setShow(!show)} className="line-container">
          <div className="mobile-line"></div>
          <div className="mobile-line"></div>
          <div className="mobile-line"></div>
        </section>
      </motion.div>
      {show && (
        <Sidebar select={props.setSelect} close={() => setShow(!show)} />
      )}
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="background-blur"
          onClick={() => setShow(!show)}
        ></motion.div>
      )}
    </Wrapper>
  );
}
