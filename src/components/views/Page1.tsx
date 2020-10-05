import React from "react";
import { useTranslation } from "react-i18next";

const Page1 = () => {
  const { t } = useTranslation();
  return <>{t("page1.pageTitle")}</>;
};

export default Page1;
