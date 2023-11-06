import React, { Component } from 'react';

class App extends Component {
  state = {
    num1: 0,
    num2: 0,
    result: 0,
  };

  handleInputChange = (event, field) => {
    this.setState({ [field]: Number(event.target.value) });
  };

  handleOperation = (operation) => {
    const { num1, num2 } = this.state;

    switch (operation) {
      case 'add':
        this.setState({ result: num1 + num2 });
        break;
      case 'subtract':
        this.setState({ result: num1 - num2 });
        break;
      case 'multiply':
        this.setState({ result: num1 * num2 });
        break;
      case 'divide':
        this.setState({ result: num1 / num2 });
        break;
      default:
        break;
    }
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
        <button onClick={() => this.handleOperation('add')}>Add</button>
        <button onClick={() => this.handleOperation('subtract')}>Subtract</button>
        <button onClick={() => this.handleOperation('multiply')}>Multiply</button>
        <button onClick={() => this.handleOperation('divide')}>Divide</button>
        <p>Result: {result}</p>
      </div>
    );
  }
}

export default App;
