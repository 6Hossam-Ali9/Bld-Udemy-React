import Course from "./Course";
import data from "../data/db.json";
function CoursesContainer() {
  const { title, header, description, courses } = data;
  let course_name = title.slice(15);
  return (
    <div className="w-10/12 mx-auto p-9">
      <ul className="flex flex-row flex-wrap gap-4 text-gray-500 text-base font-bold mb-3">
        <li className="hover:text-gray-800 cursor-pointer text-gray-800">
          Python
        </li>
        <li className="hover:text-gray-800 cursor-pointer">Excel</li>
        <li className="hover:text-gray-800 cursor-pointer">Web Development</li>
        <li className="hover:text-gray-800 cursor-pointer">JavaScript</li>
        <li className="hover:text-gray-800 cursor-pointer">Data Science</li>
        <li className="hover:text-gray-800 cursor-pointer">
          AWS Certification
        </li>
        <li className="hover:text-gray-800 cursor-pointer">Drawing</li>
      </ul>
      <div className="border p-5 my-2">
        <h2 className="font-bold text-2xl pb-4 text-center md:text-start">
          {header}
        </h2>
        <p className="text-center md:text-start lg:w-2/3">{description}</p>
        <button className="capitalize font-bold border-solid border border-black p-2 mt-4 hover:bg-slate-100">
          explore {course_name}
        </button>
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
      </div>
    </div>
  );
}

export default CoursesContainer;
