import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../views/Home";

const Authorised = () => {
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex flex-grow overflow-hidden">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Authorised;
