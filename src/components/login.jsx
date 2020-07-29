import React, { Component } from "react";
import './login.css';

class login extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="form-wrapper">
            <div className="header">LOG IN</div>
            <form className="login-form">
                <div className="email">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="email"/>
                </div>
                <div className="password">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder="password"/>
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
      </div>
    );
  }
}

export default login;
