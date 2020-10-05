import React from "react";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full py-2 text-sm text-gray-800 border-b-2 flex justify-center">
      {t("banner.verificationRequired")}
    </div>
  );
};

export default Banner;
