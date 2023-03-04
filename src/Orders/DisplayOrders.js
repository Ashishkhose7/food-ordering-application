import React from "react";
import Header from "../Header";

const DisplayOrders = (props) => {
  const renderBody = ({ orderData }) => {
    if (orderData) {
      return orderData.map((data) => {
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
          <tbody>{renderBody(props)}</tbody>
        </table>
      </div>
    </>
  );
};

export default DisplayOrders;
