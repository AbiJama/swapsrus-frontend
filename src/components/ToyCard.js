import React from "react";
import "../styles/toy-card.css"

export default function ToyCard(props) {
    const {id, title, description, condition, ageRange, postcode, type, image} = props
    const imageSource = `/images/${image}.png`
    return (
        <div className="toy-card">
            <img className="toy-card_image" src={imageSource} alt="product" />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Type:{type}</p>
            <p>Age Range: {ageRange}</p>
            <p>Condition: {condition}</p>
            <p>Postcode: {postcode}</p>
        </div>
    )
}