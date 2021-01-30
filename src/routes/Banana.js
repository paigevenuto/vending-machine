import React from "react";
import { Link } from "react-router-dom";
import bananaImage from "./images/banana.png";

function Banana() {
  return (
    <div className="Banana">
      <img src={bananaImage} alt="Banana" />
      <Link to="/">Return to the vending machine</Link>
    </div>
  );
}

export default Banana;
