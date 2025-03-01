import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Truck from "./pages/trucks";
import Warehouse from "./pages/warehoues";
import Myprofile from "./pages/myprofile";
import Test from "./pages/test";
import Trip from "./pages/trips";
import { useIsAuthenticated } from '@azure/msal-react';

const App = () => {
  const isAuthenticated = useIsAuthenticated();
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {isAuthenticated && (
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/trucks" element={<Truck />} />
            <Route path="/warehouses" element={<Warehouse />} />
            <Route path="/myprofile/:id" element={<Myprofile />} />
            <Route path="/search" element={<Trip />} />
            <Route path="/test" element={<Test />} />
          </Route>
        )}

        {/* Redirect unauthenticated users to login if they try to access protected routes */}
        {!isAuthenticated && <Route path="*" element={<Navigate to="/" replace />} />}
      </Routes>
    </Router>
  );
};

export default App;
