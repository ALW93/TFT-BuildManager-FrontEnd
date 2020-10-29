import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ProtectedRoute, PrivateRoute } from "./Utility/route-utility"
import LoginPage from "./Login/LoginPage";
import HomePage from "./HomePage/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/" exact={true} needLogin={needLogin} component={LoginPage} />
        <PrivateRoute path="/" exact={true} needLogin={needLogin} component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
