import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'
import d3 from 'd3'
import dataFile from '../db/data1.json'
var extraObj = require('../api/d3-scale-radial.js')

import { Row, Col } from 'react-bootstrap';

    var svg = d3.select("svg")
    var width = 600
    var height = 600
    var innerRadius = 70
    var outerRadius = Math.min(width, height) / 2 - 20

    const x = d3.scaleBand().range([0, 2 * Math.PI]).align(0);
    console.log(extraObj)
    const y = extraObj.scaleRadial().range([innerRadius, outerRadius])
    const z = d3.scaleOrdinal().range(["#8FC4E8","#7198D6","#6C61BF","#834EB7", "#DD2EB2","#FF169A"]) 
    
    var data = dataFile.data
    // Add columns obj to data array
    data.columns = Object.keys(data[0])
    // Add total to each data row
    for (var k=0;k<data.length;k++) {
      for (var i=1,t=0;i<data.columns.length;i++) {
        t += data[k][data.columns[i]]
      }
      data[k].total = t
    }
    console.log(data)
    x.domain(data.map(function(d) { return d.skill; }));
    y.domain([0, d3.max(data, function(d) { return d.total; })]);
    z.domain(data.columns.slice(1));
    console.log(x)
    var stack = d3.stack().keys(data.columns.slice(1))(data)

export default class Skill extends Component {
  constructor(props) {
    super(props);
  }
    
  componentDidMount() {
    
    
    
  }
  
  getArc(d) {
    console.log(d)
    var arc = (d) => { return d3.arc() 
    .innerRadius(y(d[0]))
    .outerRadius(y(d[1]))
    .startAngle(0)
    .endAngle(Math.PI / 2);
    }
    console.log(arc)
  }
  render() {
    var arc = d3.arc()
    return (
      <Row>
        <Col xs={12} md={4}>
          <Col xs={6} md={12}>
            <div id='legend'>
            <svg viewBox="0 0 175 115">
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
          <Col xs={6} md={12}>Hello?</Col>
        </Col>
        <Col xs={12} md={7}>
          <svg id='svg' width={width} height={height} viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet" style={{width:'100%', height:'100%'}}>
        <g transform={'translate('+width/2+','+height/2+')'}>
          <g id='graph'>
          
            { stack.map((aStack, index) => (
              <g fill={z(index)}>
                {aStack.map((d,index) => (
                  <path d={arc({innerRadius: y(d[0]),outerRadius: y(d[1]), startAngle: x(d.data.skill), endAngle: x(d.data.skill)+x.bandwidth(), padAngle: 0.01, padRadius: innerRadius})}>
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

