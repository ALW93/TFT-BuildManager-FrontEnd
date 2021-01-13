import React from "react";
import View from "../View/View";
import { Route } from "react-router-dom";
import Profile from "../Profile/ProfilePage";
import TestBuilder from "../TestBuilder/TestBuilder";
import NewBuilder from "../NewBuilder/NewBuilder";

const Routes = () => (
  <>
    <Route exact path="/build/id/:id" component={View} />
    <Route exact path="/build-create" component={NewBuilder} />
    <Route exact path="/profile/:id" component={Profile} />
  </>
);

export default Routes;
