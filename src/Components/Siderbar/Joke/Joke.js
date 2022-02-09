import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Joke.css";

export default function Joke() {
  const [joke, setJoke] = useState("Want a Joke?");
  const [loading, setLoad] = useState(true);

  const closeJoke = () => {
    setLoad(true);
  };

  const getJoke = async () => {
    const url = "https://icanhazdadjoke.com/";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }).catch("error");
    const data = await response.json();
    if (data) {
      setJoke(data.joke);
      setLoad(false);
    }
  };
  return (
    <section className="joke">
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            exit={{ y: 200 }}
            transition={{ ease: "easeOut" }}
            className="joke-container"
          >
            <span>{joke}</span>
          </motion.div>
        )}
      </AnimatePresence>
      <section className="joke-buttons">
        <button className="get-joke" onClick={getJoke}>Get a Joke</button>
        {!loading && <button className="close-joke" onClick={closeJoke}>Close</button>}
      </section>
    </section>
  );
}
