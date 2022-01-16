import React from "react";
import Star from "./images/Star.png";
import Katie from "./images/image 12.png";

const Card = () => {
  return (
    <div className="card">
      <img src={Katie} alt="katie" />
      <div className="rating">
        <div className="stats">
          <img src={Star} alt="star" />
          <span>5.0</span>
          <span className="gray">(6) .</span>
          <span className="gray">USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span style={{ fontWeight: "bold" }}>From $136 </span>/ person
        </p>
      </div>
    </div>
  );
};
export default Card;
