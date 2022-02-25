import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <span className="firstItem">
          m<span className="midLetter">L</span>n
        </span>
      </Link>
      <ul id="navList">
        <Link to="/">
          <li className="navList">Home</li>
        </Link>
        <Link to="/projects">
          <li className="navList">Projects</li>
        </Link>
        <Link to="/contact">
          <li className="navList">Contact me</li>
        </Link>
        <Link to="/about">
          <li className="navList">About me</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
