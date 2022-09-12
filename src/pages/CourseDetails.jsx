import React from "react";
// import { useParams } from "react-router-dom";
import { useState } from "react";
import Objectives from "../components/Objectives";
import Curriculum from "../components/Curriculum";
import SectionLayout from "../components/SectionLayout";
import AddStars from "../components/AddStars";
import course_img from "../assets/courseimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faInfinity,
  faMobileScreen,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { faFolder, faFile } from "@fortawesome/free-regular-svg-icons";
function CourseDetails() {
  const [expand, setExpand] = useState(false);

  //Will be used later to fetch the course data
  // const params = useParams();
  // const id = params.id;
  // console.log(id);

  //All the below data will be deleted after creating our own APIs

  const objectives = [
    "Use the Jupyter Notebook Environment.",
    "Use the numpy library to create and manipulate arrays.",
    " Use the pandas module with Python to create and structure data.",
    "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  ];
  const section_num = 15;
  const lectures_num = 120;
  const total_length = "14h 42m";
  const curriculum = [
    {
      section: "Up and Running with python",
      lec_num: 2,
      time: 16,
      lectures: [
        {
          lecture_name: "Lorem ipsum is placeholder text",
          period: "04:32",
          type: 1,
          pages: 2,
        },
        {
          lecture_name: "Lorem ipsum is placeholder text",
          period: "12:07",
          type: 0,
          pages: 2,
        },
      ],
    },
    {
      section: "The Basics",
      lec_num: 2,
      time: 10,
      lectures: [
        {
          lecture_name: "Lorem ipsum is placeholder text",
          period: "04:32",
          type: 1,
          pages: 2,
        },
        {
          lecture_name: "Lorem ipsum is placeholder text",
          period: "12:07",
          type: 0,
          pages: 2,
        },
      ],
    },
    {
      section: "Conditions and Loops",
      lec_num: 2,
      time: 13,
      lectures: [
        {
          lecture_name: "Lorem ipsum is placeholder text",
          period: "04:32",
          type: 1,
          pages: 2,
        },
        {
          lecture_name: "Lorem ipsum is placeholder text",
          period: "12:07",
          type: 0,
          pages: 2,
        },
      ],
    },
    {
      section: "Using Python Modules",
      lec_num: 2,
      time: 7,
      lectures: [
        {
          lecture_name: "Lorem ipsum is placeholder text",
          period: "04:32",
          type: 1,
          pages: 2,
        },
        {
          lecture_name: "Lorem ipsum is placeholder text",
          period: "12:07",
          type: 0,
          pages: 2,
        },
      ],
    },
    {
      section: "Crawling The Web",
      lec_num: 2,
      time: 11,
      lectures: [
        {
          lecture_name: "Lorem ipsum is placeholder text",
          period: "04:32",
          type: 1,
          pages: 2,
        },
        {
          lecture_name: "Lorem ipsum is placeholder text",
          period: "12:07",
          type: 0,
          pages: 2,
        },
      ],
    },
  ];
  const auths = ["Roy Mory", "Hossam Ali"];
  const rating = 4.3;
  const rating_num = 783;
  const students_num = 3135;
  const last_update = "6/2018";
  const lang = "English";
  const title = "Build a Python REST API with the Django Rest Framework";
  const describtion =
    "Connect devices, front ends, other apps, and much more by creating your own REST API. Learn how in this course.";
  const price = 229.99;
  return (
    <>
      <div className="bg-zinc-900 w-full py-8 relative">
        <SectionLayout>
          <div className=" text-white flex flex-col gap-3">
            <h1 className="text-3xl font-bold">{title}</h1>
            <h4 className="text-xl">{describtion}</h4>
            <div className="flex flex-row gap-2 text-sm">
              <div>
                <span className="font-bold text-yellow-500">{rating}</span>
                <AddStars rating={rating} />
              </div>
              <a
                href="##"
                className="underline text-violet-300"
              >{`(${rating_num} ratings)`}</a>
              <p>{`${students_num} students`}</p>
            </div>
            <div className="flex flex-row text-sm gap-2">
              <p>Created by</p>
              {auths.map((auth, idx) => {
                return (
                  <div key={idx}>
                    <a href="##" className="underline text-violet-300">
                      {auth}
                    </a>
                    <span>{`${idx + 1 !== auths.length ? ", " : ""}`}</span>
                  </div>
                );
              })}
            </div>
            <div className=" flex flex-row gap-4 text-sm">
              <p>Last updated {last_update}</p>
              <p>{lang}</p>
            </div>
          </div>
        </SectionLayout>
        <div className="relative -top-60 w-[1184px] uxl:w-[1084px] ulg:hidden left-0 right-0 mx-auto z-10 ">
          <div className="fixed w-[340px] border border-white z-20 ml-[796px] uxl:ml-[696px] shadow-lg bg-white">
            <div className="cursor-pointer relative">
              <span>
                <img
                  src={course_img}
                  alt="Course img"
                  className="w-full h-fit "
                />
              </span>
              <span className="bg-gradient-to-t to-wob-trans from-wob-bb z-20 absolute w-full h-full top-0 left-0"></span>
              <span className="absolute w-full h-full top-0 left-0 z-30 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  size="4x"
                  className="text-white bg-black rounded-full"
                />
              </span>
              <span className="absolute w-full h-full top-0 left-0 z-30 flex justify-center items-end pb-4 text-white font-bold">
                Preview this course
              </span>
            </div>
            <div className="p-6">
              <p className="font-bold text-4xl">E£{price}</p>
              <button className="w-full mt-4 bg-purple-600 text-white font-bold py-3 hover:bg-purple-700">
                Add to cart
              </button>
              <button className="w-full my-2 bg-white  font-bold py-3 border border-black hover:bg-slate-100">
                Buy now
              </button>
              <p className="text-center my-3 text-sm">
                30-Day Money-Back Guarantee
              </p>
              <div className="pt-4">
                <h3 className="font-bold mb-2">This course includes:</h3>
                <ul>
                  <li className="py-1">
                    <span>
                      <FontAwesomeIcon
                        icon={faCirclePlay}
                        size="sm"
                        className="w-4"
                      />
                    </span>
                    <span className="ml-4 text-sm">
                      21 hours on-demand video
                    </span>
                  </li>
                  <li className="py-1">
                    <span>
                      <FontAwesomeIcon
                        icon={faFile}
                        size="sm"
                        className="w-4"
                      />
                    </span>
                    <span className="ml-4 text-sm">
                      4 downloadable resources
                    </span>
                  </li>
                  <li className="py-1">
                    <span>
                      <FontAwesomeIcon
                        icon={faFolder}
                        size="sm"
                        className="w-4"
                      />
                    </span>
                    <span className="ml-4 text-sm">3 articles</span>
                  </li>
                  <li className="py-1">
                    <span>
                      <FontAwesomeIcon
                        icon={faInfinity}
                        size="sm"
                        className="w-4"
                      />
                    </span>
                    <span className="ml-4 text-sm">Full lifetime access</span>
                  </li>
                  <li className="py-1">
                    <span>
                      <FontAwesomeIcon
                        icon={faMobileScreen}
                        size="sm"
                        className="w-4"
                      />
                    </span>
                    <span className="ml-4 text-sm">
                      Access on mobile and TV
                    </span>
                  </li>
                  <li className="py-1">
                    <span>
                      <FontAwesomeIcon
                        icon={faTrophy}
                        size="sm"
                        className="w-4"
                      />
                    </span>
                    <span className="ml-4 text-sm">
                      Certificate of completion
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row justify-around text-sm font-bold py-4 underline underline-offset-4">
                <button>Share</button>
                <button>Gift this course</button>
                <button>Apply Coupon</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sticky top-0 bg-white shadow-md">
        <SectionLayout>
          <div className="h-12 flex flex-row items-center text-sm font-bold text-gray-500 ">
            <a
              href="#overview"
              className="capitalize w-[172px] text-center h-12 hover:border-b-2 border-zinc-900 hover:text-zinc-900"
            >
              <p className="leading-[48px]">overview</p>
            </a>
            <a
              href="#curriculum"
              className="capitalize w-[172px] text-center h-12 hover:border-b-2 border-zinc-900 hover:text-zinc-900"
            >
              <p className="leading-[48px]">curriculum</p>
            </a>
            <a
              href="#overview"
              className="capitalize w-[172px] text-center h-12 hover:border-b-2 border-zinc-900 hover:text-zinc-900"
            >
              <p className="leading-[48px]">instructor</p>
            </a>
            <a
              href="#overview"
              className="capitalize w-[172px] text-center h-12 hover:border-b-2 border-zinc-900 hover:text-zinc-900"
            >
              <p className="leading-[48px]">reviews</p>
            </a>
          </div>
        </SectionLayout>
      </div>
      <hr />
      <section id="overview" className="w-full pt-8 mb-8">
        <SectionLayout>
          <div className=" border border-gray-300 py-6">
            <h2 className="mx-6 mb-4 font-bold text-2xl">What you'll learn</h2>
            <div className="mx-6 flex flex-col sm:flex-row  flex-wrap justify-start text-sm">
              {objectives.map((objective, idx) => {
                return <Objectives key={idx}>{objective}</Objectives>;
              })}
            </div>
          </div>
        </SectionLayout>
      </section>
      <section className="w-full" id="curriculum">
        <SectionLayout>
          <h2 className="font-bold text-2xl mb-4">Course content</h2>
          <div className="text-sm flex flex-row justify-between my-2">
            <p>
              {section_num} sections • {lectures_num} lectures • {total_length}{" "}
              total length
            </p>
            <button
              className="text-violet-900 font-bold"
              onClick={() => setExpand(!expand)}
            >
              {expand ? "Collapse" : "Expand"} all sections
            </button>
          </div>
          <div className="border border-gray-300">
            {curriculum.map((course, idx) => {
              return <Curriculum course={course} expanded={expand} key={idx} />;
            })}
          </div>
        </SectionLayout>
      </section>
    </>
  );
}

export default CourseDetails;
