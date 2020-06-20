import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import CreateForm from "./modules/CreateForm/CreateForm";
import Default404NotFound from "./common/components/Default404NotFound";

export const ROUTE_CONST = {
  CREATE_FORM: "/create",
  DEFAULT_404: "*"
};

export default () => (
  <Switch>
    <Route exact path={ROUTE_CONST.CREATE_FORM} component={CreateForm} />
    <Route path={ROUTE_CONST.DEFAULT_404} component={Default404NotFound} />
  </Switch>
);
