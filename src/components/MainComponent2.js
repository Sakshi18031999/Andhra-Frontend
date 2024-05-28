import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/main.css";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import logoHeader1 from "../banner/banner1.jpg";
import logoHeader2 from "../banner/banner2.jpg";
import logoHeader3 from "../banner/banner3.jpg";
import logoHeader4 from "../banner/banner4.jpg";
import logoHeader5 from "../banner/banner5.jpg";
import logoHeader6 from "../banner/banner6.jpg";
import logoHeader7 from "../banner/banner7.jpg";
import logoHeader8 from "../banner/banner8.jpg";
import logoHeader9 from "../banner/banner9.jpg";
import logoHeader10 from "../banner/banner10.jpg";
import logoHeader11 from "../banner/banner11.jpg";
import logoHeader12 from "../banner/banner12.jpg";
import logoHeader13 from "../banner/banner13.jpg";
import jagan from "../jagan.png";
import Header2 from "./Header2";
import emoji from "../emoji.png";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
import four from "../images/four.png";
import five from "../images/five.png";
import six from "../images/six.png";
import seven from "../images/seven.png";
import TabsTelugu from "./TabsTelugu";
import Footer from "./Footer";
import heroImage from "../images/heroImage.jpeg";
import contentImage from "../images/contentImage.jpeg";
import YoutubeCarousel from "./YoutubeCarousel";

