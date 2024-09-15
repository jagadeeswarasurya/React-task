import React from 'react';
import logo from '../assets/logo.svg';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <div className="hoobank">
        <span className="hoobank-text">Hoo<span>Bank</span></span>
      </div>
      <nav className="nav-links">
        <a href="#home" className="nav-link home">Home</a>
        <a href="#about" className="nav-link about-us">About Us</a>
        <a href="#features" className="nav-link features">Features</a>
        <a href="#solution" className="nav-link solution">Solution</a>
      </nav>
    </header>
  );
};

export default Header;