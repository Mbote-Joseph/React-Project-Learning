import React from "react";
import Vector from "./images/Vector.png";
import logo from "./logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={Vector} alt="logo" height="30px" />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default Header;
