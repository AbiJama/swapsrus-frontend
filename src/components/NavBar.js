import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
  <div className="nav-bar">
    <img className="logo" src="https://commandshifthq.slack.com/files/U05KS145GQ4/F06RDUQTVRA/screenshot_2024-03-26_at_09.08.41.png" alt="swapzRus icon" />
    <ul className="navbar-links">
      <li className="navbar-links-item">
        <Link to="/">Account</Link>
      </li>
      <li className="navbar-links-item">
        <Link to="/">About Us</Link>
      </li>
      <li className="navbar-links-item">
        <Link to="/">Toys</Link>
      </li>
      <li className="navbar-links-item">
        <Link to="/">Add Toys</Link>
      </li>
    </ul>
  </div>
  );
};

export default NavBar;
