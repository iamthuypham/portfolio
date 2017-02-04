import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

import { Row, Col } from 'react-bootstrap';

export default class Testimony extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row className='testimony'>
        <Col xs={8} style={{color: 'black'}}>
          This is Testimony page
        </Col>
        <Col xs={4}><year>{this.props.result.something}</year></Col>
      </Row>
    )
  }
}

Testimony.propTypes = {
  result: PropTypes.object.isRequired,
  // userSelectProjectMenu: PropTypes.bool.isRequired
};