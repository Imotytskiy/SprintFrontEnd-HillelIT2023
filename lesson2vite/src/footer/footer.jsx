import React from "react";
import "./footer.css";
import fb from "../assets/";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <p>
            <img src={fb} alt="" />
          </p>
          <p>
            <img src={youtube} alt="" />
          </p>
          <p>
            <img src={twitter} alt="" />
          </p>
        </div>
        <div className="sb_footer-links">
          <div className="sb_footer-link-div">
            <h4>Courses</h4>
            <a href="">
              <p>Animation</p>
            </a>
            <a href="">
              <p>Design</p>
            </a>
            <a href="">
              <p>Illustrator</p>
            </a>
            <a href="">
              <p>Programming</p>
            </a>
            <a href="">
              <p>Photo & Film</p>
            </a>
            <a href="">
              <p>Marketing</p>
            </a>
            <div className="sb_footer-link-div">
              <h4>Teachers</h4>
              <a href="">
                <p>All Teachers</p>
              </a>
              <a href="">
                <p>Become a Teacher</p>
              </a>
              <div className="sb_footer-link-div">
                <h4>Information</h4>
                <a href="">
                  <p>Blog</p>
                </a>
                <a href="">
                  <p>About us</p>
                </a>
                <a href="">
                  <p>FAQ</p>
                </a>
                <h4>En</h4>
                <a href="">
                  <p>English </p>
                </a>
                <a href="">
                  <p>French</p>
                </a>
                <a href="">
                  <p>Russia</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              Policy privacy Copyright @{newDate().getFullYear()}. All rights
              reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
