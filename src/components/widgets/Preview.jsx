import React from "react";
import course_img from "../../assets/courseimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faInfinity,
  faMobileScreen,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { faFolder, faFile } from "@fortawesome/free-regular-svg-icons";
function Preview() {
  const price = 229.99;

  return (
    <div className="relative -top-60 w-[1184px] uxl:w-[1084px] ulg:hidden left-0 right-0 mx-auto z-10 ">
      <div className="fixed w-[340px] border border-white z-20 ml-[796px] uxl:ml-[696px] shadow-lg bg-white">
        <div className="cursor-pointer relative">
          <span>
            <img src={course_img} alt="Course img" className="w-full h-fit " />
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
                <span className="ml-4 text-sm">21 hours on-demand video</span>
              </li>
              <li className="py-1">
                <span>
                  <FontAwesomeIcon icon={faFile} size="sm" className="w-4" />
                </span>
                <span className="ml-4 text-sm">4 downloadable resources</span>
              </li>
              <li className="py-1">
                <span>
                  <FontAwesomeIcon icon={faFolder} size="sm" className="w-4" />
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
                <span className="ml-4 text-sm">Access on mobile and TV</span>
              </li>
              <li className="py-1">
                <span>
                  <FontAwesomeIcon icon={faTrophy} size="sm" className="w-4" />
                </span>
                <span className="ml-4 text-sm">Certificate of completion</span>
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
  );
}

export default Preview;
