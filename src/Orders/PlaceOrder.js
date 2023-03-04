import React, { Component } from "react";
import "./PlaceOrder.css";
import Header from "../Header";

const menuurl = "https://restdataapi.onrender.com/usermenu";
const placeorder = "https://restdataapi.onrender.com/placeorder";

class PlaceOrder extends Component {
  constructor(props) {
    super(props);
    let userData = JSON.parse(sessionStorage.getItem("userInfo"));
    this.state = {
      id: Math.floor(Math.random() * 10000),
      hotel_name: this.props.match.params.restName,
      name: userData ? userData.name : "",
      email: userData ? userData.email : "",
      cost: 0,
      phone: userData ? userData.phone : "",
      address: "77 K Delhi",
      menuItem: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  placeOrder = () => {
    let obj = this.state;
    obj.menuItem = sessionStorage.getItem("menu");
    fetch(placeorder, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(console.log("order added"));
    // .then(this.props.history.push("/viewBooking"));
  };

  renderItem = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <div className="order-item my-3 " key={item.menu_id}>
            <div className="div-img">
              <img
                className="img-fluid"
                src={item.menu_image}
                alt={item.menu_name}
              />
            </div>
            <div className="div-item-details ">
              <h6>{item.menu_name}</h6>
              <span>{item.menu_type}</span>
            </div>
            <div className="div-item-price ">
              <h6>₹ {item.menu_price}</h6>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    if (sessionStorage.getItem("ltk") == null) {
      return (
        <>
          <Header />
          <center>
            <h2>Login First To Place Booking</h2>
          </center>
        </>
      );
    }
    return (
      <>
        <Header />
        <div className="container">
          <div className="row mt-5">
            <div className="orderDetails  p-0 col-md-8">
              <div className="orderDetails-heading p-1">
                <h4 className="">Orders for {this.state.hotel_name}</h4>
              </div>
              <div className="orderItems py-2">
                {this.renderItem(this.state.menuItem)}
              </div>
            </div>
            <div className="col-md-4 c-details">
              <div className="card custom-details">
                <div className="card-header">Order Summary</div>
                <div className="card-body">
                  <form action="http://localhost:4100/paynow" method="POST">
                    <input type="hidden" name="cost" value={this.state.cost} />
                    <input type="hidden" name="id" value={this.state.id} />
                    <input
                      type="hidden"
                      name="hotel_name"
                      value={this.state.hotel_name}
                    />
                    <div className="form-group mb-3 ">
                      <label className="form-label mb-0 me-4">Name:</label>
                      <input
                        type="text"
                        className=""
                        id="fname"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="control-label me-4">Email:</label>
                      <input
                        type="email"
                        className=""
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="control-label me-4">Phone:</label>
                      <input
                        type="text"
                        className=""
                        id=""
                        placeholder="Phone"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="control-label me-2">Address:</label>
                      <input
                        type="text"
                        className=""
                        placeholder="Address"
                        name="address"
                        value={this.state.address}
                        onChange={this.handleChange}
                      />
                    </div>
                    <hr />
                    <div className="total-price">
                      <span className="text-secondary d-block">
                        Subtotal: Rs {this.state.cost}
                      </span>
                      <span className="text-secondary">
                        Delivery charges:{" "}
                        {this.state.cost > 200 ? "Free" : "Rs 50"}
                      </span>
                      <hr />
                      <h6>
                        <span className="">Total Price:</span>
                        <span className="fw-bold ">
                          {" "}
                          Rs{" "}
                          {this.state.cost + (this.state.cost > 200 ? 0 : 50)}
                        </span>
                      </h6>
                      <button
                        className="btn btn-outline-success mt-4 btn-paceorder"
                        onClick={this.placeOrder}
                        type="submit"
                      >
                        Order Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    let menuId = JSON.parse(sessionStorage.getItem("menu"));
    fetch(menuurl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(menuId)
    })
      .then((res) => res.json())
      .then((data) => {
        let totalPrice = 0;
        data.map((item) => {
          totalPrice = totalPrice + parseFloat(item.menu_price);
          return "ok";
        });
        this.setState({ menuItem: data, cost: totalPrice });
      });
  }
}
export default PlaceOrder;
