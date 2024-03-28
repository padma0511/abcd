import React from "react";
import { Link } from "react-router-dom";
import workbg from "../asserts/firstpage/workbg1.jpeg";
import work1 from "../asserts/firstpage/1image.jpg";
// import Moving from "../moving/Moving";

const Firstpage = () => {
  return (
    <>
      {/* <div className="work">
        <section
          className="workbg"
          style={{
            backgroundImage: `url(${workbg})`,
          }}
        >
          <div className="contactHead">
            <div className="container">
              <h1 className="wrok-head"> OUR WORKS</h1>
              <p className="wrok-head-para">
                Our company specializes in providing innovative digital
                marketing
                <br />
                solutions tailored to elevate your brand's online presence and
                drive business growth.
              </p>
              <button class="buttonarrow-mobile  work-button">
                <span class="hover-underline-animation">
                  <Link to="/contact" className="button-home-mobile">
                    CONTACT US
                  </Link>{" "}
                </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                  fill="#ff9900"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <div className="work-section2">
          <div class="container container-work ">
            <ul class="slides">
              <li id="slide1">
                <img
                  src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw1.jpg"
                  alt=""
                />
              </li>
              <li id="slide2">
                <img
                  src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw2.jpg"
                  alt=""
                />
              </li>
              <li id="slide3">
                <img
                  src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg"
                  alt=""
                />
              </li>
              <li id="slide4">
                <img
                  src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg"
                  alt=""
                />
              </li>
              <li id="slide5">
                <img
                  src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg"
                  alt=""
                />
              </li>
            </ul>

            <ul class="thumbnails">
              <li>
                <a href="#slide1">
                  <img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw1.jpg" />
                </a>
              </li>
              <li>
                <a href="#slide2">
                  <img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw2.jpg" />
                </a>
              </li>
              <li>
                <a href="#slide3">
                  <img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg" />
                </a>
              </li>
              <li>
                <a href="#slide4">
                  <img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg" />
                </a>
              </li>
              <li>
                <a href="#slide5">
                  <img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Firstpage;
