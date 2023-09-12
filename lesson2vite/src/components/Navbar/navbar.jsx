import logo from "./img/logohead.svg";
import "./navbar.css";
const Navbar = () => {
  return (
    <header className="container header">
      <div className="header__box">
        <nav className="nav">
          <a className="logo" href="index.html">
            <img src={logo} alt="logo" />
            UpDate
          </a>

          <ul className="nav__list">
            <li>
              <a className="link" href="#">
                Courses
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Teachers
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="btn__box">
        <a className="header__link" href="#">
          EN
        </a>
        <a className="header__link" href="#">
          Sign IN
        </a>
        <a className="header__btn" href="#">
          Trial Free
        </a>
      </div>
    </header>
  );
};

export default Navbar;
