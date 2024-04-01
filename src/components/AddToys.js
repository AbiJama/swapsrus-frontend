import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";

const AddToys = () => {
  const initialState = {
    fields: {
      title: "",
      type: "books",
      condition: "new",
      ageRange: "",
      description: "",
      borrowPeriod: "",
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
        "http://localhost:4000/api/v1/AddToys/",
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
    <div class Name="add-toys">
      <Alert message={alert.message} success={alert.isSuccess} />
      <form className="add-toy-form" onSubmit={handleAddToys}>
        <label htmlFor="title">
          Toy Title:
          <br />
          <br />
          <input
            id="title"
            name="title"
            placeholder="type of toy"
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
            <option value="Brand New">Brand New</option>
            <option value="Like New">Like New</option>
            <option value="Used">Used</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Defected">Defected</option>
          </select>
        </label>
        <label htmlFor="ageRange">
          AgeRange:
          <br />
          <br />
          <select
            id="ageRange"
            name="ageRange"
            type="number"
            value={fields.ageRange}
            onChange={handleFieldChange}
          >
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
            placeholder="..."
            value={fields.description}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="borrow-period">
          borrowPeriod:
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
            <option value="0-3">0-3</option>
            <option value="3-6">3-6</option>
            <option value="6-9">6-9</option>
            <option value="9-12">9-12</option>
            <option value="12+">12+</option>
          </select>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddToys;
