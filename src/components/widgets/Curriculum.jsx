import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faCirclePlay,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
function Curriculum({ course, expanded }) {
  const [expand, setExpand] = useState(expanded);
  useEffect(() => {
    setExpand(expanded);
  }, [expanded]);

  return (
    <>
      <div
        className="w-full px-6 py-4 flex flex-row justify-between bg-gray-100 border cursor-pointer"
        onClick={() => setExpand(!expand)}
      >
        <div className="flex flex-row">
          <span>
            <FontAwesomeIcon
              icon={expand ? faChevronUp : faChevronDown}
              size={"sm"}
              className="text-sm"
            />
          </span>
          <p className="text-base font-bold ml-3">{course?.section}</p>
        </div>
        <p className="text-sm">
          {course?.lec_num} lectures • {course?.time} min
        </p>
      </div>
      {expand && (
        <div className="w-full py-4 px-6">
          {course?.lectures?.map((lecture, idx) => {
            return (
              <div
                className="flex flex-row py-2 justify-between text-sm"
                key={idx}
              >
                <div className="flex flex-row">
                  <span>
                    <FontAwesomeIcon
                      icon={lecture?.type ? faCirclePlay : faFile}
                    />
                  </span>
                  <p className="ml-4">{lecture?.lecture_name}</p>
                </div>
                <p className="text-gray-400">
                  {lecture?.type ? lecture?.period : `${lecture?.pages} pages`}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Curriculum;
