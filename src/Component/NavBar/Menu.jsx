import React from "react";

function Menu({ menu }) {
  return (
    <ul className={menu ? "menu" : "menu-none"}>
      <li>
        <a rel="stylesheet" href="">
          Home
        </a>
      </li>
      <li>
        <a rel="stylesheet" href="">
          Service
        </a>
      </li>
      <li>
        <a rel="stylesheet" href="">
          Contact Us
        </a>
      </li>
      <li>
        <a rel="stylesheet" href="">
          heloo
        </a>
      </li>
    </ul>
  );
}

export default Menu;
