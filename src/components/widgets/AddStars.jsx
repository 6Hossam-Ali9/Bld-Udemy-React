import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

function AddStars({ rating }) {
  let stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(
      <FontAwesomeIcon
        icon={faStar}
        size="xs"
        className="text-yellow-500 pl-1"
        key={i}
      />
    );
  }
  return (
    <>
      {stars.map((star) => {
        return star;
      })}
      {rating > Math.floor(rating) && (
        <FontAwesomeIcon
          icon={faStarHalfAlt}
          size="xs"
          className="text-yellow-500 pl-1"
        />
      )}
    </>
  );
}

export default AddStars;
