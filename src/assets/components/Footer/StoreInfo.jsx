import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
export default function StoreInfo() {
  return (
    <div className="store-info-container">
      <h2 className="store-info-title">store information</h2>
      <ul className="store-info-list-container">
        <li className="store-info-list">
          <FaPhoneAlt />
          <a className="store-info-list-link" href="">
            +98 0911-111-111
          </a>
        </li>
        <li className="store-info-list">
          <FaLocationDot /> Iran
        </li>
        <li className="store-info-list">
          <FaCarSide />
          <a
            className="store-info-list-link"
            href="https://www.mercedes-benz.com/en/"
          >
            Cars
          </a>
        </li>
        <li className="store-info-list"><GiSteeringWheel /> Driver</li>
      </ul>
    </div>
  );
}
