import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

import { ListGroupItem } from 'react-bootstrap';

import { MenusCollection } from '../api/MenusCollection.js'
 
export default class Menu extends Component {
  selectMenu() {
    Meteor.call('deselectMenus')
    MenusCollection.update(this.props.menu._id,{
      $set: { selected: !this.props.menu.selected }
    })
  }
  render() {
    const menuClassname = this.props.menu.selected ? 'selected' : '';
    return (
      <ListGroupItem className='left-middle' onClick={this.selectMenu.bind(this)} >
        <h1><FontAwesome name={this.props.menu.icon} /></h1>
        <h1>{this.props.menu.title}</h1>
        <p>{menuClassname}</p>
      </ListGroupItem>
    )
  }
}

Menu.propTypes = {
  menu: PropTypes.object.isRequired
};