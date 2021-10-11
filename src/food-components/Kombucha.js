import React from "react";
import kombucha from './kombucha.jpg'
import { Link } from "react-router-dom";

const Kombucha = () => {
  return (
    <div>
      <h1>Kombucha</h1>
      <img src={kombucha} alt="A bottle of kombucha" />
      <p>Did you know that kombucha is very high in probiotics, which can improve your digestive system?</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  )
}

export default Kombucha