import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import "../styles/add-toys.css";

function AddToys(pristine) {
  const initialState = {
    title: "",
    type: "books",
    condition: "new",
    ageRange: "",
    description: "",
    borrowPeriod: "select borrow period",
    postcode: "",
    image: "",
  };

  const [fields, setFields] = useState(initialState);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });

  const handleAddToys = async (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });

    if (
      !fields.title ||
      !fields.ageRange ||
      !fields.description ||
      !fields.borrowPeriod
    ) {
      setAlert({
        message: "Please fill out all required fields.",
        isSuccess: false,
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/toys", fields);
      setAlert({
        message: "The item has been added successfully!",
        isSuccess: true,
      });
      setFields(initialState);
    } catch (error) {
      setAlert({
        message: "Server error, please try again later.",
        isSuccess: false,
      });
    }
  };
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  return (
    <div className="add-toys">
      <h2>Add Toys</h2>
      <form className="add-toy-form" onSubmit={handleAddToys}>
        <label htmlFor="title">
          Toy Title:
          <br />
          <br />
          <input
            id="title"
            name="title"
            placeholder="Enter title here..."
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="type">
          Type:
          <br />
          <br />
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Choose Category">Choose Category</option>
            <option value="Books">Books</option>
            <option value="Pre-school">Pre-school</option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </label>
        <label htmlFor="condition">
          Condition:
          <br />
          <br />
          <select
            id="condition"
            name="condition"
            value={fields.condition}
            onChange={handleFieldChange}
          >
            <option value="Select Condition">Select Condition</option>
            <option value="Brand New">Brand New</option>
            <option value="Like New">Like New</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Defected">Defected</option>
          </select>
        </label>
        <label htmlFor="ageRange">
          Age Range:
          <br />
          <br />
          <select
            id="ageRange"
            name="ageRange"
            type="number"
            value={fields.ageRange}
            onChange={handleFieldChange}
          >
            <option value="select age range">Select Age Range</option>
            <option value="0-3">0-3 Years</option>
            <option value="3-6">3-6 Years</option>
            <option value="6-9">6-9 Years</option>
            <option value="9-12">9-12 Years</option>
            <option value="12+">12+</option>
          </select>
        </label>
        <label htmlFor="description">
          Description:
          <br />
          <br />
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here..."
            value={fields.description}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="borrow-period">
          Borrow Period:
          <br />
          <br />
          <select
            id="borrowPeriod"
            name="borrowPeriod"
            type="number"
            placeholder="select borrow period"
            value={fields.borrowPeriod}
            onChange={handleFieldChange}
          >
            <option value="select borrow period">Select Borrow Period</option>
            <option value="0-3">1 Month</option>
            <option value="3-6">3 Months</option>
            <option value="6-9">6 Months</option>
            <option value="9-12">12 Months</option>
            <option value="12+">12+ Months</option>
          </select>
        </label>
        <label htmlFor="postcode">
          Postcode:
          <br />
          <input
            type="text"
            name="postcode"
            id="postcode"
            placeholder="Enter postcode"
            value={fields.postcode}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="image">
          Image Upload:
          <br />
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Enter demo image name"
            value={fields.image}
            onChange={handleFieldChange}
          />
        </label>
        <button className="button" type="submit" disabled={pristine}>
          Add
        </button>
      </form>
      <Alert
        message={alert.message}
        success={alert.isSuccess}
        onChange={handleFieldChange}
      />
    </div>
  );
}

export default AddToys;
