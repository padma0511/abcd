import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink from react-router-dom instead of Link
import "./Navbar.css";
import logo from "../asserts/navbar/logo.png";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg nav-bar1"
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          backgroundColor: "black",
        }}
      >
        <div className="container-fluid">
          <img src={logo} className="blackpic" alt="" />
          <button
            className={`navbar-toggler ${isNavbarOpen ? "" : "collapsed"}`}
            type="button"
            onClick={toggleNavbar}
            aria-expanded={isNavbarOpen ? "true" : "false"}
          >
            <span className="spans box">☰</span>
          </button>

          <div
            className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav nav-links ms-auto">
              <li
                className={`nav-item mx-3 ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                <NavLink
                  exact
                  to="/" // Add exact prop to match only exact paths
                  className="nav-link"
                  activeClassName="active" // Apply 'active' class when the link is active
                  onClick={closeNavbar}
                >
                  Wedo
                </NavLink>
              </li>
              <li
                className={`nav-item mx-3 ${
                  location.pathname === "/Service" ? "active" : ""
                }`}
              >
                <NavLink
                  to="/Service"
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeNavbar}
                >
                  Service
                </NavLink>
              </li>
              <li
                className={`nav-item dropdown mx-3 ${
                  location.pathname.startsWith("/Strategy") ? "active" : ""
                }`}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Strategy
                </a>
                <ul
                  className="dropdown-menu nav-links"
                  aria-labelledby="navbarDropdown"
                >
                  <li
                    className={`nav-item mx-3 ${
                      location.pathname === "/BS" ? "active" : ""
                    }`}
                  >
                    <NavLink
                      to="/BS"
                      className="dropdown-item"
                      activeClassName="active"
                      onClick={closeNavbar}
                    >
                      Business Strategy
                    </NavLink>
                  </li>
                  <li
                    className={`nav-item mx-3 ${
                      location.pathname === "/Marketingstrategy" ? "active" : ""
                    }`}
                  >
                    <NavLink
                      to="/Marketingstrategy"
                      className="dropdown-item"
                      activeClassName="active"
                      onClick={closeNavbar}
                    >
                      Marketing Strategy
                    </NavLink>
                  </li>
                  <li
                    className={`nav-item mx-3 ${
                      location.pathname === "/Operationalstrategy"
                        ? "active"
                        : ""
                    }`}
                  >
                    <NavLink
                      to="/Operationalstrategy"
                      className="dropdown-item"
                      activeClassName="active"
                      onClick={closeNavbar}
                    >
                      Operational Strategy
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li
                className={`nav-item mx-3 ${
                  location.pathname === "/Clients" ? "active" : ""
                }`}
              >
                <NavLink
                  to="/Clients"
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeNavbar}
                >
                  Clients
                </NavLink>
              </li>
              <li
                className={`nav-item mx-3 ${
                  location.pathname === "/Firstpage" ? "active" : ""
                }`}
              >
                <NavLink
                  to="/Firstpage"
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeNavbar}
                >
                  Work
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
