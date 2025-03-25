import React, { useState } from "react";
import "./Header.css";
import Menu from "../Menu/Menu";
import LoginHandler from './LoginHandler'
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaBlog } from "react-icons/fa";

export default function Header() {
  // set Hook
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={`mobile-menu-container ${isOpen ? "open" : ""}`}>
        <button onClick={() => setIsOpen(false)} className="close-btn">
          <IoCloseSharp />
        </button>
        <ul className="mobile-menu">
          <li className="mobile-menu-list">
            <Link
              onClick={() => setIsOpen(false)}
              className="mobile-menu-link"
              to="/"
            >
              <FaHome /> Home
            </Link>
          </li>
          <li className="mobile-menu-list">
            <Link
              onClick={() => setIsOpen(false)}
              className="mobile-menu-link"
              id="mobile-menu-link-blog"
              to="/blogs"
            >
              <FaBlog /> Blog
            </Link>
          </li>
          <li className="mobile-menu-list">
            <Link
              onClick={() => setIsOpen(false)}
              className="mobile-menu-link"
              to="/about"
            >
              <MdAccountCircle /> About
            </Link>
          </li>
        </ul>
      </div>
      <div className="header-menu-container">
        <div className="header-container">
          <div className="login-container">
            <LoginHandler/>
            <button className="search">
              <CiSearch /> Search
            </button>
          </div>
          <button
            onClick={() => setIsOpen((perv) => !perv)}
            className="hamburger-menu"
          >
            <MdOutlineMenu />
          </button>

          <img className="header-logo" src="public/image/logo.svg" alt="logo" />

          <div className="language">
            <button className="persian-style">persian</button>
            <button className="english-style">english</button>
          </div>
        </div>
        <div className="menu-container">
          <Menu />
        </div>
      </div>
    </>
  );
}
