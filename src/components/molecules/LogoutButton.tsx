import React from "react";
import Btn from "../atoms/Btn";
import { useDispatch } from "react-redux";
import { logoutRequest } from "../../store/slices/account/actions";
import { useTranslation } from "react-i18next";

const LogoutButton = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <Btn role={`plain`} onClick={() => dispatch(logoutRequest())}>
      {t("navBar.logoutButton")}
    </Btn>
  );
};

export default LogoutButton;
