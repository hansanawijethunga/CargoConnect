import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Truck from "./pages/trucks";
import Warehouse from "./pages/warehoues";
import Myprofile from "./pages/myprofile";
import Test from "./pages/test";
import Trip from "./pages/trips";
import { MsalProvider }  from '@azure/msal-react';

const App = ({instance}) => {
console.log(import.meta.env.VITE_CLIENT_ID);
console.log("dasdasdasda");
  return ( 
    <MsalProvider instance={instance}>   
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/trucks" element={<Truck />} />
            <Route path="/warehouses" element={<Warehouse />} />
            <Route path="/myprofile/:id" element={<Myprofile />} />
            <Route path="/search" element={<Trip />} />
            <Route path="/test" element={<Test />} />
          </Route>
      </Routes> 
      </MsalProvider> 
  );
};

export default App;
