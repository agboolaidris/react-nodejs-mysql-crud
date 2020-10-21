import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu({ menu }) {
  return (
    <ul className={menu ? "menu" : "menu-none"}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">Service</Link>
      </li>
      <li>
        <Link to="">Contact Us</Link>
      </li>
      <li>
        <Link to="">heloo</Link>
      </li>
    </ul>
  );
}

export default Menu;
