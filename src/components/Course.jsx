import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
export default function Course(props) {
  let stars = [];
  const { image, title, rating, instructors, price } = props.course;
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
    <a href="##">
      <img src={image} alt={title} className="border" />
      <p className="font-bold text-gray-900">{title}</p>
      <p className="text-xs text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis max-w-[10rem]">
        {instructors?.map((instructor, idx) => {
          return `${idx ? ", " : ""} ${instructor.name}`;
        })}
      </p>
      <span className="text-yellow-600 font-bold">{rating.toFixed(1)}</span>
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
      <p className="font-bold text-gray-900">E£{price}</p>
    </a>
  );
}
