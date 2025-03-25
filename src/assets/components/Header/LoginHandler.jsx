import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import { MdAccountBox } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
function LoginHandler() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="login" onClick={toggleDropdown}>
        <FaAngleDown /> Login
      </button>
      <ul className={`dropdown-list ${isOpen ? "open" : ""}`}>
        <li className="dropdown-list-item">
          <Link
            className="dropdown-list-item-link"
            onClick={toggleDropdown}
            to="#"
          >
            Login
            <IoIosLogIn />
          </Link>
        </li>
        <li className="dropdown-list-item">
          <Link
            className="dropdown-list-item-link"
            onClick={toggleDropdown}
            to="#"
          >
            careers
            <MdAccountBox />
          </Link>
        </li>
        <li className="dropdown-list-item">
          <Link
            className="dropdown-list-item-link"
            onClick={toggleDropdown}
            to="https://github.com/ayoubakbartabar"
          >
            Git Hub  
            <FaGithub />  
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LoginHandler;
