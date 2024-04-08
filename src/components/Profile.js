import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const [user, setUser] = useState(null);
  const userDetails = useAuth()[0];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Make a request to the backend endpoint to fetch user data
        const response = await axios.get("http://localhost:4000/users",); // Assuming this endpoint returns current user's data
        setUser(response.data); // Set user state with fetched user data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData(); // Call the function to fetch user data
  }, []);
  console.log("couldnt retrieve user", user, userDetails);
  return (
    <div>
      {userDetails ? (
        <div>
          <h1>Welcome, {userDetails.name}</h1>
          <p>Email: {userDetails.email}</p>
          <p>Area: {userDetails.area}</p>
          {/* Display other user information as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
