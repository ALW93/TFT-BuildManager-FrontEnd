import React from "react";
import View from "../View/View";
import GuideView from "../View/GuideView";
import { Route, Switch } from "react-router-dom";
import Profile from "../Profile/ProfilePage";
import NewBuilder from "../NewBuilder/NewBuilder";
import HomePage from "../Home/HomePage";
import GuideBuilder from "../GuideBuilder/GuideBuilder";
import BoardCollection from "../Collection/BoardCollection";

export const InteriorSwitch = () => (
  <Switch>
    <Route exact path="/board/id/:id" component={View} />
    <Route exact path="/board-create">
      <NewBuilder type="normal" />
    </Route>
    <Route exact path="/guide-create" component={GuideBuilder} />
    <Route exact path="/guide-create/add">
      <NewBuilder type="add" />
    </Route>
    <Route exact path="/guide/id/:id" component={GuideView} />
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
