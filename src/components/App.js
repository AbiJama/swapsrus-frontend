import React from "react";
import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
import NavBar from "./NavBar";
import Toys from "./Toys";
import AddToys from "./AddToys";
import AboutUs from "./AboutUs";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="add-toys" element={<AddToys />} />
        <Route path="toys" element={<Toys />} />
      </Routes>
    </div>
  );
};

export default App;
