import React from "react";
import { NavLink } from "react-router-dom";

import {GiShoppingCart} from 'react-icons/gi'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          E-COMWEB
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse  navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <input type="search"></input>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Cart"><GiShoppingCart/>
                Cart(0)
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Register">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Policy">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
