import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "./Button.jsx";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop.jsx";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    ScrollToTop;
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1 onClick={closeMobileMenu}>NICK YUAN</h1>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/assignments"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Assignments
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>
          </ul>
          {button && (
            <a href="mailto:nk.yuan2005@gmail.com">
              <Button text="Email Me" />
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
