import React, { Component } from "react";
import "./RestMenu.css";
import StarRatingComponent from "../Home/StarCompo/StarComponent";

class RestMenubk extends Component {
  //order functions
  orderData = [];

  placedOrder = (menu) => {
    this.orderData.push(menu);
    console.log(this.orderData);
    // this.props.sendData(this.orderData);
  };

  // Filter to remove item from cart
  deleteOrder = (menuid) => {
    // console.log(menuid);
    this.orderData = this.orderData.filter((arrdata) => {
      return arrdata.menu_id !== menuid;
    });
    console.log(this.orderData);
    // this.props.sendData(this.orderData);
  };
  //order functions end

  cartDisplay = () => {};

  // menu card render
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
                  {(rating = Math.floor(Math.random() * (6 - 1) + 1))}
                </p>
                <p>₹{item.menu_price}</p>
              </div>{" "}
              <span className="mt-2 d-flex justify-content-between">
                <button
                  className="btn btn-outline-success px-2 py-1 mb-0 fs-6"
                  onClick={() => {
                    this.placedOrder(item);
                  }}
                >
                  Add
                </button>
                <button
                  className="btn btn-outline-danger px-2 py-1 mb-0 ms-2"
                  onClick={() => {
                    this.deleteOrder(item.menu_id);
                  }}
                >
                  Remove
                </button>
              </span>
            </div>
            <span className={rating >= 3 ? "best-seller" : "d-none"}>
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
            // style={{ position: "relative" }}
          />
        </center>
      );
    }
  };
  //menu card render end

  // neworder = [];
  // getCartDtat = (cartd) => {
  //   this.neworder = cartd;
  // console.log(cartd);
  // if (cartd) {
  //   return cartd.map((item) => {
  //     console.log(item);
  //       return (
  //         <div className="item-cart-desc border">
  //           <p className="item-cart-desc-heading ">{item.menu_name}</p>
  //           <p>₹{item.menu_price}</p>
  //         </div>
  //       );
  //   });
  // }
  // console.log(this.neworder);
  // };

  // renderCart = (cartData) => {
  //   console.log(cartData);
  // if (cartd) {
  //   return cartd.map((item) => {
  //     console.log(item);
  //       return (
  //         <div className="item-cart-desc border">
  //           <p className="item-cart-desc-heading ">{item.menu_name}</p>
  //           <p>₹{item.menu_price}</p>
  //         </div>
  //       );
  //   });
  // }
  // };
  render() {
    return (
      <div className="container-fluid ">
        <h1 className="menu-heading w-100  text-center my-5 fw-bold">
          Special Menus
        </h1>
        <div className="special-menu d-flex  justify-content-end">
          <div className="menu-container d-flex ">
            {/* <MenuCard
              menuD={this.props.menuData}
              sendData={(data) => {
                this.getCartDtat(data);
                // console.log(data);
                // this.setState({ orderData: data });
                // this.neworder = [...data];
              }}
            /> */}
            {this.MenuCard(this.props.menuData)}
          </div>
          <div className=" border border-success item-cart">
            <h4 className="fw-bold">Cart</h4>
            {/* Item Number {this.cartDisplay(this.orderId)} Added */}
            {/* cart mapping */}
            {/* {this.renderCart(this.orderData)} */}
            {/* {this.orderData.map((data) => {
              return <CartItem cartInfo={data.menu_name} />;
            })} */}
            {/* cart mapping end */}
          </div>
        </div>
      </div>
    );
  }
}
export default RestMenubk;
