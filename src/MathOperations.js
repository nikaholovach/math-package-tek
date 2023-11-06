import React, { Component } from 'react';
import { add, subtract, multiply, divide } from './'; // Import the math functions from the same directory

class MathOperations extends Component {
  state = {
    num1: 0,
    num2: 0,
    result: 0,
  };

  handleInputChange = (event, field) => {
    this.setState({ [field]: Number(event.target.value) });
  };

  add = () => {
    const { num1, num2 } = this.state;
    this.setState({ result: add(num1, num2) }); // Use the imported 'add' function
  };

  subtract = () => {
    const { num1, num2 } = this.state;
    this.setState({ result: subtract(num1, num2) }); // Use the imported 'subtract' function
  };

  multiply = () => {
    const { num1, num2 } = this.state;
    this.setState({ result: multiply(num1, num2) }); // Use the imported 'multiply' function
  };

  divide = () => {
    const { num1, num2 } = this.state;
    this.setState({ result: divide(num1, num2) }); // Use the imported 'divide' function
  };

  render() {
    const { num1, num2, result } = this.state;

    return (
      <div>
        <h1>Math Operations</h1>
        <input
          type="number"
          value={num1}
          onChange={(e) => this.handleInputChange(e, 'num1')}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => this.handleInputChange(e, 'num2')}
        />
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
        <button onClick={this.multiply}>Multiply</button>
        <button onClick={this.divide}>Divide</button>
        <p>Result: {result}</p>
      </div>
    );
  }
}

export default MathOperations;
