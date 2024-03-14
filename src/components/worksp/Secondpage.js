import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import ban1 from "../asserts/secondpage/ban1.jpg";
import ban2 from "../asserts/secondpage/ban2.jpg";

const Secondpage = () => {
  const [activeButton, setActiveButton] = useState(null);
  const location = useLocation();

  // Function to handle button click
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <>
      <div className="bggg">
        <div className="phone ">
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

        <div className="work ">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-lg-2 work1 top2">
                <Link to="/Firstpage">
                  <button
                    className={
                      location.pathname === "/Firstpage"
                        ? "btn-dark glow-on-click active"
                        : "btn-dark glow-on-click"
                    }
                    onClick={() => handleButtonClick(1)}
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
                    onClick={() => handleButtonClick(2)}
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
                    onClick={() => handleButtonClick(3)}
                  >
                    VIDEOS
                  </button>
                </Link>
              </div>
              <div className="col-lg-10 topp2">
                <div className="row  ban-home">
                  <div className="col-md-6 ">
                    <img src={ban1} alt="" className="img-fluid ban-image" />
                  </div>
                  <br />
                  <div className="col-md-6 ">
                    <img src={ban2} alt="" className="img-fluid ban-image" />
                  </div>
                </div>
                <div className="row ban-home ">
                  <div className="col-md-6">
                    <img src={ban1} alt="" className="img-fluid ban-image" />
                  </div>
                  <br />
                  <div className="col-md-6 ">
                    <img src={ban2} alt="" className="img-fluid ban-image mm" />
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

export default Secondpage;
