import React from "react";
import { Link } from "react-router-dom";
import message from "../../img/message.png";

function Items() {
  return (
    <ul className="menu">
      <li>
        <Link className="menu-link btn-signin">Sign In</Link>
      </li>
      <li>
        <Link className="menu-link btn-signup">Sign Up</Link>
      </li>
      <li>
        <input type="text" />
      </li>
      <li>
        <Link className="menu-link">
          <img src={message} alt="message" className="message" />
        </Link>
      </li>
      <li>
        <Link className="menu-link">NN</Link>
      </li>
      <li>
        <Link className="menu-link">Log out</Link>
      </li>
    </ul>
  );
}

export default Items;
