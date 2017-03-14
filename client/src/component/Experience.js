import React, { PropTypes } from 'react';
import '../bootstrap-horizontal.css'

import { Col, Image } from 'react-bootstrap';

class Experience extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
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
            <h4>{this.props.result.dateFrom} - {this.props.result.dateTo}</h4>
          </div>
        </div>
        <ul>
          { this.props.result.detail ? (this.props.result.detail.map((item) => (
            <li key={item.key}>{Object.values(item)}</li>
          ))):("")
          }
        </ul>
        { this.props.result.screen ? 
          (<Image src={`/images/${this.props.result.screen}`} />)
          :("")
        } 
      </Col>
    )
  }
}

Experience.propTypes = {
  result: PropTypes.object.isRequired
};

module.exports = Experience