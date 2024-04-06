import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import "../styles/add-toys.css";

function AddToys() {
  const initialState = {
    fields: {
      title: "",
      type: "books",
      condition: "new",
      ageRange: "",
      description: "",
      borrowPeriod: "",
      image: ""
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddToys = async (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    try {
      const { data } = await axios.post(
        "http://localhost:4000/toys",
        fields,
      );
      setAlert({
        message: "The toy has been added successfully!",
        isSuccess: true,
      });
      console.log(data);
    } catch (error) {
      setAlert({
        message: "Server error, please try again later.",
        isSuccess: false,
      });
    }
    setFields(initialState.fields);
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div className="add-toys">
      <Alert message={alert.message} success={alert.isSuccess} />
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
            <option value="Used">Used</option>
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
            <option value="select age range">Select age range</option>
            <option value="0-3">0-3</option>
            <option value="3-6">3-6</option>
            <option value="6-9">6-9</option>
            <option value="9-12">9-12</option>
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
            placeholder="0"
            value={fields.price}
            onChange={handleFieldChange}
          >
            <option value="0-3">1 month</option>
            <option value="3-6">3 months</option>
            <option value="6-9">6 months</option>
            <option value="9-12">12 months</option>
            <option value="12+">12+months</option>
          </select>
        </label>
        <label htmlFor="image">Image Upload: 
        <input type="text" name="image" id="image" placeholder="Enter demo image name" value={fields.image} onChange={handleFieldChange}/>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddToys;
