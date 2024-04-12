import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../config/firebase-config";
import "../styles/navbar.css";

function Logout() {
  const navigate = useNavigate();
  const [, setUser] = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully!");
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <button type="button" className="logout-link" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
