import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

import { ListGroupItem } from 'react-bootstrap';
 
export default class Menu extends Component {
  render() {
    // let selectedClassname = ''
    // if (this.props.selected) {
    //   selectedClassname = ' selected'
    // }
    return (
      <ListGroupItem className='left-middle' onClick={this.props.onClick} >
        <h1><FontAwesome name={this.props.menu.icon} /></h1>
        <h1>{this.props.menu.title}</h1>
      </ListGroupItem>
    )
  }
}

Menu.propTypes = {
  menu: PropTypes.object.isRequired
};