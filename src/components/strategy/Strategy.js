import React, { useEffect } from "react";
import "../strategy/Strategy.css";
// import Moving from"../moving/Moving";
import carrer from "../asserts/secondpage/carrer.jpeg";
import MSBG from "../asserts/secondpage/MSBG.jpg";
import vv from "../asserts/secondpage/vv.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Strategy = () => {
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS with options
  }, []);

  return (
    <>
    <section className="strategy">
      <section
        className="heros"
        style={{
          backgroundImage: ` url(${carrer})`,
          fontFamily: '"Roboto", "sans-serif"',
        }}
      >
        <div className="row">
          <div className="container ">
            <div className="col-lg-10">
              <div className="contents ">
                <div className="analysis">
                  <h1
                    className="need ml-5"
                    data-aos-delay="800"
                    data-aos-duration="1000"
                    data-aos="fade-up "
                  >
                   <span className="our" >Business </span><span className="ser">Analysis</span>{" "}
                   <span className="our" > Marketing</span> <span className="ser">Strategy</span>{" "}
                   <span className="our"> Operational </span><span className="ser" >Strategy</span>
                  </h1>

                  <p
                    className="contents"
                    data-aos-delay="800"
                    data-aos-duration="1000"
                    data-aos="fade-up"
                  >
                    At Conducting comprehensive evaluations of businesses and
                    collecting vital information is pivotal in aiding companies
                    to recognize and tackle their growth opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </section>

      <section className="FONTSS">
        <section className="banner1">
          <div className="container ">
            <h2
              className="is "
              data-aos-delay="800"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              {" "}
              <span className="our" >Business </span> <span className="ser">analysis</span>
            </h2>
            <h5
              className="at"
              data-aos-delay="800"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              At Conducting thorough assessments of businesses and gathering
              essential information is a crucial step in helping companies to
              identify and address their growth By analyzing this data, we
              provide valuable insights and recommendations to help businesses
              make informed decisions and improve their overall performance.
            </h5>
          </div>
          <section className="read">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="sec1 "
                    style={{ fontFamily: "'SuisseIntl', sans-serif" }}
                  >
                    <h5
                      className="problem1 "
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                     <span className="our">PROBLEM</span> <span className="ser">IDEFICATION</span> 
                    </h5>
                    <p
                      className="PARAA1 text"
                      style={{ fontFamily: "'SuisseIntl', sans-serif" }}
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                      {" "}
                      In our approach to addressing business challenges, we
                      leverage surveys as a powerful tool for gathering
                      invaluable insights into your customer demographics and
                      preferences. By delving deep into this data, we aim to
                      provide you with a comprehensive understanding of your
                      target audience.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="sec1">
                    <h5
                      className="problem2"
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                     <span className="our"> TRENDING</span> <span className="ser">ALIGNING</span>
                    </h5>
                    <p
                      className="PARAA2  text"
                      style={{ fontFamily: "'SuisseIntl', sans-serif" }}
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                      We improve the service based on what customers want and
                      what's popular in the market.At Trend Aligning, we
                      continuously enhance our services by aligning with
                      customer preferences and market trends. Our focus is on
                      delivering what our customers desire and staying ahead of
                      market demands.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="sec1">
                    <h5
                      className="problem3"
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                     <span className="our" >SWOT </span><span className="ser">ANALYSIS</span>
                    </h5>
                    <p
                      className="PARAA3  text"
                      style={{ fontFamily: "'SuisseIntl', sans-serif" }}
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                      {" "}
                      SWOT analysis is a strategic planning tool used to
                      evaluate the Strengths, Weaknesses, Opportunities, and
                      Threats involved in a project or business venture. It
                      helps organizations gain insights into their internal and
                      external factors, enabling informed decision-making and
                      strategic planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section
          className="hero1"
          style={{
            backgroundImage: `url(${MSBG})`,
            fontFamily: '"Roboto", "sans-serif"',
          }}
        >
          <div className="contents1s ser">
            <div className="side">
              <h1
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos="fade-up"
              >
               <span className="our"> MARKETING</span> <span className="ser">STRATEGY</span>
              </h1>
            </div>
            <div className="contents2s">
              <h1
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos="fade-up"
              >
                {" "}
              </h1>
            </div>
          </div>
          <p> </p>
        </section>
        <section className="yellobanner">
          <div className="row">
            <div className="col-lg-7">
              <p
                className="assist"
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos="fade-up"
              >
                {" "}
                We assist businesses in raising awareness about their products
                or services. We employ intelligent marketing strategies,
                including advertising, social media campaigns, and website
                enhancements, to increase their visibility among target
                audiences.
              </p>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </section>
        <section className="banner1">
          <div className="container">
            <h2
              className="is"
              data-aos-delay="800"
              data-aos-duration="1000"
              data-aos="fade-up "
            >
              {" "}
             <span className="our" >Marketing </span><span  style={{color:'white'}}>strategy</span>
            </h2>
            <h5
              className="at"
              data-aos-delay="800"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              {" "}
              We assist businesses in raising awareness about their products or
              services. We employ intelligent marketing strategies, including
              advertising, social media campaigns, and website enhancements, to
              increase their visibility among target audiences.
            </h5>
          </div>
          <section className="read">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="sec1"
                    style={{ fontFamily: "'SuisseIntl', sans-serif" }}
                  >
                    <h5
                      className="problem1 "
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                     <span className="our" >SOCIALMEDIA</span> <span className="ser" > PROMOTION</span>
                    </h5>
                    <p
                      className="PARAA1 text"
                      style={{ fontFamily: "'SuisseIntl', sans-serif" }}
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                      {" "}
                      Our social media strategy goes beyond mere promotion. It's
                      about creating meaningful connections. By utilizing
                      eye-catching posters and engaging videos supplemented with
                      trending hashtags, we actively seek out and captivate
                      potential customers across various platforms such as
                      Instagram, YouTube, and more.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="sec1">
                    <h5
                      className="problem2"
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                     <span className="our"> TECHNOLOGICAL</span> <span className="ser">ADOPTION</span>
                    </h5>
                    <p
                      className="PARAA2 text"
                      style={{ fontFamily: "'SuisseIntl', sans-serif" }}
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                      Embracing technological adoption signifies the integration
                      of innovative tools and systems to optimize operational
                      efficiency and effectiveness within organizations. By
                      strategically incorporating new technologies, businesses
                      can streamline processes, boost productivity, and stay
                      ahead in today's rapidly evolving digital landscape.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="sec1">
                    <h5
                      className="problem3"
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                     <span className="our"> FINICIAL</span> <span className="ser">MANAGEMENT</span> 
                    </h5>
                    <p
                      className="PARAA3 text"
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                      {" "}
                      We offer comprehensive support by identifying optimal
                      financial management solutions and fostering collaborative
                      partnerships to propel businesses towards unprecedented
                      growth and success. Through strategic guidance and
                      tailored recommendations, we empower organizations to
                      reach new heights and realize their full potential in
                      today's dynamic marketplace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* operational page */}
        <section
          className="hero1"
          style={{
            backgroundImage: `url(${vv})`,
            fontFamily: '"Roboto", "sans-serif"',
          }}
        >
          <div className="side">
            <div className="contents1s">
              <h1
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos="fade-up"
              >
               <span className="our"> OPERATIONAL </span><span style={{ color: "white" }}>STRATEGY</span>{" "}
              </h1>
            </div>

            <div className="contents23s">
              <h1
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos="fade-up"
              ></h1>
            </div>
          </div>
          <p> </p>
        </section>
        <section className="yellobanner">
          <div className="row">
            <div className="col-lg-7">
              <p
                className="assist"
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos="fade-up"
              >
                {" "}
                Assisting businesses to reach optimal operational efficiency is
                our speciality. Using technology to improve workflow, developing
                leadership skills, and improving staff training are all included
                in our comprehensive help. Additionally, we place a high
                priority on creating a warm and inviting environment for our
                clients and optimising their entire experience.
              </p>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </section>
        <section className="banner1">
          <div className="container">
            <h2
              className="is"
              data-aos-delay="800"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              {" "}
             <span className="our">Operational</span> <span className="ser"> strategy</span>
            </h2>
            <h5
              className="at "
              data-aos-delay="800"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              {" "}
              Assisting businesses to reach optimal operational efficiency is
              our speciality. Using technology to improve workflow, developing
              leadership skills, and improving staff training are all included
              in our comprehensive help. Additionally, we place a high priority
              on creating a warm and inviting environment for our clients and
              optimising their entire experience.
            </h5>
          </div>
          <section className="read">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="sec1"
                    style={{ fontFamily: "'SuisseIntl', sans-serif" }}
                  >
                    <h5
                      className="problem1"
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                      <span className="our">CUSTOMER </span><span className="ser">RELATIONSHIP{" "}</span>
                    </h5>
                    <p
                      className="PARAA1 text"
                      style={{ fontFamily: "'SuisseIntl', sans-serif" }}
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up "
                    >
                      {" "}
                      At the heart of modern business practices lies Customer
                      Relationship Management (CRM), an integrated approach
                      merging strategic methodologies with cutting-edge
                      technology. By meticulously managing and enhancing
                      customer interactions, CRM not only prioritizes
                      satisfaction and cultivates loyalty but also lays the
                      foundation for long-term business sustainability and
                      success.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="sec1">
                    <h5
                      className="problem2"
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                     <span className="our">TECHNOLOGICAL</span> <span className="ser">ADOPTION</span> 
                    </h5>
                    <p
                      className="PARAA2 text"
                      style={{ fontFamily: "'SuisseIntl', sans-serif" }}
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                      Embracing technological adoption signifies the integration
                      of innovative tools and systems to optimize operational
                      efficiency and effectiveness within organizations. By
                      strategically incorporating new technologies, businesses
                      can streamline processes, boost productivity, and stay
                      ahead in today's rapidly evolving digital landscape.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="sec1">
                    <h5
                      className="problem3"
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                     <span className="our" >FINICIA</span>L <span className="ser">MANAGEMENT</span>
                    </h5>
                    <p
                      className="PARAA3 text"
                      style={{ fontFamily: "'SuisseIntl', sans-serif" }}
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos="fade-up"
                    >
                      {" "}
                      We offer comprehensive support by identifying optimal
                      financial management solutions and fostering collaborative
                      partnerships to propel businesses towards unprecedented
                      growth and success. Through strategic guidance and
                      tailored recommendations, we empower organizations to
                      reach new heights and realize their full potential in
                      today's dynamic marketplace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      </section>
    </>
  );
};
export default Strategy;
