import React, { Component } from 'react';
import Component3 from './component3';
import "./componentBox.styles.scss"
export default class Component1 extends Component {
  render() {
    return(
        <>
        <h1> React Session Assignment 1 !</h1>
        <div className='box1'>
            <div>Props in Component {this.props.id} is being passed by {this.props.name} component !</div>
            <div> This is {this.props.type} based component.</div>
        </div>
        <Component3 id={2} name={"Component 1"} type={"function"}/>
        </>
        
         
         
    )
  }
}
