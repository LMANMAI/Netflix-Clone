import React, { useEffect } from "react";
import { HomePage, LandingPage, LoginPage, SelectProfilePage } from "../pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";

function Routes() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //log in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        console.log(userAuth);
      } else {
        //loged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Router>
      {!user ? (
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Login" component={LoginPage} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      )}
    </Router>
  );
}

export default Routes;
