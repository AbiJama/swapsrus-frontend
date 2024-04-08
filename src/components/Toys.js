import React, { useState, useEffect } from "react";
import getToys from "../requests/getToys";
import ToyCard from "./ToyCard";
import "../styles/toys.css";

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
    <>
    <h2>Browse Toys:</h2>
  <div className="toys-display">
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
   })}  </div>
    </>

 );
}

export default Toys;

