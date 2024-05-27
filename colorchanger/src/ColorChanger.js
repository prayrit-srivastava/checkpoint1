import React, { Component } from "react";

class ColorChanger extends Component {
  state = { color: "red" };

  componentDidMount() {
    this.intervalID = setInterval(this.changeColor, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  changeColor = () => {
    this.setState((prevState) => ({
      color: prevState.color === "red" ? "blue" : "red",
    }));
  };

  render() {
    return (
      <div className = "con" style={{ backgroundColor: this.state.color, height: "100vh" }}>
        <h1>The color is {this.state.color}</h1>
      </div>
    );
  }
}

export default ColorChanger;
