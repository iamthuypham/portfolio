import React, { Component, PropTypes } from 'react';
import HiddenMenu from './HiddenMenu.jsx'

//Styles
import { ListGroup, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'

const presentBarsButtonStyle = {
  marginBottom: '3vh',
  WebkistTransition: 'all 1.5s', /* Safari */
  transition: 'all 1.5s',
}

const presentHiddenMenuListStyle = {
  // marginBottom: '3vh',
  display: 'block'
  // WebkistTransition: 'all 1.5s', /* Safari */
  // transition: 'all 1.5s',
}

export default class HiddenMenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelectHiddenMenuList: false
    }
  }
  userSelectHiddenMenuList(){
    this.setState({
      userSelectHiddenMenuList: !this.state.userSelectHiddenMenuList
    })
  }
  componentWillReceiveProps(newProps) {
    if (newProps.userSelectAnyMenu === false) {
      this.setState({revealBarsButton: null});
    } else {
      this.setState({revealBarsButton: presentBarsButtonStyle});
    }
  }
  onToggle(id){
    this.setState({
      userSelectHiddenMenuList: false
    })
    this.props.Click(id)
  }
  render() {
    return (
      <div className='hiddenMenuList' style={this.state.revealBarsButton}>
        { 
        this.state.userSelectHiddenMenuList && this.props.hiddenMenuList ? (
          <ListGroup>
           {  this.props.hiddenMenuList.map((menu) => (
              <HiddenMenu 
                key={menu._id} 
                menu={menu}
                Click={this.onToggle.bind(this, menu._id)}
              />
            ))
           }
          </ListGroup>
           ) : ('')
        }
        <Button className='barsButton center-middle' onClick={this.userSelectHiddenMenuList.bind(this)}>
          <FontAwesome name='bars' className='icon'/>
        </Button>
      </div>
    )
  }
}

HiddenMenuList.propTypes = {
  userSelectAnyMenu: PropTypes.bool.isRequired,
  hiddenMenuList: PropTypes.array
};