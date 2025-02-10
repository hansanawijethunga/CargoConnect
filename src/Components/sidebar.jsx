import { NavLink} from "react-router-dom";
import '../styles/sidebar.css'



const SideBar = ()=>{
    return (
        <nav className="sidebar">
        <ul>
          <li>
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/trucks" className="nav-link">
              Truck
            </NavLink>
          </li>
          <li>
            <NavLink to="/warehouses" className="nav-link">
              Warehouse
            </NavLink>
          </li>               
          <li>
            <NavLink to="/search" className="nav-link">
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
    );

}
export default SideBar