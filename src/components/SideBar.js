import React, { useState } from "react";
import "../styles/sidebar.css";

function SideBar({ handleSetToys }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleClick = (category) => {
    setSelectedCategory(category);
    handleSetToys(category);
  };

  console.log(selectedCategory);

  return (
    <div className="sidebar">
      <h3 className="sidebar-heading">Filter by type</h3>
      <ul className="sidebar-links">
        <button
          type="button"
          className="sidebar-links-item"
          onClick={() => handleClick("Books")}
        >
          Books
        </button>
        <button
          type="button"
          className="sidebar-links-item"
          onClick={() => handleClick("Pre-school")}
        >
          Pre-school
        </button>
        <button
          type="button"
          className="sidebar-links-item"
          onClick={() => handleClick("Indoor")}
        >
          Indoor
        </button>
        <button
          type="button"
          className="sidebar-links-item"
          onClick={() => handleClick("Outdoor")}
        >
          Outdoor
        </button>
        <li className="side-bar-links-item">Clear Filter</li>
      </ul>
      <h3 className="sidebar-heading">Sort By</h3>
      <ul className="sidebar-links">
        <li className="sidebar-links-item">Age Ascending</li>
        <li className="sidebar-links-item">Age Descending</li>
        <li className="sidebar-links-item clear-filter">Clear Sort</li>
      </ul>
    </div>
  );
}

export default SideBar;
