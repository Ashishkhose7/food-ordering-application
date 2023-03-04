import { Link } from "react-router-dom";

const ListingDisplay = ({ restaurantData }) => {
  if (restaurantData) {
    if (restaurantData.length > 0) {
      return restaurantData.map((restdata) => {
        return (
          <div className="item-one" key={restdata._id}>
            <div className="item-info">
              <div className="image">
                <img
                  src={restdata.restaurant_thumb}
                  alt={restdata.restaurant_name}
                />
              </div>
              <div className="item-content">
                <Link
                  to={`/restpage/${restdata.restaurant_id}`}
                  className="list-link-tag"
                >
                  <h4 className="mb-3 list-card-head">
                    {restdata.restaurant_name}
                  </h4>
                </Link>
                <p className="des1">{restdata.address}</p>
                <div className="rest-rating">
                  <span>{restdata.average_rating}</span>
                  <span>
                    <i className="ms-1 bi bi-star-fill pb-1"></i>
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="desc ">
              <div className="des1">
                <p>COUISINES:</p>
                <p>COST FOR TWO:</p>
              </div>
              <div className="des2">
                <p>
                  {restdata.cuisines[0].cuisine_name},&nbsp;
                  {restdata.cuisines[1].cuisine_name}
                </p>
                <p>₹{restdata.cost}</p>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div>
          {/* <h2>No Data As Per Filter</h2> */}
          <center>
            <img
              src="https://vectorified.com/images/no-data-icon-10.png"
              alt="loading"
              className="loader"
              style={{ height: "300px", width: "600px" }}
            />
          </center>
        </div>
      );
    }
  } else {
    return (
      <>
        <center>
          <img
            src="https://www.epidomastegasis.gr/gov/Content/images/loaders/loader4.gif"
            alt="loading"
            className="loader"
            style={{ position: "relative", top: "300px" }}
          />
        </center>
      </>
    );
  }
};
export default ListingDisplay;
