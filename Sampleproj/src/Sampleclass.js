import React, { Component } from "react";

class Samplecl extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  onclick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  onreset = () => {
    this.setState({
      count: 0
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.onclick}>Add</button>
        <button onClick={this.onreset}>Reset</button>
      </div>
    );
  }
}

export default Samplecl;
