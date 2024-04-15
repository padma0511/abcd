
import React, { useEffect,useState } from 'react';
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import Carousell from '../carousel/Carousel';
import download from"../asserts/firstpage/download.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import A2 from "../asserts/firstpage/A2.jpg";
// import workbg1 from "../asserts/firstpage/workbg1.jpeg";
import work1 from "../asserts/firstpage/work1.jpg";
import pic1 from"../asserts/firstpage/pic1.png";
import logoo from "../asserts/firstpage/logoo.jpeg";
import no from"../asserts/firstpage/no.png";

import workbg2 from"../asserts/firstpage/workbg2.png";
import phone from"../asserts/firstpage/phone.png";
import icon1 from "../asserts/firstpage/arasan .jpg";
import icon2 from "../asserts/firstpage/logo1.jpg";
import icon3 from "../asserts/firstpage/logo2.jpg";
import icon4 from "../asserts/firstpage/logo3.webp";
import icon5 from "../asserts/firstpage/logo4.webp";
const Firstpage = () => {
  const [playing, setPlaying] = useState(true);
  const VIDEO_PATH =
  "https://www.youtube.com/embed/28Rto9JjTCA?si=VC09FW8uiAAJU6Wp";
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  const defaultImageJSX = (
    <div className="boxes">
      <img
        src={"phone"}
        className="mobile-img animated"
        
        alt=""
      />
    </div>
  );
  const defaultContent = (
    <div>
      <h1 className="apph1 our ">OUR <span className="ser"> APPLICATIONS</span></h1>
      <p className="develoment-para  ">In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information.</p>
      <button className="btn-app blue-gradient">View</button>
    </div>
  );

 
  const [AcctiveContent, setAcctiveContent] = useState( "WHATSAPP Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
  const [acctiveImage, setAcctiveImage] = useState(icon1);


  const [activeImage, setActiveImage] = useState(defaultImageJSX,icon1); // Initially set to workbg
  const [activeContent, setActiveContent] = useState(<p className="develoment-para ">
  <h1 className="apph1 our">OUR <span className="ser"> APPLICATIONS</span></h1>
  In the online world, both corporate and consumer communications need content to be effective and stay relevant.
  Through content, individuals discover, take in, and engage with brand information.
  <button className="btn-app blue-gradient">View</button>
  <div className="boxes">
    <img src={download} className="mobile-img animated" style={{}} alt="" />
  </div>
</p>);


  const handleImageClick = (imageSrc, content ,Contents) => {
    setActiveImage(imageSrc);
    setActiveContent(content);
    setAcctiveContent(Contents)
  };

  useEffect(() => {
    const slidersecond = document.querySelector(".slidersecond");

    function activate(e) {
      const items = document.querySelectorAll(".itemsecond");
      e.target.matches(".next") && slidersecond.append(items[0]);
      e.target.matches(".prev") && slidersecond.prepend(items[items.length - 1]);
    }

    document.addEventListener("click", activate, false);

    return () => {
      document.removeEventListener("click", activate, false);
    };
  }, []);
 

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // const [activeHead, setActiveHead] = useState("");
  // const [activeImage, setActiveImage] = useState(
  //   icon1,
  //   icon2,
  //   icon3,
  //   icon4,
  //   icon5
  // ); // Initially set to workbg
  // const [activeContent, setActiveContent] = useState("");

  // const [activePlayStoreLink, setActivePlayStoreLink] = useState("");

  // const handleImageClick = (imageSrc, head, content, playStoreLink) => {
  //   setActiveImage(imageSrc);
  //   setActiveHead(head);
  //   setActiveContent(content);
  //   setActivePlayStoreLink(playStoreLink);
  // };

  


  return (
    
    <>
    
    <section
          className="workbg"
          style={{
            backgroundImage:`url(${A2})`,
          }}
        >
          <div className="workHead">
            <div className="container">
              <h1 className="workHead1" style={{ textAlign: "center" }}>
              <span className="our" >OUR </span><span className="work-head-sub ser">WORKS</span>
              </h1>
            </div>
          </div>
        </section>

          <section className="page">





</section>
         

{<Carousell/>}

<section className="card-mobile-work">
          <section className="app-mobileview">
            <article className="articlecard">
              <figure>
                <img alt="" src={acctiveImage} />
              </figure>
              ​
              <div>
                <h1></h1>
                <p>{AcctiveContent}</p>
                <div className="button-work-card">
                  <button
                    className="view-button"
                    // onClick={() => ()}
                  >
                    {/* <FontAwesomeIcon icon={faGooglePlay} /> */}
                    PLAYSTORE
                  </button>
                </div>
              </div>
            </article>
          </section>
          <div className="the-5">
            <ul className="">
            <li>
  <h4 id="whatsappHeader" onclick="toggleParagraph()">WhatsApp</h4>
  <p id="whatsappText" style={{ display: 'none' }}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  </p>
  <button
    onClick={() =>
      handleImageClick(
        icon1,
        "WHATSAPP Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "YOUR_PLAY_STORE_LINK_1"
      )
    }
  >
    <img src={icon1} className="bbbg" alt="work2"></img>
  </button>
</li>


              <li>
                <button
                  onClick={() =>
                    handleImageClick(
                      icon2,
                      "INSTAGRAM Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                      "https://play.google.com/store/apps/details?id=com.instagram.android"
                    )
                  }
                >
                  <img src={icon2} className="bbbg" alt="work2"></img>
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleImageClick(
                      icon3,
                      "INSTAGRAM Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
                      "https://play.google.com/store/apps/details?id=com.whatsapp"
                    )
                  }
                >
                  <img src={icon3} className="bbbg" alt="work2"></img>
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleImageClick(
                      icon4,
                      "INSTAGRAM Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                      "https://play.google.com/store/apps/details?id=com.instagram.android"
                    )
                  }
                >
                  <img src={icon4} className="bbbg" alt="work2"></img>
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleImageClick(
                      icon5,
                      "INSTAGRAM Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                      "https://play.google.com/store/apps/details?id=com.whatsapp"
                    )
                  }
                >
                  <img src={icon5} className="bbbg" alt="work2"></img>
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleImageClick(
                      icon1,
                      "INSTAGRAM Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                      "https://play.google.com/store/apps/details?id=com.instagram.android"
                    )
                  }
                >
                  <img src={icon1} className="bbbg" alt="work2"></img>
                </button>
              </li>

              {/* Add more buttons for other images */}
            </ul>
          </div>
        </section>


        {/* video section start */}
        <div className="V-page">
        <main className="">
  <ul className="slidersecond">
    <li
      className="itemsecond"
      style={{
        backgroundImage:
          'url("https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg")'
      }}
    >
      <div className="contentV">
        <h2 className="title">"Lossless Youths"</h2>
        <p className="description">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga
          voluptatum, iure corporis inventore praesentium nisi. Id laboriosam
          ipsam enim.{" "}
        </p>
        {/* <button className="more">Read More</button> */}
      </div>
    </li>
    <li
      className="itemsecond"
      style={{ backgroundImage: 'url("https://i.redd.it/tc0aqpv92pn21.jpg")' }}
    >
      <div className="contentV">
        <h2 className="title">"Estrange Bond"</h2>
        <p className="description">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga
          voluptatum, iure corporis inventore praesentium nisi. Id laboriosam
          ipsam enim.{" "}
        </p>
        {/* <button className="more">Read More</button> */}
      </div>
    </li>
    <li
      className="itemsecond"
      style={{
        backgroundImage:
          'url("https://wharferj.files.wordpress.com/2015/11/bio_north.jpg")'
      }}
    >
      <div className="contentV">
        <h2 className="title">"The Gate Keeper"</h2>
        <p className="description">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga
          voluptatum, iure corporis inventore praesentium nisi. Id laboriosam
          ipsam enim.{" "}
        </p>
        {/* <button className="more">Read More</button> */}
      </div>
    </li>
    <li
      className="itemsecond"
      style={{
        backgroundImage: 'url("https://images7.alphacoders.com/878/878663.jpg")'
      }}
    >
      <div className="contentV">
        <h2 className="title">"Last Trace Of Us"</h2>
        <p className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga
          voluptatum, iure corporis inventore praesentium nisi. Id laboriosam
          ipsam enim.
        </p>
        {/* <button className="more">Read More</button> */}
      </div>
    </li>
    <li
      className="itemsecond"
      style={{
        backgroundImage:
          'url("https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg")'
      }}
    >
      <div className="contentV">
        <h2 className="title">"Urban Decay"</h2>
        <p className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga
          voluptatum, iure corporis inventore praesentium nisi. Id laboriosam
          ipsam enim.
        </p>
        {/* <button className="more">Read More</button> */}
      </div>
    </li>
    <li
      className="itemsecond"
      style={{
        backgroundImage:
          'url("https://da.se/app/uploads/2015/09/simon-december1994.jpg")'
      }}
    >
      <div className="contentV">
        <h2 className="title">"The Migration"</h2>
        <p className="description">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga
          voluptatum, iure corporis inventore praesentium nisi. Id laboriosam
          ipsam enim.{" "}
        </p>
        {/* <button className="more">Read More</button> */}
      </div>
    </li>
  </ul>
  <nav className="nav-side">
    
    <FontAwesomeIcon icon={faArrowLeft} className="btn-Vpage next" />
    <FontAwesomeIcon icon={faArrowRight} className="btn-Vpage prev" />
