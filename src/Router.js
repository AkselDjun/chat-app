import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from "./App";
import Image from "./Image";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/image" component={Image} />
    </Switch>
  </BrowserRouter>
);

export default Router;
