import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

import { ListGroupItem } from 'react-bootstrap';
 
// App component - represents the whole app
export default class Menu extends Component {
  render() {
    return (
      <ListGroupItem className='left-middle'>
        <h1><FontAwesome name={this.props.menu.icon} /></h1>
        <h1>{this.props.menu.title}</h1>
      </ListGroupItem>
    )
  }
}
Menu.propTypes = {
  menu: PropTypes.object.isRequired,
}
