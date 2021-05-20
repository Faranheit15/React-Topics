// import animals from "./data";

// console.log(animals);

// const [cats, dogs] = animals;

// console.log(cats);
// console.log(dogs);
// // In array, names need not match the actual names
// // In objects, names must match the actual names
// const {name, sound} = cats;
// console.log(sound)

//CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {speedStats: {topSpeed: teslaTopSpeed}, coloursByPopularity: [teslaTopColour]} = tesla
const {speedStats: {topSpeed: hondaTopSpeed}, coloursByPopularity: [hondaTopColour]} = honda

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
