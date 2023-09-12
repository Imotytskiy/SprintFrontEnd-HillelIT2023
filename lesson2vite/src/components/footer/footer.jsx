import fb from "../../assets/Facebook.png";
import youtube from "../../assets/Youtube.png";
import twitter from "../../assets/Twitter.png";
import logo from "./img/logofooter.svg";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer container">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4 className="logo">
              <img src={logo} alt="" />
              <div className="sb_footer-links_diva">UpDate</div>
            </h4>
            <a
              className="sb_footer-links_diva"
              href="mailto:support@update.com"
            >
              <h4>support@update.com</h4>
            </a>
            <a className="sb_footer-links_diva" href="tel:+12136771024">
              +1 (213) 677 10 24
            </a>
            <a href="#">
              <div className="socialmedia">
                <img src={fb} alt="facebook" />
                <img src={youtube} alt="youtube" />
                <img src={twitter} alt="twitter" />
              </div>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Courses</h4>
            <a className="sb_footer-links_diva" href="">
              <p>Animation</p>
            </a>
            <a className="sb_footer-links_diva" href="">
              <p>Design</p>
            </a>
            <a className="sb_footer-links_diva" href="">
              <p>Illustrator</p>
            </a>
            <a className="sb_footer-links_diva" href="">
              <p>Programming</p>
            </a>
            <a className="sb_footer-links_diva" href="">
              <p>Photo & Film</p>
            </a>
            <a className="sb_footer-links_diva" href="">
              <p>Marketing</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Teachers</h4>
            <a className="sb_footer-links_diva" href="">
              <p>All Teachers</p>
            </a>
            <a className="sb_footer-links_diva" href="">
              <p>Become a Teacher</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Information</h4>
            <a className="sb_footer-links_diva" href="">
              <p>Blog</p>
            </a>
            <a className="sb_footer-links_diva" href="">
              <p>About us</p>
            </a>
            <a className="sb_footer-links_diva" href="">
              <p>FAQ</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>En</h4>
            <a className="sb_footer-links_diva" href="">
              <p>English </p>
            </a>
            <a className="sb_footer-links_diva" href="">
              <p>French</p>
            </a>
            <a className="sb_footer-links_diva" href="">
              <p>Russia</p>
            </a>
          </div>
        </div>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              Policy privacy Copyright &copy; {new Date().getFullYear()}. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
