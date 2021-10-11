import React from "react";
import { Link } from "react-router-dom";
import yogurtBerries from "./yogurt-blueberries.jpeg"
import './FoodStyles.css'

const YogurtBerries = () => {
  return (
    <div>
      <h1>Yogurt with Blueberries</h1>
      <img src={yogurtBerries} alt="Yogurt with blueberries and a dash of honey" />
      <p>Did you know that yogurt has 12 grams of protein per 7 oz? That protein helps you feel full? And blueberries promote brain health by improving memory!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  )
}

export default YogurtBerries