import React from 'react';
import ShowedMenu from './ShowedMenu'
import Dashboard from './Dashboard'
import HiddenMenuList from './HiddenMenuList'

//Styles
import { ListGroup } from 'react-bootstrap';

//Collections
import data from '../db/data.json'
 
class Portfolio extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userSelectAnyMenu: false,
      selectedMenuId: '',
    }
  }
  selectThisMenu(id) {
    //Create a session for this selected menu
    // Session.set('selectedMenu', id._str )
    // const selectedIdStr = Session.get('selectedMenu')
    //Change state to reload each menu
    this.setState({
      userSelectAnyMenu: true,
      selectedMenuId: id
    })
  }
  render() {
    let showedMenu = data.MenusCollection
    console.log(showedMenu)
    let hiddenMenuList = null
    if (this.state.userSelectAnyMenu) {
      const selectedMenuId = this.state.selectedMenuId
    
      hiddenMenuList = showedMenu.filter((menu) => menu._id !== selectedMenuId )
      showedMenu = showedMenu.filter((menu) => menu._id === selectedMenuId )
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
        <Dashboard 
          userSelectAnyMenu={this.state.userSelectAnyMenu} 
          menu={showedMenu[0]}
        />
        <HiddenMenuList 
          userSelectAnyMenu={this.state.userSelectAnyMenu} 
          hiddenMenuList={hiddenMenuList}
          Click={this.selectThisMenu.bind(this)}
        />
      </div>
    )
  }
}

module.exports = Portfolio