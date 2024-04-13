import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import getToys from "../requests/getToys";
import ToyCard from "./ToyCard";
import SideBar from "./SideBar";
import "../styles/toys.css";

function Toys() {
  const [toys, setToys] = useState([]);
  const [filteredToys, setFilteredToys] = useState([]);
  const { search } = useLocation();

  const handleSetToys = (category, condition, ageRange) => {
    let filtered = [...toys];

    const intermediateFilteredToys = []; // Array to hold intermediate filtered results

// Apply category filter if specified
if (category !== "all") {
    const categoryFiltered = filtered.filter(toy => toy.type === category);
    if (categoryFiltered.length > 0) {
        intermediateFilteredToys.push(categoryFiltered);
    }
}

// Apply condition filter if specified
if (condition !== "all") {
    const conditionFiltered = filtered.filter(toy => toy.condition === condition);
    if (conditionFiltered.length > 0) {
        intermediateFilteredToys.push(conditionFiltered);
    }
}

// Apply ageRange filter if specified
if (ageRange !== "all") {
    const ageRangeFiltered = filtered.filter(toy => toy.ageRange === ageRange);
    if (ageRangeFiltered.length > 0) {
        intermediateFilteredToys.push(ageRangeFiltered);
    }
}

// Combine intermediate filtered results
if (intermediateFilteredToys.length > 0) {
    filtered = intermediateFilteredToys.reduce((accumulator, current) => accumulator.filter(item => current.includes(item)));
} else {
    filtered = [];
}

// Set the filtered toys
setFilteredToys(filtered);
  };

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const toyData = await getToys();
        setToys(toyData);
        setFilteredToys(toyData); // Initially display all toys
      } catch (error) {
        console.error("Error fetching toys:", error);
      }
    };

    fetchToys();
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/Toys${search}`)
      .then(({ data }) => setToys(data))
      .catch((err) => console.error("Error fetching toys:", err));
  }, [search]);

  return (
    <>
      <h2>Browse Toys:</h2>
      <div className="toys-display">
        <SideBar handleSetToys={handleSetToys} />
        {filteredToys.length > 0 ? filteredToys.map((toy) => (
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
        )) 
      :
      toys.map((toy) => (
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
      )) 
      }
      </div>
    </>
  );
}

export default Toys;