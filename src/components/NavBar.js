import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img className="logo" src="logo.png" alt="swapzRus icon" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li className="navbar-links-item">
          <NavLink to="/toys">Toys</NavLink>
        </li>
        <li className="navbar-links-item">
          <NavLink to="/add-toys">Add Toys</NavLink>
        </li>
        <li className="navbar-links-item">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="navbar-links-item">
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
