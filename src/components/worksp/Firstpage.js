import React from "react";
import { Link } from "react-router-dom";

import Pic1 from "../asserts/firstpage/pic1.jpeg";
import Logoo from "../asserts/firstpage/logoo.jpeg";
import logooo from "../asserts/firstpage/logooo.jpg";
import logoooo from "../asserts/firstpage/logooooo.jpg";

const Firstpage = () => {
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
              <div className="col-lg-8 image-gallery-container ">
                <div class="image-gallery">
                  <div class="row hjhi">
                    <div className="col-6">
                      <img src={Pic1} className="llll" />
                      <img src={Logoo} className="llll" />
                    </div>
                    <div className="col-6">
                      <img src={logooo} className="llll" />
                      <img src={logoooo} className="llll" />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="image-gallery-container">
                <div class="image-gallery">
                  <img src={Pic1} alt="Image 1" class="gallery-image" />
                  <img src={Logoo} alt="Image 2" class="gallery-image" />
                  <img src={logooo} alt="Image 3" class="gallery-image" />
                  <img src={logoooo} alt="Image 4" class="gallery-image" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Firstpage;
