import React from "react";
import { Btn } from "../CustomHook/Btn";

function Navbar() {
  const showButton = () => {
    if (window.innerWidth <= 700) {
      alert("hello");
    } else {
      alert("noooo");
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <nav className="nav">
      <div className="nav-logo">
        <h2>IRIS</h2>
      </div>

      <div className="menu-icon">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul>
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
            {Btn && <button>sign</button>}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
