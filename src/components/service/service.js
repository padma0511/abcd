import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { TypeAnimation } from "react-type-animation";
import appdevelopment from "../asserts/service/app dev.png";

import ServiceHeadImage from "../asserts/service/Service_SBG.png";
import "../service/service.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Card = ({ title, description, icon, gradientColor }) => (
  <div className={`container-card ${gradientColor}`}>
    {icon}
    <p className="card-title">{title}</p>
    <p className="card-description">{description}</p>
  </div>
);

const Service = () => {
  // const { texts } = useTypewriter({
  //   words: [
  //     "App Development",
  //     "Web Development",
  //     "Digital Marketing",
  //     "Corporate Video",
  //     "Busniess Development",
  //   ],
  //   loop: {},
  // });
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <div className="Service-page" id="Webdevelopment">
        <div className="service-page-top1">
          <div className="row ">
            <div className="col">
              <div className="service-head1">
                {/* <h1 className="service-titile">
                  WE ARE PROVIDE
                  <span style={{ color: "white" }}>{texts}</span>
                  <Cursor />
                </h1> */}
                {/* <h1 className="service-titile">
                  <TypeAnimation
                    sequence={[
                      "WE ARE PROVIDE APP DEVELOPMENT",
                      1000,
                      "WE ARE PROVIDE WEB DEVELOPMENT",
                      1000,
                      "WE ARE PROVIDE DIGITAL MARKETING",
                      1000,
                      "WE ARE PROVIDE CORPORATE VIDEO",
                      1000,
                      "WE ARE PROVIDE BUSINESS DEVELOPMENT",
                      1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </h1> */}

                <h1 className="service-titile">
                  WE ARE PROVIDE <br /> <h4> </h4>
                  <ReactTyped
                    strings={[
                      "APP DEVELOPMENT",
                      "WEB DEVELOPMENT",
                      "DIGITAL MARKETING",
                      "CORPORATE VIDEO",
                      "BUSINESS DEVELOPMENT",
                    ]}
                    typeSpeed={100}
                    loop
                    backSpeed={20}
                    cursorChar="|"
                    showCursor={true}
                  />
                </h1>

                <br />
                {/* <h1 className="console-container">
                  <span id="text"> {part}</span>
                  <div className="console-underscore">&#95;</div>
                </h1> */}
              </div>
              <div className="service-head1">
                <p className="service-about">
                  Explore our comprehensive solutions, meticulously tailored to
                  fulfill your unique requirements and exceed your expectations.
                </p>
              </div>
            </div>
            <div className="col">
              <img
                src={ServiceHeadImage}
                className="Service-head-image"
                width="70%"
                alt="Service"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container service-top2">
        <h1 className="container-title">SERVICES</h1>

        <div className="gradient-cards ">
          <div
            id="Appdevelopment"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Card
              title="APP DEVELOPMENT"
              id="Appdevelopment"
              description="Mobile app development company, we support our client through mobile app’s provided that are seo friendly and efficient. Our client’s business growth get increased."
              icon={<img src={appdevelopment} width="100" height="100" />}
              gradientColor="bg-green-box"
            />
          </div>
          <div
            id="Seo"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Card
              title=" SEARCH ENGINE OPTIMIZATION."
              id=""
              description="Mobile app development company, we support our client through mobile app’s provided that are seo friendly and efficient. Our client’s business growth get increased.."
              icon={<img src={appdevelopment} width="100" height="100" />}
              gradientColor="bg-white-box"
            />
          </div>

          <div
            id="webdevelopment"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Card
              id="webdevelopment"
              title="WEB DEVELOPMENT"
              description="Mobile app development company, we support our client through mobile app’s provided that are seo friendly and efficient. Our client’s business growth get increased..
            "
              icon={<img src={appdevelopment} width="100" height="100" />}
              gradientColor="bg-yellow-box"
            />
          </div>

          <div
            id="DIGITALMARKETING"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Card
              title="DIGITAL MARKETING"
              description="Mobile app development company, we support our client through mobile app’s provided that are seo friendly and efficient. Our client’s business growth get increased."
              icon={<img src={appdevelopment} width="100" height="100" />}
              gradientColor="bg-blue-box"
            />
          </div>
          <div
            id="CorporateVideo"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Card
              title="Corporate Video"
              description="Mobile app development company, we support our client through mobile app’s provided that are seo friendly and efficient. Our client’s business growth get increased.."
              icon={<img src={appdevelopment} width="100" height="100" />}
              gradientColor="bg-blue-box"
            />
          </div>
          <div
            id="BUSINESSDEVELOPMENT"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Card
              title="BUSINESS DEVELOPMENT"
              description="Mobile app development company, we support our client through mobile app’s provided that are seo friendly and efficient. Our client’s business growth get increased."
              icon={<img src={appdevelopment} width="100" height="100" />}
              gradientColor="bg-blue-box"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
