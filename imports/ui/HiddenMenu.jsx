import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

import { ListGroupItem, Button } from 'react-bootstrap';

export default class HiddenMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelectAnyMenu: false,
    }
  }
  componentDidMount() {
    this.setState({
      userSelectProjectMenu: true
    })
  }
  render() {
    return (
      <ListGroupItem className='hiddenMenu' style={this.state.newStyle}>
        <Button className='hiddenMenuButton'>
          <h3><FontAwesome name='rocket' /></h3>
        </Button>
      </ListGroupItem>
    )
  }
}

HiddenMenu.propTypes = {
  userSelectAnyMenu: PropTypes.bool.isRequired,
};