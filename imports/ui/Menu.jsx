import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

import { ListGroupItem } from 'react-bootstrap';

const selectedMenuStyle = {
  height: '10%',
  WebkistTransition: 'height 0.5s', /* Safari */
  transition: 'height 0.5s',
}

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelectAnyMenu: false
    }
  }
  componentWillReceiveProps(newProps) {
    if (newProps.userSelectAnyMenu === false) {
      this.setState({newStyle: null});
    } else {
      this.setState({newStyle: selectedMenuStyle});
    }
  }
  
  render() {
    return (
      <ListGroupItem className='left-middle' style={this.state.newStyle} onClick={this.props.Click} >
        <h1><FontAwesome name={this.props.menu.icon} /></h1>
        <h1>{this.props.menu.title}</h1>
      </ListGroupItem>
    )
  }
}

Menu.propTypes = {
  menu: PropTypes.object.isRequired,
  userSelectAnyMenu: PropTypes.bool.isRequired
};