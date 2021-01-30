import React from "react";
import { Link } from "react-router-dom";
import vendingImage from "./vendingmachine.png";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <img src={vendingImage} alt="vending machine" />
      <h1>CHOOSE</h1>
      <ul>
        <li>
          <Link to="/cheese">Cheese</Link>
        </li>
        <li>
          <Link to="/soda">Soda</Link>
        </li>
        <li>
          <Link to="/banana">Banana</Link>
        </li>
      </ul>
    </div>
  );
}

export default VendingMachine;
