import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";
import "../styles/profile.css";

function Profile() {
  const [, setUser] = useState(null);
  const userDetails = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/users");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile-container">
      {userDetails && userDetails[0] ? (
        <div>
          <h1>
            Welcome <span className="highlight">{userDetails[0].name}</span>
          </h1>
          <p>
            <span className="highlight">Area:</span> {userDetails[0].area}
          </p>
          <p>
            <span className="highlight">Email:</span> {userDetails[0].email}{" "}
            <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
