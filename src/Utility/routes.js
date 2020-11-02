import React from "react";
import BuildView from "../Build/BuildView";
import BuildForm from "../Build/BuildForm";
import { Route } from "react-router-dom";
import Profile from "../Profile/ProfilePage";

const Routes = () => (
  <>
    <Route exact path="/build/id/:id" type="view" component={BuildView} />
    <Route exact path="/build-create" component={BuildForm} />
    <Route exact path="/profile/:id" component={Profile} />
    <Route path="/profile/:id/bookmarks" component={Profile} />
  </>
);

export default Routes;
