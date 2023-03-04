import { Component } from "react";
class StarRatingComponent extends Component {
  constructor() {
    super();
    this.state = {
      Color: "white"
    };
  }

  changeRating = () => {
    if (this.state.Color === "white") {
      this.setState({ Color: "#FF9529" });
    } else {
      this.setState({ Color: "white" });
    }
  };

  render() {
    return (
      <i
        className="bi bi-star-fill m-1 star-icon"
        style={{ color: this.state.Color }}
        onClick={this.changeRating}
      ></i>
    );
  }
}
export default StarRatingComponent;
