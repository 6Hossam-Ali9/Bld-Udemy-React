import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import reviews from "../constants/reviews";
import Review from "./Review";

function Reviews() {
  const course_rating = 4.4;
  const some_reviews = reviews.slice(0, 4);
  return (
    <>
      <div className="flex flex-row  items-center mb-8">
        <FontAwesomeIcon icon={faStar} className="mr-2 text-yellow-500" />
        <p className="font-bold text-2xl">{course_rating} course rating</p>
      </div>
      <div className="flex flex-row justify-between flex-wrap">
        {some_reviews.map((review, idx) => {
          return <Review review={review} key={idx} />;
        })}
      </div>
    </>
  );
}

export default Reviews;
