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
          backgroundColor: "transparent",
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
                <Link
                  to="/"
                  className="nav-link"
                  onClick={closeNavbar}
                  style={{ color: location.pathname === "/" ? "red" : "" }}
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
                    color: location.pathname === "/Service" ? "red" : "",
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
                    color: location.pathname === "/Strategy" ? "red" : "",
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
                    color: location.pathname === "/Clients" ? "red" : "",
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
                    color: location.pathname === "/Firstpage" ? "red" : "",
                  }}
                >
                  Work
                </Link>
              </li>
              <li
                className={`nav-item mx-3 ${
                  location.pathname === "/Contact" ? "active" : ""
                }`}
              >
                <Link
                  to="/Contact"
                  className="nav-link"
                  onClick={closeNavbar}
                  style={{
                    color: location.pathname === "/Contact" ? "red" : "",
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar; // correct my mistake
