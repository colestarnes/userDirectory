import React, { Component } from "react";

function Dog(props) {
    return (
        <div style={{ width: 200, border: "solid" }}>
            <p>Name: {props.name}</p>
            <p>Breed: {props.breed}</p>
        </div>
    )
}

export default Dog;
