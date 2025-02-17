// src/authConfig.js
export const msalConfig = {
    auth: {
      clientId: '', // Your Azure AD app's client ID
      authority: 'https://login.microsoftonline.com/tenentId', // Your Azure AD tenant ID
      redirectUri: 'http://localhost:5174', // Your app's redirect URI
    },
    cache: {
      cacheLocation: 'sessionStorage', // Can be 'localStorage' or 'sessionStorage'
      storeAuthStateInCookie: false,
    },
  };
  
  export const loginRequest = {
    scopes: ['user.read'], // Permissions your app needs
  };
  
  export const graphApiRequest = {
    scopes: ['user.read'],
  };
  