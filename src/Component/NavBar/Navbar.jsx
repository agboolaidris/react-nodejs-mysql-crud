import React, { useState } from "react";
import Menu from "./Menu";

function Navbar() {
  const [harmburger, setharmburger] = useState(false);
  const [menu, setmenu] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 700) {
      setharmburger(true);
      setmenu(false);
    } else {
      setharmburger(false);
      setmenu(true);
    }
  };

  window.addEventListener("load", showButton);

  const handleClick = () => {
    if (menu) {
      setmenu(false);
    } else {
      setmenu(true);
    }
  };

  return (
    <nav className="nav">
      <div
        className={harmburger ? "harmburger" : "harmburger-none"}
        onClick={handleClick}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="logo">
        <h2>IRIS</h2>
      </div>
      <Menu menu={menu} />
    </nav>
  );
}

export default Navbar;
