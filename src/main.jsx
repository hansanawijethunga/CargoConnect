import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { msalConfig } from "./helpers/authConfig.js";
import { BrowserRouter as Router } from "react-router-dom";

export const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.initialize().then(() => {
  if (
    !msalInstance.getActiveAccount() &&
    msalInstance.getAllAccounts().length > 0
  ) {
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
  }

  msalInstance.enableAccountStorageEvents();

  msalInstance.addEventCallback((event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
      const account = event.payload.account;
      msalInstance.setActiveAccount(account);
    }
  });

  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <Router>
        <App instance={msalInstance} />
      </Router>
    </StrictMode>
  );
});
