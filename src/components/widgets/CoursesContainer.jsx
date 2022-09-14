import Course from "./Course";
import { useState, useEffect } from "react";
function CoursesContainer({ data }) {
  const get = window.location.search;
  const params = new URLSearchParams(get);
  const [search, setSearch] = useState(params.get("search"));

  const [course, setCourse] = useState("python");
  const [courses, setCourses] = useState([]);
  const { header, description, title } = course ? data[course] : "";
  const course_name = title ? title.slice(15) : "";

  useEffect(() => {
    const searchCourses = () => {
      let filtered_courses = [];
      Object.keys(data).forEach((topic) => {
        data[topic].courses.forEach((course) => {
          if (course.title.toLowerCase().includes(search.toLowerCase())) {
            filtered_courses.push(course);
          }
        });
      });
      return filtered_courses;
    };
    if (!search) {
      setCourses(data[course].courses);
    } else {
      setCourses(searchCourses());
    }
  }, [search, course, data]);

  return (
    <div className="w-9/12 mx-auto p-9 umd:w-full">
      <div className="mb-5">
        <p className="text-3xl font-bold">A broad selection of courses</p>
        <p className="text-xl">
          Choose from 204,000 online video courses with new additions published
          every month
        </p>
      </div>
      <ul className="flex flex-row flex-wrap gap-4 text-gray-500 text-base font-bold mb-3">
        <li
          className={`hover:text-gray-800 cursor-pointer ${
            course === "python" && !search && "text-gray-800"
          }`}
          onClick={() => {
            setCourse("python");
            setSearch("");
          }}
        >
          Python
        </li>
        <li
          className={`hover:text-gray-800 cursor-pointer ${
            course === "excel" && !search && "text-gray-800"
          }`}
          onClick={() => {
            setCourse("excel");
            setSearch("");
          }}
        >
          Excel
        </li>
        <li
          className={`hover:text-gray-800 cursor-pointer ${
            course === "web" && !search && "text-gray-800"
          }`}
          onClick={() => {
            setCourse("web");
            setSearch("");
          }}
        >
          Web Development
        </li>
        <li
          className={`hover:text-gray-800 cursor-pointer ${
            course === "javascript" && !search && "text-gray-800"
          }`}
          onClick={() => {
            setCourse("javascript");
            setSearch("");
          }}
        >
          JavaScript
        </li>
        <li
          className={`hover:text-gray-800 cursor-pointer ${
            course === "data" && !search && "text-gray-800"
          }`}
          onClick={() => {
            setCourse("data");
            setSearch("");
          }}
        >
          Data Science
        </li>
        <li
          className={`hover:text-gray-800 cursor-pointer ${
            course === "aws" && !search && "text-gray-800"
          }`}
          onClick={() => {
            setCourse("aws");
            setSearch("");
          }}
        >
          AWS Certification
        </li>
        <li
          className={`hover:text-gray-800 cursor-pointer ${
            course === "drawing" && !search && "text-gray-800"
          }`}
          onClick={() => {
            setCourse("drawing");
            setSearch("");
          }}
        >
          Drawing
        </li>
      </ul>
      <div className="border p-5 my-2">
        {!search && (
          <div>
            <h2 className="font-bold text-2xl pb-4 text-center md:text-start">
              {header}
            </h2>
            <p className="text-center md:text-start lg:w-2/3">{description}</p>
            <button className="capitalize font-bold border-solid border border-black p-2 mt-4 hover:bg-slate-100">
              explore {course_name}
            </button>
          </div>
        )}

        {courses.length ? (
          <ul className="flex flex-col justify-center md:flex-wrap my-6 md:flex-row md:justify-start">
            {courses.map((course) => {
              return (
                <li
                  className="lg:w-1/5 md:w-1/3 md:pr-4 mb-4"
                  key={course.id.toString()}
                >
                  <Course course={course} />
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-center font-bold text-xl"> No Courses to show!</p>
        )}
      </div>
    </div>
  );
}

export default CoursesContainer;
