import React, { Component } from "react";

import { Component1 } from "./Component1";

//Stateful vs Stateless Component

//Stateful
export class States extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "Avinash",
      lastName: "Mishra",
     
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("this was mounted");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    
    console.log("component was updated", prevProps, prevState);
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log("component should update?", nextProps, nextState);

  //     if (nextState.firstName !== this.state.firstName) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  shouldComponentUpdate(){
    
  }

  handleClick = () => {
    console.log("this is called");
    this.setState({
      firstName: "John",
      lastName: "Wick",
    });
   
  };

  render() {
    return (
      <div>
        <div>Counter</div>
        <span
          style={{
            fontSize: 70,
          }}
        >
          0
        </span>
        <div>
          <button style={{ fontSize: "27px" }}>+</button>
          <button style={{ marginLeft: "27px", fontSize: "27px" }}>-</button>
          <table>
            <tr>
              
            </tr>

          </table>
        </div>
      </div>
    );
  }
}
