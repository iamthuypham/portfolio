import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import GeneralInfo from './component/GeneralInfo'
import Portfolio from './component/Portfolio'

import './index.css'
class ClientApp extends React.Component { 
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/'>
          <Route path='/landing' component={GeneralInfo} />
          <Route path='/portfolio' component={Portfolio} />
        </Route>
      </Router>
    )
  }
}

module.exports = ClientApp
