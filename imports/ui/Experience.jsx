import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

import { Row, Col } from 'react-bootstrap';

export default class Experience extends Component {
  constructor(props) {
    super(props);
  }
  scrollToCol(e) {
    var element = document.getElementById('allowScroll');
    e.deltaY > 0 ? element.scrollLeft += 50 : element.scrollLeft -= 50
  }
  render() {
    return (
      <Col xs={12} md={6} className='experience center-middle' onWheel={this.scrollToCol}>
        <year>{this.props.result.year}</year>
        <div className='titleBlock'>
          <div className='title' ></div>
          <div>
            <h3>{this.props.result.title}</h3>
            <h4>{this.props.result.organization}</h4>
          </div>
        </div>
      </Col>
    )
  }
}

Experience.propTypes = {
  result: PropTypes.object.isRequired
};