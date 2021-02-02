import React from "react";
import View from "../View/View";
import { Route, Switch } from "react-router-dom";
import Profile from "../Profile/ProfilePage";
import NewBuilder from "../NewBuilder/NewBuilder";
import HomePage from "../Home/HomePage";

import BoardCollection from "../Profile/BoardCollection";

export const InteriorSwitch = () => (
  <Switch>
    <Route exact path="/board/id/:id" component={View} />
    <Route exact path="/board-create">
      <NewBuilder type="normal" />
    </Route>
    <Route exact path="/board/id/:id/new_sub">
      <NewBuilder type="subboard" />
    </Route>

    <Route exact path="/profile/id/:id" component={Profile} />
    <Route
      exact
      path="/profile/id/:id/collection"
      component={BoardCollection}
    />

    <Route exact path="/home" component={HomePage} />
  </Switch>
);

export const routeRefs = (id) => {
  return {
    Browse: "/home",
    "My Profile": `/profile/id/${id}`,
    "My Collection": `/profile/id/${id}/collection`,
    "Publish Guide": "/guide-create",
    "Create Board": "/board-create",
  };
};
