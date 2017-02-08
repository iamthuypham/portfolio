import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

import { Row, Col } from 'react-bootstrap';

export default class Project extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='block'>
      <Col xs={12} md={3} className='experience center-middle'>
        <div className='titleBlock'>
          <div className='title' ></div>
          <div>
            <h3>{this.props.result.title}</h3>
            <h4>{this.props.result.organization}</h4>
          </div>
        </div>
      </Col>
      <Col xs={12} md={1} className='dots'>
          <div></div>
          <div></div>
          <div></div>
      </Col>
      </div>
    )
  }
}

Project.propTypes = {
  result: PropTypes.object.isRequired
};