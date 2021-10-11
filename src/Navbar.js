import { NavLink } from "react-router-dom";
import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <NavLink exact to="/">Vending Machine</NavLink>
      <NavLink exact to="/green-tea">Green Tea</NavLink>
      <NavLink exact to="/yogurt">Yogurt and Blueberries</NavLink>
      <NavLink exact to="/salmon">Salmon</NavLink>
      <NavLink exact to="/kombucha">Kombucha</NavLink>
    </nav>
  )
}

export default Navbar