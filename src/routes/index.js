import React from 'react';
import { LandingPage, LoginPage, SelectProfilePage } from '../pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Routes() {
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Login" component={LoginPage} />
        <Route exact path="/Select-Profile" component={SelectProfilePage} />
      </Switch>
    </Router>
    )
}

export default Routes
