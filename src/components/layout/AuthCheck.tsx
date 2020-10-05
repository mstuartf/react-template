import React from "react";
import Unauthorised from "./Unauthorised";
import Authorised from "./Authorised";

const AuthCheck = () => {
  const isLoggedIn = false;
  return isLoggedIn ? <Authorised /> : <Unauthorised />;
};

export default AuthCheck;
