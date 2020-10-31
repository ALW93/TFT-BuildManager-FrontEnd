import React from "react";
import BuildContainer from "../Build/Build-Container";
import BuildView from "../Build/BuildView";
import { Route } from "react-router-dom";
import Profile from "../Profile/ProfilePage";

const Routes = () => (
  <>
    <Route
      exact
      path="/build/id/:id"
      type="view"
      component={() => <BuildView />}
    />
    <Route
      path="/build-create"
      component={() => <BuildContainer type={"create"} />}
    />
    <Route
      path="/build-edit"
      type="edit"
      component={() => <BuildContainer type={"edit"} />}
    />
    <Route
      exact
      path="/profile/:id"
      component={() => <Profile type={"other"} />}
    />
    <Route
      path="/profile/:id/bookmarks"
      component={() => <Profile type={"p.bookmark"} />}
    />
  </>
);

export default Routes;
