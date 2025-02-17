// src/msalInstance.js
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './msal'; 

const msalInstance = new PublicClientApplication(msalConfig);

export default msalInstance;
