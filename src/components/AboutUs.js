import React from "react";
import { Link } from "react-router-dom";
import "../styles/about-us.css";

function AboutUs({ Toys, addToys })  {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <h2 className="about-us_tag">Borrow. Play. Repeat.</h2>
      <div className="about-us_text">
      <p>We are a toy swapping website for local communities.</p>
      <p>Toys can be expensive and children become easily bored of playing with them leaving you with rooms full of pretty new unloved toys.</p> 
      <p>At Swaps R Us you can upload your lonely toys and let others borrow them and you can pick some to borrow too.</p>
      <p>Contact the lender and arrange a local pick-up. Swap and enjoy and then when you are bored - swap again!</p>
      <p>Browse and upload your toys below.</p>
      </div>
      <div className="button-container">
        <Link to="/toys">
          <button type="button" className="browse-toys-logo" onClick={Toys}>
            <img className="about-us_button" src="browse-toys.png" alt="logo with browse toys text" />
          </button>
        </Link>
        <Link to="/add-toys">
          <button type="button" className="upload-toys-logo" onClick={addToys}>
            <img className="about-us_button" src="upload-toys.png" alt="logo with upload toys text" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;

