import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logout from "./Logout";
import "../styles/navbar.css";

function NavBar() {
  const userDetails = useAuth(); // Access the authentication state
  const isLoggedIn = userDetails ? userDetails[0] : null;
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
        {isLoggedIn && ( // Conditionally render "Add Toys" link if user is logged in
          <>
            <>
              <li className="navbar-links-item">
                <Link to="/add-toys">Add Toys</Link>
              </li>
              <li className="profile">
                <Link to="/profile">Profile</Link>
              </li>
            </>
            <li className="logout-links-item">
              <Logout />
            </li>
          </>
        )}
        {!isLoggedIn && ( // Conditionally render "Register" and "Login" links if user is not logged in
          <>
            <li className="navbar-links-item">
              <Link to="/register">Register</Link>
            </li>
            <li className="navbar-links-item">
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default NavBar;
