import React, { useEffect } from "react";
import { HomePage, LandingPage, LoginPage } from "../pages";
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
            name: userAuth.displayName,
            photo: userAuth.photoURL,
          })
        );
      } else {
        //loged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <>
      <Router>
        {!user ? (
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        ) : (
          <HomePage />
        )}
      </Router>
    </>
  );
}

export default Routes;
