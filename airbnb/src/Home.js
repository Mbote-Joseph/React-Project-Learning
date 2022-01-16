import React from "react";
import Photo from "./images/photo-grid.png";

const Home = () => {
  return (
    <div className="home">
      <img className="photo-grid" src={Photo} alt="group-grid" />
      <div className="text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by <br />
          one-of-a-kind hosts—all without leaving
          <br /> home.
        </p>
      </div>
    </div>
  );
};

export default Home;
