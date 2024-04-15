import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../asserts/navbar/logo.png";

function Navbar() {
  const location = useLocation(); // Get the current location using useLocation hook

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Define isScrolled state variable

  // Function to toggle navbar
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Function to close navbar
  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  // Function to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${isScrolled ? "scrolled" : ""}`}
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          backgroundColor: "",
        }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} className="blackpic" alt="" />
          </Link>
          <button
            className={`navbar-toggler ${isNavbarOpen ? "" : "collapsed"}`}
            type="button"
            onClick={toggleNavbar}
            aria-expanded={isNavbarOpen ? "true" : "false"}
          >
            <span className="spans box our">☰</span>
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
                <Link
                  to="/"
                  className="nav-link"
                  onClick={closeNavbar}
                  style={{ color: location.pathname === "/" ? "" : "" }}
                >
                  Wedo
                </Link>
              </li>
              <li
                className={`nav-item mx-3 ${
                  location.pathname === "/Service" ? "active" : ""
                }`}
              >
                <Link
                  to="/Service"
                  className="nav-link"
                  onClick={closeNavbar}
                  style={{
                    color: location.pathname === "/Service" ? "" : "",
                  }}
                >
                  Service
                </Link>
              </li>
              <li
                className={`nav-item mx-3 ${
                  location.pathname === "/Strategy" ? "active" : ""
                }`}
              >
                <Link
                  to="/Strategy"
                  className="nav-link"
                  onClick={closeNavbar}
                  style={{
                    color: location.pathname === "/Strategy" ? "" : "",
                  }}
                >
                  Strategy
                </Link>
              </li>
              <li
                className={`nav-item mx-3 ${
                  location.pathname === "/Clients" ? "active" : ""
                }`}
              >
                <Link
                  to="/Clients"
                  className="nav-link"
                  onClick={closeNavbar}
                  style={{
                    color: location.pathname === "/Clients" ? "" : "",
                  }}
                >
                  Clients
                </Link>
              </li>
              <li
                className={`nav-item mx-3 ${
                  location.pathname === "/Firstpage" ? "active" : ""
                }`}
              >
                <Link
                  to="/Firstpage"
                  className="nav-link"
                  onClick={closeNavbar}
                  style={{
                    color: location.pathname === "/Firstpage" ? "" : "",
                  }}
                >
                  Work
                </Link>
              </li>
              
              <li
                className={`nav-item mx-3 ${
                  location.pathname === "/Secondpage" ? "active" : ""
                }`}
              >
               
                <Link
                  to="/Secondpage"
                  className="nav-link"
                  onClick={closeNavbar}
                  style={{
                    color: location.pathname === "/Secondpage" ? "" : "",
                  }}
                >
              Contact us
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
