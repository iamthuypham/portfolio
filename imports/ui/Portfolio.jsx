import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ShowedMenu from './ShowedMenu.jsx'
import Dashboard from './Dashboard.jsx'
import HiddenMenuList from './HiddenMenuList.jsx'

//Styles
import { ListGroup } from 'react-bootstrap';

//Collections
import { MenusCollection } from '../api/MenusCollection.js'
 
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelectAnyMenu: false,
      selectedMenuId: '',
    }
  }
  selectThisMenu(id) {
    //Create a session for this selected menu
    Session.set('selectedMenu', id )
    const selectedId = Session.get('selectedMenu')
    //Change state to reload each menu
    this.setState({
      userSelectAnyMenu: true,
      selectedMenuId: selectedId
    })
  }
  render() {
    let showedMenu = this.props.menus
    let hiddenMenuList = null
    if (this.state.userSelectAnyMenu) {
      console.log('Rendering: ...' + this.state.selectedMenuId)
      hiddenMenuList = showedMenu.filter(function(menu) { 
        console.log('Menu Id:' + menu._id)
        console.log('Selected Id:' + this.state.selectedMenuId)
        menu._id !== this.state.selectedMenuId } )
      console.log(hiddenMenuList)
      showedMenu = showedMenu.filter((menu) => menu._id === this.state.selectedMenuId )
      console.log(showedMenu)
    }
    return (
      <div className='portfolio'>
        <ListGroup>
          { showedMenu.map((menu) => (
            <ShowedMenu 
              key={menu._id} 
              menu={menu} 
              Click={this.selectThisMenu.bind(this, menu._id)} 
              userSelectAnyMenu={this.state.userSelectAnyMenu}
              userSelectHiddenMenu={this.state.userSelectHiddenMenu}
            />
          ))
          }
        </ListGroup>
        { showedMenu.map((menu) => (
          <Dashboard 
            userSelectAnyMenu={this.state.userSelectAnyMenu} 
            key={menu._id} 
            menu={menu}
          />
        ))}
        <HiddenMenuList 
          userSelectAnyMenu={this.state.userSelectAnyMenu} 
          hiddenMenuList={hiddenMenuList}
          Click={this.selectThisMenu.bind(this)}
        />
      </div>
    )
  }
}
Portfolio.propTypes = {
  menus: PropTypes.array.isRequired
};
 
export default createContainer(() => {
  return {
    menus: MenusCollection.find({}).fetch(),
  };
}, Portfolio);