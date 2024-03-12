import React from "react";

import Lead from "../asserts/marketing/lead.png";
import Generation from "../asserts/marketing/generation.png";
import web from "../asserts/marketing/web.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "../strategy/Strategy.css";
import { useEffect } from "react";

const Marketingstrategy = () => {
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS with options
  }, []);

  return (
    <>
      <div className="story " id="Marketing strategy">
        <div className="topbanner">
          <div className="top">
            <div className=" head">
              <h1
                className="bs-headline"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos="fade-up"
              >
                MARKETING STRATEGY
              </h1>

              <div className=" ">
                <h5
                  className="bus-para"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos="fade-up"
                >
                  We focus on helping businesses present their goods and
                  services to the public in an efficient manner. By applying
                  strategic marketing techniques, we raise their profile among
                  their target audience by using strategies such as social media
                  campaigns, advertising campaigns, and online presence
                  improvements.
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
                    <h3>SOCIAL MEDIA PROMOTION</h3>
                  </div>
                </div>

                <img
                  src={Lead}
                  className="pb1"
                  alt="pb"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos="fade-up-left"
                />

                <p
                  className="bbusiness-para"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos="fade-up-right"
                >
                  Our social media strategy goes beyond mere promotion. It's
                  about creating meaningful connections. By utilizing
                  eye-catching posters and engaging videos supplemented with
                  trending hashtags, we actively seek out and captivate
                  potential customers across various platforms such as
                  Instagram, YouTube, and more. This proactive approach ensures
                  that we not only attract attention but also foster genuine
                  engagement, building lasting relationships with our audience
                  and driving impactful results for your brand.
                </p>
              </div>
              <div className=" col-lg-6 ">
                <img
                  src={Lead}
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
                  src={Generation}
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
                    <h3>LEAD GENERATION</h3>
                  </div>
                </div>

                {
                  <img
                    src={Generation}
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
                  Our lead generation strategy harnesses the power of social
                  media platforms to drive product sales and capture valuable
                  customer data simultaneously. By leveraging engaging content
                  and targeted campaigns, we attract potential customers and
                  encourage them to make purchases while also gathering
                  essential contact information. This proactive approach ensures
                  not only immediate sales but also lays the groundwork for
                  long-term customer relationships and ongoing engagement.
                </p>
              </div>
              <img
                src={Generation}
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
                    <h3>WEBSITE</h3>
                  </div>
                </div>

                <img
                  src={web}
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
                  Our team designs captivating websites with interactive and
                  detailed product descriptions, strategically crafted to
                  enhance sales. By providing comprehensive insights into our
                  offerings, our website drives customer engagement and
                  encourages purchasing decisions. This proactive approach
                  ensures that potential buyers are fully informed and motivated
                  to make confident purchasing choices, ultimately boosting
                  product sales and maximizing profitability.
                </p>
              </div>
              <div className=" col-lg-6">
                {
                  <img
                    src={web}
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
export default Marketingstrategy;
