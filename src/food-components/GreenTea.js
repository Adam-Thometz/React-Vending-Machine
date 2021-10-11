import React from "react";
import { Link } from "react-router-dom";
import greenTea from './green-tea.jpg'
import './FoodStyles.css'

const GreenTea = () => {
  return (
    <div>
      <h1>Green Tea</h1>
      <img src={greenTea} alt="A box of jasmine-flavored green tea" />
      <p>Did you know that if you heat your water to 175F instead of boiling, green tea can actually help you lose weight?</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  )
}

export default GreenTea