import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

import { Row, Col } from 'react-bootstrap';

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
      <Row className='experience'>
        <Col xs={8}>
          <h2>{this.props.result.title}</h2>
          <h4>{this.props.result.organization}</h4>
        </Col>
        <Col xs={4}><year>{this.props.result.year}</year></Col>
      </Row>
    )
  }
}

Project.propTypes = {
  result: PropTypes.object.isRequired,
  // userSelectProjectMenu: PropTypes.bool.isRequired
};