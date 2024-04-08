import React from "react";

import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="nav-bar">
      <img className="logo" src="logo2.png" alt="swapzRus icon" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/toys">Browse Toys</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-toys">Add Toys</Link>
        </li>
        <li className="navbar-profile-icon">
          <Link to="/profile">
            Account <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to="/login">
            Login
          </Link>
          <Link to="/register">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
