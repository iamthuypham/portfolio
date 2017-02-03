import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

import { ListGroupItem, Button } from 'react-bootstrap';

export default class HiddenMenu extends Component {
  render() {
    return (
      <ListGroupItem className='hiddenMenu'>
        <Button className='hiddenMenuButton' onClick={this.props.Click}>
          <FontAwesome name={this.props.menu.icon} className='icon'/>
        </Button>
      </ListGroupItem>
    )
  }
}

HiddenMenu.propTypes = {
  // userSelectHiddenMenuList: PropTypes.bool.isRequired,
};