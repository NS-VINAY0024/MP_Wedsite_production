// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer>
      <div className="footer-content">
        <div className="Logo">
          <img src="image/agni logo.png" alt="AGNI Smart Shopping Logo" />
        </div>
        <div className="social-media">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/bitsince1979?t=9gBJJEQ8eF4AVgmKeC-OfQ&s=09&mx=2"
            aria-label="Twitter"
          >
            <img src="image/twitter.png" alt="Twitter logo" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/amorous__camera/?igsh=MXZtd2Fwa2djYmkybA%3D%3D"
            aria-label="Instagram"
          >
            <img src="image/instagram.png" alt="Instagram logo" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/@prajwalhr7012?si=FRQyHRACE_IDWeta"
            aria-label="YouTube"
          >
            <img src="image/youtube.png" alt="YouTube logo" />
          </a>
        </div>
        <div className="Details">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Terms and Conditions</a> {/* New link */}
          <a href="#">Privacy Policy</a> {/* New link */}
        </div>
        <p className="copyright" style={{ textAlign: "center" }}>
          &copy; {currentYear} Smart Shopping. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
