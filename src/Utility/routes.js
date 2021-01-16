import React from "react";
import View from "../View/View";
import { Route, Switch } from "react-router-dom";
import Profile from "../Profile/ProfilePage";
import NewBuilder from "../NewBuilder/NewBuilder";
import HomePage from "../Home/HomePage";
import GuideBuilder from "../GuideBuilder/GuideBuilder";

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
    <Route exact path="/profile/id/:id" component={Profile} />
    <Route exact path="/profile/id/:id/bookmarks">
      <h1>User Guide Bookmarks</h1>
    </Route>
    <Route exact path="/profile/id/:id/collection">
      <h1>User Saved Boards</h1>
    </Route>
    <Route exact path="/home" component={HomePage} />
  </Switch>
);

export const routeRefs = (id) => {
  return {
    Browse: "/home",
    "My Profile": `/profile/id/${id}`,
    "Guide Collection": `/profile/id/${id}/bookmarks`,
    "Board Collection": `/profile/id/${id}/collection`,
    "Publish Guide": "/guide-create",
    "Create Board": "/board-create",
  };
};
