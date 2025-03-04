import React, { useState, useEffect, useRef } from "react";
import "../styles/header.css"; // Import the CSS file
import reactLogo from "../assets/react.svg";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  // Toggle dropdown menu
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleLogin = () => {
    instance.loginRedirect();
  };

  const handleLogout = () => {
    instance.logoutRedirect();
  };

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      {/* Left side: Logo */}
      <div className="header-left">
        {/* Replace /path-to-logo.png with the actual path to your logo */}
        <img src={reactLogo} alt="Logo" className="logo" />{" "}
        <span className="brandName">HWC Logistics</span>
      </div>

      {/* Right side: User info and dropdown */}
      <div className="header-right">
        <div className="user-info" ref={menuRef}>
          {isAuthenticated ? (
            <>
              <button className="user-button" onClick={toggleMenu}>
                Hansana <span className="arrow">&#9662;</span>
              </button>
              {menuOpen && (
                <div className="dropdown-menu">
                  <ul>
                    <li>
                      <a href="/myprofile/123465">My Profile</a>
                    </li>
                    <li>
                      <button onClick={() => handleLogout("redirect")}>
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
