import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout-container">
      {/* Header */}
      <div className="header-container">Header</div>      
        <div className="middle">
        
          {/* Sidebar */}
          <aside className="sidebar-container">
            <nav>
              <ul>
                <li>
                  <NavLink to="/home" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/trucks" className="nav-link">
                    Truck
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/warehouses" className="nav-link">
                    Warehouse
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/myprofile/1234" className="nav-link">
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/search" className="nav-link">
                    Search
                  </NavLink>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Dynamic Content */}
          <main className="main-content">
            <Outlet />
          </main>
        </div>     
      {/* Footer */}
      <footer className="footer-container">Footer</footer>
    </div>
  );
};

export default Layout;
