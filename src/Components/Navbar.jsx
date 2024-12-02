import { NavLink } from "react-router-dom";
import "./Styles/navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        style={({ isActive }) => ({ fontWeight: isActive ? 900 : "" })}
      >
        Home
      </NavLink>

      <NavLink
        to="/products"
        style={({ isActive }) => ({ fontWeight: isActive ? 900 : "" })}
      >
        Products
      </NavLink>
      <NavLink
        to="/categories"
        style={({ isActive }) => ({ fontWeight: isActive ? 900 : "" })}
      >
        Categories
      </NavLink>
      <NavLink
        to="/cart"
        style={({ isActive }) => ({ fontWeight: isActive ? 900 : "" })}
      >
        Cart
      </NavLink>
    </nav>
  );
};

export default Navbar;
