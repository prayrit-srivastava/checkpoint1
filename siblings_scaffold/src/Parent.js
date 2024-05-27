import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// SiblingA Component
class SiblingA extends Component {
  state = { name: '' };

  handleChange = (event) => {
    const name = event.target.value;
    this.setState({ name });
  };




  render() {
    return (
      <div>
        <h2>Sibling A</h2>
        <input type="text" onChange={this.handleChange} placeholder="Enter name" />
      </div>
    );
  }
}

// SiblingB Component
class SiblingB extends Component {
  render() {
    return (
      <div>
        <h2>Sibling B</h2>
        <p>Name: </p>
      </div>
    );
  }
}

// Parent Component
export default class Parent extends Component {


  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <SiblingA/>
        <SiblingB/>
      </div>
    );
  }
}
