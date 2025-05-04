import React from "react";
import "./Portfolio.css";
import calendar from "../../assets/images/calendar.png";
import rickAndMorty from "../../assets/images/rickAndMorty.png";
const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Calendar App",
      image: calendar,
      url: "https://just-krzysztof.github.io/calendar/",
    },
    {
      title: "Rick and Morty",
      image: rickAndMorty,
      url: "https://just-krzysztof.github.io/rick-and-morty/",
    },
    // test
    {
      title: "Coming Soon",
      image: "",
      url: "https://github.com/Just-Krzysztof",
    },

  ];
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <h2 className="title">Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div
            className="portfolio-item"
            key={index}
            onClickCapture={() => handleClick(project.url)}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-image"
              />
            ) : (
              <div className="coming-soon">
                <p>Coming Soon</p>
              </div>
            )}
            <div className="portfolio-overlay">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
