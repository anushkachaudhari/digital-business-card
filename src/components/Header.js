import React from "react";
import ReactDOM from "react-dom/client";
import image from "../images/badge.png";

export default function Header() {
  return (
    <nav id="title--header">
      <div className="profile-image-box">
        <img src={image} alt="Anushka" className="profile-image" />
      </div>
      <div className="title--box">
        <h1 className="title--name">Anushka Chaudhari</h1>
        <h1 className="title--position"> Programmer Analyst</h1>
        <a
          href="https://www.linkedin.com/in/anushkachaudhari/"
          className="website-link"
        >
          anushkachaudhari.website
        </a>
      </div>
      <div className="social-links">
        <a href="mailto:anushka.chaudhari@walmart.com" className="email-button">
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/anushkachaudhari/"
          target="_blank"
          className="linkedin-button"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
}
