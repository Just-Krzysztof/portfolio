import React from "react";
import { useTranslation } from "react-i18next";
import "./Subpages.css";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="title">About me</h2>
      <p>
        <i className="aboutMeParagraph">{t("i am")}</i>
      </p>
    </div>
  );
};

export default About;
