import React from "react";
// import { useParams } from "react-router-dom";
import objectives from "../constants/objectives";
import curriculum from "../constants/curriculum";
import { useState } from "react";
import Objectives from "../widgets/Objectives";
import Curriculum from "../widgets/Curriculum";
import SectionLayout from "../widgets/SectionLayout";
import AddStars from "../widgets/AddStars";

import Preview from "../widgets/Preview";
function CourseDetails() {
  const [expand, setExpand] = useState(false);

  //Will be used later to fetch the course data
  // const params = useParams();
  // const id = params.id;
  // console.log(id);

  //All the below data will be deleted after creating our own APIs

  const section_num = 15;
  const lectures_num = 120;
  const total_length = "14h 42m";

  const auths = ["Roy Mory", "Hossam Ali"];
  const rating = 4.3;
  const rating_num = 783;
  const students_num = 3135;
  const last_update = "6/2018";
  const lang = "English";
  const title = "Build a Python REST API with the Django Rest Framework";
  const describtion =
    "Connect devices, front ends, other apps, and much more by creating your own REST API. Learn how in this course.";
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
        <Preview />
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
