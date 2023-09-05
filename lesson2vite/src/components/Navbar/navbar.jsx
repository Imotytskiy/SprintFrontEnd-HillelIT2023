import React from "react";
import logo from "../../assets/logohead.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <header className="navbar">
      <a class="navbar_a" href="index.html">
        <img src={logo} alt="logo" />
        UpDate
      </a>
      <nav>
        <ul>
          <li>
            <a class="navbar_a" href="#">
              Courses
            </a>
          </li>
          <li>
            <a class="navbar_a" href="#">
              Teachers
            </a>
          </li>
          <li>
            <a class="navbar_a" href="#">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <a class="navbar_a" href="#">
        EN
      </a>
      <a class="navbar_a" href="#">
        Sign IN
      </a>
      <a class="navbar_a" href="#">
        Trial Free
      </a>
    </header>
  );
};

export default Navbar;
