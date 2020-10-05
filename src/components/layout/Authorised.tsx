import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import Navigation from "./Navigation";
import VerificationBanner from "../atoms/VerificationBanner";
import SideBar from "../atoms/SideBar";

const Authorised = () => {
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <VerificationBanner />
      <div className="flex flex-grow overflow-hidden">
        <SideBar />
        <div className="h-full w-full flex flex-col overflow-hidden">
          <div>
            <Navigation />
          </div>
          <div className="flex flex-grow overflow-y-scroll">
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/page-1">
                <>Page 1</>
              </Route>
              <Route path="*">
                <Redirect to="/home" />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorised;
