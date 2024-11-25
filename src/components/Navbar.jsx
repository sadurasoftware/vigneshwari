import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Ecomstore from '../store/Ecomstore'; // Import Zustand store

const Navbar = () => {
  const { cart, user } = Ecomstore((state) => state);  //Access cart & user from Zustand store

  // Calculate the total quantity of items in the cart
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ProductList">Products</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Cart">Cart ({totalQuantity})</Link></li>
        {user ? (
          <li className="navbar-user">
            Welcome, {user.username}  {/* Display the user's username */}
          </li>
        ) : (
          <li><Link to="/RegisterForm">Register</Link></li>
        )}
      </ul>
    </nav>

  );
};

export default Navbar;
