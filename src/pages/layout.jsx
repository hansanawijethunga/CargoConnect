import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../Components/header";
import Footer from "../Components/footer";
import SideBar from "../Components/sidebar";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../helpers/authCOnfig";

const Layout = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  console.log(activeAccount);
  console.log(instance);

  const handleRedirect = () => {
    instance
        .loginRedirect({
            ...loginRequest,
            prompt: 'create',
        })
        .catch((error) => console.log(error));
};

  return (
    <>
      <AuthenticatedTemplate>
        <div className="layout-container">
          {/* Header */}
          <header className="header-container">
            <Header />
          </header>
          <div className="middle">
            {/* Sidebar */}
            <aside className="sidebar-container">
              <SideBar />
            </aside>

            {/* Dynamic Content */}
            <main className="main-content">
              <Outlet />
            </main>
          </div>
          {/* Footer */}
          <footer className="footer-container">
            <Footer />
          </footer>
        </div>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>          
             <button className="signInButton" onClick={handleRedirect} variant="primary">
                    Sign up
                </button>        
      </UnauthenticatedTemplate>
    </>
  );
};

export default Layout;
