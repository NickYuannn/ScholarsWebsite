import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="umd-icons">
        <a
          href="https://scholars.umd.edu/2023-2024-programs/media-self-and-society"
          target="_blank"
        >
          <img src="/umdlogos/cpms.PNG" alt="cpms" />
        </a>
        <a href="https://umd.edu/" target="_blank">
          <img src="/umdlogos/umd.PNG" alt="cpms" />
        </a>
        <a href="https://scholars.umd.edu/" target="_blank">
          <img src="/umdlogos/scholarsun.PNG" alt="cpms" />
        </a>

        <div className="contact-links">
          <h1>My Other Platforms</h1>
          <a
            href="https://www.linkedin.com/in/nick-yuan-3999732ab/"
            target="_blank"
          >
            <h3>
              LinkedIn <FaLinkedin />
            </h3>
          </a>
          <a href="https://github.com/NickYuannn" target="_blank">
            <h3>GitHub</h3>
          </a>
          <a>
            <h3>Gmail</h3>
          </a>
          <a>
            <h3>Discord</h3>
          </a>
        </div>
      </div>
      <div className="copyright-text">
        <p className="copyright">
          Copyright © {new Date().getFullYear()} Nick Yuan
        </p>
      </div>
    </div>
  );
}

export default Footer;
