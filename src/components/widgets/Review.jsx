import React from "react";
import ReviewHeader from "./ReviewHeader";

function Review(props) {
  const review_body = props.review.body;
  return (
    <div className=" w-full sm:w-5/12 py-6 border-t border-gray-200">
      <ReviewHeader review={props.review} />
      {review_body}
    </div>
  );
}

export default Review;
