import React, { Component } from 'react'

export class UnControlledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName=React.createRef();
        this.Category=React.createRef();
        this.Comments=React.createRef();
    }


    handleSubmit = (event) => {
        console.log(this.inputName.current.value)
        event.preventDefault();

    }
    render() {
        return (
            <div>
                <hr/>
                <h1> Uncontrolled form</h1>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input
                            id="id-name"
                            name="name"
                            type="text"
                            defaultValue="John doe"
                            ref={this.inputName}
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query category:</label>
                        <select
                            id="id-category"
                            name="category"
                            ref={this.Category}
                        >
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea
                            id="id-comments"
                            name="comments"
                            ref={this.Comments}
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UnControlledForm