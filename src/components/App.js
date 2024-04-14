import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import AddToys from "./AddToys";
import Toys from "./Toys";
import AboutUs from "./AboutUs";
import Register from "./Register";
import Profile from "./Profile";
import Login from "./Login";
import Logout from "./Logout";

function App() {
  const [, setUser] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<AboutUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/add-toys" element={<AddToys />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/profile" element={<Profile setUser={setUser} />} />
        <Route path="/logout" element={<Logout setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
