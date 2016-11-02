// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Dashboard from './components/Dashboard';

export default (
  <Route path="/" component={Dashboard}>
    <IndexRoute />
    <Route path="/counter" component={Dashboard} />
  </Route>
);
