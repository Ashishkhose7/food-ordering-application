import React, { Component } from "react";
import MealItemCards from "./MealItems";
import FoodCards from "./FoodCards";
import SectionHeadings from "./SectionHeadings";

class QuickSearch extends Component {
  constructor() {
    super();
    this.state = {
      mealData: "",
      favfoodData: ""
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="card-container d-flex justify-content-center">
          <SectionHeadings title={"Discover Restaurants by Meal"} />
          <MealItemCards mealData={this.state.mealData} />
          <SectionHeadings title={"Order Your Favourite Food Here"} />
          <FoodCards favfoodData={this.state.favfoodData} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetch("https://restdataapi.onrender.com/mealType", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ mealData: data });
      });
    fetch("https://restdataapi.onrender.com/favfood", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ favfoodData: data });
      });
  }
}
export default QuickSearch;
