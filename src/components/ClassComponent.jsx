import React, { Component } from 'react';

class ClassComponent extends  Component {

    constructor(props) {
        super(props);
        // Initialize the state with a count of 0
        this.state = {
          count: 0,
          name:'class component counter'
        };
      }

      increment = () => {
        this.setState({ count: this.state.count + 1 });
      };
    
      // Method to decrement the count
      decrement = () => {
        this.setState({ count: this.state.count - 1 });
      };
    

      render() {

        const {title}=this.props
        return (
          <div>
            <h1 style={{color:'red',fontSize:'14px'}}>{title}</h1>
            <h1>Counter: {this.state.count}</h1> {/* Display the current state */}
            <button onClick={this.increment}>Increment</button> {/* Increment button */}
            <button onClick={this.decrement}>Decrement</button> {/* Decrement button */}
          </div>
        );
      }

}

export default ClassComponent;