import React, { Component } from 'react';

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
    this.setState({ result: num1 + num2 });
  };

  subtract = () => {
    const { num1, num2 } = this.state;
    this.setState({ result: num1 - num2 });
  };

  multiply = () => {
    const { num1, num2 } = this.state;
    this.setState({ result: num1 * num2 });
  };

  divide = () => {
    const { num1, num2 } = this.state;
    this.setState({ result: num1 / num2 });
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
