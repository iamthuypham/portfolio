import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Menu from './Menu.jsx'

//Styles
import { ListGroup } from 'react-bootstrap';

//Collections
import { MenusCollection } from '../api/MenusCollection.js'
 
class Portfolio extends Component {
  render() {
    console.log(this.props.menus)
    return (
      <div className='portfolio'>
        <ListGroup>
          { this.props.menus.map((menu) => (
              <Menu key={menu._id} menu={menu}/>
            ))
          }
        </ListGroup>
      </div>
    )
  }
}
Portfolio.propTypes = {
  menus: PropTypes.array.isRequired
};
 
export default createContainer(() => {
  return {
    menus: MenusCollection.find({}).fetch(),
  };
}, Portfolio);