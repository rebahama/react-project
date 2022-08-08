import React, { Component } from 'react'
import UserData from './UserData'
import UserMessage from './UserMessage'

export class NestingCompClass extends Component {
constructor(props) {
  super(props)

  this.state = {
     isLoaded: false,
     isLoggedIn: true
  }
}
    
  // if isloaded is true then render data loaded else render loading
render() {
    return (
      <div>
        <UserData isLoaded={this.state.isLoaded}/>
        <UserMessage isLoggedIn={this.state.isLoggedIn}/>
      </div>
    )
  }
}

export default NestingCompClass