import React, { Component } from "react";

class Test extends Component {
  constructor() {
    super();
    this.state = {
      info: "Loading",
    };
  }
  componentDidMount = async () => {
    const res = await fetch("http://localhost:8000/builds/1");
    const data = await res.json();
    const info = Object.keys(data.build).map((e) => {
      return `${e}: ${data.build[e]}`;
    });
    this.setState({ info: info });
  };

  render() {
    return <div>{this.state.info}</div>;
  }
}

export default Test;
