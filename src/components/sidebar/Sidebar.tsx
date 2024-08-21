import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import avatar from "../../assets/Developer.png";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const infoBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (infoBoxRef.current) {
      if (!isHidden) {
        infoBoxRef.current.style.height = `${infoBoxRef.current.scrollHeight}px`;
      } else {
        infoBoxRef.current.style.height = "0";
      }
    }
  }, [isHidden]);

   const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      changeLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    localStorage.setItem("language", lang);
    console.log(localStorage.getItem("language"));
  };

  return (
    <div className="sidebar">
        <button
          className="language-switcher"
          onClick={() =>
            handleLanguageChange(i18n.language === "en" ? "pl" : "en")
          }
        >
          {i18n.language === "en" ? "Polish" : "English"}
        </button>
      <div className="profile">
        <div className="profileHeader">
          <img src={avatar} alt="Profile" className="avatar" />
          <div className="profileHeaderName">
            <h2>Krzysztof Just</h2>
            <span className="info-button">Front-end Developer</span>
          </div>
        </div>

        <div
          ref={infoBoxRef}
          className={`information-box ${!isHidden ? "visible" : ""}`}
        >
          <ul>
            <li>
              <div className="iconBox">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="menuBox">
                <p>E-mail</p>
                <a
                  href="mailto:krzysztofjustjust@gmail.com"
                  className="longEmail elementsPosition"
                >
                  krzysztofjustjust@gmail.com
                </a>
              </div>
            </li>
            <li>
              <div className="iconBox">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>
              <div className="menuBox">
                <p>Phone</p>
                <a href="tel:+48511008612" className="elementsPosition">
                  511-008-612
                </a>
              </div>
            </li>
            <li>
              <div className="iconBox">
                <i className="fa-solid fa-calendar-days"></i>
              </div>
              <div className="menuBox">
                <p>Birthday</p>
                <p className="longEmail elementsPosition">July 11, 1999</p>
              </div>
            </li>
            <li>
              <div className="iconBox">
                <i className="fa-solid fa-map-location-dot"></i>
              </div>
              <div className="menuBox">
                <p>Location</p>
                <p className="longEmail elementsPosition">Gdynia, Poland</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="buttonContainer">
          <button
            onClick={() => setIsHidden(!isHidden)}
            className="show-more-button"
          >
            <span className={`${isHidden ? "showMore" : "showLess"}`}>
              {isHidden ? "Pokaż więcej" : "Pokaż mniej"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
