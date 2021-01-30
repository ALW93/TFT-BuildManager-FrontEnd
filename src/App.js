import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadToken } from "./store/actions/authentication";
import { ProtectedRoute, PrivateRoute } from "./Utility/route-utility";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import LoginPage from "./Login/LoginPage";
import Routes from "./Utility/routes";

import HomePage from "./Home/HomePage";
import Splash from "./Test/Splash";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Cinzel",
  },
});

const App = ({ needLogin, loadToken }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    loadToken();
  }, [loadToken]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/test" component={Splash} />
        <ProtectedRoute
          path="/login"
          exact
          needLogin={needLogin}
          component={LoginPage}
        />
        <PrivateRoute path="/" needLogin={needLogin} component={Splash} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};

const AppContainer = () => {
  const needLogin = useSelector((state) => !state.authentication.token);
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <App needLogin={needLogin} loadToken={() => dispatch(loadToken())} />
    </ThemeProvider>
  );
};

export default AppContainer;
