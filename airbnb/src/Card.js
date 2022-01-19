import React from "react";
import Star from "./images/Star.png";

const Card = (props) => {
  return (
    <div className="card">
      {props.openSpots === 0 ? (
        <div className="card--badge">SOLD OUT</div>
      ) : (
        <div className="card--badge"> {props.openSpots} Remaining</div>
      )}
      <img className="photo" src={props.image} alt="katie" />

      <div className="rating">
        <div className="stats">
          <img src={Star} alt="star" />
          <span>{props.stats.rating}</span>
          <span className="gray">({props.stats.voters}) .</span>
          <span className="gray">{props.stats.country}</span>
        </div>
        <p>{props.lesson}</p>
        <p>
          <span style={{ fontWeight: "bold" }}>From $ {props.price} </span>/
          person
        </p>
      </div>
    </div>
  );
};
export default Card;
