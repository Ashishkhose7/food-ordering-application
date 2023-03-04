import { Link } from "react-router-dom";
const MealItems = ({ mealData }) => {
  if (mealData) {
    return mealData.map((data) => {
      return (
        <Link
          to={`/listing/${data.mealtype}?MealId=${data.mealtype_id}`}
          className="Link-tag"
          key={data.mealtype_id}
        >
          <div className="quick-item-card " id="dashboard">
            <img src={data.meal_image} alt={data.mealtype} />
            <h5>{data.mealtype}</h5>
            <p>Start your day with exclusive {data.mealtype} options</p>
          </div>
        </Link>
      );
    });
  } else {
    return (
      <>
        <img
          src="https://www.epidomastegasis.gr/gov/Content/images/loaders/loader4.gif"
          alt="loading"
          className="loader"
        />
      </>
    );
  }
};
export default MealItems;
