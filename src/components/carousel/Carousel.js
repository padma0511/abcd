import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Carousel from "better-react-carousel";
import "../carousel/Carousel.css"; // Assuming you have the necessary CSS file for Carousel
import workbg from "../asserts/firstpage/workbg1.jpeg";

const Videos = () => {
  const [playing, setPlaying] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/28Rto9JjTCA");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleVideoSelect = (videoId, index) => {
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    setCurrentVideo(videoUrl);
    setActiveVideoIndex(index);
    setPlaying(true);
  };

  const videoCategories = [
    {
      title: "School",
      videos: [
        'TScHu-37Cqw',
        '28Rto9JjTCA',
        'y6120QOlsfU',
        'TScHu-37Cqw',
        '28Rto9JjTCA',
        'y6120QOlsfU',
      ]
    },
    {
      title: "Oil and gas",
      videos: [
        'kJQP7kiw5Fk',
        'LDU_Txk06tM'
      ]
    },
    {
      title: "Financial Service",
      videos: [
        'UTiXQcrLlv4',
        'kJQP7kiw5Fk',
        'LDU_Txk06tM'
      ]
    },
    {
      title: "Telcom",
      videos: [
        'MAa_8XwAVlA?s',
        'kJQP7kiw5Fk',
        'LDU_Txk06tM'
      ]
    },
    {
      title: "Marketing",
      videos: [
        'EvMS73TWIQA?si',
        'kJQP7kiw5Fk',
        'LDU_Txk06tM'
      ]
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveVideoIndex(0);
    setCurrentVideo(`https://www.youtube.com/embed/${videoCategories.find(cat => cat.title === category).videos[0]}`);
    setPlaying(true);
  };

  useEffect(() => {
    // Automatically select the first category when component mounts
    if (videoCategories.length > 0) {
      handleCategoryClick(videoCategories[0].title);
    }

    // Automatically move to the next video every 5 seconds
    const interval = setInterval(() => {
      setActiveVideoIndex((prevIndex) => (prevIndex + 1) % videoCategories.length);
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []); // Empty dependency array ensures this effect runs only once after mounting

  return (
    <>
      <section className="WORK-PAGE">
        <h1 className="ind">INDUSTRY</h1>
      </section>
       
      <section className="WORK-PAGE1 ">
        {videoCategories.map((category, index) => (
          
          <h5 
            key={index} 
            className={`p-3 ${selectedCategory === category.title ? 'selected' : ''}`} 
            
            onClick={() => handleCategoryClick(category.title)}
          >
            {category.title}
             
          </h5>
        ))}
      </section>
      <div className="container">
      <hr className='high'></hr>
      </div> 
      <div className="workpage">
        <section className="workpage-section2">
          <h2 className="video-head">OUR ADVERTISEMENT VIDEO</h2>
          <p className="video-para">
            Video upload is the process of transferring video files from a local device to an online platform or server. It involves selecting the desired video file, initiating the upload process, and waiting for the file to be transferred and processedand waiting for the file to be transferred and processed.
          </p>
          <section className="work-video">
            <div className="container video">
              <ReactPlayer
                url={currentVideo}
                controls={true}
                width={"80%"}
                height={400}
                playing={playing}
              />
            </div>
          </section>
        </section>
        <section>
          <Carousel
            cols={4}
            rows={1}
            gap={10}
            loop
            value={activeVideoIndex}
            onChange={(index) => setActiveVideoIndex(index)}
            autoPlay={false}
            vertical={false} // Ensure horizontal scrolling
            slidesToShow={3}
            slidesToScroll={1}
          >
            {videoCategories.flatMap((category) => (
              category.title === selectedCategory ?
              category.videos.map((videoId, index) => (
                <Carousel.Item key={`${category.title}-${index}`}>
                  <div className="video-container" onClick={() => handleVideoSelect(videoId, index)}>
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                      alt={`Video thumbnail ${index + 1}`}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </Carousel.Item>
              )) : null
            ))}
          </Carousel>
        </section>
      </div>
    </>
  );
};

export default Videos;
