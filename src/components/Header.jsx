import React from "react";
import etch from "../images/etch.png";

export default function Header() {
  return (
    <header className="navbar-items">
      <img src={etch} alt="Etch-a-sketch Logo" />
      <h1>ETCH-A-SKETCH</h1>
    </header>
  );
}
