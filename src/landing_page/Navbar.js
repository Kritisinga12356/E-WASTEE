

import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-3 text-light" to="/">
          E-WASTE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active-link" : "")
                }
              >
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active-link" : "")
                }
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active-link" : "")
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active-link" : "")
                }
              >
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active-link" : "")
                }
              >
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active-link" : "")
                }
              >
                Support
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
