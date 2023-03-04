import React, { Component } from "react";
import "./loginpage.css";
import Header from "../Header";
const url = "https://logintest-mbwb.onrender.com/api/auth/login";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.auth === false) {
          this.setState({ message: data.token });
        } else {
          sessionStorage.setItem("ltk", data.token);
          this.props.history.push("/");
        }
      });
  };

  render() {
    return (
      <>
        <Header />
        <div
          className="container  mx-auto my-5 rounded-3 d-flex "
          id="loginpage"
          style={{ height: "560px", width: "70%" }}
        >
          <div className="leftc h-75 w-50 "></div>
          <div className="rightc h-75 w-50  d-flex align-items-center">
            <div className="card  border-0 px-5 py-4 h-75 w-100">
              <h3 className="fw-bold mb-4 text-center">Account Login</h3>

              <div className="form-group bg-white mx-auto w-100 border rounded-3 d-flex w-75 ps-2 align-items-center">
                <label className="form-label m-0">
                  <i className="bi bi-envelope-fill email-icon fs-5"></i>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  className="form-control shadow-none border-0"
                  placeholder="email@gmail.com"
                  required
                />
              </div>
              <span id="emailout" className="text-danger"></span>
              <div className="form-group border  bg-white mx-auto mt-3 rounded-3 w-100 d-flex ps-2 align-items-center">
                <label className="form-label m-0">
                  <i className="bi bi-lock-fill passlock-icon fs-5"></i>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="form-control  shadow-none border-0"
                  placeholder="enter password"
                  required
                />
              </div>
              <div className="d-flex justify-content-between">
                <span id="passout" className="text-danger"></span>
                <span className="">
                  <a href="#login" alt="" style={{ fontSize: "14px" }}>
                    Forgot?
                  </a>
                </span>
              </div>
              <button
                className="btn btn-success d-block m-auto mt-3 mb-3 w-100"
                onClick={this.handleSubmit}
              >
                Login
              </button>
              <span className="text-danger">{this.state.message}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
