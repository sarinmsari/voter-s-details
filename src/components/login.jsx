import React, { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (error) => {
  let valid = true;
  Object.values(error).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class login extends Component {
  state = {
    email: null,
    password: null,
    error: {
      email: "",
      password: "",
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    if (validateForm(this.state.error)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let error = this.state.error;

    switch (name) {
      case "email":
        error.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        error.password =
          value.length < 8
            ? "Password must be at least 8 characters long!"
            : "";
        break;
      default:
        break;
    }

    this.setState({ error, [name]: value });
  };

  render() {
    return (
      <div className="container">
        <div className="form-wrapper">
          <div className="header">LOG IN</div>
          <form className="login-form" onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                onChange={this.handleChange}
                noValidate
              />
              <br />
              {this.state.error.email.length > 0 && (
                <span className="error">{this.state.error.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={this.handleChange}
                noValidate
              />
              <br />
              {this.state.error.password.length > 0 && (
                <span className="error">{this.state.error.password}</span>
              )}
            </div>
            
              <button type="submit">Log In</button>
            
          </form>
        </div>
      </div>
    );
  }
}

export default login;
