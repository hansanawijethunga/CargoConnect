import React, { useState, useEffect, useRef } from 'react';
import '../styles/header.css'; // Import the CSS file
import reactLogo from '../assets/react.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle dropdown menu
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      {/* Left side: Logo */}
      <div className="header-left">
        {/* Replace /path-to-logo.png with the actual path to your logo */}
        <img src={reactLogo} alt="Logo" className="logo" /> <span className='brandName'>HWC Logistics</span> 
      </div>

      {/* Right side: User info and dropdown */}
      <div className="header-right">
        <div className="user-info" ref={menuRef}>
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
                  <a href="/">Sign Out</a>
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
