import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";

import Coins from "../Screens/Coins";
// 나머지도 임포트, 헤더도 

import Header from "./Header";

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={🏷} />
      <Route path="/코인" exact component={💰} />
      <Route path="/익스" exact component={🔁} />
      <Redirect from="*" to="/" />
    </Router>
  );
};
