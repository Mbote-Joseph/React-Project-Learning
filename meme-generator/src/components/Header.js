import React from "react";
import logo from "../logo.svg";
import TrollFace from "../images/TrollFace.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={TrollFace} alt="troll face" height="50px" />
        <span className="header-title">Meme Generator</span>
      </div>
      <div>
        <span className="header-title1">React Course - Project 3</span>
        <img src={logo} alt="logo" height="50px" className="App-logo" />
      </div>
    </div>
  );
};

export default Header;
