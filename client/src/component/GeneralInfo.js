import React from 'react';
import { Link } from 'react-router';
import { Image, Button, Row, Col } from 'react-bootstrap';
import data from '../db/data.json';
 
class GeneralInfo extends React.Component {
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
              <Button className='main-btn'><a href='https://rosa118.typeform.com/to/RdL9yW'>Hire Me!</a></Button>
            </Col>
            <Col xs={6}> 
              <Button><Link to='/portfolio'>Portfolio</Link></Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

module.exports = GeneralInfo