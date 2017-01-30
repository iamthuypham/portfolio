import React, {Component} from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// route components
import GeneralInfo from '../../ui/GeneralInfo';
import Portfolio from '../../ui/Portfolio';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/">
        <IndexRoute component={GeneralInfo}/>
        <Route path='/portfolio' component={Portfolio}/>
    </Route>
  </Router>
);
