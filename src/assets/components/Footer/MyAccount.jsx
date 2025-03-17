import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function MyAccount() {
  return (
    <div className="my-account-container">
      <h2 className="my-account-title">my account</h2>
      <ul className="my-account-list-container">
        <li className="my-account-list">
          <FaGithub />{" "}
          <a
            className="my-account-list-link"
            href="https://github.com/ayoubakbartabar"
          >
            Git Hub
          </a>
        </li>
        <li className="my-account-list">
          <FaLinkedin />{" "}
          <a
            className="my-account-list-link"
            href="https://www.linkedin.com/in/ayoub-akbartabar-bb78b2212/"
          >
            Linkedin
          </a>
        </li>
        <li className="my-account-list">
          <FaPhoneAlt />
          <a
            className="my-account-list-link"
            href=""
          >
            +98 0901-618-1887
          </a>
        </li>
        <li className="my-account-list">
          <MdOutlineAlternateEmail />
          <a
            className="my-account-list-link"
            href=""
          >
            ayoubakbartabar1887@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
}
