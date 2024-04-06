import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Toys from "./Toys";
import AddToys from "./AddToys";
import AboutUs from "./AboutUs";
import Login from "./Login"
import Register from "./Register";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/add-toys" element={<AddToys />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
