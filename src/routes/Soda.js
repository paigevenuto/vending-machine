import React from "react";
import { Link } from "react-router-dom";
import sodaImage from "./images/soda.png";

function Soda() {
  return (
    <div className="Soda">
      <img src={sodaImage} alt="Soda" />
      <Link to="/">Return to the vending machine</Link>
    </div>
  );
}

export default Soda;
