import React from "react";

export default function ToyCard(props) {
    const {id, title, description, condition, ageRange, postcode, type} = props
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{type}</p>
            <p>Age Range: {ageRange}</p>
            <p>Condition: {condition}</p>
            <p>Postcode: {postcode}</p>
        </div>
    )
}