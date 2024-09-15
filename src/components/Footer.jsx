import React from "react";
import logo1 from "../assets/logo1.svg";
import bar from "../assets/bar.svg";
import social from "../assets/social.svg";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer-box">
      <div className="footer-content">
        <img src={logo1} alt="Logo1" className="logo1" />

        <div className="hoobank1">
          <span className="hoobank1-text">
            Hoo<span>Bank</span>
          </span>
          <div className="easy">
            A new way to make the payments easy, reliable, and secure.
          </div>
        </div>
        <div className="useful-links">
          <h3>Useful Links</h3>
          <ul className="links-list">
            <li>Content</li>
            <li>How it Works</li>
            <li>Create</li>
            <li>Explore</li>
            <li>Terms & Services</li>
          </ul>
        </div>

        <div className="community-links">
          <h3>Community</h3>
          <ul className="help">
            <li>Help Center</li>
            <li>Partners</li>
            <li>Suggestions</li>
            <li>Blog</li>
            <li>Newsletters</li>
          </ul>
        </div>
        <div className="partner-links">
          <h3>Partner</h3>
          <ul className="partner">
            <li>Our Partner</li>
            <li>Become a Partner</li>
          </ul>
        </div>
      </div>
      <img src={bar} alt="Bar" className="bar" />
      <div className="copyright">Copyright © 2024 HooBank. All Rights Reserved.
      <img src={social} alt="social" className="social" />
      </div>
    </footer>
  );
};

export default Footer;