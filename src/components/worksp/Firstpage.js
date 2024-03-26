import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import pic1 from "../asserts/firstpage/pic1.jpeg";
import Logoo from "../asserts/firstpage/logoo.jpeg";
import logooo from "../asserts/firstpage/no.jpg";
import logoooo from "../asserts/firstpage/logooooo.jpg";

// import Moving from "../moving/Moving";

const Firstpage = () => {
  const [activeButton, setActiveButton] = useState("");
  const location = useLocation();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="bggg ">
        <div className="phone ui">
          <ul className="list-unstyled">
            <li>
              <Link to="/Firstpage" className="gaaayu">
                LOGO
              </Link>
            </li>
            <li>
              <Link to="/Secondpage" className="gaaayu">
                BANNERS
              </Link>
            </li>
            <li>
              <Link to="/Videos" className="gaaayu">
                VIDEOS
              </Link>
            </li>
          </ul>
        </div>

        <div className="work run ">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-lg-2 work1 top1">
                <Link to="/Firstpage mb-5">
                  <button
                    className={
                      location.pathname === "/Firstpage"
                        ? "btn-dark glow-on-click active"
                        : "btn-dark glow-on-click"
                    }
                    onClick={() => handleButtonClick("LOGO")}
                  >
                    LOGO
                  </button>
                </Link>
                <Link to="/Secondpage">
                  <button
                    className={
                      location.pathname === "/Secondpage"
                        ? "btn-dark glow-on-click active"
                        : "btn-dark glow-on-click"
                    }
                    onClick={() => handleButtonClick("BANNERS")}
                  >
                    BANNERS
                  </button>
                </Link>
                <Link to="/Videos">
                  <button
                    className={
                      location.pathname === "/Videos"
                        ? "btn-dark glow-on-click active"
                        : "btn-dark glow-on-click"
                    }
                    onClick={() => handleButtonClick("VIDEOS")}
                  >
                    VIDEOS
                  </button>
                </Link>
              </div>
              <div className="col-lg-10 topp1 top7 p-5">
                <div className="row">
                  <div className="col-md-4">
                    <img src={pic1} className="lll" />
                    <img src={Logoo} className="www non" />
                  </div>
                  <div className="col-md-4 ">
                    <img src={logooo} className="llllw" />
                    <img src={logooo} className="wwwwl " />
                  </div>
                  <div className="col-md-4 mon">
                    <img src={pic1} className="lll" />
                    <img src={Logoo} className="www non" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Firstpage;
