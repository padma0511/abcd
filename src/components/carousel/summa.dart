import React, { useState } from "react";
import ReactPlayer from "react-player";
import Carousel from "better-react-carousel";
import "../carousel/Carousel.css";

const Videos = () => {
  const [playing, setPlaying] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/VU23OPQ1Pmc");

  


  
  const handleVideoSelect = (videoUrl, categoryVideoIds) => {
    setCurrentVideo(videoUrl);
    setPlaying(true); // Start playing the video after changing
    setVideoIds(videoIds,);
   
    setActiveVideoIndex(0); // Reset activeVideoIndex to 0
  };
  
  const [videoIds, setVideoIds] = useState([
    'TScHu-37Cqw',
    '28Rto9JjTCA',
    'y6120QOlsfU',
    'kJQP7kiw5Fk',
    'LDU_Txk06tM',
  ]);
  
  
  
  return (
    <>
      <section className="WORK-PAGE">
        <h1 className="ind">INDUSTRY</h1>
      </section>

      <hr className='high'></hr> 

      <section className="WORK-PAGE1">
  {/* <h5 className="p-3" onClick={() => handleVideoSelect("https://www.youtube.com/embed/VU23OPQ1Pmc", 0)}>School</h5>
  <h5 className="p-3" onClick={() => handleVideoSelect("https://youtu.be/IIat8oxEIbE?si=JyKs2klsIpkHOPR3", 1)}>Oil and gas</h5>
  <h5 className="p-3" onClick={() => handleVideoSelect("https://youtu.be/-Euany_dUDM?si=pIvUpF_3Af2xT0PO", 2)}>Telecom</h5>
  <h5 className="p-3" onClick={() => handleVideoSelect("https://youtu.be/pmNA98zoaUk?si=DCK9Cr-7tZDSy_i9", 3)}>Advertisement</h5>
  <h5 className="p-3" onClick={() => handleVideoSelect("https://youtu.be/ifX5XGBJGmk?si=zrRGqRIATgJEzPDV", 4)}>Financial Service</h5>
  <h5 className="p-3" onClick={() => handleVideoSelect("https://youtu.be/My_S68DAAPg?si=yVt9ZBYi1HoViGdZ", 5)}>Marketing</h5> */}
  <h5 className="p-3" onClick={() => handleVideoSelect("https://www.youtube.com/embed/VU23OPQ1Pmc", ['TScHu-37Cqw', '28Rto9JjTCA', ])}>School</h5>
<h5 className="p-3" onClick={() => handleVideoSelect("https://youtu.be/IIat8oxEIbE?si=JyKs2klsIpkHOPR3", ['TScHu-37Cqw', '28Rto9JjTCA', 'y6120QOlsfU', 'LDU_Txk06tM', 'YOUR_OIL_GAS_VIDEO_ID'])}>Oil and gas</h5>
<h5 className="p-3" onClick={() => handleVideoSelect("https://youtu.be/-Euany_dUDM?si=pIvUpF_3Af2xT0PO", ['TScHu-37Cqw', '28Rto9JjTCA', 'y6120QOlsfU', 'LDU_Txk06tM', 'YOUR_MARKETING_VIDEO_ID'])}>Marketing</h5>
<h5 className="p-3" onClick={() => handleVideoSelect("https://www.youtube.com/embed/VU23OPQ1Pmc", ['TScHu-37Cqw', '28Rto9JjTCA', 'y6120QOlsfU', 'LDU_Txk06tM', 'VU23OPQ1Pmc'])}>School</h5>
<h5 className="p-3" onClick={() => handleVideoSelect("https://youtu.be/ifX5XGBJGmk?si=zrRGqRIATgJEzPDV", ['TScHu-37Cqw', '28Rto9JjTCA', 'y6120QOlsfU', 'LDU_Txk06tM', 'YOUR_OIL_GAS_VIDEO_ID'])}>Finacialservice</h5>
<h5 className="p-3" onClick={() => handleVideoSelect("https://youtu.be/My_S68DAAPg?si=yVt9ZBYi1HoViGdZ", ['TScHu-37Cqw', '28Rto9JjTCA', 'y6120QOlsfU', 'LDU_Txk06tM', 'YOUR_MARKETING_VIDEO_ID'])}>Telcome</h5>
{/* Similarly for other categories */}

{/* Similarly for other categories */}

</section>


      <div className="workpage">
        <section className="workpage-section2">
          <h2 className="video-head">OUR ADVERTISEMENT VIDEO</h2>
          <p className="video-para">
            Video upload is the process of transferring video files from a local device to an online platform or server. It involves selecting the desired video file, initiating the upload process, and waiting for the file to be transferred and processed.
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
            vertical={false}
            slidesToShow={3}
            slidesToScroll={1}
          >
            {videoIds.map((videoId, index) => (
              <Carousel.Item key={index}>
                <div className="video-container" onClick={() => handleVideoSelect(`https://www.youtube.com/embed/${videoId}`, index)}>
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                    alt={`Video thumbnail ${index + 1}`}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
      </div>
    </>
  );
};

export default Videos;
