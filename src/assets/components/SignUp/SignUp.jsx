import React from "react";
import "./SignUp.css";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <section className="signup-container">
      <motion.div
        className="signup-content"
        initial={{ x: -500, opacity: 0 }} // start
        animate={{ x: 0, opacity: 1 }} // end
        transition={{ duration: 1.2, ease: "easeOut" }} // timing
      >
        <h2 className="signup-title">be part of our story</h2>
        <p className="signup-paragraph">join the new mercedes-benz community</p>
        <Link to="/signup-page" className="signup-btn">
          sign up <FaChevronRight />
        </Link>
      </motion.div>
      <motion.div
        className="signup-image-container"
        initial={{ x: +500, opacity: 0 }} // start
        animate={{ x: 0, opacity: 1 }} // end
        transition={{ duration: 1.2, ease: "easeOut" }} // timing
      >
        <img alt="car" src="/image/SignUpCar.png" className="signup-img" />
      </motion.div>
    </section>
  );
}
