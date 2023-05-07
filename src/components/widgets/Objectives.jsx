import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function Objectives({ children }) {
  return (
    <div className="flex flex-row gap-2 w-full sm:w-1/2 px-2  py-1">
      <FontAwesomeIcon icon={faCheck} />
      <p className=" ml-2">{children}</p>
    </div>
  );
}

export default Objectives;
