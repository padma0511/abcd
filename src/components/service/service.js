import React, { useEffect, useState } from "react";
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

const words = [
  "WEB DEVELOPMENT",
  "APP DEVELOPMENT",
  "DIGITAL MARKETING",
  "CORPORATE VIDEO",
  "BUSINESS DEVELOPMENT",
];
const skipDelay = 15;
const speed = 70;
const Service = () => {
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const [part, setPart] = useState("");

  useEffect(() => {
    AOS.init();
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount((prevCount) => prevCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((prevI) => (prevI + 1) % words.length);
          setOffset(0);
        }
      }
      const newPart = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          setOffset((prevOffset) => prevOffset + 1);
        } else {
          setOffset((prevOffset) => prevOffset - 1);
        }
      }
      setPart(newPart);
    }, speed);

    return () => clearInterval(interval);
  }, [i, offset, forwards, skipCount]);

  return (
    <div className="">
    <div className="Service-page" id="Webdevelopment">
      <div className="service-page-top1">
        <div className="row ">
          <div className="col">
            <div className="service-head1">
              <h1 className="service-titile">WE ARE PROVIDE</h1>
              <br />
              <h1 className="console-container">
                <span id="text"> {part}</span>
                {/* <div className="console-underscore">&#95;</div> */}
              </h1>
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
