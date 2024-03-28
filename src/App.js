import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScroolToTop";
import Contact from "./components/contact/Contact";
import Wedo from "./components/home/Wedo";
import Service from "./components/service/service";
import Strategy from "./components/strategy/Strategy";

import Clients from "./components/Clients/clients";

// import Log from "./components/workspage/Logo";

import Videos from "./components/worksp/Videos";

import Firstpage from "./components/worksp/Firstpage";
import Secondpage from "./components/worksp/Secondpage";

import "../src/Font.css";
import "../src/App.css";
import "../src/components/padma.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        {<Navbar />}
       
        {/* {<Home />} */}
        <Routes>
          <Route path="/" element={<Wedo />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Strategy" element={<Strategy />} />

          <Route path="/Contact" element={<Contact />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Firstpage" element={<Firstpage />} />
          <Route path="/Secondpage" element={<Secondpage />} />
          <Route path="/Videos" element={<Videos />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
