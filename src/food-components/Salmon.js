import React from "react";
import { Link } from "react-router-dom";
import salmon from './salmon.png'
import './FoodStyles.css'

const Salmon = () => {
  return (
    <div>
      <h1>Salmon</h1>
      <img src={salmon} alt="A garlic flavored frozen salmon dinner" />
      <p>Did you know that salmon is a rich source of omega-3 fatty acids, which contribute to a healthy heart, help maintain skin, and preventing conditions such as cancer, asthma, and high-blood pressure</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  )
}

export default Salmon