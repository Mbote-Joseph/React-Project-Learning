import React from "react";
import logo from "./logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Business Card App</h1>
      </div>
      <h2>Project Test (Solo)</h2>
    </div>
  );
};
export default Header;
