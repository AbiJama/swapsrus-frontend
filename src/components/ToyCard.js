import React, { useState } from "react";
import axios from "axios";
import "../styles/toy-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ToyCard(props) {
 const [heart, setHeart] = useState("white");

 const {
  id,
  title,
  description,
  condition,
  ageRange,
  postcode,
  type,
  image,
  setToys,
 } = props;
 const imageSource = `/images/${image}.png`;

 const handleDelete = () => {
  return axios
   .delete(`http://localhost:4000/toys/${id}`)
   .then(setToys((prevToys) => prevToys.filter((toy) => toy.id !== id)))
   .catch((error) => console.log(error));
 };

 const handleContact = () => {};

 const handleClick = () => {
  if (heart === "white") {
   setHeart("pink");
  } else if (heart === "pink") {
   setHeart("white");
  }
 };

 return (
  <div className="toy-card">
   <img className="toy-card_image" src={imageSource} alt="product" />
   <h2>{title}</h2>
   <p>{description}</p>
   <p>Type:{type}</p>
   <p>Age Range: {ageRange}</p>
   <p>Condition: {condition}</p>
   <p>Postcode: {postcode}</p>
   <div className="toy-card_buttons">
    <button
     className="toy-card_button toy-card_delete"
     type="button"
     onClick={handleDelete}
    >
     Delete <FontAwesomeIcon icon={faTrashCan} />
    </button>
    <button
     className="toy-card_button toy-card_contact"
     type="button"
     onClick={handleContact}
    >
     Contact
       <FontAwesomeIcon icon={faEnvelope} />
    </button>
    <button type="button" className="toy-card_button toy-card_heart" onClick={handleClick}>
     <img src={`/images/heart_${heart}.png`} alt="favourite icon" />
    </button>
   </div>
  </div>
 );
}
