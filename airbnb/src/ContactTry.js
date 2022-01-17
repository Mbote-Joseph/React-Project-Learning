import React from "react";
import Image from "./images/image22.png";
import Star from "./images/Star.png";

import "./contact.css";

export default function Contact() {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={Image} alt="logo diagram 1" />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src={Star} alt="logo diagram 2" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src={Star} alt="logo diagram 3" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={Image} alt="logo diagram 4" />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src={Star} alt="logo diagram 5" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src={Star} alt="logo diagram 6" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={Image} alt="logo diagram 7" />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src={Star} alt="logo diagram 8" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src={Star} alt="logo diagram 9" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={Image} alt="logo diagram 10" />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src={Star} alt="logo diagram 11" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src={Star} alt="logo diagram 12" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>
    </div>
  );
}
