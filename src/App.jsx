import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Truck from "./pages/trucks";
import Warehouse from "./pages/warehoues";
import Myprofile from "./pages/myprofile";
import Search from "./pages/search";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>          
          <Route path="/home" element={<Home />} />
          <Route path="/trucks" element={<Truck />} />
          <Route path="/warehouses" element={<Warehouse />} />
          <Route path="/myprofile/:id" element={<Myprofile />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
