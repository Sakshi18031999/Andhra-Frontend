import React, { useState, useEffect } from "react";
import "../css/caruosel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const YoutubeCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [videosToShow, setVideosToShow] = useState(10); // Default number of videos to show

  const [videoUrls, setVideoUrls] = useState([
    "https://www.facebook.com/reel/1190480598587238",
    "https://www.facebook.com/reel/398447699464963",
    "https://www.facebook.com/reel/454947633553695",
    "https://www.facebook.com/reel/789757766544853",
    "https://www.facebook.com/reel/912582413530781",
    "https://www.facebook.com/reel/789757766544853",
    "https://www.facebook.com/reel/375054775421507",
    "https://www.facebook.com/reel/1233041237660908",
    "https://www.facebook.com/reel/781775073458500",
    "https://www.facebook.com/reel/939629067855938",
  ]);

  const extractVideoId = (url) => {
    if (url.includes("youtube")) {
      const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)([a-zA-Z0-9_-]{11})/);
      if (videoIdMatch) {
        return videoIdMatch[1];
      }
    } else if (url.includes("facebook")) {
      const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?facebook\.com\/reel\/([0-9]+)/);
      if (videoIdMatch) {
        return videoIdMatch[1];
      }
    }
    // Handle invalid URL or no match found
    return null; // or throw an error, log a message, etc.
  };

  // Calculate number of videos to show based on container width
  useEffect(() => {
    const handleResize = () => {
      const containerWidth = document.querySelector(".carousel").offsetWidth;
      if (containerWidth >= 1200) {
        setVideosToShow(10);
      } else if (containerWidth >= 1020) {
        setVideosToShow(8);
      }
      else if (containerWidth >= 820) {
        setVideosToShow(6);
      } 
      else if (containerWidth >= 620) {
        setVideosToShow(4);
      }
      else if (containerWidth >= 420) {
        setVideosToShow(2);
      }else {
        setVideosToShow(1);
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener("resize", handleResize); // Recalculate on window resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickSlideRight = () => {
    setStartIndex(startIndex + videosToShow);
  };

  const handleClickSlideLeft = () => {
    setStartIndex(startIndex - videosToShow);
  };

  return (
    <div className="youtube-carousel">
      <div className="carousel">
        {videoUrls.slice(startIndex, startIndex + videosToShow).map((url, index) => (
          <div key={index} className="video">
            {url.includes("youtube") ? (
              <iframe
                title={`Video ${index}`}
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${extractVideoId(url)}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : url.includes("facebook") ? (
              <iframe
                title={`Video ${index}`}
                src={`https://www.facebook.com/plugins/video.php?height=315&href=${url}`}
                width="560"
                height="315"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            ) : null}
          </div>
        ))}
      </div>
      <button
        onClick={handleClickSlideLeft}
        disabled={startIndex === 0}
        className="scroll-button left"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleClickSlideRight}
        disabled={startIndex + videosToShow >= videoUrls.length}
        className="scroll-button right"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default YoutubeCarousel;
