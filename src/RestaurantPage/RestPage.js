import React, { Component } from "react";
import Header from "../Header";
import axios from "axios";
import "./RestPage.css";
import BasicRating from "./Components/RestPageRating";
import { Link } from "react-router-dom";
import RestMenu from "./RestMenu";
const rurl = "https://restdataapi.onrender.com/restdetails/";
const menuurl = "https://restdataapi.onrender.com/menu/";

class RestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restdetails: "",
      restmenuList: "",
      mealType: sessionStorage.getItem("mealType"),
      mealId: sessionStorage.getItem("mealId"),
      userOrderData: ""
    };
  }

  addCart = (data) => {
    this.setState({ userOrderData: data });
  };

  proceed = () => {
    sessionStorage.setItem("menu", JSON.stringify(this.state.userOrderData));
    this.props.history.push(
      `/placeOrder/${this.state.restdetails.restaurant_name}`
    );
  };
  render() {
    return (
      <>
        <Header />
        <section className="hero">
          <div className="cont-fent2">
            <div className="container">
              <div className="row container-row">
                <div className="col-12 col-sm-6 mb-5 mb-sm-0  rest-head-container ">
                  <div className="heroText ">
                    <h1 className="mb-2 rest-heading ">
                      {this.state.restdetails.restaurant_name}
                    </h1>
                    <div className="feature_container d-flex ">
                      <figure>
                        <img
                          src="https://i.ibb.co/mD3jpgc/sentizied.png"
                          className="featureIcon"
                          alt="img"
                        />
                        <figcaption>
                          Fully <br /> Sanitized
                        </figcaption>
                      </figure>
                    </div>
                    <div className="c-reviews">
                      <div className="d-flex flex-wrap align-items-center">
                        <h4 className="text-white mb-0 me-3">
                          {" "}
                          {this.state.restdetails.average_rating}/5
                        </h4>
                        <div className="reviews-stars">
                          <BasicRating
                            ratingData={this.state.restdetails.average_rating}
                          />
                        </div>
                      </div>
                      <p className="w-10 mt-2 text-white">
                        From <strong>1,206+</strong> Customer Reviews
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/listing/${this.state.mealType}?MealId=${this.state.mealId}`}
                    className="btn btn-danger"
                  >
                    Back
                  </Link>
                  <button
                    className="btn btn-success ms-2"
                    onClick={this.proceed}
                  >
                    Proceed
                  </button>
                </div>
                <div className="col-12 col-sm-6 p-0 ">
                  <div className="rest-img-section rounded">
                    <img
                      src={this.state.restdetails.restaurant_thumb}
                      className="img-fluid rounded rest-img"
                      alt=""
                    />
                    <div className="rest-caption ">
                      <div className="rest-caption-loc ">
                        <i className="bi-geo-alt me-2 "></i>
                        {this.state.restdetails.address}
                      </div>
                      <h4 className="">Fine Dining Restaurant</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <RestMenu
            menuData={this.state.menuData}
            orderData={(data) => {
              this.addCart(data);
            }}
          />
        </div>
      </>
    );
  }
  //api call
  async componentDidMount() {
    let restid = this.props.match.params.restid;
    let menuData = await axios.get(`${menuurl}${restid}`);
    let response = await axios.get(`${rurl}${restid}`);
    this.setState({ restdetails: response.data[0] });
    this.setState({ menuData: menuData.data });
  }
}
export default RestPage;
