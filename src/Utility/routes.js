import React from "react";
import BuildContainer from "../Build/Build-Container";
import BuildView from "../Build/BuildView";
import { Route } from "react-router-dom";
import Profile from "../Profile/ProfilePage";

const Routes = () => (
  <>
    <Route exact path="/build/id/:id" type="view" component={BuildView} />
    <Route
      exact
      path="/build-create"
      component={() => <BuildContainer type={"create"} />}
    />
    <Route
      exact
      path="/build-edit"
      type="edit"
      component={() => <BuildContainer type={"edit"} />}
    />
    <Route exact path="/profile/:id" component={Profile} />
    <Route path="/profile/:id/bookmarks" component={Profile} />
  </>
);

export default Routes;
