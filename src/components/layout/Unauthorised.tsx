import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../views/Login";
import SignUp from "../views/SignUp";

const Unauthorised = () => (
  <div className="h-full w-full flex items-center justify-center relative">
    <div className="max-w-sm w-full">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
    <div className="absolute bottom-0 right-0 p-4 text-gray-400">
      {process.env.REACT_APP_VERSION}
    </div>
  </div>
);

export default Unauthorised;
