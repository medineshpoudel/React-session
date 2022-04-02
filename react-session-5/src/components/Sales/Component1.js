import React, { Component } from "react";

//1st component
export class Component1 extends Component {
  componentWillUnmount() {
    console.log("this has been unmounted");
  }

  render() {
    return <div></div>;
  }
}

export default Component1;
