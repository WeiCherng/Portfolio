import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "../../Helper/Wrapper";
import "./Landing.css";
import Profile from "./Profile/Profile";

export default function Landing(props) {
  return (
    <Wrapper>
      <AnimatePresence>
        {props.visibility && (
          <Wrapper>
            <motion.div
              initial={{ opacity: 0, y: 400 }}
              animate={{ opacity: 1, y:0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              exit={{ y: -400, opacity: 0 }}
              className="column profile-container"
            >
              <Profile></Profile>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 400 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              exit={{ y: -400, opacity: 0 }}
              className="column desc-container"
            >
              <h1>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit.
              </h1>
              <div className="button-container">
                <button
                  className="button"
                  onClick={() => {
                    props.setVisibility();
                  }}
                >
                  commodo nulla facilisi
                </button>
                <button className="button">pellentesque habitant morbi</button>
                <button className="button">mattis molestie a</button>
              </div>
            </motion.div>
          </Wrapper>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
