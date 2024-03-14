import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScroolToTop";

import Wedo from "./components/home/Wedo";
import Service from "./components/service/service";
import BS from "./components/strategy/BS";
import Marketingstrategy from "./components/strategy/Marketing strategy";
import Operationalstrategy from "./components/strategy/Operational strategy";

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
          <Route path="/BS" element={<BS />} />
          <Route path="/Marketingstrategy" element={<Marketingstrategy />} />
          <Route
            path="/Operationalstrategy"
            element={<Operationalstrategy />}
          />
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
