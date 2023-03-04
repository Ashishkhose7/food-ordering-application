import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
const url = "https://logintest-mbwb.onrender.com/api/auth/userinfo ";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: ""
    };
  }

  handleLogout = () => {
    sessionStorage.removeItem("ltk");
    this.setState({ userData: "" });
    this.props.history.push("/login");
  };

  conditionlHeader = () => {
    if (this.state.userData.name) {
      let data = this.state.userData;
      sessionStorage.setItem("userInfo", JSON.stringify(data));
      return (
        <>
          <Link to="/" className="btn btn-dark nav-login-btn">
            <i className="me-1 bi bi-person-fill"></i>
            Hi {data.name}
          </Link>
          <button
            onClick={this.handleLogout}
            className=" mx-3 btn btn-dark nav-login-btn"
          >
            <i className="me-1 bi bi-box-arrow-in-right"></i>
            Logout{" "}
          </button>
        </>
      );
    } else {
      return (
        <>
          <Link to="/login" className="btn btn-dark nav-login-btn">
            <i className="me-1 bi bi-person-fill"></i>
            Login
          </Link>
          <Link to="/register" className=" mx-3 nav-login-btn btn btn-dark">
            <i className="me-1 bi bi-box-arrow-in-right"></i>
            Sign Up
          </Link>
        </>
      );
    }
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          backgroundImage:
            "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)"
        }}
      >
        <div className="container">
          <Link className="navbrand fw-bold d-flex align-items-center" to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2819/2819194.png"
              alt="logo img"
              className="me-2"
            />
            <span>F</span>oodies
          </Link>
          <button
            className="navbar-toggler navbar-toggler-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navbar-toggler-btn-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#dashboard"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Dashboard
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {this.conditionlHeader()}
            </form>
          </div>
        </div>
      </nav>
    );
  }
  componentDidMount() {
    fetch(url, {
      method: "GET",
      headers: {
        "x-access-token": sessionStorage.getItem("ltk")
      }
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userData: data
        });
      });
  }
}
export default withRouter(Header);
