import React from "react";
import Btn from "../atoms/Btn";
import { useDispatch } from "react-redux";
import { logoutRequest } from "../../store/slices/account/actions";

const LogoutButton = () => {
  const dispatch = useDispatch();
  return (
    <Btn role={`plain`} onClick={() => dispatch(logoutRequest())}>
      Logout
    </Btn>
  );
};

export default LogoutButton;
