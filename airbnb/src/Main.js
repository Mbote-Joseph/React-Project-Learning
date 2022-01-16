import React from "react";
import Card from "./Card";
// import Contact from "./Contact";
import Home from "./Home";

const Main = () => {
  return (
    <div className="main">
      <Home />
      <div className="cards-main">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Main;
//  <Contact />
