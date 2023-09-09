
import logo from "./img/logohead.svg";
import "./navbar.css";
const Navbar = () => {
  return (
    <header className="container header">
      <div className="header__box">
      <a className="logo" href="index.html">
        <img src={logo} alt="logo" />
        UpDate
      </a>
      <nav className="nav">
        <ul className="nav__list">
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
      </div>
      <div className="btn_box">
      <a className="navbar_a" href="#">
        EN
      </a>
      <a className="navbar_a" href="#">
        Sign IN
      </a>
      <a className="navbar_a" href="#">
        Trial Free
      </a>
      </div>
    </header>
  );
};

export default Navbar;
