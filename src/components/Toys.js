import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import getToys from "../requests/getToys";
import ToyCard from "./ToyCard";
import SideBar from "./SideBar";
import "../styles/toys.css";

function Toys() {
  const [toys, setToys] = useState([]);
  const [filteredToys, setFilteredToys ] = useState([]);
  const { search } = useLocation();
  const handleSetToys = (category) => {
    //setToys((prev) => prev.filter((toy) => toy.type === category));
    setFilteredToys(toys.filter((toy) => toy.type === category));
  };
  console.log(toys);

  useEffect(() => {
    const toyFunction = async () => {
      const toyVariable = await getToys();
      setToys(toyVariable);
    };
    toyFunction();
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/Toys${search}`)
      .then(({ data }) => setToys(data))
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <>
      <h2>Browse Toys:</h2>
      <div className="toys-display">
        <SideBar handleSetToys={handleSetToys} />
        {filteredToys.map((toy) => {
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
        })}{" "}
      </div>
    </>
  );
}

export default Toys;
