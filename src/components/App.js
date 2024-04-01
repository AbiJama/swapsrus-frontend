import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Toys from "./Toys";
import AddToys from "./AddToys";
import AboutUs from "./AboutUs";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/login" component={<Login />} />
        <Route path="/register" component={Register} />
        <Route path="add-toys" element={<AddToys />} />
        <Route path="toys" element={<Toys />} />
      </Routes>
    </div>
  );
}

export default App;
