import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import background from "../asserts/service/service-bg-1.avif";
import "../service/service.css";

const HeroSection = () => {
  return (
    <>
      <div className="service">
        <section
          className="bgimage"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="AppHead">
            <div className="container">
              <h1 className="AppHead1">
                APP <span className="app-head-sub">DEVELOPMENT</span>
              </h1>
            </div>
          </div>
        </section>
        {/* <section
        style={{
          backgroundColor: "black",
        }}
      >
        <p className="section2-service">
          App Development services refer to the professional and specialized
          offerings provided by software development companies or individual
          developers to create mobile applications for various platforms, such
          as Android, iOS, and cross-platform environments. These services
          encompass the entire process of turning app ideas into fully
          functional and user-friendly applications that cater to specific
          business needs or target audiences. App Development services refer to
          the professional and specialized offerings provided by software
          development companies or individual developers to create mobile
          applications for various platforms, such as Android, iOS, and
          cross-platform environments.
        </p>
        <p className="section2-service2">
          App Development services refer to the professional and specialized
          offerings provided by software development companies or individual
          developers to create mobile applications for various platforms, such
          as Android, iOS, and cross-platform environments. These services
          encompass the entire process of turning app ideas into fully
          functional and user-friendly applications that cater to specific
          business needs or target audiences.
        </p>
      </section> */}
        <section className="service-section">
          <div class="elementorcontent">
            <h2 class="elementortitle">
              Service
              <span style={{ color: "rgb(126,217,87)" }}> Benefits</span>{" "}
            </h2>
            <p class="elementordescription">
              This allows us to create a design strategy that not only sets you
              apart from the competition but also drives business results. Our
              design team is adept at using the latest web design technologies
              and trends to ensure your website is not just a digital
              placeholder, but a powerful tool for your business.{" "}
            </p>
          </div>

          <div class="ele">
            <div class="ele1">
              {" "}
              <div class="elementocontainer">
                <ul class="elementitems">
                  <li class="elementoritem">
                    <span class="elementoricon">
                      <FontAwesomeIcon
                        icon={faServicestack}
                        aria-hidden="true"
                      />{" "}
                    </span>
                    <span class="elementortext">
                      A unique website that differentiates you from the
                      competition.
                    </span>
                  </li>
                  <li class="elementoritem">
                    <span class="elementoricon">
                      <FontAwesomeIcon
                        icon={faServicestack}
                        aria-hidden="true"
                      />{" "}
                    </span>
                    <span class="elementortext">
                      Improved user experience leading to higher customer
                      satisfaction.
                    </span>
                  </li>
                  <li class="elementoritem">
                    <span class="elementoricon">
                      <FontAwesomeIcon
                        icon={faServicestack}
                        aria-hidden="true"
                      />{" "}
                    </span>
                    <span class="elementortext">
                      Seamless integration with social media platforms for
                      increased engagement.
                    </span>
                  </li>
                  <li class="elementoritem">
                    <span class="elementoricon">
                      <FontAwesomeIcon
                        icon={faServicestack}
                        aria-hidden="true"
                      />{" "}
                    </span>
                    <span class="elementortext">
                      Seamless integration with social media platforms for
                      increased engagement.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="ele1">
              {" "}
              <a class="servicelist">
                <div className="servicelist-head">
                  <h1>OUR SERVICES</h1>
                  <ul className="servicelist-ul">
                    <li className="servicelist-li">
                      <span class="elementoricon">
                        <FontAwesomeIcon
                          icon={faServicestack}
                          aria-hidden="true"
                        />{" "}
                      </span>
                      WEB DEVELOPMENT
                    </li>
                    <li className="servicelist-li">
                      {" "}
                      <span class="elementoricon">
                        <FontAwesomeIcon
                          icon={faServicestack}
                          aria-hidden="true"
                        />{" "}
                      </span>
                      APP DEVELOPMENT
                    </li>
                    <li className="servicelist-li">
                      {" "}
                      <span class="elementoricon">
                        <FontAwesomeIcon
                          icon={faServicestack}
                          aria-hidden="true"
                        />{" "}
                      </span>
                      DIGITAL MARKETING
                    </li>
                    <li className="servicelist-li">
                      {" "}
                      <span class="elementoricon">
                        <FontAwesomeIcon
                          icon={faServicestack}
                          aria-hidden="true"
                        />{" "}
                      </span>
                      CORPORATE VIDEO
                    </li>
                    <li className="servicelist-li">
                      {" "}
                      <span class="elementoricon">
                        <FontAwesomeIcon
                          icon={faServicestack}
                          aria-hidden="true"
                        />{" "}
                      </span>
                      BUSINESS DEVELOPMENT
                    </li>
                    <li className="servicelist-li">
                      {" "}
                      <span class="elementoricon">
                        <FontAwesomeIcon
                          icon={faServicestack}
                          aria-hidden="true"
                        />{" "}
                      </span>
                      SEARCH ENGINE OPTIMIZATION
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>

          {/* <div class="elementor-element ">
          <div class="elementorcontainer">
            <p>
              But our job doesn’t end with the launch of your website. We
              provide ongoing maintenance and support services to ensure your
              site remains updated, secure, and performing at its best. Be it
              integrating new features, updating content, or troubleshooting,
              we’ve got you covered.
            </p>
            <p>
              Let us create a website that not only tells your brand story, but
              also drives growth and elevates your online presence. Embrace the
              power of an outstanding web presence with our Web Design
              Service.&nbsp;
            </p>{" "}
          </div>
        </div> */}
        </section>
        <section className="cardservice-image">
          <div className="container">
            <div class="cardsservice">
              <ul class="cards1">
                <li class="cards__item1">
                  <div class="cardservice">
                    <div class="card__content">
                      <div class="card__title">Flex</div>
                      <p class="card__text">
                        This is the shorthand for flex-grow, flex-shrink and
                        flex-basis combined. The second and third parameters
                        (flex-shrink and flex-basis) are optional. Default is 0
                        1 auto.{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li class="cards__item1">
                  <div class="cardservice">
                    <div class="card__content">
                      <div class="card__title">Flex Grow</div>
                      <p class="card__text">
                        This defines the ability for a flex item to grow if
                        necessary. It accepts a unitless value that serves as a
                        proportion. It dictates what amount of the available
                        space inside the flex container the item should take up.
                      </p>
                    </div>
                  </div>
                </li>

                <li class="cards__item1">
                  <div class="cardservice">
                    <div class="card__content">
                      <div class="card__title">Flex Shrink</div>
                      <p class="card__text">
                        This defines the ability for a flex item to shrink if
                        necessary. Negative numbers are invalid.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="cards__item1">
                  <div class="cardservice">
                    <div class="card__content">
                      <div class="card__title">Flex</div>
                      <p class="card__text">
                        This is the shorthand for flex-grow, flex-shrink and
                        flex-basis combined. The second and third parameters
                        (flex-shrink and flex-basis) are optional. Default is 0
                        1 auto.{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li class="cards__item1">
                  <div class="cardservice">
                    <div class="card__content">
                      <div class="card__title">Flex Basis</div>
                      <p class="card__text">
                        This defines the default size of an element before the
                        remaining space is distributed. It can be a length (e.g.
                        20%, 5rem, etc.) or a keyword. The auto keyword means
                        "look at my width or height property."
                      </p>
                    </div>
                  </div>
                </li>
                <li class="cards__item1">
                  <div class="cardservice">
                    <div class="card__content">
                      <div class="card__title">Flex Grow</div>
                      <p class="card__text">
                        This defines the ability for a flex item to grow if
                        necessary. It accepts a unitless value that serves as a
                        proportion. It dictates what amount of the available
                        space inside the flex container the item should take up.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
