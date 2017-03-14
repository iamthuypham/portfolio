import React from 'react';
// import { createContainer } from 'meteor/react-meteor-data';

//Components
import Project from './Project'
import Experience from './Experience'
import Skill from './Skill'
import Testimony from './Testimony'

//Styles
// import { ListGroup } from 'react-bootstrap';
// import FontAwesome from 'react-fontawesome'

//Collections
import data from '../db/data.json'

const presentDashboardStyle = {
  display: 'block'
}

class Dashboard extends React.Component{
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
      this.setState({newStyle: presentDashboardStyle});
    }
  }
  
  render() {
    let Result
    let results
    let extraClass = ''
    let expId = ''
    if (this.props.userSelectAnyMenu) {
    switch (this.props.menu.title) {
      case 'Projects':
        Result = Project
        results = data.ProjectsCollection
        break
      case 'Experience':
        Result = Experience
        results = data.ExperienceCollection
        extraClass = ' row row-horizon'
        expId = 'allowScroll'
        break
      case 'Skills':
        Result = Skill
        results = data.SkillCollection
        break
      case 'Testimony':
        Result = Testimony
        results = data.TestimonyCollection
        break
      }
    }
    return (
      <div className={'dashboard'+extraClass} id={expId} style={this.state.newStyle}>
        { this.props.userSelectAnyMenu ? (results.map((result) => (
          <Result
            key={result._id} 
            result={result}
          />
        ))):("")
          
        }
      </div>
    )
  }
}

module.exports = Dashboard