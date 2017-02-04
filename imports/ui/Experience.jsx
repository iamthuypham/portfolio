import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

import { Media, Button, Modal } from 'react-bootstrap';

export default class Experience extends Component {
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
  openModal() {
    this.setState({ userSelectModal: true });
  }
  closeModal() {
    this.setState({ userSelectModal: false})
  }
  render() {
    return (
      <Media onClick={this.openModal.bind(this)}>
      <h1>Experience Page</h1>
        <Media.Left>
          <img width={64} height={64} src="" alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>{this.props.project.name}</Media.Heading>
          <p>{this.props.project.description}</p>
          <Modal show={this.state.userSelectModal} onHide={this.closeModal.bind(this)} >
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

Experience.propTypes = {
  project: PropTypes.object.isRequired,
  // userSelectProjectMenu: PropTypes.bool.isRequired
};