import React from "react";
import { Link } from "react-router-dom";
import "../styles/about-us.css";

const AboutUs = ({ Toys, addToys }) => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>We are a toy swapping website</p>
      <div className="button-container">
        <Link to="/toys">
          <button type="button" className="browse-toys-logo" onClick={Toys}>
            <img src="browse-toys.png" alt="logo with browse toys text" />
          </button>
        </Link>
        <Link to="/add-toys">
          <button type="button" className="upload-toys-logo" onClick={addToys}>
            <img src="upload-toys.png" alt="logo with upload toys text" />
          </button>
        </Link>
      </div>
    </div>
  );
};
