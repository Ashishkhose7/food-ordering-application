import React, { Component } from "react";
import "./RestMenu.css";
import StarRatingComponent from "../Home/StarCompo/StarComponent";
class RestMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menud: ""
    };
  }
  orderId = [];
  sendMenuid = [];
  placeOrder = (item) => {
    this.orderId.push(item);
    this.sendMenuid.push(item.menu_id);
    this.setState({ menud: this.orderId });
    this.props.orderData(this.sendMenuid);
  };
  // Filter to remove item from cart
  deleteOrder = (menuid) => {
    this.orderId = this.orderId.filter((arrdata) => {
      return arrdata.menu_id !== menuid;
    });
    this.setState({ menud: this.orderId });
    if (this.sendMenuid.indexOf(menuid) > -1) {
      this.sendMenuid.splice(this.sendMenuid.indexOf(menuid), 1);
    }
    this.props.orderData(this.sendMenuid);
    this.num--;
  };

  cartDisplay = (orders) => {
    if (orders) {
      return orders.map((data, i) => {
        return (
          <div className="item-cart-desc " key={data.menu_id}>
            <div
              className={
                data.menu_type == "vegetarian"
                  ? "veg-category"
                  : "nonveg-category"
              }
            ></div>
            <div className="item-cart-desc-heading ">{data.menu_name}</div>
            <div className="item-cart-desc-price ">₹{data.menu_price}</div>
            <i
              className="bi bi-trash3 remove-cart-btn"
              onClick={() => {
                this.deleteOrder(data.menu_id);
              }}
            ></i>
          </div>
        );
      });
    }
  };
  ratingArray = [3.6, 4.5, 2.5, 2.8, 4.8, 5, 3.0, 2.5];
  MenuCard = (menuD) => {
    let rating;
    if (menuD) {
      return menuD.map((item, i) => {
        return (
          <div className="card-item menu-card-item p-3" key={item.menu_id}>
            <div className="img-div">
              <img src={item.menu_image} alt="" />
            </div>
            <div className="content-div">
              <h5 className="my-2">{item.menu_name}</h5>
              <p style={{ color: "rgb(90, 85, 85)" }}>{item.menu_type}</p>
              <div className="price-detail">
                <p className="fw-bold rating">
                  <StarRatingComponent />
                  {/* {(rating = Math.floor(Math.random() * (6 - 1) + 1))} */}
                  {this.ratingArray[i]}
                </p>
                <p>₹{item.menu_price}</p>
              </div>{" "}
              <span className="mt-2 d-flex justify-content-between">
                <button
                  className="btn btn-outline-success px-2 py-1 mb-0 fs-6"
                  onClick={() => {
                    this.placeOrder(item);
                    {
                      this.num++;
                    }
                  }}
                >
                  Add to Cart
                </button>
                {/* <button
                  className="btn btn-outline-danger px-2 py-1 mb-0 ms-2"
                  onClick={() => {
                    this.deleteOrder(item.menu_id);
                  }}
                >
                  Remove
                </button> */}
              </span>
            </div>
            <span
              className={this.ratingArray[i] >= 3 ? "best-seller" : "d-none"}
            >
              Best Seller
            </span>
          </div>
        );
      });
    } else {
      return (
        <center className="d-flex justify-content-center align-items-center">
          <img
            src="https://www.epidomastegasis.gr/gov/Content/images/loaders/loader4.gif"
            alt="loading"
            className="loader"
          />
        </center>
      );
    }
  };
  num = 0;
  render() {
    return (
      <div className="container-fluid ">
        <h3 className="menu-heading w-100  text-center my-5 fw-bold">
          Special Menus
        </h3>
        <div className="special-menu d-flex  justify-content-end">
          <div className="menu-container d-flex ">
            {this.MenuCard(this.props.menuData)}
          </div>
          <div className=" item-cart">
            <h4 className="fw-bold mb-2 text-start ms-3 mt-3">
              Cart
              {/* {this.num} */}
              <i className="fa-solid fa-kitchen-set"></i>
            </h4>
            {this.cartDisplay(this.state.menud)}
          </div>
        </div>
      </div>
    );
  }
}
export default RestMenu;
