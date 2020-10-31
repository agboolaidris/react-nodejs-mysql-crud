import React from "react";
import { Link } from "react-router-dom";
import Items from "./Items";
import logo from "../../img/logo.png";

function Navbar() {
  return (
    <nav className="menu-bar">
      <div className="container">
        <Link className="logo">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <Items />
      </div>
    </nav>
  );
}

export default Navbar;
