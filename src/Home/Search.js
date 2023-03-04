import React, { Component } from "react";
import Header from "../Header";

let lurl = "https://restdataapi.onrender.com/locations";
let rurl = "https://restdataapi.onrender.com/restaurants?stateid=";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      locaton: "",
      restaurant: ""
    };
  }

  getCity = (ldata) => {
    if (ldata) {
      return ldata.map((item) => {
        return (
          <option value={item.state_id} key={item.state_id}>
            {item.state}
          </option>
        );
      });
    }
  };

  getrestaurant = (event) => {
    let stateId = event.target.value;
    fetch(`${rurl}${stateId}`, { method: "GET" })
      .then((res) => res.json())
      .then((rdata) => {
        this.setState({ restaurant: rdata });
      });
  };

  displayrestaurants = (rdata) => {
    if (rdata) {
      return rdata.map((item) => {
        return (
          <option value={item.restaurant_id} key={item.restaurant_id}>
            {item.restaurant_name} , {item.address}
          </option>
        );
      });
    }
  };

  render() {
    return (
      <>
        <Header />
        <div className="banner">
          <div className="cont-fent">
            <div className="content">
              <h1 className="cont-head">Foodies</h1>
              <p className="cont-head2">
                Discover The Best Food & Drinks In Your Area
              </p>
              <div className="row select-option">
                <div className=" m-auto col-lg-7 col-md-7 d-flex">
                  <select
                    id="location"
                    className="form-select selected-option"
                    aria-label="Default select example"
                    onChange={this.getrestaurant}
                  >
                    <option defaultValue>Please Select Location</option>
                    {this.getCity(this.state.locaton)}
                  </select>
                  <select
                    id="getRestaurant"
                    className="form-select  selected-option "
                    aria-label="Default select example"
                  >
                    <option defaultValue>Please Select Restaurants</option>
                    {this.displayrestaurants(this.state.restaurant)}
                  </select>
                  <button
                    type="button"
                    className="btn btn-outline-danger bg-dark text-light searchbtn"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  // all api call on page load
  componentDidMount() {
    fetch(lurl, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ locaton: data });
      });
  }
}
export default Search;
