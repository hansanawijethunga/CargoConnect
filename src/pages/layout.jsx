import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../Components/header";
import Footer from "../Components/footer";
import SideBar from "../Components/sidebar";

const Layout = () => {
  return (
    <div className="layout-container">
      {/* Header */}
      <header className="header-container"><Header/></header>      
        <div className="middle">
        
          {/* Sidebar */}
          <aside className="sidebar-container">
           <SideBar/>
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
