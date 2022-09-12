import React from "react";
import CoursesContainer from "../components/CoursesContainer";
import cat from "../assets/cat-main.png";

function HomePage({ data }) {
  return (
    <>
      <div className="w-9/12 flex flex-row flex-wrap-reverse mx-auto justify-around ulg:w-full bg-gray-50 py-14 usm:pb-2">
        <div className="bg-white shadow-lg w-4/12 p-6 h-fit mb-32 usm:w-full usm:mb-0 usm:shadow-none">
          <p className="text-3xl font-bold mb-3">
            New to Udemy? Lucky <br className="usm:hidden" />
            you.
          </p>
          <p>
            Courses start at E£169.99.Get your new-
            <br />
            student offer before it expires.
          </p>
        </div>
        <img src={cat} alt="main cat" className="w-96 h-fit usm:mb-7" />
      </div>
      <CoursesContainer data={data} />
    </>
  );
}

export default HomePage;
