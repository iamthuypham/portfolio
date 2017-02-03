import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Project from './Project.jsx'

//Styles
import { ListGroup } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'

//Collections
import { ProjectsCollection } from '../api/ProjectsCollection'

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
    return (
      <div className='dashboard' style={this.state.newStyle}>
        { this.props.projects.map((project) => (
          <Project
            key={project._id} 
            project={project} 
            userSelectProjectMenu={this.state.userSelectAnyMenu}
            // Click={this.selectThisMenu.bind(this, project._id)} 
          />
        ))}
      </div>
    )
  }
}

Dashboard.propTypes = {
  userSelectAnyMenu: PropTypes.bool.isRequired,
  projects: PropTypes.array.isRequired
};
 
export default createContainer(() => {
  return {
    projects: ProjectsCollection.find({}).fetch(),
  };
}, Dashboard);