// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ setMainContent }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false); // Change this based on actual auth state
  const [loginStatus, setLoginStatus] = useState("");

  useEffect(() => {
    // Simulated login status (In real-world scenarios, this would be dynamic)
    setLoginStatus(userLoggedIn ? "Logged in" : <Link to="/login">Login</Link>);
  }, [userLoggedIn]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMapClick = (event) => {
    event.preventDefault(); // Prevent default link behavior
    setMainContent(
      <div>
        <h1 style={{ color: "silver" }}>Smart Mart Map</h1>
        <div className="map-container">
          <img
            src="image/Mart map.png"
            alt="Smart Mart Map"
            style={{ alignItems: "center", width: "100%", height: "auto" }}
          />
        </div>
      </div>
    );
  };

  const handleItemsClick = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    fetch("add ons/items.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((html) => {
        // Parse HTML string into React elements
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const itemsContent = doc.body.innerHTML; // Get the inner HTML of the fetched content
        setMainContent(
          <div dangerouslySetInnerHTML={{ __html: itemsContent }} />
        ); // Render it safely
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };

  return (
    <header>
      <div className="left-section">
        <Link to="/">
          <img
            src="image/agni logo.png"
            alt="Smart Shopping Logo"
            className="logo"
          />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                to="/add-ons/items"
                id="itemsbutton"
                onClick={handleItemsClick}
              >
                Items
              </Link>
            </li>
            <li>
              <a
                href="image/Mart map.png"
                target="_blank"
                id="mapButton"
                onClick={handleMapClick}
              >
                Map
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right-section">
        <div className="cart">
          <a href="#" title="Shopping Cart">
            <img
              src="image/cart.png"
              alt="Shopping Cart"
              className="cart-icon"
            />
          </a>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div>&#9776;</div>
          {isMenuOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <span>{loginStatus}</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
