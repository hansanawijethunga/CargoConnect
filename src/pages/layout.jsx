import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../Components/header";
import Footer from "../Components/footer";

const Layout = () => {
  return (
    <div className="layout-container">
      {/* Header */}
      <header className="header-container"><Header/></header>      
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
      <footer className="footer-container"><Footer/></footer>
    </div>
  );
};

export default Layout;
