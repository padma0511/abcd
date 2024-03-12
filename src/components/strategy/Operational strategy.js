import React from "react";
import crm from "../asserts/operation/crm.png";
import tec from "../asserts/operation/tec.png";
import financial from "../asserts/operation/finacial.png";
import AOS from "aos";
import "aos/dist/aos.css";

import "../strategy/Strategy.css";
import { useEffect } from "react";

const Operationalstrategy = () => {
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS with options
  }, []);

  return (
    <>
      <div className="story " id="Operational strategy">
        <div className="topbanner">
          <div className="top">
            <div className=" head">
              <h1
                className="bs-headline"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos="fade-up"
              >
                OPERATIONAL STRATEGY
              </h1>

              <div className=" ">
                <h5
                  className="bus-para"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos="fade-up"
                >
                  Assisting businesses to reach optimal operational efficiency
                  is our speciality. Using technology to improve workflow,
                  developing leadership skills, and improving staff training are
                  all included in our comprehensive help. Additionally, we place
                  a high priority on creating a warm and inviting environment
                  for our clients and optimising their entire experience.
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
                  <div
                    class="wrapper "
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos="fade-up-right"
                  >
                    <h3>CRM</h3>
                  </div>
                </div>

                <img
                  src={crm}
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
                  At the heart of modern business practices lies Customer
                  Relationship Management (CRM), an integrated approach merging
                  strategic methodologies with cutting-edge technology. By
                  meticulously managing and enhancing customer interactions, CRM
                  not only prioritizes satisfaction and cultivates loyalty but
                  also lays the foundation for long-term business sustainability
                  and success.
                </p>
              </div>
              <div className=" col-lg-6 ">
                <img
                  src={crm}
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
                  src={tec}
                  className="trend"
                  alt="pb"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos="fade-up-left"
                />
              </div>

              <div className=" col-lg-6">
                <div className="">
                  {/* <h3 class="animate-charcter" data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos="fade-left"> TREND ALIGNING</h3> */}
                  <div
                    class="wrapper "
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos="fade-leftt"
                  >
                    <h3>TECHNOLOGICALADOPTION</h3>
                    <h3></h3>
                  </div>
                </div>

                {
                  <img
                    src={tec}
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
                  Embracing technological adoption signifies the integration of
                  innovative tools and systems to optimize operational
                  efficiency and effectiveness within organizations. By
                  strategically incorporating new technologies, businesses can
                  streamline processes, boost productivity, and stay ahead in
                  today's rapidly evolving digital landscape.
                </p>
              </div>
              <img
                src={tec}
                className="align"
                alt="pb"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos="fade-up-left"
              />
            </div>
          </div>

          <div className="headd3 mt-5 ">
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
                    <h3>FINICIAL MANAGEMENT</h3>
                  </div>
                </div>

                <img
                  src={financial}
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
                  We offer comprehensive support by identifying optimal
                  financial management solutions and fostering collaborative
                  partnerships to propel businesses towards unprecedented growth
                  and success. Through strategic guidance and tailored
                  recommendations, we empower organizations to reach new heights
                  and realize their full potential in today's dynamic
                  marketplace.
                </p>
              </div>
              <div className=" col-lg-6">
                {
                  <img
                    src={financial}
                    className="Swotone"
                    alt="pb"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos="fade-up-left"
                    style={{}} // Corrected: Wrapped marginTop in quotes
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
export default Operationalstrategy;
