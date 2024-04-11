import React, { useState } from "react";
import "../styles/sidebar.css";

function SideBar({ handleSetToys }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (category) => {
    setSelectedCategory(category);
    handleSetToys(category);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const clearFilter = () => {
    setSelectedCategory("");
    handleSetToys("all");
  };

  console.log(selectedCategory);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button type="button" className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>

      {isOpen && (
        <>
          <h1 className="sidebar-heading">Filter by type</h1>
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
              className={`sidebar-links-item ${selectedCategory === "Outdoor" ? "selected" : ""}`}
              onClick={() => handleClick("Outdoor")}
            >
              Outdoor
            </button>
            <button
              type="button"
              className="sidebar-links-item"
              onClick={clearFilter}
            >
              Clear Filter
            </button>
          </ul>
          <h2 className="sidebar-heading">Filter by Condition</h2>
          <ul className="sidebar-links">
          <button
              type="button"
              className="sidebar-links-item"
              onClick={() => handleClick("Brand New")}
            >
              Brand New
            </button>
            <button
              type="button"
              className="sidebar-links-item"
              onClick={() => handleClick("Like New")}
            >
              Like New
            </button>
            <button
              type="button"
              className="sidebar-links-item"
              onClick={() => handleClick("Good")}
            >
              Good
            </button>
            <button
              type="button"
              className="sidebar-links-item"
              onClick={() => handleClick("Used")}
            >
              Used
            </button>
            <button
              type="button"
              className="sidebar-links-item"
              onClick={() => handleClick("Defected")}
            >
              Defected
            </button>
            <button
              type="button"
              className="sidebar-links-item"
              onClick={clearFilter}
            >
              Clear Filter
            </button>
          </ul>
        </>
      )}
    </div>
  );
}

export default SideBar;
