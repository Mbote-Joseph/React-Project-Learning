import React from "react";
import About from "./About";
import Interests from "./Interests";

import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const Content = () => {
  return (
    <div className="content">
      <p className="name">Mbote Joseph</p>
      <p className="title">BSc. Computer Science</p>
      <p className="website">https://mbote-joseph.netlify.com</p>
      <div className="buttons">
        <button className="email">
          <MdEmail style={{ marginRight: "5px" }} />
          Email
        </button>
        <button className="linkedin">
          {" "}
          <FaLinkedinIn style={{ marginRight: "5px" }} /> LinkedIn
        </button>
      </div>
      <About />
      <Interests />
    </div>
  );
};

export default Content;
