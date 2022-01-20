import React from "react";
import Globe from "../images/globe.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Globe} alt="earth image" />
      <p>my travel journal.</p>
    </div>
  );
};

export default Header;
