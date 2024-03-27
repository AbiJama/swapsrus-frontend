import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img
        className="logo"
        src="logo.png"
        alt="swapzRus icon"
      />
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
