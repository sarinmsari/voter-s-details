import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

class dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="left-section">Dashboard</div>
          <div className="right-section">
            <Link to="/login">
              <button className="logout">Log Out</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default dashboard;
