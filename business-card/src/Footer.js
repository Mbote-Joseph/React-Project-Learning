import React from "react";
import TwitterIcon from "./TwitterIcon.png";
import FacebookIcon from "./FacebookIcon.png";
import InstagramIcon from "./InstagramIcon.png";
import GitHubIcon from "./GitHubIcon.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={TwitterIcon} alt="twitter" />
      <img src={FacebookIcon} alt="twitter" />
      <img src={InstagramIcon} alt="twitter" />
      <img src={GitHubIcon} alt="twitter" />
    </div>
  );
};

export default Footer;
