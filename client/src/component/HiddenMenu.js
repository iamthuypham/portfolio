import React from 'react';
import FontAwesome from 'react-fontawesome'

import { ListGroupItem, Button } from 'react-bootstrap';

class HiddenMenu extends React.Component {
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

module.exports = HiddenMenu