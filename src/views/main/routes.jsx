import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import App from "./App";
import Home from "../home/Content";

export default (props) => (
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
    <Redirect from="*" to="/" />
  </Router>
);
