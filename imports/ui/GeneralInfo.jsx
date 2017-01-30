import React, { Component, PropTypes } from 'react';
import {Image, Button, Row, Col} from 'react-bootstrap'
import data from '../db/data.json'
 
export default class GeneralInfo extends Component {
  render() {
    return (
      <div className='general-info'>
        <div className='avatar center-middle'>
          <Image src={`/images/${data.generalInfo.avatar}`} circle thumbnail />
        </div>
        <div className='name center-middle'>
          <h1>{data.generalInfo.name}</h1>
          <h3>{data.generalInfo.title}</h3>
        </div>
        <div className='action center-middle'>
        <Row>
          <Col xs={6}> 
            <Button className='main-btn'>Hire Me!</Button>
          </Col>
          <Col xs={6}> 
            <Button>Portfolio</Button>
          </Col>
          </Row>
        </div>
      </div>
    );
  }
}
 
GeneralInfo.propTypes = {
//   info: PropTypes.object.isRequired,
};