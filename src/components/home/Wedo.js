import React, { useEffect } from "react";
import firstimage from "../asserts/home/360-company.png";
import secondimage from "../asserts/home/360-triangle.png";
import thirdimage from "../asserts/home/slack img.png";
import forthimage from "../asserts/home/wing.png";
import digitalInovation from "../asserts/home/INOVATE.png";
import homeclient1 from "../asserts/home/h-client1.png";
import homeclient2 from "../asserts/home/h-client2.png";
import homeclient3 from "../asserts/home/h-client3.png";
import "../home/Wedo.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Wedo() {
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

  const images = [
    {
      src: homeclient1,
      alt: "First gallery image",
    },
    {
      src: homeclient3,
      alt: "Second gallery image",
    },
    {
      src: homeclient2,
      alt: "Third gallery image",
    },
  ];

  return (
    <div className="homepage" id="home">
      <div className="top1-tit">
        <div className="example-10">
          <h1
            data-aos="zoom-in-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            RESEARCH AND <br />
            DEVELOPMENT COMPANY
          </h1>
          <p
            data-aos="zoom-in-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Our company specializes in providing innovative digital marketing
            <br />
            solutions tailored to elevate your brand's online presence and drive
            business growth.
          </p>
          <div className="but-home">
            <a href="#" className="btn btn-5">
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      <div className="top-2">
        <div className="container ju">
          <div className="top-2content fadein">
            <div className="row">
              <div className="content-wrapper ">
                <div className="image-container">
                  <img
                    loading="lazy"
                    src={digitalInovation}
                    alt="Digital Innovation Visual Representation"
                    className="responsive-image fadein"
                  />
                </div>
                <div className="text-container">
                  <div className="top2-head2">
                    <h1 className="section-top-3-title fadein">
                      Digital Innovation for Your Business
                    </h1>
                    <p className="section-description fadein">
                      Pro Global Solution is a global leader in IT Solutions.
                      Our services are completely tailored to meet clients’
                      requirements and expectations. We always keep on exploring
                      new innovations and leverage creativity to serve across
                      360° solutions. Are you ready to grow your business with
                      our experts’ assistance?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-3">
        <div className="top-3-content">
          <h1 className="top-3-title">OUR LATEST WORKS</h1>
        </div>
        <section className="gallery">
          {images.map((image, index) => (
            <div className={`column-${index + 1}`} key={index}>
              <img
                loading="lazy"
                src={image.src}
                alt={image.alt}
                data-aos="zoom-in-up"
                data-aos-duration="3000"
                className={`image-${index + 1}`}
              />
            </div>
          ))}
        </section>

        <div className="but-home-explore">
          <a
            href="#"
            className="btn btn-5"
            data-aos="fade-up-left"
            data-aos-duration="4000"
          >
            CONTACT US
          </a>
        </div>
      </div>

      <div className="top3-home-client">
        <div className="client head-home">
          <h1
            className="slider-head"
            data-aos="zoom-in-up"
            data-aos-duration="5000"
          >
            OUR CLIENTS
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
    </div>
  );
}

export default Wedo;
