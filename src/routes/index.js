import React, { useContext } from "react";
import { HomePage, LandingPage, LoginPage, SelectProfilePage } from "../pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

function Routes() {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  // console.log("Usuario: ", authContext);
  return (
    <Router>
      <Switch>
        {!user && (
          <>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/Login" component={LoginPage} />
          </>
        )}
        {!!user && (
          <>
            <Route exact path="/" component={SelectProfilePage} />
            <Route exact path="/browse" component={HomePage} />
          </>
        )}
      </Switch>
    </Router>
  );
}

export default Routes;