const MainComponent2 = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    logoHeader1,
    logoHeader2,
    logoHeader3,
    logoHeader4,
    logoHeader5,
    logoHeader6,
    logoHeader7,
    logoHeader8,
    logoHeader9,
    logoHeader10,
    logoHeader11,
    logoHeader12,
    logoHeader13,
  ];

  useEffect(() => {
    const endTime = new Date("2024-06-04T06:54:18");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    const imageSlider = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(imageSlider);
    };
  }, []);

  const [showPopup, setShowPopup] = useState(true);
  const [yesClicked, setYesClicked] = useState(false);
  const [yesCount, setYesCount] = useState(0);
  const [rollingNumber, setRollingNumber] = useState(0);

  const images2 = [
    { src: one, title: "అలా మొదలైంది" },
    { src: two, title: "నా ట్రాక్ రికార్డ్" },
    { src: three, title: "నేను, నా స్నేహితులు, బంధువులు" },
  ];

  const images3 = [
    { src: four, title: "ప్రకృతికి ప్రేమతో" },
    { src: five, title: "ఆరోగ్యమే మహాభాగ్యం" },
    { src: six, title: "పెట్టుబడిదారీ దేవుళ్ళు" },
    { src: seven, title: "నా సాధారణ జీవితం" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://andhra-project.onrender.com/api/records/count"
        );
        const totalCount = response.data.count;
        setYesCount(totalCount);
        startRollingAnimation(rollingNumber, totalCount + 15708);
      } catch (error) {
        console.error("Error fetching count:", error);
      }
    };

    fetchData();
  }, []);

  const startRollingAnimation = (start, end) => {
    let currentNumber = start;
    const increment = Math.ceil((end - start) / 100);

    const rollingInterval = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= end) {
        clearInterval(rollingInterval);
        currentNumber = end;
      }
      setRollingNumber(currentNumber);
    }, 10);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleYesClick = () => {
    setYesClicked(true);
    axios
      .post("https://andhra-project.onrender.com/api/records/create", {
        response: "yes",
      })
      .then(() => {
        setYesCount((prevCount) => prevCount + 1);
        startRollingAnimation(rollingNumber, yesCount + 1 + 15708);
      })
      .catch((error) => {
        console.error("Error posting response:", error);
      });
  };

  const downloadPDF = async () => {
    try {
      const response = await fetch('https://aprejects.s3.ap-south-1.amazonaws.com/YSRCP+5+years+of+failure.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'YSRCP_5_years_of_failure.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };
  

  return (
    <div className="main-divs">
      {window.innerWidth < 1310 ? <MobileHeader /> : <Header2 />}
      <img src={heroImage} alt="hero-Image" className="hero-image" />
      
      <div className="countdown-timer">
      <img src={emoji} alt="Popup" className="side-image2" />
      <div className="countdown-timer2">
        <img src={emoji} alt="Popup" className="side-image" />
        <span className="timer-value">{timeLeft.days}</span>
        <span className="timer-label">రోజులు</span>
        <span className="timer-value">{timeLeft.hours}</span>
        <span className="timer-label">గంటలు</span>
        <span className="timer-value">{timeLeft.minutes}</span>
        <span className="timer-label">నిమిషాలు</span>
        <span className="timer-value">{timeLeft.seconds}</span>
        <span className="timer-label">సెకన్లు</span>
        <img src={emoji} alt="Popup" className="side-image" />
      </div>
      </div>
      <div className="counter-main">
        <p className="counter2">తిరస్కరించిన వారి సంఖ్య</p>
        <p className="counter">{rollingNumber}</p>
      </div>
      <div className="banner-container">
        <div className="sliding-banner-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              height="600px"
              width="100%"
              alt={`Header ${index + 1}`}
              className={
                index === currentImageIndex
                  ? "banner-image active"
                  : "banner-image"
              }
            />
          ))}
        </div>
        <button
          className="yes-button"
          onClick={handleYesClick}
        >
          జగన్‌ను తిరస్కరించండి
        </button>
        <p className="counter7">జగన్‌ను రిజెక్ట్ చేయండి </p>
      </div>

      <img src={contentImage} alt="content-Image" className="hero-image" />
      <div className="counter-main2">
        <p className="counter2">గ్రేట్ ఆంధ్రా లూట్</p>
      </div>
      <div className="main-grid-div">
        <div className="image-grid">
          {images2.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image.src} alt={image.title} className="grid-image" />
              <p className="image-title">{image.title}</p>
            </div>
          ))}
        </div>
        <div className="image-grid2">
          {images3.map((image, index) => (
            <div key={index} className="image-container2">
              <img src={image.src} alt={image.title} className="grid-image" />
              <p className="image-title">{image.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="video-div">
        <div className="counter-main3">
          <p className="counter4">ఐదేళ్ల జగన్ పాలనలో అంతా సర్వనాశనం.</p>
          <p className="counter4">
            ప్రతి ఒక్కరిపైనా దాడులు, అడుగడుగునా దారుణాలు
          </p>
        </div>
        <div className="two-divs">
          <div className="video-screen">
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/bzQcyoMjnT0?si=S0G60mMUPDJtGAQG"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-text">
            <p className="counter8">
              జగన్ ఐదేళ్ల పాలనకు సంబంధించిన ఛార్జ్‌షీట్
            </p>
            <button className="download" onClick={downloadPDF}>
              డౌన్‌లోడ్ చేసుకోండి
            </button>
          </div>
        </div>
      </div>
      <div className="counter-main4">
        <div className="counter-main3">
          <p className="counter5">
            మీ నియోజకవర్గ అభ్యర్థి ఛార్జ్‌షీట్ తెలుసుకోండి.{" "}
          </p>
          <p className="counter6">ఓటు వేసేముందు ఈ వీడియోలు చూడండి.</p>
        </div>
        <YoutubeCarousel />
      </div>
      <div className="counter-main2">
        <p className="counter2">గ్రేట్ ఆంధ్రా లూట్</p>
      </div>
      <TabsTelugu />
      {showPopup && (
        <div className="popup">
          <button className="exit-button" onClick={closePopup}>
            X
          </button>
          <div className="popup-content">
            <div>
              <img src={jagan} alt="Popup" className="popup-image" />
            </div>
            <div className="popup-text">
              <h2 className="one-text">నేను కేవలం లిక్కర్ మాఫియాతోనే</h2>
              <h2 className="two-text">రూ.2,00,000 కోట్లు</h2>
              <h2 className="three-text">దోచేయగలిగాను</h2>
              <h2 className="four-text">నాకు మరొక ఛాన్స్ ఇస్తారా?</h2>
            </div>
            <div className="button-container">
              <button
                className="yes2-button"
                onClick={handleYesClick}
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{ marginRight: "5px" }}
                />
                జగన్‌ను తిరస్కరించండి
              </button>
            </div>
            <div className="counter-mains">
              <p className="counter">{rollingNumber}</p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MainComponent2;
