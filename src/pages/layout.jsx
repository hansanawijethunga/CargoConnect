import React from "react";
import { NavLink, Outlet } from "react-router-dom"; 


const  Layout = ()=>{
    return (
        <div className="h-screen flex flex-col">
          {/* Header */}
          <header className="bg-blue-600 text-white p-4 text-center">
            Header
          </header>
    
          <div className="flex flex-1">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white p-4">
              <nav>
                <ul>
                  <li><NavLink to="/home">Home</NavLink></li>
                  <li><NavLink to="/trucks">Truck</NavLink></li>
                  <li><NavLink to="/warehouses">Warehouse</NavLink></li>
                  <li><NavLink to="/myprofile/1234">My Profile</NavLink></li>
                  <li><NavLink to="/search">Search</NavLink></li>
                </ul>
              </nav>
            </aside>
    
            {/* Dynamic Content */}
            <main className="flex-1 bg-gray-100 p-6">
              <Outlet /> 
            </main>
          </div>
    
          {/* Footer */}
          <footer className="bg-blue-600 text-white p-4 text-center">
            Footer
          </footer>
        </div>
      );
}

export default Layout

