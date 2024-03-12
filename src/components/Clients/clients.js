import React, { useEffect, useState } from "react";
// import firstimage from "../asserts/360_F_265578022_3NbVGd1OZntLK46hjmv8EUisNYA3SqiM-removebg-preview-transformed.png";
// import secondimage from "../asserts/360_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B-removebg-preview.png";
// import thirdimage from "../asserts/images-removebg-preview-YoS47PuGp-transformed.png";

import firstimage from "../asserts/client/360-company.png";
import secondimage from "../asserts/client/360-triangle.png";
import thirdimage from "../asserts/client/slack img.png";
import clientimage from "../asserts/client/clientimage.png";
import cardimage from "../asserts/client/girlimg.jpg";

import "react-html5video/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import forthimage from "../asserts/luxury-royal-wing-letter-hd-crest-gold-color-logo-victory-logo-crest-logo-wing-logo-logo-template-vector-removebg-preview-transformed.png";
import "../Clients/clients.css";

function ImageGallery() {
  const [position, setPosition] = useState(1);
  function moveToNextCard() {
    setPosition((prevPosition) => (prevPosition % 5) + 1);
  }
  useEffect(() => {
    AOS.init();
    const interval = setInterval(moveToNextCard, 5000); // Move every 5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="client-page">
      <div className="client-page-top1">
        <div className="row ">
          <div className="col-lg-6">
            <div className="client-head1">
              <h1
                className="client-titile"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Our Clients
              </h1>
            </div>
            <div className="client-head1">
              <p
                className="client-about "
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Our unique offshore delivery model is fueled by our single
                minded passion to achieve higher levels of client satisfaction
                through flexible, cost-effective and innovative IT solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            {
              <img
                src={clientimage}
                className="client-head-image"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="1500"
                data-aos-easing="ease-in-sine"
                width="70%"
                alt="Service"
              />
            }
          </div>
        </div>
      </div>

      <div className="container image-galery-1">
        <div className="img-client-head">
          <h1 data-aos="zoom-in" data-aos-duration="1500">
            TAKE A LOOK AT OUR CLIENTS
          </h1>
        </div>
        <div className="img-clientpage">
          <img
            src={firstimage}
            alt="Herd of horses"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={secondimage}
            alt="Baby Elephant"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={thirdimage}
            alt="Koi Fish"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={firstimage}
            alt="Herd of horses"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={secondimage}
            alt="Baby Elephant"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={thirdimage}
            alt="Koi Fish"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={firstimage}
            alt="Herd of horses"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={secondimage}
            alt="Baby Elephant"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={thirdimage}
            alt="Koi Fish"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={firstimage}
            alt="Herd of horses"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={secondimage}
            alt="Baby Elephant"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={thirdimage}
            alt="Koi Fish"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={firstimage}
            alt="Herd of horses"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={secondimage}
            alt="Baby Elephant"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={thirdimage}
            alt="Koi Fish"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={firstimage}
            alt="Herd of horses"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={secondimage}
            alt="Baby Elephant"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={thirdimage}
            alt="Koi Fish"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={firstimage}
            alt="Ibis Bird"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={firstimage}
            alt="Lemur"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={secondimage}
            alt="Berber Monkeys"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={firstimage}
            alt="Herd of horses"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={secondimage}
            alt="Baby Elephant"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={thirdimage}
            alt="Koi Fish"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={firstimage}
            alt="Ibis Bird"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={firstimage}
            alt="Lemur"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={secondimage}
            alt="Berber Monkeys"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={firstimage}
            alt="Herd of horses"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={secondimage}
            alt="Baby Elephant"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={thirdimage}
            alt="Koi Fish"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={firstimage}
            alt="Ibis Bird"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={firstimage}
            alt="Lemur"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <img
            src={secondimage}
            alt="Berber Monkeys"
            className="galery-image1"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
        </div>
      </div>

      <div className="client1-page">
        <div class="grid-container">
          <div class="grid-item  client-head-topic">
            <h1
              className="client-head2"
              data-aos="zoom-in-right"
              data-aos-duration="1500"
            >
              What Our Clients Say
            </h1>
            <h3
              className="client-head3"
              data-aos="zoom-in-right"
              data-aos-duration="1500"
            >
              95.5% of our clients would recommend our services to others.
            </h3>
          </div>
          <div class="grid-item ">
            {" "}
            <div className="client-top3-gaayu">
              <input type="radio" name="position" checked={position === 1} />
              <input type="radio" name="position" checked={position === 2} />
              <input type="radio" name="position" checked={position === 3} />
              <input type="radio" name="position" checked={position === 4} />
              <input type="radio" name="position" checked={position === 5} />
              <div id="carousel">
                <div class="item">
                  <div className="c">
                    {<img src={cardimage} alt="John" className="card-image" />}

                    <h1 className="client-name">John Doe</h1>
                    <p className="client-title">CEO & Founder, Example</p>
                    <p className="client-discription">
                      Consumers use customer reviews during the buyer's journey
                      to understand how your product works and whether it’s
                      worth the investment.
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div className="c">
                    {<img src={cardimage} alt="John" className="card-image" />}

                    <h1 className="client-name">John Doe</h1>
                    <p className="client-title">CEO & Founder, Example</p>
                    <p className="client-discription">
                      Consumers use customer reviews during the buyer's journey
                      to understand how your product works and whether it’s
                      worth the investment.
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div className="c">
                    {<img src={cardimage} alt="John" className="card-image" />}

                    <h1 className="client-name">John Doe</h1>
                    <p className="client-title">CEO & Founder, Example</p>
                    <p className="client-discription">
                      Consumers use customer reviews during the buyer's journey
                      to understand how your product works and whether it’s
                      worth the investment.
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div className="c">
                    {<img src={cardimage} alt="John" className="card-image" />}

                    <h1 className="client-name">John Doe</h1>
                    <p className="client-title">CEO & Founder, Example</p>
                    <p className="client-discription">
                      Consumers use customer reviews during the buyer's journey
                      to understand how your product works and whether it’s
                      worth the investment.
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div className="c">
                    {<img src={cardimage} alt="John" className="card-image" />}

                    <h1 className="client-name">John Doe</h1>
                    <p className="client-title">CEO & Founder, Example</p>
                    <p className="client-discription">
                      Consumers use customer reviews during the buyer's journey
                      to understand how your product works and whether it’s
                      worth the investment.
                    </p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="kkkkk">
        <div class="row">
          <div class="column">
            <div class="card">
              <img src={cardimage} />
              <p>Some text</p>
              <p>Some text</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3>Card 1</h3>
              <p>Some text</p>
              <p>Some text</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ImageGallery;
