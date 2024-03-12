import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";
import logo from "../asserts/navbar/logo.png";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          backgroundColor: "black",
        }}
      >
        <div className="container-fluid">
          <img src={logo} className="blackpic" alt="" />
          <button
            className={`navbar-toggler ${isNavbarOpen ? "" : "collapsed"}`} // Enclose the template literal in backticks
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
            {" "}
            {/* Enclose the template literal in backticks */}
            <ul className="navbar-nav nav-links ms-auto">
              <li className="nav-item mx-3">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  onClick={closeNavbar}
                >
                  Wedo
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  to="/Service"
                  className=" nav-link active"
                  onClick={closeNavbar}
                >
                  Service
                </Link>
              </li>
              <li className="nav-item dropdown mx-3">
                <a
                  className="nav-link dropdown-toggle" // Changed from "dropdown" to "dropdown-toggle"
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
                  <li>
                    <Link
                      to="/BS"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      Business Strategy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Marketingstrategy"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      Marketing Strategy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Operationalstrategy"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      Operational Strategy
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <Link
                  to="/Clients"
                  className="nav-link active"
                  aria-current="page"
                  onClick={closeNavbar}
                >
                  Clients
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  to="/Firstpage"
                  className="nav-link active"
                  aria-disabled="true"
                  onClick={closeNavbar}
                >
                  Work
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
