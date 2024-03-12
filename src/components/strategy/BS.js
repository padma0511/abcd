import React from "react";
import PBimg from "../asserts/business/PBimg.png";
import Trend from "../asserts/business/Trend.png";
import Swot from "../asserts/business/Swot.png";

import AOS from "aos";
import "aos/dist/aos.css";
import "../strategy/Strategy.css";
import { useEffect } from "react";

{
  /* <body class="page">
  <h1 class="text page__text" data-text="Hello">Hello</h1>
</body> */
}

const BS = () => {
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS with options
  }, []);

  return (
    <>
      <div className="story " id="Businessstrategy">
        <div className="topbanner">
          <div className="top">
            <div className=" head">
              <h1
                className="bs-headline"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos="fade-up"
              >
                BUSINESS STRATEGY
              </h1>

              <div className=" ">
                <h5
                  className="bus-para"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos="fade-up"
                >
                  Our area of expertise is helping businesses present their
                  goods and services to the public in an efficient manner.
                  Through the application of strategic marketing techniques, we
                  raise their profile among their target audience by means of
                  social media campaigns, advertising campaigns, and
                  improvements to their website.
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="business">
          <div className="head1">
            <div className="row">
              <div className="col-lg-6">
                <div className="">
                  {/* 
                  <h4 data-text="PROBLEM " data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos="fade-up-right">PROBLEM <span data-text="IDEFICATION "
                    >IDEFICATION</span></h4> */}

                  <div
                    class="wrapper "
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos="fade-up-right"
                  >
                    <h3>PROBLEM IDEFICATION</h3>
                  </div>
                </div>

                <img
                  src={PBimg}
                  className="pb1"
                  alt="pb"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos="fade-up-left"
                />

                <p
                  className="business-para"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos="fade-up-right"
                >
                  In our approach to addressing business challenges, we leverage
                  surveys as a powerful tool for gathering invaluable insights
                  into your customer demographics and preferences. By delving
                  deep into this data, we aim to provide you with a
                  comprehensive understanding of your target audience, enabling
                  us to identify not only the fundamental challenges your
                  business encounters but also the underlying opportunities for
                  growth and improvement.
                </p>
              </div>
              <div className=" col-lg-6 ">
                <img
                  src={PBimg}
                  className="pb"
                  alt="pb"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos="fade-up-left"
                />
              </div>
            </div>
          </div>

          <div className="headdd2 ">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src={Trend}
                  className="trend"
                  alt="pb"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos="fade-up-left"
                />
              </div>

              <div className=" col-lg-6">
                <div className="">
                  <div
                    class="wrapper "
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos="fade-up-right"
                  >
                    <h3>TREND ALIGNING</h3>
                  </div>
                </div>

                {
                  <img
                    src={Trend}
                    className="align1"
                    alt="pb"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos="fade-up-right"
                  />
                }
                <p
                  className="business-para1"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos="fade-left"
                >
                  We improve the service based on what customers want and what's
                  popular in the market.At Trend Aligning, we continuously
                  enhance our services by aligning with customer preferences and
                  market trends. Our focus is on delivering what our customers
                  desire and staying ahead of market demands.
                </p>
              </div>
              <img
                src={Trend}
                className="align"
                alt="pb"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos="fade-up-left"
              />
            </div>
          </div>

          <div className="headd3 ">
            <div className="row">
              <div className="col-lg-6">
                <div className="">
                  {/* <h3 class="animate-charcter" data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos="fade-up-right"> SWOT ANALYSIS</h3> */}

                  <div
                    class="wrapper "
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos="fade-up-right"
                  >
                    <h3>SWOT ANALYSIS</h3>
                  </div>
                </div>

                <img
                  src={Swot}
                  className="Swots"
                  alt="pb"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos="fade-up-right"
                />

                <p
                  className="business-para2"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos="fade-up-right"
                >
                  SWOT analysis is a strategic planning tool used to evaluate
                  the Strengths, Weaknesses, Opportunities, and Threats involved
                  in a project or business venture. It helps organizations gain
                  insights into their internal and external factors, enabling
                  informed decision-making and strategic planning.
                </p>
              </div>
              <div className=" col-lg-6">
                {
                  <img
                    src={Swot}
                    className="Swotone"
                    alt="pb"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos="fade-up-left"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BS;
