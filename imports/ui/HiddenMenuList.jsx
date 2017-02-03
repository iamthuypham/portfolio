import React, { Component, PropTypes } from 'react';
import HiddenMenu from './HiddenMenu.jsx'

//Styles
import { ListGroup, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'

const presentBarsButtonStyle = {
  display: 'block',
}

export default class HiddenMenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelectAnyMenu: false
    }
  }
  componentDidMount() {
    this.setState({
      userSelectAnyMenu: true
      })
  }
  componentWillReceiveProps(newProps) {
    if (newProps.userSelectAnyMenu === false) {
      this.setState({newStyle: null});
    } else {
      this.setState({newStyle: presentBarsButtonStyle});
    }
  }
  
  render() {
    return (
      <div className='hiddenMenuList' >
        <Button className='barsButton' style={this.state.newStyle}>
          <h3><FontAwesome name='bars' /></h3>
        </Button>
        <ListGroup>
          { this.props.hiddenMenuList ? (
            this.props.hiddenMenuList.map((menu) => (
              <HiddenMenu 
                key={menu._id} 
                menu={menu} 
                // Click={this.selectThisMenu.bind(this, menu._id)} 
                userSelectAnyMenu={this.state.userSelectAnyMenu}
              />
            ))
           ) : ('')
          }
        </ListGroup>
      </div>
    )
  }
}

HiddenMenu.propTypes = {
  userSelectAnyMenu: PropTypes.bool.isRequired,
};