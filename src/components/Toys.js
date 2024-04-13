import React, { useState, useEffect } from "react";
import getToys from "../requests/getToys";
import ToyCard from "./ToyCard";
import "../styles/toys.css";
import SideBar from "./SideBar";

function Toys() {
 const [toys, setToys] = useState([]);

 useEffect(() => {
  const toyFunction = async () => {
   const toyVariable = await getToys();
   setToys(toyVariable);
  };
  toyFunction();
 }, []);

 return (
  <div className="toys">
   <div className="sidebar">
    <SideBar />
   </div>
   <div className="toys-display">
    <h2>Browse Toys</h2>
    <div className="toy-cards">
     {toys.map((toy) => {
      return (
       <ToyCard
        key={toy.id}
        id={toy.id}
        title={toy.title}
        type={toy.type}
        description={toy.description}
        ageRange={toy.ageRange}
        condition={toy.condition}
        postcode={toy.postcode}
        image={toy.image}
        setToys={setToys}
       />
      );
     })}
    </div>
   </div>
  </div>
 );
}

export default Toys;
