import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { loadToken } from "./store/actions/authentication";
import { ProtectedRoute, PrivateRoute } from "./Utility/route-utility";
import LoginPage from "./Login/LoginPage";
import HomePage from "./Home/HomePage";

const App = ({ needLogin, loadToken }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    loadToken();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute
          path="/"
          exact={true}
          needLogin={needLogin}
          component={LoginPage}
        />
        <PrivateRoute
          path="/"
          exact={true}
          needLogin={needLogin}
          component={HomePage}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

const AppContainer = () => {
  const needLogin = useSelector((state) => !state.authentication.token);
  const dispatch = useDispatch();
  return <App needLogin={needLogin} loadToken={() => dispatch(loadToken())} />;
};

export default AppContainer;
