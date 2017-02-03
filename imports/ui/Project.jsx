import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

import { Media, Button, Modal } from 'react-bootstrap';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelectProjectMenu: false,
      userSelectModal: false
    }
  }
  componentDidMount() {
    this.setState({
      userSelectProjectMenu: true
    })
  }
  clickModal() {
    this.setState({ userSelectModal: true });
  }
  render() {
    return (
      <Media>
        <Media.Left>
          <img width={64} height={64} src="" alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>{this.props.project.name}</Media.Heading>
          <p>{this.props.project.description}</p>
          <Modal show={this.state.userSelectModal} onHide={this.close} >
            <Modal.Body>
              blah blah
            </Modal.Body>
          </Modal>
        </Media.Body>
        <Media.Right>
          <Button className='tryNowButton'>Try Now</Button> 
        </Media.Right>
      </Media>
    )
  }
}

Menu.propTypes = {
  project: PropTypes.object.isRequired,
  userSelectProjectMenu: PropTypes.bool.isRequired
};