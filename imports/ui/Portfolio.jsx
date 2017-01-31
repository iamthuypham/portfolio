import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Menu from './Menu.jsx'

// import Menus from '../api/menus.js'
import { ListGroup } from 'react-bootstrap';
 
// App component - represents the whole app
export default class Portfolio extends Component {
  getMenus() {
    return [
      {_id: 1, title: 'Projects', icon: 'rocket'},
      {_id: 2, title: 'Experience', icon: 'th-list'},
      {_id: 3, title: 'Skills', icon: 'code'},
      {_id: 4, title: 'Testimony', icon: 'comment-o'}
    ]
  }
  render() {
    return (
      <div className='portfolio'>
        <ListGroup>
          { this.getMenus().map((menu) => (
              <Menu key={menu._id} menu={menu} />
            ))
          }
        </ListGroup>
      </div>
    )
  }
}
