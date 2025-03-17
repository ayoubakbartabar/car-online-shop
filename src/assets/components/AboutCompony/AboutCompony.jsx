import React from "react";
import "./AboutCompony.css";

export default function AboutCompony() {
  // create array for about compony property
  const AboutComponyArray = [
    {
      id: 1,
      title: "car service",
      svg: "public/svg/car-repair-service-icon.svg",
    },
    {
      id: 2,
      title: "car washing",
      svg: "public/svg/carwash-icon4.svg",
    },
    {
      id: 3,
      title: "car towing",
      svg: "public/svg/towed-car-svgrepo-com.svg",
    },
    {
      id: 4,
      title: "maintenance",
      svg: "public/svg/car-service-icon.svg",
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
