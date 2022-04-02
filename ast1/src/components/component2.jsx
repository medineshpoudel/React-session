import React, { Component } from 'react';
import Component4 from './component4';

export default class Component2 extends Component {
  render() {
    return( 
      <>
      <div className='box1'>
          <div>Props in Component {this.props.id} is being passed by {this.props.name} Component !</div>
          <div> This is {this.props.type} based component.</div>
      </div>
      <Component4 id={4} name={"Component 2"} type={"function"}/>
      </>
    )
  }
}