</nav>
</main>
</div>

        
        {/* video section end  */}

        {/* circle 1 app section  */}

       {/* <section className="WebWork">
     <section className="workpage-section2">
          <h2 className="video-head">OUR APPLICATIONS</h2>
          <p className="video-para">
            {" "}
            Video upload is the process of transferring video files from a local
            device to an online platform or server. It involves selecting the
            desired video file, initiating the upload process, and waiting for
            the file to be transferred and processed.
          </p>
        </section>
        <section className="appp-section">
    <div className="container ">
      <div className="row">
        <div className="col-lg-6">
        <div className="content">{activeContent}
        <h5></h5>
        <p className="development-p">
        
        </p>
        </div>
         
        </div>
        <div className="col-lg-6">
          <img src={activeImage} className="bg11" alt="background"></img>
          
        </div>
      </div>
      </div>

      <div className="the-1 the2">
       
        <ul className="">
          
          <li>

            <button onClick={() => handleImageClick(phone,<p className="develoment-para "><h1 className="apph1 our">OUR <span className="ser"> APPLICATIONS</span></h1> In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. < button class="btn-app blue-gradient">View</button> <div className="boxes"><img
                        src={download}
                        className="mobile-img animated"
                        style={{
                          
                        }}
                        alt=""
                      /></div></p> )}
            >
              <div className="row">
               <img src={logoo} className="bbbg " alt="work1"></img> 
              </div>

            </button>
          </li>
          

          <li>
            <button onClick={() => handleImageClick(phone, <p className="develoment-para "><h1 className="apph1 our">OUR <span className="ser"> APPLICATIONS</span></h1> In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. < button class="btn-app blue-gradient">View</button> <div className="boxes"><img
                         src={download}
                         className="mobile-img animated"
                        style={{
                          
                        }}
                        alt=""
                      /></div></p>)}>
              <img src={workbg2} className="bbbg" alt="work2"></img>
            </button>
          </li>
          <li>
            <button onClick={() => handleImageClick(phone,<p className="develoment-para "><h1 className="apph1 our">OUR <span className="ser"> APPLICATIONS</span></h1> In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. < button class="btn-app blue-gradient">View</button> <div className="boxes"><img
                         src={download}
                         className="mobile-img animated"
                        style={{
                          
                        }}
                        alt=""
                      /></div></p>)}>
              <img src={logoo} className="bbbg" alt="work2"></img>
            </button>
          </li>
          <li>
            <button onClick={() => handleImageClick(phone, <p className="develoment-para "><h1 className="apph1 our">OUR <span className="ser"> APPLICATIONS</span></h1> In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. < button class="btn-app blue-gradient">View</button> <div className="boxes"><img
                         src={download}
                         className="mobile-img animated"
                        style={{
                        
                        }}
                        alt=""
                      /></div></p>)}>
              <img src={no} className="bbbg" alt="work2"></img>
            </button>
          </li>
          <li>
            <button onClick={() => handleImageClick(phone, <p className="develoment-para "><h1 className="apph1 our">OUR <span className="ser"> APPLICATIONS</span></h1> In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. < button class="btn-app blue-gradient">View</button> <div className="boxes"><img
                         src={download}
                         className="mobile-img animated"
                        style={{
                          
                        }}
                        alt=""
                      /></div></p>)}>
              <img src={pic1} className="bbbg" alt="work2"></img>
            </button>
          </li>
          <li>
            <button onClick={() => handleImageClick(phone, <p className="develoment-para "><h1 className="apph1 our">OUR <span className="ser"> APPLICATIONS</span></h1> In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. < button class="btn-app blue-gradient">View</button> <div className="boxes"><img
                        src={download}
                        className="mobile-img animated"
                        style={{
                          

                        }}
                        alt=""
                      /></div></p>)}>
              <img src={workbg2} className="bbbg" alt="work2"></img>
            </button>
          </li>
          
         
        </ul>
      </div>
      </section>  
      </section>  */}
      <section className="WebWork1  WEBBWORK">
  <section className="workpage-section2">
    <h2 className="video-head">OUR APPLICATIONS</h2>
    <p className="video-para">
      {" "}
      Video upload is the process of transferring video files from a local
      device to an online platform or server. It involves selecting the
      desired video file, initiating the upload process, and waiting for
      the file to be transferred and processed.
    </p>
  </section>
    <section className="appp-section">
      <div className="container ">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">{activeContent}</div>
          </div>
          <div className="col-lg-6">
            <img src={activeImage} className="" alt="background" />
          </div>
        </div>
      </div>

      <div className="the-1 the2">
        <ul className="">
          <li>
            <button onClick={() => handleImageClick(phone, <p className="develoment-para "><h1 className="apph1 our">OUR <span className="ser"> APPLICATIONS</span></h1> In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. < button class="btn-app blue-gradient">View</button> <div className="boxes"><img src={download} className="mobile-img animated" style={{}} alt="" /></div></p> )}>
              <div className="row">
                <img src={logoo} className="bbbg " alt="work1"></img>
              </div>
            </button>
          </li>
          <li>
          <button onClick={() => handleImageClick(phone, <p className="develoment-para "><h1 className="apph1 our">OUR <span className="ser"> APPLICATIONS</span></h1> In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. < button class="btn-app blue-gradient">View</button> <div className="boxes"><img
                        src={download}
                        className="mobile-img animated"
                        style={{}} alt=""
                      /></div></p>)}>
            <img src={workbg2} className="bbbg" alt="work2"></img>
          </button>
        </li>
        <li>
          <button onClick={() => handleImageClick(phone,<p className="develoment-para "><h1 className="apph1 our">OUR <span className="ser"> APPLICATIONS</span></h1> In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. < button class="btn-app blue-gradient">View</button> <div className="boxes"><img
                      src={download}
                      className="mobile-img animated"
                      style={{}} alt=""
                    /></div></p>)}>
            <img src={logoo} className="bbbg" alt="work2"></img>
          </button>
        </li>
        <li>
          <button onClick={() => handleImageClick(phone, <p className="develoment-para "><h1 className="apph1 our">OUR <span className="ser"> APPLICATIONS</span></h1> In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. < button class="btn-app blue-gradient">View</button> <div className="boxes"><img
                        src={download}
                        className="mobile-img animated"
                        style={{}} alt=""
                      /></div></p>)}>
            <img src={no} className="bbbg" alt="work2"></img>
          </button>
        </li>
        <li>
          <button onClick={() => handleImageClick(phone, <p className="develoment-para "><h1 className="apph1 our">OUR <span className="ser"> APPLICATIONS</span></h1> In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. < button class="btn-app blue-gradient">View</button> <div className="boxes"><img
                        src={download}
                        className="mobile-img animated"
                        style={{}} alt=""
                      /></div></p>)}>
            <img src={pic1} className="bbbg" alt="work2"></img>
          </button>
        </li>
        <li>
          <button onClick={() => handleImageClick(phone, <p className="develoment-para "><h1 className="apph1 our">OUR <span className="ser"> </span></h1> In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. < button class="btn-app blue-gradient">View</button> <div className="boxes"><img
                      src={download}
                      className="mobile-img animated"
                      style={{}} alt=""
                    /></div></p>)}>
            <img src={workbg2} className="bbbg" alt="work2"></img>
          </button>
        </li>
        </ul>
      </div>
    </section>
