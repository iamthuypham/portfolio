import React, { Component } from 'react';
 
import GeneralInfo from './GeneralInfo.jsx';
 
// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return (
      <div>
          <GeneralInfo />
      </div>
    );
  }
}