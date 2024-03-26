import React from "react";
import Slider from "react-slick";
import { Link,useLocation} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Move.css";
function AutoPlay() {
    const location = useLocation();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
   
     
      <div className="slider-container mt-5 ">
      <Slider {...settings} className="jaja">
     
          
            <div className="slide">
            <Link to="/" className={location.pathname === '/' ? 'active-h5' : ''}>
              <h5 className="slide-content2" >WEDO</h5>
              </Link>
            </div>
            
            <div className="slide">
            <Link to="/Service"  className={location.pathname === '/Service' ? 'active-h5' : ''}>
            <h5  className="slide-content2 mx-0">SERVICE</h5>
            </Link>
            </div>
            <div className="slide">
            <Link to="/Strategy"  className={location.pathname === '/Strategy' ? 'active-h5' : ''}>
            <h5  className="slide-content2 ">STRATEGY</h5>
            </Link>
            </div>
            <div className="slide " >
            <Link to="/Clients "  className={location.pathname === '/Clients' ? 'active-h5' : ''}>
            <h5  className="slide-content2  mx-4">CLIENTS</h5>
            </Link>
            </div>
            <div className="slide">
            <Link to="/Firstpage"  className={location.pathname === '/Firstpage' ? 'active-h5' : ''}>
            <h5  className="slide-content2 mx-4">WORKS</h5>
            </Link>
            </div>
            
       
     

            
      </Slider>
    </div>   
      
    
  );
}

export default AutoPlay;