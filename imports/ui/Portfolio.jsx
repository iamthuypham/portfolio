import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Menu from './Menu.jsx'

//Styles
import { ListGroup } from 'react-bootstrap';

//Collections
import { MenusCollection } from '../api/MenusCollection.js'
 
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelectedAnyMenu: false
    }
  }
  selectThisMenu(id) {
    //Create a session for this selected menu
    Session.set('selectedMenu', id )
    //Change state to reload each menu
    this.setState({
      userSelectedAnyMenu: true
    })
  }
  render() {
    // by default, all menus will be showed
    let showedMenus = this.props.menus;
    let hiddenMenus
    // after selecting a menu, showedMenus will be the selected menu
    const selectedMenuId = Session.get('selectedMenu')
    if (this.state.userSelectedAnyMenu) {
      hiddenMenus = showedMenus.filter((menu) => menu._id !== selectedMenuId)
      showedMenus = showedMenus.filter((menu) => menu._id === selectedMenuId)
    }
    return (
      <div className='portfolio'>
        <ListGroup>
          { showedMenus.map((menu) => (
            <Menu 
              key={menu._id} 
              menu={menu} 
              onClick={this.selectThisMenu.bind(this, menu._id)} 
              selected={this.state.userSelectedAnyMenu}
            />
          ))
          }
        </ListGroup>
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

    // let showedMenu = this.props.menus
    // let hiddenMenu
    // if (this.state.status === 'SHOW SELECTED'){
    //   showedMenu = this.props.menus.filter(menu => menu.selected)
    //   hiddenMenu = this.props.menus.filter(menu => !menu.selected)
    // }