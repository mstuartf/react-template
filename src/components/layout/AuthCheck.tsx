import React from "react";
import Unauthorised from "./Unauthorised";
import Authorised from "./Authorised";

const AuthCheck = () => {
  const isLoggedIn = true;
  return isLoggedIn ? <Authorised /> : <Unauthorised />;
};

export default AuthCheck;
