import React, { Component } from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import "./dashboard.css";
import Header from './header';

class dashboard extends Component {
  state = {
    rows: "",
    cols: "",
  };

  fileHandler = (event) => {
    let fileObj = event.target.files[0];
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
      <div className="dashboard-container">
        <Header/>
        <div className="dashboard-body">
          <div className="excel-upload">
            <p>Upload Excel file</p>
            <div className="excel-input">
              <input
                className="excel-input-button"
                type="file"
                onChange={this.fileHandler}
                style={{ padding: "10px" }}
              />
            </div>
            <div className="excel-output">
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
      </div>
    );
  }
}

export default dashboard;
