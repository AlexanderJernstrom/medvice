import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import { LandingPage } from "./LandingPage";

export const RouterApp = () => {
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/search" component={App} />
    </Router>
  );
};
