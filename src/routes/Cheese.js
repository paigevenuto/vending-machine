import React from "react";
import { Link } from "react-router-dom";
import cheeseImage from "./images/cheese.png";

function Cheese() {
  return (
    <div className="Cheese">
      <img src={cheeseImage} alt="Cheese" />
      <Link to="/">Return to the vending machine</Link>
    </div>
  );
}

export default Cheese;
