import React, { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase-config";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully!");
      // maybe add a redirections to another page when logged out?
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </form>
    </div>
  );
}

export default Login;
