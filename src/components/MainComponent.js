import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/main.css";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import logoHeader1 from "../banner1.jpeg";
import logoHeader2 from "../banner2.jpeg";
import jagan from "../jagan.png";
import emoji from "../emoji.png";
import Tabs from "./Tabs";
import Footer from "./Footer";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";
import four from "../images/four.png";
import five from "../images/five.png";
import six from "../images/six.png";
import seven from "../images/seven.png";


const MainComponent = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [logoHeader1, logoHeader2];
  const images2 = [
    { src: one, title: "How I started" },
    { src: two, title: "My Track Record" },
    { src: three, title: "Friends and Family" },
    { src: four, title: "In Love with Nature" },
    { src: five, title: "Health is Wealth" },
    { src: six, title: "My Angel Investors" }
  ];
  const images3 = [
    { src: seven, title: "An Ordinary Life" }
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://13.53.40.248:5000/api/records/count"
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
      .post("http://13.53.40.248:5000/api/records/create", { response: "yes" })
      .then(() => {
        setYesCount((prevCount) => prevCount + 1);
        startRollingAnimation(rollingNumber, yesCount + 1 + 15708);
      })
      .catch((error) => {
        console.error("Error posting response:", error);
      });
  };

  return (
    <div className="main-divs">
      {window.innerWidth < 1000 ? <MobileHeader /> : <Header />}
      <div className="main-head">
        <h1>Jagan Your Countdown Started!!</h1>
      </div>

      <div className="countdown-timer">
      <img src={emoji} alt="Popup" className="side-image" />
        <span className="timer-value">{timeLeft.days}</span>
        <span className="timer-label">Days</span>
        <span className="timer-value">{timeLeft.hours}</span>
        <span className="timer-label">Hours</span>
        <span className="timer-value">{timeLeft.minutes}</span>
        <span className="timer-label">Minutes</span>
        <span className="timer-value">{timeLeft.seconds}</span>
        <span className="timer-label">Seconds</span>
        <img src={emoji} alt="Popup" className="side-image" />
      </div>
      <div className="counter-main">
      <p className="counter2">Rejection Count</p>
      </div>
      <div className="counter-main">
        <p className="counter">{rollingNumber}</p>
      </div>
      
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
      <div className="main-head2">
        <h1>THE GREAT ANDHRA LOOT</h1>
      </div>
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
      <div className="main-head2">
        <h1>THE GREAT ANDHRA LOOT</h1>
      </div>
      <Tabs />
     
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
              <h2 className="one-text">I looted</h2>
              <h2 className="two-text">2,00,000 crore in</h2>
              <h2 className="three-text">LIQUOR ALONE</h2>
              <h2 className="four-text">Will you give me another chance?</h2>
            </div>
            <div className="button-container">
              <button
                className="yes-button"
                onClick={handleYesClick}
                disabled={yesClicked}
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{ marginRight: "5px" }}
                />
                Reject Jagan
              </button>
            </div>
            <div className="counter-main">
              <p className="counter">{rollingNumber}</p>
            </div>
          </div>
        </div>
      )}
       <Footer />
    </div>
    
  );
};

export default MainComponent;
