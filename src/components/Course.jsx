import React from "react";
import { Link } from "react-router-dom";
import AddStars from "./AddStars";
export default function Course(props) {
  const { image, title, rating, instructors, price, id } = props.course;
  return (
    <Link to={`/course/${id}`}>
      <img src={image} alt={title} className="border" />
      <p className="font-bold text-gray-900">{title}</p>
      <p className="text-xs text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis max-w-[10rem]">
        {instructors?.map((instructor, idx) => {
          return `${idx ? ", " : ""} ${instructor.name}`;
        })}
      </p>
      <span className="text-yellow-600 font-bold">{rating.toFixed(1)}</span>
      <AddStars rating={rating} />
      <p className="font-bold text-gray-900">E£{price}</p>
    </Link>
  );
}
