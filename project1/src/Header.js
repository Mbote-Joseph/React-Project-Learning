import React from "react";
import logo from "./logo.svg";

const Header = () => {
  return (
    <div className="nav">
      <nav className="first">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ fontSize: "40px", color: "#61dafb" }}>ReactFacts</h1>
      </nav>

      <h3 style={{ fontSize: "35px", color: "#f7f7f7" }}>
        React Course - Project 1
      </h3>
    </div>
  );
};

export default Header;
