import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
// import Moving from "../moving/Moving";

const VIDEO_PATH =
  "https://www.youtube.com/embed/28Rto9JjTCA?si=VC09FW8uiAAJU6Wp";

const Videos = () => {
  const [activeButton, setActiveButton] = useState("");
  const location = useLocation();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="bggg ui">
        <div className="phone">
          <ul className="list-unstyled">
            <li>
              <Link
                to="/Firstpage"
                className="gaaayu"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                LOGO
              </Link>
            </li>
            <li>
              <Link
                to="/Secondpage"
                className="gaaayu"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                BANNERS
              </Link>
            </li>
            <li>
              <Link
                to="/Videos"
                className="gaaayu"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                VIDEOS
              </Link>
            </li>
          </ul>
        </div>

        <div className="work run">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 work1 top3">
                <Link to="/Firstpage">
                  <button
                    className={
                      location.pathname === "/Firstpage"
                        ? "btn-dark glow-on-clickr active"
                        : "btn-dark glow-on-clickr"
                    }
                    onClick={() => handleButtonClick("LOGO")}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    LOGO
                  </button>
                </Link>
                <Link to="/Secondpage">
                  <button
                    className={
                      location.pathname === "/Secondpage"
                        ? "btn-dark glow-on-click active"
                        : "btn-dark glow-on-click"
                    }
                    onClick={() => handleButtonClick("BANNERS")}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    BANNERS
                  </button>
                </Link>
                <Link to="/Videos">
                  <button
                    className={
                      location.pathname === "/Videos"
                        ? "btn-dark glow-on-click active"
                        : "btn-dark glow-on-click"
                    }
                    onClick={() => handleButtonClick("VIDEOS")}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    VIDEOS
                  </button>
                </Link>
              </div>
              <div className="col-lg-10  topp3">
                <div className="row ban-home mt-4">
                  <div className="col-md-6">
                    <ReactPlayer
                      url={VIDEO_PATH}
                      controls={true}
                      className="img-fluid ban-image"
                      width={500}
                      height={280}
                    />
                  </div>
                  <div className="col-md-6 bbb">
                    <ReactPlayer
                      url={VIDEO_PATH}
                      controls={true}
                      className="img-fluid ban-image"
                      width={500}
                      height={280}
                    />
                  </div>
                </div>
                <div className="row ban-home bbb">
                  <div className="col-md-6">
                    <ReactPlayer
                      url={VIDEO_PATH}
                      controls={true}
                      className="img-fluid ban-image"
                      width={500}
                      height={280}
                    />
                  </div>
                  <div className="col-md-6 bbb">
                    <ReactPlayer
                      url={VIDEO_PATH}
                      controls={true}
                      className="img-fluid ban-image"
                      width={500}
                      height={280}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
