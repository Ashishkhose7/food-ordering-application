import React, { Component } from "react";
import Header from "../Header";
import axios from "axios";
import "./Listing.css";
import Filter from "./Filter";
import ListingDisplay from "./ListingDisplay";

let restWithMealidUrl = "https://restdataapi.onrender.com/restaurants?mealid=";

class ListingPage extends Component {
  constructor() {
    super();
    this.state = {
      restaurantList: ""
    };
  }

  filterRestData = (data) => {
    this.setState({ restaurantList: data });
  };

  render() {
    return (
      <>
        <Header />
        <h3 className="title">
          Places near you for {this.props.match.params.mealType}
        </h3>
        <button
          type="button"
          className="btn btn-outline-secondary bg-white filter-btn"
        >
          <a href="#filter-show" className="filter-tag">
            <i className="bi bi-funnel pe-1"></i>
            Filters
          </a>
        </button>
        <section className="filter-content">
          <Filter
            mealid={this.props.location.search.split("=")[1]}
            restPerCuisine={(data) => {
              this.filterRestData(data);
            }}
          />
          <div className="items">
            <ListingDisplay restaurantData={this.state.restaurantList} />
          </div>
        </section>
      </>
    );
  }
  //api with axios
  componentDidMount() {
    let mealType = this.props.match.params.mealType;
    let mealId = this.props.location.search.split("=")[1];
    sessionStorage.setItem("mealId", mealId);
    sessionStorage.setItem("mealType", mealType);
    axios.get(`${restWithMealidUrl}${mealId}`).then((res) => {
      this.setState({ restaurantList: res.data });
    });
  }
}
export default ListingPage;
