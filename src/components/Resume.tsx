import React from "react";
import { useTranslation } from "react-i18next";
import "./Subpages.css";

const Resume: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="title">Resume</h2>
      <h3>
        <span>{t("frontend developer")}</span>
      </h3>
      <p>Rząska Poland, Gdynia, {t("poland")}</p>
      <p>
        {t("november")} 2022 - {t("present")}
      </p>
      <ul>
        <li>{t("working with")}</li>
        <li>{t("integration")}</li>
        <li>{t("design")}</li>
        <li>{t("performance")}</li>
        <li>{t("optymalized")}</li>
      </ul>
      <h3>
        <span>{t("kids")}</span>
      </h3>
      <p>Academy Spice Gears, Łomża, {t("poland")}</p>
      <p>
        {t("march")} 2021 – {t("november")} 2022
      </p>
      <ul>
        <li>{t("technology")}</li>
        <li>{t("introduced")}</li>
        <li>{t("communicated")}</li>
        <li>{t("environment")}</li>
      </ul>
      <h3>
        <span>{t("intern")}</span>
      </h3>
      <p>Transition Technologies MS S.A., Koszalin, {t("poland")}</p>
      <p>
        {t("july")} 2022 – {t("september")} 2022
      </p>
      <ul>
        <li>{t("gitlab")}</li>
        <li>{t("angular")}</li>
        <li>{t("implement")}</li>
      </ul>
    </div>
  );
};

export default Resume;
