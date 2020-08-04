import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import CreateForm from "./modules/CreateForm/CreateForm";
import ListForm from "./modules/ListForm/ListForm";
import DetailForm from "./modules/DetailForm/DetailForm";
import Default404NotFound from "./common/components/Default404NotFound";

export const ROUTE_CONST = {
  CREATE_FORM: "/create",
  List_Form:"/list",
  Detail_Form:"/detail/:id",
  DEFAULT_404: "*"
};

export default () => (
  <Switch>
    <Route exact path={ROUTE_CONST.CREATE_FORM} component={CreateForm} />
    <Route exact path ={ROUTE_CONST.List_Form} component={ListForm}/>
    <Route exact path ={ROUTE_CONST.Detail_Form} component={DetailForm}/>
   {/*<Route path={this.props.match.url +'/:detailId'} component={DetailForm}/>*/}
    <Route path={ROUTE_CONST.DEFAULT_404} component={Default404NotFound} />
  </Switch>
);
