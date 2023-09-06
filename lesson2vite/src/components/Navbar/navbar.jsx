
import logo from "../../assets/logohead.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <header className="navbar">
      <a className="navbar_a" href="index.html">
        <img src={logo} alt="logo" />
        UpDate
      </a>
      <nav>
        <ul>
          <li>
            <a className="navbar_a" href="#">
              Courses
            </a>
          </li>
          <li>
            <a className="navbar_a" href="#">
              Teachers
            </a>
          </li>
          <li>
            <a className="navbar_a" href="#">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <a className="navbar_a" href="#">
        EN
      </a>
      <a className="navbar_a" href="#">
        Sign IN
      </a>
      <a className="navbar_a" href="#">
        Trial Free
      </a>
    </header>
  );
};

export default Navbar;
