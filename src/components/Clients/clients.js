import React, { useEffect, useState } from "react";

import firstimage from "../asserts/client/360-company.png";
import secondimage from "../asserts/client/360-triangle.png";
import thirdimage from "../asserts/client/slack img.png";
import clientbg from "../asserts/client/CLIENTBG.jpeg";
import cardimage from "../asserts/client/girlimg.jpg";

import "react-html5video/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

import "../Clients/clients.css";

function ImageGallery() {
  const [position, setPosition] = useState(1);
  function moveToNextCard() {
    setPosition((prevPosition) => (prevPosition % 5) + 1);
  }
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    setTouchEndX(event.changedTouches[0].clientX);
    handleGesture();
  };

  const handleGesture = () => {
    const deltaX = touchEndX - touchStartX;
    if (deltaX > 0) {
      // Swipe right
      handleManualScroll(position - 1);
    } else if (deltaX < 0) {
      // Swipe left
      handleManualScroll(position + 1);
    }
  };

  const handleManualScroll = (newPosition) => {
    document.documentElement.style.setProperty("--position", newPosition);
    setPosition(newPosition);
  };
  useEffect(() => {
    AOS.init();
    const interval = setInterval(moveToNextCard, 5000); // Move every 5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="client-page">
      <section
        className="clientbg"
        style={{
          backgroundImage: `url(${clientbg})`,
        }}
      >
        <div className="clientHead">
          <div className="container">
            <h1 className="clientHead1">
              CONTACT <span className="client-head-sub">US</span>
            </h1>
          </div>
        </div>
      </section>

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
        <div class="grid-container-CLIENT">
          <div class="grid-item-CLIENT  client-head-topic">
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
            <div
              className="client-top3-gaayu"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <input
                type="radio"
                name="position"
                checked={position === 1}
                onChange={() => handleManualScroll(1)}
              />
              <input
                type="radio"
                name="position"
                checked={position === 2}
                onChange={() => handleManualScroll(2)}
              />
              <input
                type="radio"
                name="position"
                checked={position === 3}
                onChange={() => handleManualScroll(3)}
              />
              <input
                type="radio"
                name="position"
                checked={position === 4}
                onChange={() => handleManualScroll(4)}
              />
              <input
                type="radio"
                name="position"
                checked={position === 5}
                onChange={() => handleManualScroll(5)}
              />
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
