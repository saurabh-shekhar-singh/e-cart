import { NavLink } from "react-router-dom";
import data from "@/assets/en.json";
import "./Navbar.css";

function Navbar({ isNavOpen }: { isNavOpen: boolean }) {
  return (
    <ul className={`navbar-list ${isNavOpen ? "open" : ""}`}>
      {data.navigation.map((item, index) => (
        <NavLink className="nav-link" key={index} to={item.link}>
          <li className="link-item">
            <span>{item.name}</span>
          </li>
        </NavLink>
      ))}
    </ul>
  );
}

export default Navbar;
