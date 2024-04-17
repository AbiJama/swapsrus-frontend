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
 const [showFilter, setshowFilter] = useState("Filter")

 const handleFilter = () => {
    setshowFilter(prev=>{
        return prev==="Filter"? "Hide":"Filter"
    })
 }
 const handleSetToys = (category, condition, ageRange) => {
  if (category === "all" && condition === "all" && ageRange === "all") {
   setFilteredToys(toys);
   return;
  }

  let filteredArray = [...toys];
  if (category !== "all") {
   filteredArray = filteredArray.filter((toy) => toy.type === category);
   setFilteredToys(filteredArray);
  }

  if (condition !== "all") {
   filteredArray = filteredArray.filter((toy) => toy.condition === condition);
   setFilteredToys(filteredArray);
  }

  if (ageRange !== "all") {
   filteredArray = filteredArray.filter((toy) => toy.ageRange === ageRange);
   setFilteredToys(filteredArray);
  }
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
   .get(`http://localhost:4000/Toys${search}`)
   .then(({ data }) => setToys(data))
   .catch((err) => console.error("Error fetching toys:", err));
 }, [search]);

 return (
  <div className="toys">
   <div className="screen sidebar">
    <SideBar handleSetToys={handleSetToys} />
   </div>
   <div className="toys-display">
    <button type="button" className="button mobile" onClick={handleFilter}>{showFilter}</button>
    <div className={`mobile sidebar ${showFilter}`}>
    <SideBar handleSetToys={handleSetToys} />
   </div>
   <h2>Browse Toys:</h2>
    <div className="toy-cards">
     {filteredToys.map((toy) => (
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
       setToys={setFilteredToys}
      />
     ))}
    </div>
   </div>
  </div>
 );
}

export default Toys;
