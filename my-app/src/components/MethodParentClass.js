import React, { Component } from 'react'
import MethodChildFunc from './MethodChildFunc'

export default class MethodParentClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false,

    }
  }
  
 handleSignIn =()=>{
    this.setState({
        isLoggedIn: true
    })
 }
 handleSignOut =()=>{
    this.setState({
        isLoggedIn: false
    })
 }


    render() {
    return (
      <div>

        <MethodChildFunc handleSignIn={this.handleSignIn} isLoggedIn={this.state.isLoggedIn} handleSignOut = {this.handleSignOut}/>
      
      </div>
    )
  }
}
