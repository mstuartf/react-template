import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return <>{t("home.pageTitle")}</>;
};

export default Home;
