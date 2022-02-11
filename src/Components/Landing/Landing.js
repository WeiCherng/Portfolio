import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "../../Helper/Wrapper";
import "./Landing.css";
import Profile from "./Profile/Profile";
import Title from "./Text/Title";

export default function Landing(props) {
  return (
    <Wrapper>
      <AnimatePresence>
        {props.visibility && (
          <Wrapper>
            <motion.div
              initial={{ opacity: 0, y: 400 }}
              animate={{ opacity: 1, y: 0 }}
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
              <Title />
              <div className="button-container">
                <button
                  className="button"
                  onClick={() => {
                    props.setVisibility(1);
                  }}
                >
                  About Me
                </button>
                <button
                  className="button"
                  onClick={() => {
                    props.setVisibility(2);
                  }}
                >
                  My Resume
                </button>
                <button
                  className="button"
                  onClick={() => {
                    props.setVisibility(4);
                  }}
                >
                  My Contacts
                </button>
                <button
                  className="button"
                  onClick={() => {
                    props.setVisibility(3);
                  }}
                >
                  Other
                </button>
              </div>
            </motion.div>
          </Wrapper>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
