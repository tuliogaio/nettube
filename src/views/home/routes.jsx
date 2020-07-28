import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Main from "./Main";

export default (props) => (
  <Router>
    <Switch>
      <Route path="/home">
        <Main />
      </Route>
    </Switch>
    <Redirect from="*" to="/home" />
  </Router>
);
