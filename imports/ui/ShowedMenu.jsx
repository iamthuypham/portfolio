import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

import { ListGroupItem } from 'react-bootstrap';

const selectedMenuStyle = {
  height: '10vh',
  WebkistTransition: 'all 0.5s', /* Safari */
  transition: 'all 0.5s',
}

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelectAnyMenu: this.props.userSelectAnyMenu,
      userSelectHiddenMenu: this.props.userSelectHiddenMenu
    }
  }
  componentWillReceiveProps(newProps) {
    if (newProps.userSelectAnyMenu === false) {
      this.setState({newStyle: null});
    } else {
      this.setState({newStyle: selectedMenuStyle});
    }
  }
  componentDidMount(){
    if (this.state.userSelectAnyMenu === false) {
      this.setState({newStyle: null});
    } else {
      this.setState({newStyle: selectedMenuStyle});
    }
  }
  render() {
    return (
      <ListGroupItem className='left-middle' style={this.state.newStyle} onClick={this.props.Click} >
        <h3><FontAwesome name={this.props.menu.icon} /></h3>
        <h2>{this.props.menu.title}</h2>
      </ListGroupItem>
    )
  }
}

Menu.propTypes = {
  menu: PropTypes.object.isRequired,
  userSelectAnyMenu: PropTypes.bool.isRequired
};