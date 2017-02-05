import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

//Components
import Project from './Project.jsx'
import Experience from './Experience.jsx'
import Skill from './Skill.jsx'
import Testimony from './Testimony.jsx'

//Styles
import { ListGroup } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'

//Collections
import { ProjectsCollection } from '../api/ProjectsCollection'
import { ExperienceCollection } from '../api/ExperienceCollection'
import { SkillsCollection } from '../api/SkillsCollection'
import { TestimonyCollection } from '../api/TestimonyCollection'

const presentDashboardStyle = {
  display: 'block'
}

class Dashboard extends Component {
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
    if (this.props.userSelectAnyMenu) {
      console.log("This is undefined ? " + this.props.menu)
    switch (this.props.menu.title) {
      case 'Projects':
        Result = Project
        results = this.props.projects
        break
      case 'Experience':
        Result = Experience
        results = this.props.experience
        break
      case 'Skills':
        Result = Skill
        results = this.props.skills
        break
      case 'Testimony':
        Result = Testimony
        results = this.props.testimony
        break
      }
    }
    return (
      <div className='dashboard' style={this.state.newStyle}>
        { this.props.userSelectAnyMenu ? (results.map((result) => (
          <Result
            key={result._id} 
            result={result}
          />
        ))):('')
          
        }
      </div>
    )
  }
}

Dashboard.propTypes = {
  userSelectAnyMenu: PropTypes.bool.isRequired,
  projects: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired,
  skills: PropTypes.array.isRequired,
  testimony: PropTypes.array.isRequired
};
 
export default createContainer(() => {
  return {
    projects: ProjectsCollection.find({}).fetch(),
    experience: ExperienceCollection.find({}).fetch(),
    skills: SkillsCollection.find({}).fetch(),
    testimony: TestimonyCollection.find({}).fetch()
  };
}, Dashboard);