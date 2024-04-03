import React from "react";
import axios from "axios";
import "../styles/toy-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function ToyCard(props) {
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

 return (
  <div className="toy-card">
   <img className="toy-card_image" src={imageSource} alt="product" />
   <h2>{title}</h2>
   <p>{description}</p>
   <p>Type:{type}</p>
   <p>Age Range: {ageRange}</p>
   <p>Condition: {condition}</p>
   <p>Postcode: {postcode}</p>
   <button type="button" onClick={handleDelete}>
    Delete <FontAwesomeIcon icon={faTrashCan} />
   </button>
  </div>
 );
}
