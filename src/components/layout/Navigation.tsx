import React from "react";
import NavLink from "../atoms/NavLink";
import LogoutButton from "../molecules/LogoutButton";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between bg-white border-b border-gray-400 text-sm text-gray-900 flex-grow">
      <div className="grid grid-cols-5 gap-4 px-4">
        <NavLink label={t("home.pageTitle")} path="/home" />
        <NavLink label={t("page1.pageTitle")} path="/page-1" params={{}} />
      </div>
      <div className={`px-4 flex items-center`}>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Navigation;
