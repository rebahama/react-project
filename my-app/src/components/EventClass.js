import React, { Component } from 'react'

export class EventClass extends Component {
    
    ClickHandler(){
        console.log("Clicked the class event")
    }
    
    
    render() {
        return (
            <div><button onClick={this.ClickHandler}> Click me - Eventclass</button></div>
        )
    }
}

export default EventClass