import React from "react";
import Unauthorised from "./Unauthorised";
import Authorised from "./Authorised";
import { useSelector } from "react-redux";
import {
  selectIsLoadingCache,
  selectIsLoggedIn,
} from "../../store/slices/account/selectors";
import FullScreenLoading from "../molecules/FullScreenLoading";

const AuthCheck = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoadingCache = useSelector(selectIsLoadingCache);

  if (isLoadingCache) {
    return <FullScreenLoading />;
  }

  return isLoggedIn ? <Authorised /> : <Unauthorised />;
};

export default AuthCheck;
