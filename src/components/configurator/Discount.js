import React from 'react'
import { Component } from 'react'
import '../Modal.css'

class Discount extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('Kupon: ' + this.state.value)
        event.preventDefault();
    }


    render (){
        return (
        <form className="discount_input" onSubmit={this.handleSubmit}>
            <input type="text" 
                value={this.state.value} 
                onChange={this.handleChange}
            ></input>
            <input type="submit" value="Submit" />
        </form>
        )   
    }
   
}

export default Discount
