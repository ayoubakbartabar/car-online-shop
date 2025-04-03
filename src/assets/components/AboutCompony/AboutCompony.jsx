import React from "react";
import "./AboutCompony.css";

export default function AboutCompony() {
  // create array for about compony property
  const AboutComponyArray = [
    {
      id: 1,
      title: "car service",
      svg: "/svg/car-repair-service-icon.svg",
    },
    {
      id: 2,
      title: "car washing",
      svg: "/svg/carwash-icon4.svg",
    },
    {
      id: 3,
      title: "car towing",
      svg: "/svg/towed-car-svgrepo-com.svg",
    },
    {
      id: 4,
      title: "maintenance",
      svg: "/svg/car-service-icon.svg",
    },
  ];
  return (
    <section className="About-compony-container">
      {AboutComponyArray.map((item) => (
        <div key={item.id}>
          <img className="About-compony-svg-container" src={item.svg} alt={item.title}/>
          <h2 className="About-compony-title">{item.title}</h2>
        </div>
      ))}
    </section>
  );
}
