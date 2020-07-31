import React, { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

let emailError = 1;
let passwordError = 1;

class login extends Component {
  state = {
    email: null,
    password: null,
    error: {
      email: "",
      password: "",
    },
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let error = this.state.error;

    switch (name) {
      case "email":
        error.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        if (error.email === "") {
          emailError = 0;
        } else {
          emailError = 1;
        }

        break;
      case "password":
        error.password =
          value.length < 8
            ? "Password must be at least 8 characters long!"
            : "";
        if (error.password === "") {
          passwordError = 0;
        } else {
          passwordError = 1;
        }
        break;
      default:
        break;
    }

    this.setState({ error, [name]: value });
  };

  render() {
    return (
      <div className="form-container">
        <div className="form-wrapper">
          <div className="login-header">LOG IN</div>
          <form className="login-form" onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email ID"
                onChange={this.handleChange}
                noValidate
              />
              <br />
              {this.state.error.email.length > 0 && (
                <span className="error">{this.state.error.email}</span>
              )}
            </div>
            <div className="password">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={this.handleChange}
                noValidate
              />
              <br />
              {this.state.error.password.length > 0 && (
                <span className="error">{this.state.error.password}</span>
              )}
            </div>
            <Link to="/dashboard">
              <button type="submit" className="login-button" disabled={emailError || passwordError}>Log In</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default login;
