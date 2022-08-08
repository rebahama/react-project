import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      isLoggedIn: false
    }
  }

  // if isloaded is true then render data loaded else render loading
  render() {
    return (
      <div>

        <h1>{this.state.isLoaded ? 'Data loaded' : 'Loading....'}</h1>
        {this.state.isLoggedIn ? (
          <div>
            <p> Welocme complete the steps below</p>
            <ol>
              <li>Confirm email </li>
              <li>Confirm profile </li>
              <li> Subscribe</li>
            </ol>
          </div>
        ) : (<p> Please sign in</p>)}

      </div>
    )
  }
}

export default ConditionalRenderingClass