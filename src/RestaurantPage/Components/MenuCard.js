import { Component } from "react";
import StarRatingComponent from "../../Home/StarCompo/StarComponent";

class MenuCard extends Component {
  constructor(props) {
    super(props);
  }

  orderData = [];
  placedOrder = (menu) => {
    this.orderData.push(menu);
    // console.log(this.orderData);
    // this.props.sendData(this.orderData);
  };

  // Filter to remove item from cart
  deleteOrder = (menuid) => {
    // console.log(menuid);
    this.orderData = this.orderData.filter((arrdata) => {
      return arrdata.menu_id !== menuid;
    });
    // console.log(this.orderData);
    // this.props.sendData(this.orderData);
  };

  render() {
    let rating;
    let { menuD } = this.props;
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
  }
}

// let orderData = [];

// let placedOrder = (menu) => {
//   orderData.push(menu.menu_id);
//   console.log(orderData);
// };

// let deleteOrder = (menu) => {
//   console.log(orderData.indexOf(menu.menu_id));
//   if (orderData.indexOf(menu.menu_id) > -1) {
//     orderData.splice(orderData.indexOf(menu.menu_id), 1);
//     console.log(orderData);
//   }
// };

// card mapping
// const MenuCard = ({ menuD }) => {

//   let rating;
//   if (menuD) {
//     return menuD.map((item, i) => {
//       return (
//         <div className="card-item menu-card-item p-3" key={item.menu_id}>
//           <div className="img-div">
//             <img src={item.menu_image} alt="" />
//           </div>
//           <div className="content-div">
//             <h5 className="my-2">{item.menu_name}</h5>
//             <p style={{ color: "rgb(90, 85, 85)" }}>{item.menu_type}</p>
//             <div className="price-detail">
//               <p className="fw-bold rating">
//                 <StarRatingComponent />
//                 {(rating = Math.floor(Math.random() * (6 - 1) + 1))}
//               </p>
//               <p>₹{item.menu_price}</p>
//             </div>{" "}
//             <span className="mt-2 d-flex justify-content-between">
//               <button
//                 className="btn btn-outline-success px-2 py-1 mb-0 fs-6"
//                 onClick={() => {
//                   placedOrder(item);
//                 }}
//               >
//                 Add
//               </button>
//               <button
//                 className="btn btn-outline-danger px-2 py-1 mb-0 ms-2"
//                 onClick={() => {
//                   deleteOrder(item);
//                 }}
//               >
//                 Remove
//               </button>
//             </span>
//           </div>
//           <span className={rating >= 3 ? "best-seller" : "d-none"}>
//             Best Seller
//           </span>
//         </div>
//       );
//     });
//   }
// else {
//   return (
//     <center className="d-flex justify-content-center align-items-center">
//       <img
//         src="https://www.epidomastegasis.gr/gov/Content/images/loaders/loader4.gif"
//         alt="loading"
//         className="loader"
//         // style={{ position: "relative" }}
//       />
//     </center>
//   );
// }
// };
export default MenuCard;
