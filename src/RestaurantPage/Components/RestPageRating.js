import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function BasicRating(props) {
  if (props.ratingData > 0) {
    return (
      <Box>
        <Rating name="simple-controlled" value={props.ratingData} />
      </Box>
    );
  }
}
