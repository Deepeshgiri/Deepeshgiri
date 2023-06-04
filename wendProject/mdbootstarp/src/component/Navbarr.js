import React from "react";
import { Link } from "react-router-dom";

export const Navbarr = () => {
  return (
    <>
      <nav className="nav-bar">
          <Link to="#" className="logo">Logo</Link>
        <div className="right">
          <Link to="/" className="active">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/registration">Registration</Link>
        </div>
      </nav>
    </>
  );
};
