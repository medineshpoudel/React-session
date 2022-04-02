import React, { Component } from 'react';

export default class State extends Component {

    constructor(){
        super()

        this.state = {
            firstName: "Ashish",
            lastName: "Pokhrel"
        }
        }
        componentDidMount(){
            console.log("mounted successfully !")
        }
        componentDidUpdate(prevProps, prevState, snapShot){
            console.log("component was updated", prevProps, prevState)
            console.log("snapshot", snapshot)
        }

        shouldComponentUpdate(nextProps, nextState){
            console.log("component should update?",nextProps, nextState)
        }



        handleClick = (event) => {
            this.setState({
                firstName: "Prashant",
                lastName: "Bhatta"
            })
        }
    
  render() {

    return(
        <>
        <div>{this.state.firstName}</div>
        <div>{this.state.lastName}</div>
        <button onClick = {(e)=> this.handleClick(e)} > Change Name </button>
        </>
    ) 
  }
}
