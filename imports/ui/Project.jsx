import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

import { Thumbnail, Button, Modal, Col } from 'react-bootstrap';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelectModal: false
    }
  }
  openModal() {
    this.setState({ userSelectModal: true });
  }
  closeModal() {
    this.setState({ userSelectModal: false})
  }
  render() {
    return (
        <Col xs={12} md={4} className='project'>
          <Thumbnail src={`/images/${this.props.result.logo}`} alt="242x200">
            <h3>{this.props.result.name}</h3>
            <p className='desc'>{this.props.result.description}</p>
            <p>
              <Button onClick={this.openModal.bind(this)}>Sneak Peek</Button>
              <Button >Open App</Button>
            </p>
          </Thumbnail>
          <Modal show={this.state.userSelectModal} onHide={this.closeModal.bind(this)} >
            <Modal.Body>
              blah blah
            </Modal.Body>
          </Modal>
        </Col>
    )
  }
}

Project.propTypes = {
  result: PropTypes.object.isRequired
};