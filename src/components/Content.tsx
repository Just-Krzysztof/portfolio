import React, { useState } from "react";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./portfolio/Portfolio";
import Blog from "./Blog";
import Contact from "./contact/Contact";

const Content: React.FC = () => {
  const [currentContent, setCurrentContent] = useState<string>("about");

  let content;
  switch (currentContent) {
    case "about":
      content = <About />;
      break;
    case "resume":
      content = <Resume />;
      break;
    case "portfolio":
      content = <Portfolio />;
      break;
    case "blog":
      content = <Blog />;
      break;
    case "contact":
      content = <Contact />;
      break;
    default:
      content = <About />;
  }

  return (
    <div className="content">
      <nav>
        <ul>
          <li
            className={currentContent === "about" ? "active" : ""}
            onClick={() => setCurrentContent("about")}
          >
            <i className="fa-solid fa-user"></i><span>About me</span>
          </li>
          <li
            className={currentContent === "resume" ? "active" : ""}
            onClick={() => setCurrentContent("resume")}
          >
            <i className="fa-solid fa-address-card"></i><span>Resume</span>
          </li>
          <li
            className={currentContent === "portfolio" ? "active" : ""}
            onClick={() => setCurrentContent("portfolio")}
          >
            <i className="fa-solid fa-briefcase"></i><span>Portfolio</span> 
          </li>
          <li
            className={currentContent === "contact" ? "active" : ""}
            onClick={() => setCurrentContent("contact")}
          >
            <i className="fa-solid fa-mobile-screen-button"></i><span>Contact</span>
          </li>
        </ul>
      </nav>
      <div className="contentPage">{content}</div>
    </div>
  );
};

export default Content;
