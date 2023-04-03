import React, { Component } from "react";
import Header from "../Header";
import axios from "axios";

const orderApi = "https://restdataapi.onrender.com/vieworder";
// const updateOrder = "https://restdataapi.onrender.com/updateOrder";
class ViewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: "",
    };
  }
  renderBody = (ordersData) => {
    if (ordersData.length > 0) {
      return ordersData.map((data) => {
        return (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.hotel_name}</td>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td>{data.email}</td>
            <td>Rs.{data.cost}</td>
            <td>{data.date}</td>
            <td>{data.status}</td>
            <td>{data.bank_name}</td>
          </tr>
        );
      });
    }
  };
  render() {
    return (
      <>
        <Header />
        <div className="container mt-5">
          <center className="mb-4">
            <h4>My Orders</h4>
          </center>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>OrderId</th>
                <th>Restaurant name</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Cost</th>
                <th>Date</th>
                <th>Status</th>
                <th>BankName</th>
              </tr>
            </thead>
            <tbody>{this.renderBody(this.state.orders)}</tbody>
          </table>
        </div>
      </>
      // {/* <DisplayOrder orderData={this.state.orders} /> */}
    );
  }
  componentDidMount() {
    if (this.props.history) {
      let query = this.props.location.search.split("&");
      if (query) {
        let data = {
          status: query[0].split("=")[1],
          date: query[2].split("=")[1],
          bank_name: query[3].split("=")[1],
        };
        let id = query[1].split("=")[1].split("_")[1];
        fetch(`${updateOrder}/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }
    }
    axios.get(orderApi).then((res) => {
      this.setState({ orders: res.data });
    });
  }
}
export default ViewOrder;
