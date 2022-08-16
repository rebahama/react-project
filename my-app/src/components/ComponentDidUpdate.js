import React, { Component } from 'react'

export class ComponentDidUpdate extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       greeting:"Hello"
    }
  }
  updateGreeting=()=>{
    this.setState(prevState=>{
        return{
            greeting: prevState.greeting==='Hello' ? 'Goodbye':'Hello'
        }

    })
  }
  componentDidUpdate(){
    console.log('Updated')
  }
  
    render() {
    return (
      <div>

       <h1> {this.state.greeting}</h1>
       <button onClick={this.updateGreeting}> Update greeting </button>
        <hr/>
      </div>
      
    )
  }
}

export default ComponentDidUpdate