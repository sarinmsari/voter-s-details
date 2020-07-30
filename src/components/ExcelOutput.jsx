import React, { Component } from "react";
import Header from "./header";

class ExcelOutput extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Header />
        <div className="output-body">View Output</div>
      </div>
    );
  }
}

export default ExcelOutput;
