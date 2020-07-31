import React, { Component } from "react";
import Header from "./header";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import excelFile from "./excelFiles/PINARAYI-2-2.xlsx";
import "./viewOutput.css";

class viewOutput extends Component {
  state = {
    rows: "",
    cols: "",
  };

  fileHandler = () => {
    let fileObj = excelFile;
    console.log(fileObj);
    ExcelRenderer(fileObj, (error, resp) => {
      if (error) {
        console.log(error);
      } else {
        this.setState({
          cols: resp.cols,
          rows: resp.rows,
        });
        return (
          <div>
            <OutTable
              data={this.state.rows}
              columns={this.state.cols}
              tableClassName="ExcelTable2007"
              tableHeaderRowClass="heading"
            />
          </div>
        );
      }
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="view-output">{this.fileHandler()}</div>
      </div>
    );
  }
}

export default viewOutput;
