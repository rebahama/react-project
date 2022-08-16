import React, { Component } from 'react'

export class ComponentDidMount extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       data:'loading...'
    }
  
}

getData(){
    setTimeout(()=>{
        this.setState({
            data:'loading completed'
        })
    },3000)
}

componentDidMount(){
    this.getData()
}

    render() {
    return (
      <div>
        
        
        <h1> {this.state.data}</h1>
        <hr/>
        
        </div>
    )
  }
}

export default ComponentDidMount