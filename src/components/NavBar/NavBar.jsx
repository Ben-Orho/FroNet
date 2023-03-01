import React from "react";
import Logo from "../Utiles/Logo";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <div className="mid-nav">
          <Logo />
          <ul className="nav-list">
            <Link className="Link-style" to="/">Home</Link>
            <Link className="Link-style" to="/about-us">About Us</Link>
            <Link className="Link-style" to="/">Packages</Link>
            <Link className="Link-style" to="/contact-us">Contact Us</Link>
            <Link className="Link-style" to="/">Partner</Link>
          </ul>
          <div className="auth">
            <Link className="Link-style" id="CAA"to="/">Create an Account</Link>
            <Link className="Link-style" id="login-btn" to="/">Log in</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
