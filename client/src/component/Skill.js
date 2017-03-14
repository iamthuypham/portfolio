import React, { PropTypes } from 'react';
import * as d3 from "d3"
import d3_data from '../db/d3_data.json'
var extraObj = require('../asset/d3-scale-radial.js')

import { Row, Col } from 'react-bootstrap';

    var svg = d3.select("svg")
    var width = 600
    var height = 600
    var innerRadius = 70
    var outerRadius = Math.min(width, height) / 2 - 20

    const x = d3.scaleBand().range([0, 2 * Math.PI]).align(0);
    // console.log(extraObj)
  const y = extraObj.scaleRadial().range([innerRadius, outerRadius])
  const z = d3.scaleOrdinal().range(["#8FC4E8","#7198D6","#6C61BF","#834EB7", "#DD2EB2","#FF169A"]) 
    
    var data = d3_data.data
    // Add columns obj to data array
    data.columns = Object.keys(data[0])
    // Add total to each data row
    for (var k=0;k<data.length;k++) {
      for (var i=1,t=0;i<data.columns.length;i++) {
        t += data[k][data.columns[i]]
      }
      data[k].total = t
    }
    // console.log(data)
    x.domain(data.map(function(d) { return d.skill; }));
    y.domain([0, d3.max(data, function(d) { return d.total; })]);
    z.domain(data.columns.slice(1));
    // console.log(x)
    var stack = d3.stack().keys(data.columns.slice(1))(data)

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickSkill: '',
      clickYear:'',
      totalHours: 0,
      thisYearHours: 0,
      yOE: 0
    }
  }
  showDetail(d,index) {
    // console.log(d)
    var yearCount = -1
    // var thisYearHours = d[1] - d[0]
    var clickYear = ''
    for(var key in d.data){
      // console.log(d.data[key])
      if(d.data[key] !== 0 && typeof(d.data[key]) === 'number' && key !== 'total'){
        yearCount += 1 
      }
      // console.log(yearCount)
    }
    switch (index) {
      case 0: clickYear = "first learned"; break;
      case 1: clickYear = "first"; break;
      case 2: clickYear = "second"; break;
      case 3: clickYear = "third"; break;
    }
    
    this.setState({
      clickSkill: d.data.skill,
      clickYear: clickYear,
      totalHours: d.data.total,
      thisYearHours: d[1] - d[0],
      yOE: yearCount,
    })
  }
  render() {
    var arc = d3.arc()
    let detailText
    let defaultText = (<p style={{color: '#999'}}>Click on graph to view some details...</p>)
    let expert = (
      <p>Thuy has <strong>{this.state.yOE} year(s) of experience </strong> in applying <strong>{this.state.clickSkill}</strong>. In the <strong>{this.state.clickYear}</strong> year, she has spent <strong>{this.state.thisYearHours} hours</strong> using it. So far, she has accumulated <strong>{this.state.totalHours} hours</strong>.</p>
      )
    let newbie = (
      <p>When Thuy {this.state.clickYear} about <strong>{this.state.clickSkill}</strong>, she spent <strong>{this.state.thisYearHours} hours</strong> using it. Today she has accumulated <strong>{this.state.totalHours} hours </strong> in this skill.</p>
      )
    if (this.state.clickSkill===''){
      detailText = defaultText
    }
    
    if (this.state.clickSkill){
      if(this.state.clickYear==='first learned'){
        detailText = newbie
      } else {
        detailText = expert
      }
    }
    return (
      <Row>
        <Col xs={12} md={5} id='infoCol'>
          <Col xs={5} md={12}>
            <div id='legend'>
              <svg>
                <g>
                  { data.columns.slice(1).map((column, i)=>(
                    <g transform={"translate(0," +(i*20)+ ")"}>
                      <rect width={18} height={18} fill={z(i)}></rect>
                      <text x={24} y={9} dy="0.35em">{column} {i>0?"of experience":"experience"}</text>
                    </g>
                  ))}
                </g>
              </svg>
            </div>
          </Col>
          <Col xs={7} md={12}>
            <div id='detail'>
              <div>
                {detailText}
              </div>
            </div>
          </Col>
        </Col>
        <Col xs={12} md={7}>
          <svg id='graph' width={width} height={height} viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet" style={{width:'100%', height:'100%'}}>
        <g transform={'translate('+width/2+','+height/2+')'}>
          <g id='graph'>
          
            { stack.map((aStack, gIndex) => (
              <g fill={z(gIndex)}>
                {aStack.map((d,index) => (
                  <path d={arc({innerRadius: y(d[0]),outerRadius: y(d[1]), startAngle: x(d.data.skill), endAngle: x(d.data.skill)+x.bandwidth(), padAngle: 0.01, padRadius: innerRadius})} key={index} onClick={this.showDetail.bind(this, d, gIndex)}>
                  </path>
                ))}   
              </g>
                  
            ))}
          </g>
          <g id='label'>
            { stack.map((aStack) => {
              return aStack.map((d,index) => (
                  <g textAnchor='middle' transform={"rotate(" + ((x(d.data.skill) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")translate(" + (outerRadius + 10) + ",0)"}>
                    <text transform={(x(d.data.skill) + x.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI ? "rotate(90)translate(0,0)" : "rotate(-90)translate(0,5)"}>{d.data.skill}</text>
                  </g>
              ))  
            })}
          </g>
          <g textAnchor='middle'>
            {y.ticks(3).slice(1).map((r)=>(
              <g>
                <circle fill='none' stroke='#000' r={y(r)}></circle>
                <text y={-y(r)} dy='0.35em' fill='none' stroke='#fff' strokeWidth={5}>{r} hrs</text>
                <text y={-y(r)} dy='0.35em'>{r} hrs</text>
              </g>
            ))}
          </g>  
        </g>
      </svg>
        </Col>
      </Row>
      
    )
  }
}

Skill.propTypes = {
  result: PropTypes.object.isRequired,
  // userSelectProjectMenu: PropTypes.bool.isRequired
};

module.exports = Skill