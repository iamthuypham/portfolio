import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'
 
// App component - represents the whole app
export default class Portfolio extends Component {
  render() {
    return (
      <div className='portfolio'>
        <ListGroup>
          <ListGroupItem className='left-middle'>
            <h1><FontAwesome name='rocket' /></h1>
            <h1>Projects</h1>
          </ListGroupItem>
          <div className='list'></div>
          <ListGroupItem className='left-middle'>
            <h1><FontAwesome name='th-list' /></h1>
            <h1>Experience</h1>
          </ListGroupItem>
          <div className='list'></div>
          <ListGroupItem className='left-middle'>
            <h1><FontAwesome name='code' /></h1>
            <h1>Skills</h1></ListGroupItem>
            <div className='list'></div>
          <ListGroupItem className='left-middle'>
            <h1><FontAwesome name='comment-o' /></h1>
            <h1>Testimony</h1>
          </ListGroupItem>
          <div className='list'></div>
        </ListGroup>
      </div>
      )
  }
}
