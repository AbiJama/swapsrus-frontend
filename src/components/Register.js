import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "./Alert";
import { auth } from "../config/firebase-config";
import "../styles/register.css";

function Register() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    area: "",
  };

  const [fields, setFields] = useState(initialState);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    createUserWithEmailAndPassword(auth, fields.email, fields.password)
      .then(async (userCredential) => {
        const { user } = userCredential;
        console.log("Account Created");
        setAlert({
          message: "Your account has been created!",
          isSuccess: true,
        });
        await axios.post("http://localhost:4000/users", { ...fields, uid: user.uid });
        console.log("User data saved in backend");
        navigate("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        setAlert({ message: errorMessage, isSuccess: false });
        setFields(initialState);
      });
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={fields.name}
          onChange={handleFieldChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={fields.email}
          onChange={handleFieldChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={fields.password}
          onChange={handleFieldChange}
          required
        />
        <input
          type="text"
          name="area"
          placeholder="Area"
          value={fields.area}
          onChange={handleFieldChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <Alert message={alert.message} success={alert.isSuccess} />
    </div>
  );
}

export default Register;
