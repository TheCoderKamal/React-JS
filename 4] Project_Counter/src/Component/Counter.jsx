import React, { Component } from 'react'
import '../index.css'

export default class Counter extends Component {

    // Constructor
    constructor(props) {
        super();
        this.state = {
            count: 0
        };
    }

    // Method to increment the count
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    // Method to decrement the count
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    // Method to reset the count to 0
    reset = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        return (

        // Couter HTML
        <div className='container'>
            <h1>Counter</h1>
            <h2 className='counter'>{this.state.count}</h2>
            <div className="buttons">
                <button className='button' onClick={this.increment}>
                    <i class="ri-add-line"></i>
                </button>
                <button className='button' onClick={this.decrement}>
                    <i class="ri-subtract-line"></i>
                </button>
                <button className='button' onClick={this.reset}>
                    <i class="ri-refresh-line"></i>
                </button>
            </div>
        </div>
        )
    }
}
