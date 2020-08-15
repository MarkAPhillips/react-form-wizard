import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home, Wizard } from './components';

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact strict path="/steps">
      <Wizard />
    </Route>
    <Redirect to="/" />
  </Switch>
);
