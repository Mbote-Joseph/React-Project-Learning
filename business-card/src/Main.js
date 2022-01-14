import React from "react";
import "./main.css";
import Top from "./Top";
import Content from "./Content";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="main">
      <div className="space"></div>
      <Top />
      <Content />
      <Footer />
    </div>
  );
};

export default Main;
