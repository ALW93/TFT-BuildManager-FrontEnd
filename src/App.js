import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadToken } from "./store/actions/authentication";
import { ProtectedRoute, PrivateRoute } from "./Utility/route-utility";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import LoginPage from "./Login/LoginPage";
import HomePage from "./Home/HomePage";
import Routes from "./Utility/routes";

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
        <ProtectedRoute
          path="/login"
          exact={true}
          needLogin={needLogin}
          component={LoginPage}
        />
        <PrivateRoute
          exact
          path="/"
          needLogin={needLogin}
          component={HomePage}
        />
        <Routes />
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
