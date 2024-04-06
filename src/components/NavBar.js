import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext"; // Import the useAuth hook
import "../styles/navbar.css";

function NavBar() {
  const { user } = useAuth(); // Access the authentication state

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
        {user && ( // Conditionally render "Add Toys" link if user is logged in
          <li className="navbar-links-item">
            <Link to="/add-toys">Add Toys</Link>
          </li>
        )}
        {!user && ( // Conditionally render "Register" and "Login" links if user is not logged in
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
      {user && ( // Conditionally render "Profile" icon if user is logged in
        <ul>
          <li className="navbar-profile-icon">
            <Link to="/profile">
              Account <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavBar;
