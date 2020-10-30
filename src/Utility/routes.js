import React from "react";
import BuildContainer from "../Build/Build-Container";
import { Route } from "react-router-dom";
import Profile from "../Profile/ProfilePage";

const Routes = () => (
  <>
    <Route
      exact
      path="/build"
      type="view"
      component={() => <BuildContainer type={"view"} />}
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
