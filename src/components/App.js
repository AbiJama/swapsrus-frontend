import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Toys from "./Toys";
import AddToys from "./AddToys";
import AboutUs from "./AboutUs";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <h2>SwapRUs</h2>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-toys" element={<AddToys />} />
        <Route path="/toys" element={<Toys />} />
      </Routes>
    </div>
  );
}

export default App;
