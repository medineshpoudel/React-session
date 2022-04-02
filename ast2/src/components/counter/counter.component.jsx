import React, { Component } from 'react';
import "./counter.styles.scss"
export default class Counter extends Component {
    state={
        counter: 0
    }

    handleDecrement = (e) => {
        e.preventDefault()
        this.setState({
            counter: this.state.counter - 1
        })
    }

    handleIncrement = (e) => {
        e.preventDefault()
        this.setState({
            counter: this.state.counter + 1
        })
    }
  render() {
    return (
        <>
        <div className='counter-container'>
        <h1>Counter</h1>
        <h2>{this.state.counter}</h2>
        <button className = "counterButton" onClick={(e) => this.handleDecrement(e)}> - </button>
        <button className = "counterButton" onClick={(e) => this.handleIncrement(e)}> + </button>
        </div>
        </>
    )
  }
}
