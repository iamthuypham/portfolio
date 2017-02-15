import React, {Component} from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// route components
import GeneralInfo from '../../ui/GeneralInfo';
import Portfolio from '../../ui/Portfolio';
import LinkedIn from '../../api/LinkedIn'

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/">
        <IndexRoute component={GeneralInfo}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/auth' component={LinkedIn}/>
    </Route>
  </Router>
);
