import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Test from "./Test";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => <Test />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
