import React from "react";
import { Link } from "react-router-dom";
import "../styles/about-us.css";

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>We are a toy swapping website</p>
      <div className="browse-logo-toys">
        <Link to="/toys">
          <img src="browse-toys.png" alt="logo with browse toys text" />
        </Link>
      </div>
      <div className="upload-toys-logo">
        <Link to="/add-toys">
          <img src="upload-toys.png" alt="logo with upload toys text" />
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
