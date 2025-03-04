
# Dataverse with React - CRUD & Authentication using MSAL

## Overview
This project demonstrates how to integrate **Microsoft Dataverse** with a **React** application. It includes:
- A **CRUD (Create, Read, Update, Delete)** implementation for managing data in Dataverse.
- **Authentication** using **MSAL (Microsoft Authentication Library)** to enable secure access.

## Features
- **React + Dataverse Integration**: Learn how to interact with Dataverse from a React frontend.
- **MSAL Authentication**: Secure authentication with Microsoft Entra ID (formerly Azure AD).
- **React Router**: Implementing navigation within the app.
- **Component-Based Architecture**: Structured using reusable components.
- **State Management**: Efficient handling of application state.

## Technologies Used
- **React** (Frontend UI)
- **Microsoft Dataverse** (Backend Data Management)
- **MSAL** (Authentication)
- **React Router** (Navigation)
- **Fluent UI** (UI Components)

## Getting Started
### Prerequisites
- Node.js & npm installed
- A Microsoft Entra ID (Azure AD) tenant with Dataverse access

### Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/your-repo/dataverse-react-msal.git
   cd dataverse-react-msal
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure authentication settings in `authConfig.js`
4. Run the application:
   ```sh
   npm start
   ```

## Authentication with MSAL
This app uses **MSAL for authentication**, ensuring secure access to Dataverse. The authentication flow:
1. User logs in using Microsoft Entra ID.
2. MSAL handles authentication and stores user session.
3. API calls to Dataverse use authenticated tokens.

## CRUD Operations in Dataverse
The application performs full CRUD operations on Dataverse entities:
- **Create**: Add new records to Dataverse
- **Read**: Fetch and display data from Dataverse
- **Update**: Modify existing records
- **Delete**: Remove records from Dataverse

## Folder Structure
```
/src
  ├── components/       # Reusable UI components
  ├── pages/            # Page components (Home, Trucks, Warehouse, etc.)
  ├── helpers/          # Utility functions (authConfig, API calls, etc.)
  ├── App.jsx           # Main application component
  ├── index.js          # Entry point
  ├── styles/           # CSS styles
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for suggestions.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, feel free to reach out.

---

### 🌟 Star this repo if you find it useful!

