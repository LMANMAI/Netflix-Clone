import React from 'react';
import { LandingPage, LoginPage } from '../pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Routes() {
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Login" component={LoginPage} />
      </Switch>
    </Router>
    )
}

export default Routes
