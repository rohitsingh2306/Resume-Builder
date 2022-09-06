import React from "react";
import header from "../css/header.css";
import logo3 from "../images/logo3.png";

function Header() {
  return (
    <div className="header-div">
      <img className="logo" src={logo3} alt="logo" />
      <h1>
        IsRo<span>Designs</span>
      </h1>
      <div></div>
    </div>
  );
}

export default Header;
