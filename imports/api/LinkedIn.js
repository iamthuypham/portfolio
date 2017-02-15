import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'

export default class LinkedInCall extends Component {
    constructor(props) {
    super(props);
    this.state = {
      response: ''
        }
    }
    componentDidMount(){
        Meteor.call('checkTwitter', (error, result) => {
            if(!error){
                this.setState({
                    response: result.content
                })
            } else {
                console.log(error)
            }
        })
    }
    render() {
    return (
        <div style={{color: 'black'}} dangerouslySetInnerHTML={{__html: this.state.response}}></div>
    )}
}