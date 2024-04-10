import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const [user, setUser] = useState(null);
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
  console.log("couldnt retrieve user", user, userDetails);
  return (
    <div>
      {userDetails && userDetails[0] ? (
        <div>
          <h1>Welcome, {userDetails[0].name}</h1>
          <p>Email: {userDetails[0].email}</p>
          <p>Area: {userDetails[0].area}</p>
          {/* Display other user information as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