</section>


      {/* circle 2 web sedction */}

      {/* <section className="S-work">
     <section className="workpage-section2">
          <h2 className="video-head">OUR WEBSITE</h2>
          <p className="video-para">
            {" "}
            Video upload is the process of transferring video files from a local
            device to an online platform or server. It involves selecting the
            desired video file, initiating the upload process, and waiting for
            the file to be transferred and processed.
          </p>
        </section>
    <div className="container u">
      <div className="row">
        <div className="col-lg-6">
        <img src={activeImage} className="bg1" alt="background"></img>
         
        </div>
        <div className="col-lg-6">
        <div className="content">{activeContent}
        <h5></h5>
        <p className="development-p">
        
        </p>
        </div>
          
        </div>
      </div>
      </div>

      <div className="the-1 the2">
       
        <ul className="">
          
          <li>

            <button onClick={() => handleImageClick(workbg1,<p className="develoment-p "><h1 className="app our">App <span className="our">Development</span></h1> "In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. Content, which is frequently the experience itself, directs consumers to brand experiences." <a href="#fakeLink" class="btn blue-gradient">View </a></p>   )}
            >
              <div className="row">
               <img src={workbg1} className="bbbg" alt="work1"></img> 
              </div>

            </button>
          </li>
          

          <li>
            <button onClick={() => handleImageClick(workbg2, <p className="develoment-p "><h1 className="app our">Site <span className="our">Development</span></h1> "In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. Content, which is frequently the experience itself, directs consumers to brand experiences." <a href="#fakeLink" class="btn blue-gradient">View </a></p>)}>
              <img src={workbg2} className="bbbg" alt="work2"></img>
            </button>
          </li>
          <li>
            <button onClick={() => handleImageClick(logoo, <p className="develoment-p "><h1 className="app our"><span className="our">Development</span></h1> "In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. Content, which is frequently the experience itself, directs consumers to brand experiences." <a href="#fakeLink" class="btn blue-gradient">View </a></p>)}>
              <img src={logoo} className="bbbg" alt="work2"></img>
            </button>
          </li>
          <li>
            <button onClick={() => handleImageClick(no, <p className="develoment-p "><h1 className="app our">Apps <span className="our"></span></h1> "In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. Content, which is frequently the experience itself, directs consumers to brand experiences." <a href="#fakeLink" class="btn blue-gradient">View </a></p>)}>
              <img src={no} className="bbbg" alt="work2"></img>
            </button>
          </li>
          <li>
            <button onClick={() => handleImageClick(pic1, <p className="develoment-p "><h1 className="app our">Logo <span className="our">t</span></h1> "In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. Content, which is frequently the experience itself, directs consumers to brand experiences." <a href="#fakeLink" class="btn blue-gradient">View </a></p>)}>
              <img src={pic1} className="bbbg" alt="work2"></img>
            </button>
          </li>
          <li>
            <button onClick={() => handleImageClick(workbg2, <p className="develoment-p "><h1 className="app our">Website <span className="our"></span></h1> "In the online world, both corporate and consumer communications need content to be effective and stay relevant. Through content, individuals discover, take in, and engage with brand information. Content, which is frequently the experience itself, directs consumers to brand experiences." <a href="#fakeLink" class="btn blue-gradient">View </a></p>)}>
              <img src={workbg2} className="bbbg" alt="work2"></img>
            </button>
          </li>
          
         
        </ul>
      </div>
      </section>  */}


        {/* <div class="owl-carousel owl-theme">
          <div class="item"></div>
          <div class="item">
            <h4>2</h4>
          </div>
          <div class="item">
            <h4>3</h4>
          </div>
          <div class="item">
            <h4>4</h4>
          </div>
          <div class="item">
            <h4>5</h4>
          </div>
          <div class="item">
            <h4>6</h4>
          </div>
          <div class="item">
            <h4>7</h4>
          </div>
          <div class="item">
            <h4>8</h4>
          </div>
          <div class="item">
            <h4>9</h4>
          </div>
          <div class="item">
            <h4>10</h4>
          </div>
          <div class="item">
            <h4>11</h4>
          </div>
          <div class="item">
            <h4>12</h4>
          </div>
        </div> */}
      
    {/* video carosoul */}
    
    
  
        
        
        
    </>
  );
};

export default Firstpage;
