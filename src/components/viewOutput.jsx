import React, { Component } from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import Header from "./header";
import "./viewOutput.css";

class viewOutput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: props.location.file,
      rows: "",
      cols: "",
    };
  }

  fileHandler = () => {
    let fileObj = this.state.file;
    ExcelRenderer(fileObj, (error, resp) => {
      if (error) {
        console.log(error);
      } else {
        this.setState({
          cols: resp.cols,
          rows: resp.rows,
        });
      }
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="view-output">
          hi
          {this.fileHandler}
          <div>
            {this.state.rows && (
              <OutTable
                data={this.state.rows}
                columns={this.state.cols}
                tabelClassName="ExcelTable"
                tableHeaderRowClassName="Heading"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default viewOutput;
