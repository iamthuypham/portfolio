import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

import { ListGroupItem, Button } from 'react-bootstrap';

const presentHiddenButtonStyle = {
  display: 'block'
  // marginBottom: '3vh',
  // WebkistTransition: 'all 2s', /* Safari */
  // transition: 'all 2s',
}

export default class HiddenMenu extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userSelectHiddenMenuList: false,
  //   }
  // }
  // componentDidMount() {
  //   this.setState({
  //     userSelectHiddenMenuList: true
  //   })
  // }
  // componentWillReceiveProps(newProps) {
  //   if (newProps.userSelectHiddenMenuList === false) {
  //     this.setState({newStyle: null});
  //   } else {
  //     this.setState({newStyle: presentHiddenButtonStyle});
  //   }
  // }
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