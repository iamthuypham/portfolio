import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

import { Row, Col } from 'react-bootstrap';

export default class Skills extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row className='experience'>
        <Col xs={8}>
          <h2>{this.props.result.area}</h2>
            {this.props.result.breakdown.map((e) => {
              <div>
                <h4>{e.name}</h4>
                <h4>{e.url}</h4>
              </div>
            })}
        </Col>
        <Col xs={4}><year>{this.props.result.hours}</year></Col>
      </Row>
    )
  }
}

Skills.propTypes = {
  result: PropTypes.object.isRequired,
  // userSelectProjectMenu: PropTypes.bool.isRequired
};