import { useState } from "react";
import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="nav-bar-container">
      <nav className="nav-bar">
        <ul className="menu-list-container">
          {[
            { path: "/", label: "Home" },
            { path: "/blogs", label: "Blogs" },
            { path: "/about", label: "About" },
          ].map((item, index) => (
            <li
              key={index}
              className="menu"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link
                className={`menu-link ${
                  hovered === index
                    ? "hovered"
                    : hovered !== null
                    ? "dimmed"
                    : ""
                }`}
                to={item.path}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
