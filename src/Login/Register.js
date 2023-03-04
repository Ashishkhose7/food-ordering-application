import React, { Component } from "react";
import Header from "../Header";
import "./loginpage.css";
const url = "https://logintest-mbwb.onrender.com/api/auth/register";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      phone: 91
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkout = () => {
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(this.props.history.push("/login"));
  };

  render() {
    return (
      <>
        <Header />
        <div
          className="container mx-auto my-5 rounded-3 d-flex "
          id="signuppage"
          style={{ height: "560px", width: "70%" }}
        >
          <div className="leftc h-75 w-50 "></div>
          <div className="rightc h-75 w-50 d-flex align-items-center">
            <div className="card border-0 px-5 py-4 h-75 w-100">
              <h3 className="fw-bold mb-2 text-center">Sign Up</h3>
              <div className="form-group bg-white mx-auto w-100 mt-3 border rounded-3 d-flex ps-2 align-items-center">
                <label className="form-label m-0">
                  <i className="bi bi-person-fill fs-5"></i>
                </label>
                <input
                  type="text"
                  className="form-control shadow-none border-0"
                  id="fname"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="First and last name"
                  required
                />
              </div>
              <span id="nameout" className="text-danger"></span>
              <div className="form-group bg-white mx-auto w-100 mt-3 border rounded-3 d-flex ps-2 align-items-center">
                <label className="form-label m-0">
                  <i className="bi bi-telephone-plus-fill fs-5"></i>
                </label>
                <input
                  type="text"
                  className="form-control shadow-none border-0"
                  id="phonenum"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  placeholder="Mobile number"
                  required
                />
              </div>
              <div className="form-group bg-white mx-auto w-100  mt-3 border rounded-3 d-flex ps-2 align-items-center">
                <label className="form-label m-0">
                  <i className="bi bi-envelope-fill fs-5"></i>
                </label>
                <input
                  type="email"
                  className="form-control shadow-none border-0"
                  id="emails"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group bg-white border mx-auto mt-3 rounded-3 w-100 d-flex ps-2 align-items-center">
                <label className="form-label m-0">
                  <i className="bi bi-lock-fill pass-icon fs-5"></i>
                </label>
                <input
                  type="password"
                  id="passwords"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="form-control  shadow-none border-0"
                  placeholder="Create password"
                  minlength="6"
                  required
                />
              </div>
              <div className="d-flex justify-content-between">
                <span
                  id="passouts"
                  className="text-secondary"
                  style={{ fontSize: "12px" }}
                >
                  Password must be at least 6 characters.
                </span>
              </div>
              <button
                className="btn btn-success d-block m-auto mt-3 mb-3 w-100"
                onClick={this.checkout}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
