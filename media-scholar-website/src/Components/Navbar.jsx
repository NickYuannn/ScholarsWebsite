import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "./Button";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="navbar-container">
          <h1> NICK YUAN</h1>
          <div className="menu-icon">
            <Link to="/" className="navbar-logo">
              <img src="/nylogo.PNG" className="nav-logo-image"/>
            </Link>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/assignments" className="nav-links">
                Assignments
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-links">
                Resume
              </Link>
            </li>
          </ul>
          <Link to="mailto:nk.yuan2005@gmail.com">
            <Button text="Email me!" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
