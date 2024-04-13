import React, { useState } from "react";
import "../styles/sidebar.css";

function SideBar({ handleSetToys }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [selectedAgeRange, setSelectedAgeRange] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    handleSetToys(category, selectedCondition, selectedAgeRange);
  };

  const handleConditionClick = (condition) => {
    setSelectedCondition(condition);
    handleSetToys(selectedCategory, condition, selectedAgeRange);
  };

  const handleAgeRangeClick = (ageRange) => {
    setSelectedAgeRange(ageRange);
    handleSetToys(selectedCategory, selectedCondition, ageRange);
  };

  const clearFilter = () => {
    setSelectedCategory("all");
    setSelectedCondition("all");
    setSelectedAgeRange("all");
    handleSetToys("all", "all", "all");
  };

  return (

        <>
        <div>
        <h3 className="sidebar-heading">Filter by type</h3>
          <ul className="sidebar-links">
            <li>
              <button
                type="button"
                className="sidebar-links-item"
                onClick={() => handleCategoryClick("Books")}
              >
                Books
              </button>
            </li>
            <li>
              <button
                type="button"
                className="sidebar-links-item"
                onClick={() => handleCategoryClick("Pre-school")}
              >
                Pre-school
              </button>
            </li>
            <li>
              <button
                type="button"
                className="sidebar-links-item"
                onClick={() => handleCategoryClick("Indoor")}
              >
                Indoor
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`sidebar-links-item ${selectedCategory === "Outdoor" ? "selected" : ""}`}
                onClick={() => handleCategoryClick("Outdoor")}
              >
                Outdoor
              </button>
            </li>
            <li>
              <button
                type="button"
                className="clear sidebar-links-item"
                onClick={clearFilter}
              >
                Clear Filter
              </button>
            </li>
          </ul>
        </div>
        <div>
        <h3 className="sidebar-heading">Filter by Condition</h3>
          <ul className="sidebar-links">
            <li>
              <button
                type="button"
                className="sidebar-links-item"
                onClick={() => handleConditionClick("Brand New")}
              >
                Brand New
              </button>
            </li>
            <li>
              <button
                type="button"
                className="sidebar-links-item"
                onClick={() => handleConditionClick("Like New")}
              >
                Like New
              </button>
            </li>
            <li>
              <button
                type="button"
                className="sidebar-links-item"
                onClick={() => handleConditionClick("Good")}
              >
                Good
              </button>
            </li>
            <li>
              <button
                type="button"
                className="sidebar-links-item"
                onClick={() => handleConditionClick("Used")}
              >
                Fair
              </button>
            </li>
            <li>
              <button
                type="button"
                className="sidebar-links-item"
                onClick={() => handleConditionClick("Defected")}
              >
                Defected
              </button>
            </li>
            <li>
              <button
                type="button"
                className="clear sidebar-links-item"
                onClick={clearFilter}
              >
                Clear Filter
              </button>
            </li>
          </ul>
        </div>
         <div>
         <h3 className="sidebar-heading">Filter by Age Range</h3>
          <ul className="sidebar-links">
            <li>
              <button
                type="button"
                className="sidebar-links-item"
                onClick={() => handleAgeRangeClick("0-3")}
              >
                0-3
              </button>
            </li>
            <li>
              <button
                type="button"
                className="sidebar-links-item"
                onClick={() => handleAgeRangeClick("3-6")}
              >
                3-6
              </button>
            </li>
            <li>
              <button
                type="button"
                className="sidebar-links-item"
                onClick={() => handleAgeRangeClick("6-9")}
              >
                6-9
              </button>
            </li>
            <li>
              <button
                type="button"
                className="sidebar-links-item"
                onClick={() => handleAgeRangeClick("9-12")}
              >
                9-12
              </button>
            </li>
            <li>
              <button
                type="button"
                className="sidebar-links-item"
                onClick={() => handleAgeRangeClick("12+")}
              >
                12+
              </button>
            </li>
            <li>
              <button
                type="button"
                className=" clear sidebar-links-item"
                onClick={clearFilter}
              >
                Clear Filter
              </button>
            </li>
          </ul>
         </div>
          
        </>
  );
}

export default SideBar;
