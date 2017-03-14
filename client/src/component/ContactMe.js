import React from 'react';
// import FontAwesome from 'react-fontawesome'

import {
  Row,
  Col
}
from 'react-bootstrap';

class ContactMe extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount(){
    (function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id="typef_orm",b="https://s3-eu-west-1.amazonaws.com/share.typeform.com/";if(!gi.call(d,id)){js=ce.call(d,"script");js.id=id;js.src=b+"widget.js";q=gt.call(d,"script")[0];q.parentNode.insertBefore(js,q)}})()
  }
  render() {
    return (
      <div className="typeform-widget" data-url="https://rosa118.typeform.com/to/RdL9yW" style={{width: "100%", height: "100%"}}></div>
    )
  }
}

module.exports = ContactMe
