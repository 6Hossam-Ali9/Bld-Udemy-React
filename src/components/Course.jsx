import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
export default function Course(props) {
  let course = props.course;
  let stars = [];
  for (let i = 0; i < Math.floor(course.rating); i++) {
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
      <img src={course.image} alt={course.title} className="border" />
      <p className="font-bold text-gray-900">{course.title}</p>
      <p className="text-xs text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis max-w-[10rem]">
        {course.instructors.map((instructor, idx) => {
          return `${idx ? ", " : ""} ${instructor.name}`;
        })}
      </p>
      <span className="text-yellow-600 font-bold">
        {course.rating.toFixed(1)}
      </span>
      {stars.map((star) => {
        return star;
      })}
      {course.rating > Math.floor(course.rating) && (
        <FontAwesomeIcon
          icon={faStarHalfAlt}
          size="xs"
          className="text-yellow-500 pl-1"
        />
      )}
      <p className="font-bold text-gray-900">E£{course.price}</p>
    </a>
  );
}
