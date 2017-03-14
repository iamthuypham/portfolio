import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import GeneralInfo from './component/GeneralInfo'
import Portfolio from './component/Portfolio'
import ContactMe from './component/ContactMe'

import './index.css'
class ClientApp extends React.Component { 
  render () {
    return (
      <Router history={browserHistory}>
          <Route path='/' component={GeneralInfo} />
          <Route path='/portfolio' component={Portfolio} />
      </Router>
    )
  }
}

module.exports = ClientApp
