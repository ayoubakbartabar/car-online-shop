import React from "react";

export default function Owners() {
  return (
    <div className="owners-container">
      <h2 className="owners-title">owners</h2>
      <ul className="owners-list-container">
        <li className="owners-list">
          {" "}
          <a className="owners-list-link" href="#">
            ownership services
          </a>
        </li>
        <li className="owners-list">
          {" "}
          <a className="owners-list-link" href="#">
            in control
          </a>
        </li>
        <li className="owners-list">
          {" "}
          <a className="owners-list-link" href="#">
            software updates
          </a>
        </li>
        <li className="owners-list">
          {" "}
          <a className="owners-list-link" href="#">
            careers
          </a>
        </li>
      </ul>
    </div>
  );
}
