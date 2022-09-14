import React from "react";

function SectionLayout({ children }) {
  return (
    <div className="w-[1184px] uxl:w-[1084px] flex flex-row mx-auto justify-around ulg:w-10/12">
      <div className="w-[700px] uxl:w-[600px]">{children}</div>
      <div className="w-[340px] ulg:hidden"></div>
    </div>
  );
}

export default SectionLayout;
