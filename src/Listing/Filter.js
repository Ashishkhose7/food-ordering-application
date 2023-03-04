import React, { Component } from "react";
import axios from "axios";

const url = "https://restdataapi.onrender.com/filters";

class Filter extends Component {
  cuisineFilter = (event) => {
    let mealId = this.props.mealid;
    let cuisineId = event.target.value;
    let cuisineUrl = "";
    if (cuisineId === "") {
      cuisineUrl = `${url}/${mealId}`;
    } else {
      cuisineUrl = `${url}/${mealId}?cuisineid=${cuisineId}`;
    }
    axios.get(cuisineUrl).then((res) => {
      this.props.restPerCuisine(res.data);
    });
  };

  costFilter = (event) => {
    let mealId = this.props.mealid;
    let cost = event.target.value.split("-");
    console.log(cost);
    let lcost = cost[0];
    let hcost = cost[1];
    let costUrl = "";
    if (event.target.value === "") {
      costUrl = `${url}/${mealId}`;
    } else {
      costUrl = `${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`;
    }
    axios.get(costUrl).then((res) => {
      this.props.restPerCuisine(res.data);
    });
  };

  render() {
    return (
      <div className="filters mb-5 " id="filter-show">
        <h5 className="h5f-filter">
          Filters
          <a href="#" className="filter-close">
            <span>&times;</span>
          </a>
        </h5>
        <h5 className="h5f-loc">Select Location</h5>
        <select name="" className="selectloc">
          <option value="" className="sel-loc">
            Select Location
          </option>
          <option value="">Mumbai</option>
          <option value="">Thane</option>
          <option value="">Bandra</option>
        </select>
        <h5 className="h5f-head">Cuisine</h5>
        <div onChange={this.cuisineFilter}>
          <input type="radio" name="cuisine" value="" />
          <span>All</span>
          <br />
          <input type="radio" name="cuisine" value="1" />
          <span>Nort Indian </span>
          <br />
          <input type="radio" name="cuisine" value="2" />
          <span>South Indian</span>
          <br />
          <input type="radio" name="cuisine" value="4" />
          <span>Fast Food </span>
          <br />
          <input type="radio" name="cuisine" value="3" />
          <span>Chinese </span>
          <br />
          <input type="radio" name="cuisine" value="5" />
          <span>Street Food </span>
          <br />
        </div>
        <h5 className="h5f-head">Cost For Two</h5>
        <div onChange={this.costFilter}>
          <input type="radio" name="cost" value="" />
          <span>All</span> <br />
          <input type="radio" name="cost" value="1-300" />
          <span>Less than 300</span> <br />
          <input type="radio" name="cost" value="301-600" />
          <span>301 to 600</span> <br />
          <input type="radio" name="cost" value="601-1000" />
          <span>601 to 1000</span> <br />
          <input type="radio" name="cost" value="1001-5000" />
          <span>1001 to 5000</span> <br />
          <h5 className="h5f-head">Sort</h5>
          <input type="radio" name="nms" id="" />
          <span>Price low to high</span> <br />
          <input type="radio" name="nms" id="" />
          <span>Price high to low</span> <br />
        </div>
      </div>
    );
  }
}
export default Filter;
