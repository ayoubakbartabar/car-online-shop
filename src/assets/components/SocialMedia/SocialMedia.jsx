import React from "react";
import "./SocialMedia.css";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

export default function SocialMedia() {
  return (
    <section className="social-media-container">
      <h2 className="social-media-title">Follow Car Yard</h2>
      <div className="social-media-icon-container">
        <FaInstagram  className="social-media-svg"/>
        <FaFacebook className="social-media-svg" />
        <FaTwitter className="social-media-svg" />
        <FaLinkedin  className="social-media-svg"/>
        <FaYoutube className="social-media-svg" />
        <AiFillTikTok className="social-media-svg" />
      </div>
    </section>
  );
}
