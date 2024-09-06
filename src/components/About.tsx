import React from "react";
import { useTranslation } from "react-i18next";
import "./Subpages.css";
import css from "../../src/assets/images/Languages/css.svg";
import html from "../../src/assets/images/Languages/html.webp";
import javascript from "../../src/assets/images/Languages/javascript.svg";
import react from "../../src/assets/images/Languages/react.png";
import typescript from "../../src/assets/images/Languages/typescript.png";
import vue from "../../src/assets/images/Languages/vue.png";
import nuxt from "../../src/assets/images/Languages/Logo_Nuxt_Black_(2023).svg.png";
// import tailwind from "../../src/assets/images/Languages/tailwind.svg";
import sass from "../../src/assets/images/Languages/sass.png";
import vite from "../../src/assets/images/Languages/vite.svg";
import python from "../../src/assets/images/Languages/python.png";
import django from "../../src/assets/images/Languages/django.svg";

const About: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: sass, alt: "Sass" },
    { src: javascript, alt: "JavaScript" },
    { src: typescript, alt: "TypeScript" },
    { src: vite, alt: "Vite" },
    { src: vue, alt: "Vue" },
    { src: nuxt, alt: "Nuxt" },
    { src: react, alt: "React" },
    { src: python, alt: "Python" },
    { src: django, alt: "DJango" },
    // { src: tailwind, alt: "Tailwind" },
  ];

  return (
    <div className="aboutMePage">
      <div>
        <h2 className="title">About me</h2>
        <p>
          <i className="aboutMeParagraph">{t("i am")}</i>
        </p>
      </div>

      <div className="carousel">
        <div className="carousel-track">
          {items.concat(items).map((item, index) => (
            <div className="carousel-item" key={index}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
