import React, { useState } from "react";
import "./Header.css";
import Menu from "../Menu/Menu";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

export default function Header() {
  // set Hook
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={`mobile-menu-container ${isOpen ? "open" : ""}`}>
        <button onClick={() => setIsOpen(false)} className="close-btn">
          <IoCloseSharp />
        </button>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="header-menu-container">
        <div className="header-container">
          <div className="login-container">
            <button className="login">
              <FaAngleDown /> Login
            </button>
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
