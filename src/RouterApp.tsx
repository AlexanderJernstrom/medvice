import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import { LandingPage } from "./LandingPage";
import MedicalTermSearch from "./MedicalTermSearch";

export const RouterApp = () => {
  return (
    <>
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/articleSearch" component={App} />
      <Route path="/termSearch" component={MedicalTermSearch} />
    </Router>
    <ul className="copyright">
    <li>&copy; 2020 Medvice All rights reserved.</li>
  </ul>
  </>
  );
};
