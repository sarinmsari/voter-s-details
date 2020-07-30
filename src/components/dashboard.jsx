import axios from "axios";
import React, { Component } from "react";
import Header from "./header";
import "./dashboard.css";

class Dashboard extends Component {
  state = {
    selectedFile: null,
  };
  fileData = () => {
    if (this.state.selectedFile) {
      if (
        this.state.selectedFile.type !==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        return (
          <div className="upload-error">
            <p>Upload an Excel file!</p>
          </div>
        );
      } else {
        return (
          <div className="file-details">
            <button onClick={this.onFileUpload}>Upload</button><br/>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
            <p>File Type: {this.state.selectedFile.type}</p>
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
          </div>
        );
      }
    } else {
      return (
        <div className="upload-error">
          <p>Choose a file to upload!</p>
        </div>
      );
    }
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    const formData = new FormData();

    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    console.log(this.state.selectedFile);

    axios.post("api/uploadfile", formData);
  };

  render() {
    return (
      <div>
        <Header />
        <div className="dashboard-body">
          <h3>Upload Excel file</h3>
          <div className="excel-input">
            <input type="file" id="input-file" onChange={this.onFileChange} />
            
          </div>
          {this.fileData()}
        </div>
      </div>
    );
  }
}

export default Dashboard;
