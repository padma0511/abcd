import React, { useState } from "react";
import { Link } from "react-router-dom";

import ban1 from "../asserts/secondpage/ban1.jpg";
import ban2 from "../asserts/secondpage/ban2.jpg";

import ban3 from "../asserts/secondpage/ban3.jpg";
import ban4 from "../asserts/secondpage/ban4.jpg";

const Secondpage = () => {
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
              <Link to="/Secondpage " className="gaaayu">
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

        <div className="work">
          <div className=" container-fluid ">
            <div className=" row">
              <div className="col-lg-4 work1">
                <Link to="/Firstpage">
                  <button className="btn-dark glow-on-hover">LOGO</button>
                </Link>
                <Link to="/Secondpage">
                  <button className="btn-dark glow-on-hover">BANNERS</button>
                </Link>
                <Link to="/Videos">
                  <button className="btn-dark glow-on-hover">VIDEOS</button>
                </Link>
              </div>
              <div className="col-lg-8 ">
                <img src={ban1} className="lll" />
                <img src={ban2} className="www" />
                <img src={ban3} className="llll" />
                <img src={ban4} className="wwww" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Secondpage;
