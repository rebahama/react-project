import React from "react";


class StatefulGreeting extends React.Component {
   
   
   constructor(props) {

    super(props);
    this.state={

        introduction:"Hello",
        buttontext:"Exit",
    };

   }
   
   
   
   
    render() {
        return (
        <div>
            <h1>{this.state.introudction} Hello my name is {this.props.name} {this.props.greeting}</h1>
            <button>{this.state.buttontext} </button>
        </div>
        
        )
    }

}

export default StatefulGreeting;