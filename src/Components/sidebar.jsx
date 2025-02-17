import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/trucks" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Truck
          </NavLink>
        </li>
        <li>
          <NavLink to="/warehouses" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Warehouse
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
