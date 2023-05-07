import React from "react";
import AddStars from "./AddStars";

function ReviewHeader({ review: { first_name, last_name, rate } }) {
  return (
    <div className="mb-4 flex flex-row">
      <p className="bg-slate-900 rounded-full mr-4 font-bold text-lg text-white w-10 h-10 text-center leading-10">
        {first_name[0]}
        {last_name[0]}
      </p>
      <div className="flex flex-col">
        <p className="font-bold">
          {first_name} {last_name[0]}.
        </p>
        <div className="flex items-center">
          <AddStars rating={rate} />
          <p className="text-xs text-gray-600 font-bold ml-3">a month ago</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewHeader;
