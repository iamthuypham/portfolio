import React, { PropTypes } from 'react';
// import FontAwesome from 'react-fontawesome'

import { Thumbnail, Button, Modal, Col, Image } from 'react-bootstrap';
// import blankHand from '../public/images/blankHand.png'

class Project extends React.Component {
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
          <Thumbnail src={`/images/${this.props.result.logo}`}>
            <h3>{this.props.result.name}</h3>
            <p className='desc'>{this.props.result.description}</p>
            <p>
              {this.props.result.screen ? (
                <Button onClick={this.openModal.bind(this)}>Sneak Peek</Button>
              ):("")}
              <Button href={this.props.result.url} target="_blank">Open Link</Button>
            </p>
          </Thumbnail>
          <Modal show={this.state.userSelectModal} onHide={this.closeModal.bind(this)} className='modalLayer'>
            <Image id='blankHand' src='/images/blankHandCut.png'/>
            <div className='screenWrapper'>
              <Image className="screen" src={`/images/${this.props.result.screen}`} />
            </div>
            <div id="closeButton" onClick={this.closeModal.bind(this)}>×</div>
          </Modal>
        </Col>
    )
  }
}

Project.propTypes = {
  result: PropTypes.object.isRequired
};

module.exports = Project