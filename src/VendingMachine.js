import React from "react";
import { Link } from "react-router-dom";
import './VendingMachine.css';

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h3>Welcome to the Healthy Vending Machine!</h3>
      <img src="https://2xtuxg2smg4lj78yp19cv3m4-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/BetterforYouBank-Final.jpg" alt="Vending machine" />
      <p>Pick something to eat or drink</p>
      <div className="VendingMachine-options">
        <Link to="/green-tea">Green Tea</Link>
        <Link to="/yogurt">Yogurt and Blueberries</Link>
        <Link to="/salmon">Salmon</Link>
        <Link to="/kombucha">Kombucha</Link>
      </div>
    </div>
  )
}

export default VendingMachine