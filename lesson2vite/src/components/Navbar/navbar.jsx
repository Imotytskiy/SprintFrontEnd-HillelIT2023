import React from "react";
import logo from "../../assets/logohead.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <header className="header">
      <a href="index.html">
        <img src={logo} alt="logo" />
        UpDate
      </a>
      <nav>
        <ul>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Teachers</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
      <a href="#">EN</a>
      <a href="#">Sign IN</a>
      <a href="#">Trial Free</a>
    </header>
  );
};

export default Navbar;
