import "./mobileSidebar.css";
import { motion } from "framer-motion";

export default function MobileSidebar(props) {
  return (
    <motion.div
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="mobileSidebar"
    ></motion.div>
  );
}
