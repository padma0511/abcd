import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import eiffel from "../asserts/home/Eiffel_image.jpeg";
import homemobilebg from "../asserts/home/mobile-bg-home.png";
import firstimage from "../asserts/home/360-company.png";
import secondimage from "../asserts/home/360-triangle.png";
import thirdimage from "../asserts/home/slack img.png";
import forthimage from "../asserts/home/wing.png";
import digitalInovation from "../asserts/home/INOVATE.png";
import homeclient1 from "../asserts/home/h-client1.png";
import homeclient2 from "../asserts/home/h-client2.png";
import homeclient3 from "../asserts/home/h-client3.png";
import videoBackground from "../asserts/home/home-bg.mp4";
import AppDevelopment from "../asserts/home/app.jpg";
import sliderBackground from "../asserts/home/slider-bg.avif";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../home/Wedo.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Wedo() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      const pageTop = window.pageYOffset;
      const pageBottom = pageTop + window.innerHeight;
      const tags = document.querySelectorAll(".fadein");

      tags.forEach((tag) => {
        if (tag.getBoundingClientRect().top < pageBottom) {
          tag.classList.add("visible");
        } else {
          tag.classList.remove("visible");
        }
      });
    };

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="homepage " id="home">
      <div className="top1-tit">
        <div className="example-10 video-background">
          {/* Video element for background */}
          <video autoPlay loop muted className="video-background__video">
            <source
              src={videoBackground}
              type="video/mp4"
              className="homeVideo"
            />
          </video>
          <div className="bgcontainer">
            <div className="overlay">
              <div className="container  container-homepage">
                <h1 data-aos="zoom-in">
                 <span className="our">RESEARCH </span> <span className="ser">AND</span> <br />
                  <span className="our">DEVELOPMENT </span><span className="ser">COMPANY</span>
                </h1>
                <p data-aos="zoom-in">
                  Our company specializes in providing innovative digital
                  marketing
                  <br />
                  solutions tailored to elevate your brand's online presence and
                  drive business growth.
                </p>
                <button class="buttonarrow" data-aos="zoom-in">
                  <span class="hover-underline-animation">
                    <Link to="/contact" className="button-home">
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
          </div>
        </div>
      </div>
      <div className="mobile-background">
        <section
          className="homebg"
          style={{
            backgroundImage: `url(${homemobilebg})`,
          }}
        >
          <div className="container  container-homepage-mobile">
            <h1>
             <span className="our" >RESEARCH</span> <span className="ser">AND</span> <br />
             <span className="our" >DEVELOPMENT </span><span className="ser">COMPANY</span>
            </h1>
            <p>
              Our company specializes in providing innovative digital marketing
              <br />
              solutions tailored to elevate your brand's online presence and
              drive business growth.
            </p>
            <button class="buttonarrow-mobile">
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
        </section>
      </div>

      <div className=" WEDO-SERVICE">
        <h1 className=" WEDO-SERVICE-heading" data-aos="zoom-in">
          <span className="our"> OUR</span> SERVICE
        </h1>
      </div>

      <div className="home HOMEB">
        <div className="row">
          <div className="col-lg-4">
            <div className="presentation-box1 ">
              <div className="row">
                <div className="col-lg-9">
                  <div className="head-box1">
                    <div class="oneimage">
                      <img
                        src={eiffel}
                        style={{
                          borderradius: "8px",
                          width: "9.5rem",
                          height: "300px",
                        }}
                        alt=""
                      />
                      <div class="overlay"></div>
                    </div>
                  </div>
                  <div className="head-box2">
                    <h4 style={{ padding: "5px" }}>Competitor analysis</h4>
                  </div>
                </div>
                <div className="col-lg-3 ooo">
                  <div className="head-box3">
                    <h1 className="move">01</h1>
                    <h4 className="move our">
                     <span className="our" >Digital</span><span className="ser"> Marketing</span>
                    </h4>
                  </div>
                  <div className="head-box4">
                    <h4 className="move">Sensing trend</h4>
                  </div>
                  <div className="head-box5">
                    <h4 className="move">Problem identification</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="presentation-box2">
              <div className="row">
                <div className="col-lg-9">
                  <div className="head-box1">
                    <div class="oneimage">
                      <img
                        src={eiffel}
                        style={{
                          borderradius: "8px",
                          width: "9.5rem",
                          height: "300px",
                        }}
                        alt=""
                      />
                      <div class="overlay"></div>
                    </div>
                  </div>
                  <div className="head-box2">
                    <h4 style={{ padding: "5px" }}>Competitor analysis</h4>
                  </div>
                </div>
                <div className="col-lg-3 ooo">
                  <div className="head-box3">
                    <h1 className="move">02</h1>
                    <h4 className="move" style={{ width: "100%" }}>
                     <span className="our"> App</span> <span className="ser">Development</span>
                    </h4>
                  </div>
                  <div className="head-box4 head-box1-sub">
                    <h4 className="move">BRAND PROMOTION</h4>
                    <h4 className="move">Tradional Marketing</h4>
                  </div>
                  {/* <div className="head-box6">
                    <h4 className="move "></h4>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="presentation-box3">
              <div className="row">
                <div className="col-lg-9">
                  <div className="head-box1">
                    {" "}
                    <div class="oneimage">
                      <img
                        src={eiffel}
                        style={{
                          borderradius: "8px",
                          width: "9.5rem",
                          height: "300px",
                        }}
                        alt=""
                      />
                      <div class="overlay"></div>
                    </div>
                  </div>
                  <div className="head-box2">
                    <h4 style={{ padding: "5px" }}>Finacial management</h4>
                  </div>
                </div>
                <div className="col-lg-3 ooo">
                  <div className="head-box3">
                    <h1 className="move">03</h1>
                    <h4 className="move">
                      <span className="our">Corporate</span> <br />
                      <span className="ser">Video</span>
                    </h4>
                  </div>
                  <div className="head-box4">
                    <h4 className="move">Infrastructure enhancement</h4>
                  </div>
                  <div className="head-box5">
                    <h4 className="move">Problem identification</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="presentation-box1">
              <div className="row">
                <div className="col-lg-9">
                  <div className="head-box1">
                    {" "}
                    <div class="oneimage">
                      <img
                        src={eiffel}
                        style={{
                          borderradius: "8px",
                          width: "9.5rem",
                          height: "300px",
                        }}
                        alt=""
                      />
                      <div class="overlay"></div>
                    </div>
                  </div>
                  <div className="head-box2">
                    <h4 style={{ padding: "5px" }}>Competitor analysis</h4>
                  </div>
                </div>
                <div className="col-lg-3 ooo">
                  <div className="head-box3">
                    <h1 className="move">04</h1>
                    <h4 className="move">
                      <span className="our">SEO</span> <br />{" "}
                      <span className="ser"></span>
                    </h4>
                  </div>
                  <div className="head-box4">
                    <h4 className="move">Sensing trend</h4>
                  </div>
                  <div className="head-box5">
                    <h4 className="move">Problem identification</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="presentation-box2">
              <div className="row">
                <div className="col-lg-9">
                  <div className="head-box1">
                    {" "}
                    <div class="oneimage">
                      <img
                        src={eiffel}
                        style={{
                          borderradius: "8px",
                          width: "9.5rem",
                          height: "300px",
                        }}
                        alt=""
                      />
                      <div class="overlay"></div>
                    </div>
                  </div>
                  <div className="head-box2">
                    <h4 style={{ padding: "5px" }}>Competitor analysis</h4>
                  </div>
                </div>
                <div className="col-lg-3 ooo">
                  <div className="head-box3">
                    <h1 className="move">05</h1>
                    <h4 className="move" style={{ width: "100%" }}>
                    <span class="our" >Web</span>  <span className="ser">Development</span>
                    </h4>
                  </div>
                  <div className="head-box4 head-box1-sub">
                    <h4 className="move">BRAND PROMOTION</h4>
                    <h4 className="move">Tradional Marketing</h4>
                  </div>
                  {/* <div className="head-box6">
                    <h4 className="move "></h4>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="presentation-box3">
              <div className="row">
                <div className="col-lg-9">
                  <div className="head-box1">
                    {" "}
                    <div class="oneimage">
                      <img
                        src={eiffel}
                        style={{
                          borderradius: "8px",
                          width: "9.5rem",
                          height: "300px",
                        }}
                        alt=""
                      />
                      <div class="overlay"></div>
                    </div>
                  </div>
                  <div className="head-box2">
                    <h4 style={{ padding: "5px" }}>Finacial management</h4>
                  </div>
                </div>
                <div className="col-lg-3 ooo">
                  <div className="head-box3">
                    <h1 className="move">06</h1>
                    <h4 className="move">
                     <span className="our">Business</span>  <br />
                      <span className="ser">Development</span>
                    </h4>
                  </div>
                  <div className="head-box4">
                    <h4 className="move">Infrastructure enhancement</h4>
                  </div>
                  <div className="head-box5">
                    <h4 className="move">Problem identification</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="mobile-strategy" class="mobile-strategy">
        <div class="container-fluid p-lg-5 p-md-2 p-0 mt-lg-0 mt-md-0 mt-0">
          <div class=" d-flex flex-column gap-lg-4 gap-md-4 gap-sm-2 justify-content-around py-5 p-lg-0 p-md-0">
            <div class="buis-analysis bg-black d-flex justify-content-center py-3 gap-3 rounded rounded-3">
              <div
                class="buis-left d-flex flex-column gap-3"
                style={{ widt: "100%", maxwidth: "10rem" }}
              >
                {/* <!-- image --> */}
                <div class="oneimage">
                  <img
                    src={eiffel}
                    style={{
                      borderradius: "8px",
                      width: "10rem",
                      height: "300px",
                    }}
                    alt=""
                  />
                  <div class="overlay"></div>
                </div>
                <a
                  class="text-decoration-none"
                  style={{ width: "10rem" }}
                  href="./strategy.php"
                >
                  <div
                    class="buis-card p-2 text-light fw-bold d-flex align-items-end
                          fs-5"
                    style={{
                      width: "10rem",
                      height: "300px",
                      borderradius: "5px",
                    }}
                  >
                    <h4 class="fw-semibold">
                      {" "}
                      Competitor <br /> Analysis{" "}
                    </h4>
                  </div>
                </a>
              </div>
              <div class="buis-right d-flex flex-column gap-3">
                <div
                  class="buis-content text-center d-flex justify-content-center
                         flex-column align-items-center"
                  style={{
                    width: "10rem",
                    height: "160.93px",
                    borderradius: "8px",
                  }}
                >
                  <h1 class="text-light fw-bold display-1  one" >01</h1>
                  <h2 class="fw-bold one ">
                    <span class="our">Business</span>
                  </h2>
                </div>
                <a class="text-decoration-none" href="./strategy.php">
                  <div
                    class="buis-card sensisng text-light fw-bold p-2 fs-5 d-flex align-items-end"
                    style={{
                      borderradius: "5px",
                      width: "10rem",
                      height: "161.233px",
                    }}
                  >
                    <h4 class="fw-semibold" style={{ fontsize: "22px" }}>
                      {" "}
                      Sensing Trend
                    </h4>
                  </div>
                </a>
                <a class="text-decoration-none" href="./strategy.php">
                  <div
                    class="buis-card text-light fw-bold d-flex align-items-end
                         p-2 fs-5"
                    style={{
                      width: "10rem",
                      height: "260px",
                      borderradius: "8px",
                    }}
                  >
                    <h4 class="fw-semibold" style={{ fontsize: "22px" }}>
                      {" "}
                      Problem
                      <br />
                      Identification
                    </h4>
                  </div>
                </a>
              </div>
            </div>
            {/* <!-- 02 --> */}
            <div class="buis-analysis bg-black d-flex justify-content-center p-3 gap-3 rounded rounded-3">
              <div
                class="buis-left d-flex flex-column gap-3"
                style={{ widt: "100%", maxwidth: "10rem" }}
              >
                {/* <!-- <img src="./images/home/strategy/Marketing_analysis.jpg" 
                          style="border-radius:8px;width:15rem;height: 388px;object-fit:cover;object-position:top;" alt=""> --> */}
                <div class="oneimage">
                  <img
                    src={eiffel}
                    style={{
                      borderradius: "8px",
                      width: "10rem",
                      height: "300px",
                    }}
                    alt=""
                  />
                  <div class="overlay"></div>
                </div>
                <a class="text-decoration-none" href="./strategy.php#marketing">
                  <div
                    class="buis-card d-flex flex-column justify-content-center p-2 fs-5"
                    style={{
                      borderradius: "8px",
                      width: "10rem",
                      height: "195px",
                    }}
                  >
                    <h4
                      class="fw-semibold"
                      style={{ fontsize: "22px", color: "white" }}
                    >
                      Branding
                    </h4>
                    <ul style={{ fontsize: "16px" }}>
                      <li class="fw" style={{ color: "white" }}>
                        New Branding
                      </li>
                      <li style={{ color: "white" }}>Re-Branding</li>
                    </ul>
                  </div>
                </a>
                <a class="text-decoration-none" href="./strategy.php#marketing">
                  <div
                    class="buis-card text-light d-flex flex-column justify-content-center  p-3 fs-5"
                    style={{
                      width: "10rem",
                      borderradius: "8px",
                      height: "190px",
                    }}
                  >
                    <h4 style={{ fontsize: "22px" }} class="fw-semibold">
                      Brand Collaboration
                    </h4>
                    <ul
                      class=" mobile-service-home1 "
                      style={{ fontsize: "16px", color: "white" }}
                    >
                      <li class="fw-regular" style={{ color: "white" }}>
                        Trade Show
                      </li>
                      <li style={{ color: "white" }}>Sponsorship </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="buis-right d-flex flex-column gap-3">
                <div
                  class="buis-content text-center d-flex justify-content-center
                          flex-column align-items-center"
                  style={{
                    width: "10rem",
                    height: "146.93px",
                    borderradius: "8px",
                  }}
                >
                  <h1 class="text-light fw-bold display-1 one">02</h1>
                  <h2 class="fw-bold one">
                    <span className="our ">Marketing</span>
                  </h2>
                </div>
                <a class="text-decoration-none" href="./strategy.php#marketing">
                  <div
                    class="buis-card Brand-Promotion p-2 d-flex flex-column justify-content-center ps-2"
                    style={{
                      borderradius: "5px",
                      width: "10rem",
                      height: "auto",
                    }}
                  >
                    <h2
                      style={{ fontsize: "22px", color: "white" }}
                      class="mb-3 fw-semibold"
                    >
                      Brand Promotion
                    </h2>

                    <h4
                      class=""
                      style={{
                        fontsize: "16px",
                        fontweight: " 700",
                        color: "white",
                      }}
                    >
                      Traditional Marketing
                    </h4>
                    <ul
                      class="mobile-servise-traditional  "
                      style={{ fontsize: "16px", color: "white" }}
                    >
                      <li style={{ color: "white" }}>Public Poster</li>
                      <li style={{ color: "white" }}>Handy Flyer </li>
                      <li style={{ color: "white" }}>Vehicle Marketing</li>
                      <li style={{ color: "white" }}>Telemarketing</li>
                      <li style={{ color: "white" }}>Theater Promotion</li>
                    </ul>
                    <h4
                      class="mobile-servise-digital"
                      style={{
                        fontsize: "16px",
                        fontweight: " 700",
                        color: "white",
                      }}
                    >
                      Digital Marketing
                    </h4>
                    <ul class="  " style={{ fontsize: "16px" }}>
                      <li style={{ color: "white" }}>Social Media Promotion</li>
                      <li style={{ color: "white" }}>SEO</li>
                      <li style={{ color: "white" }}>Lead Generation</li>
                      <li style={{ color: "white" }}>Content Marketing</li>
                      <li style={{ color: "white" }}>Website</li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
            {/* <!-- 03 --> */}
            <div class="buis-analysis bg-black d-flex justify-content-center p-3 gap-3 rounded rounded-3">
              <div
                class="buis-left d-flex flex-column gap-3"
                style={{ widt: "100%", maxwidth: "10rem" }}
              >
                {/* <!-- <img src="./images/home/strategy/Marketing_analysis.jpg" style="border-radius:8px;width:15rem;" alt=""> -->
                        <!-- <img src="./images/home/strategy/Marketing_analysis.jpg" style="border-radius:8px;width:15rem;height: 329px;object-fit:cover;object-position:top;" alt=""> --> */}
                <div class="oneimage">
                  <img
                    src={eiffel}
                    style={{
                      borderradius: "8px",
                      width: "10rem",
                      height: "300px",
                    }}
                    alt=""
                  />
                  <div class="overlay"></div>
                </div>
                <a class="text-decoration-none" href="./strategy.php#operating">
                  <div
                    class="buis-card text-light   p-3 fs-5"
                    style={{ width: "10rem", borderradius: "8px" }}
                  >
                    <h4 style={{ fontsize: "20px" }} class="pb-2 fw-semibold">
                      Resource
                      <br />
                      Up-gradation
                    </h4>
                    <ul style={{ fontsize: "16px" }}>
                      <li class="fw-regular">Workforce Empowerment </li>
                      <li>Technology Adaptation</li>
                    </ul>
                  </div>
                </a>
                <a class="text-decoration-none" href="./strategy.php#operating">
                  <div
                    class="buis-card text-light fw-bold d-flex
                         align-items-end p-4 fs-5"
                    style={{ width: "10rem", borderradius: "8px" }}
                  >
                    <h4 class="fw-bold" style={{ fontsize: "20px" }}>
                      Financial
                      <br />
                      Management
                    </h4>
                  </div>
                </a>
              </div>
              <div class="buis-right d-flex flex-column gap-3">
                <div
                  class=" buis-content text-center d-flex justify-content-center
                         flex-column align-items-center"
                  style={{
                    width: "10rem",
                    height: "207.93px",
                    borderradius: "8px",
                  }}
                >
                  <h1 class="text-light fw-bold display-1 one">03</h1>
                  <h2 class="fw-bold one ">
                    <span class="our ">Operational</span>
                  </h2>
                </div>
                <a class="text-decoration-none" href="./strategy.php#operating">
                  <div
                    class="buis-card  text-light fw-bold p-2 fs-5 d-flex align-items-end"
                    style={{
                      borderradius: "5px",
                      width: "10rem",
                      height: " 172.233px",
                    }}
                  >
                    <h4 class="fw-bold" style={{ fontsize: "20px" }}>
                      Infrastructure Enhancement
                    </h4>
                  </div>
                </a>
                <a class="text-decoration-none" href="./strategy.php#operating">
                  <div
                    class="buis-card text-light fw-bold d-flex align-items-end
                         p-2 fs-5"
                    style={{
                      width: "10rem",
                      height: "260px",
                      borderradius: "8px",
                    }}
                  >
                    <h4 class="fw-bold" style={{ fontsize: "20px" }}>
                      Customer Relationship Management
                    </h4>
                  </div>
                </a>
              </div>
            </div>
            <div class="buis-analysis bg-black d-flex justify-content-center py-3 gap-3 rounded rounded-3">
              <div
                class="buis-left d-flex flex-column gap-3"
                style={{ widt: "100%", maxwidth: "10rem" }}
              >
                {/* <!-- image --> */}
                <div class="oneimage">
                  <img
                    src={eiffel}
                    style={{
                      borderradius: "8px",
                      width: "10rem",
                      height: "300px",
                    }}
                    alt=""
                  />
                  <div class="overlay"></div>
                </div>
                <a
                  class="text-decoration-none"
                  style={{ width: "10rem" }}
                  href="./strategy.php"
                >
                  <div
                    class="buis-card p-2 text-light fw-bold d-flex align-items-end
                          fs-5"
                    style={{
                      width: "10rem",
                      height: "300px",
                      borderradius: "5px",
                    }}
                  >
                    <h4 class="fw-semibold">
                      {" "}
                      Competitor <br /> Analysis{" "}
                    </h4>
                  </div>
                </a>
              </div>
              <div class="buis-right d-flex flex-column gap-3">
                <div
                  class="buis-content text-center d-flex justify-content-center
                         flex-column align-items-center"
                  style={{
                    width: "10rem",
                    height: "160.93px",
                    borderradius: "8px",
                  }}
                >
                  <h1 class="text-light fw-bold display-1 one">01</h1>
                  <h2 class="fw-bold one ">
                    <span class="our ">Business</span>
                  </h2>
                </div>
                <a class="text-decoration-none" href="./strategy.php">
                  <div
                    class="buis-card sensisng text-light fw-bold p-2 fs-5 d-flex align-items-end"
                    style={{
                      borderradius: "5px",
                      width: "10rem",
                      height: "161.233px",
                    }}
                  >
                    <h4 class="fw-semibold" style={{ fontsize: "22px" }}>
                      {" "}
                      Sensing Trend
                    </h4>
                  </div>
                </a>
                <a class="text-decoration-none" href="./strategy.php">
                  <div
                    class="buis-card text-light fw-bold d-flex align-items-end
                         p-2 fs-5"
                    style={{
                      width: "10rem",
                      height: "260px",
                      borderradius: "8px",
                    }}
                  >
                    <h4 class="fw-semibold" style={{ fontsize: "22px" }}>
                      {" "}
                      Problem
                      <br />
                      Identification
                    </h4>
                  </div>
                </a>
              </div>
            </div>
            {/* <!-- 02 --> */}
            <div class="buis-analysis bg-black d-flex justify-content-center p-3 gap-3 rounded rounded-3">
              <div
                class="buis-left d-flex flex-column gap-3"
                style={{ widt: "100%", maxwidth: "10rem" }}
              >
                {/* <!-- <img src="./images/home/strategy/Marketing_analysis.jpg" 
                        style="border-radius:8px;width:15rem;height: 388px;object-fit:cover;object-position:top;" alt=""> --> */}
                <div class="oneimage">
                  <img
                    src={eiffel}
                    style={{
                      borderradius: "8px",
                      width: "10rem",
                      height: "300px",
                    }}
                    alt=""
                  />
                  <div class="overlay"></div>
                </div>
                <a class="text-decoration-none" href="./strategy.php#marketing">
                  <div
                    class="buis-card d-flex flex-column justify-content-center p-2 fs-5"
                    style={{
                      borderradius: "8px",
                      width: "10rem",
                      height: "195px",
                    }}
                  >
                    <h4
                      class="fw-semibold"
                      style={{ fontsize: "22px", color: "white" }}
                    >
                      Branding
                    </h4>
                    <ul style={{ fontsize: "16px" }}>
                      <li class="fw" style={{ color: "white" }}>
                        New Branding
                      </li>
                      <li style={{ color: "white" }}>Re-Branding</li>
                    </ul>
                  </div>
                </a>
                <a class="text-decoration-none" href="./strategy.php#marketing">
                  <div
                    class="buis-card text-light d-flex flex-column justify-content-center  p-3 fs-5"
                    style={{
                      width: "10rem",
                      borderradius: "8px",
                      height: "190px",
                    }}
                  >
                    <h4 style={{ fontsize: "22px" }} class="fw-semibold">
                      Brand Collaboration
                    </h4>
                    <ul
                      class=" mobile-service-home1 "
                      style={{ fontsize: "16px", color: "white" }}
                    >
                      <li class="fw-regular" style={{ color: "white" }}>
                        Trade Show
                      </li>
                      <li style={{ color: "white" }}>Sponsorship </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="buis-right d-flex flex-column gap-3">
                <div
                  class="buis-content text-center d-flex justify-content-center
                         flex-column align-items-center"
                  style={{
                    width: "10rem",
                    height: "146.93px",
                    borderradius: "8px",
                  }}
                >
                  <h1 class="text-light fw-bold display-1 one">02</h1>
                  <h2 class="fw-bold one">
                    <span class="our">Marketing</span>
                  </h2>
                </div>
                <a class="text-decoration-none" href="./strategy.php#marketing">
                  <div
                    class="buis-card Brand-Promotion p-2 d-flex flex-column justify-content-center ps-2"
                    style={{
                      borderradius: "5px",
                      width: "10rem",
                      height: "auto",
                    }}
                  >
                    <h2
                      style={{ fontsize: "22px", color: "white" }}
                      class="mb-3 fw-semibold"
                    >
                      Brand Promotion
                    </h2>

                    <h4
                      class=""
                      style={{
                        fontsize: "16px",
                        fontweight: " 700",
                        color: "white",
                      }}
                    >
                      Traditional Marketing
                    </h4>
                    <ul
                      class="mobile-servise-traditional  "
                      style={{ fontsize: "16px", color: "white" }}
                    >
                      <li style={{ color: "white" }}>Public Poster</li>
                      <li style={{ color: "white" }}>Handy Flyer </li>
                      <li style={{ color: "white" }}>Vehicle Marketing</li>
                      <li style={{ color: "white" }}>Telemarketing</li>
                      <li style={{ color: "white" }}>Theater Promotion</li>
                    </ul>
                    <h4
                      class="mobile-servise-digital"
                      style={{
                        fontsize: "16px",
                        fontweight: " 700",
                        color: "white",
                      }}
                    >
                      Digital Marketing
                    </h4>
                    <ul class="  " style={{ fontsize: "16px" }}>
                      <li style={{ color: "white" }}>Social Media Promotion</li>
                      <li style={{ color: "white" }}>SEO</li>
                      <li style={{ color: "white" }}>Lead Generation</li>
                      <li style={{ color: "white" }}>Content Marketing</li>
                      <li style={{ color: "white" }}>Website</li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
            {/* <!-- 03 --> */}
            <div class="buis-analysis bg-black d-flex justify-content-center p-3 gap-3 rounded rounded-3">
              <div
                class="buis-left d-flex flex-column gap-3"
                style={{ widt: "100%", maxwidth: "10rem" }}
              >
                {/* <!-- <img src="./images/home/strategy/Marketing_analysis.jpg" style="border-radius:8px;width:15rem;" alt=""> -->
                        <!-- <img src="./images/home/strategy/Marketing_analysis.jpg" style="border-radius:8px;width:15rem;height: 329px;object-fit:cover;object-position:top;" alt=""> --> */}
                <div class="oneimage">
                  <img
                    src={eiffel}
                    style={{
                      borderradius: "8px",
                      width: "10rem",
                      height: "300px",
                    }}
                    alt=""
                  />
                  <div class="overlay"></div>
                </div>
                <a class="text-decoration-none" href="./strategy.php#operating">
                  <div
                    class="buis-card text-light   p-3 fs-5"
                    style={{ width: "10rem", borderradius: "8px" }}
                  >
                    <h4 style={{ fontsize: "20px" }} class="pb-2 fw-semibold">
                      Resource
                      <br />
                      Up-gradation
                    </h4>
                    <ul className="two " style={{ fontsize: "16px" }}>
                      <li class="fw-regular ">Workforce </li>
                      <li>Technology Adaptation</li>
                    </ul>
                  </div>
                </a>
                <a class="text-decoration-none" href="./strategy.php#operating">
                  <div
                    class="buis-card text-light fw-bold d-flex
                         align-items-end p-4 fs-5"
                    style={{ width: "10rem", borderradius: "8px" }}
                  >
                    <h4 class="fw-bold" style={{ fontsize: "20px" }}>
                      Financial
                      <br />
                      Management
                    </h4>
                  </div>
                </a>
              </div>
              <div class="buis-right d-flex flex-column gap-3">
                <div
                  class=" buis-content text-center d-flex justify-content-center
                         flex-column align-items-center"
                  style={{
                    width: "10rem",
                    height: "207.93px",
                    borderradius: "8px",
                  }}
                >
                  <h1 class="text-light fw-bold display-1 one">03</h1>
                  <h2 class="fw-bold one">
                    <span class="our ">Operational</span>
                  </h2>
                </div>
                <a class="text-decoration-none" href="./strategy.php#operating">
                  <div
                    class="buis-card  text-light fw-bold p-2 fs-5 d-flex align-items-end"
                    style={{
                      borderradius: "5px",
                      width: "10rem",
                      height: " 172.233px",
                    }}
                  >
                    <h4 class="fw-bold" style={{ fontsize: "20px" }}>
                      Infrastructure Enhancement
                    </h4>
                  </div>
                </a>
                <a class="text-decoration-none" href="./strategy.php#operating">
                  <div
                    class="buis-card text-light fw-bold d-flex align-items-end
                         p-2 fs-5"
                    style={{
                      width: "10rem",
                      height: "260px",
                      borderradius: "8px",
                    }}
                  >
                    <h4 class="fw-bold" style={{ fontsize: "20px" }}>
                      Customer Relationship Management
                    </h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="top3-home-client ">
        <div className="client head-home">
          <h1 className="slider-head " data-aos="zoom-in">
            <span className="our">OUR </span>CLIENTS
          </h1>
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={firstimage} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={secondimage} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={thirdimage} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={forthimage} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={firstimage} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={secondimage} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={thirdimage} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={forthimage} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={firstimage} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={secondimage} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={thirdimage} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={forthimage} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={firstimage} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={secondimage} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={thirdimage} height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src={forthimage} height="100" width="250" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------- */}
    </div>
  );
}

export default Wedo;
