import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
import igg from "../../assets/images/heroimg2.jpg";

const CourseCard = ({ showDetails=true }) => {
  return (
    <div
      className={`bg-white w-72 rounded-md p-3 shadow-lg group relative ${showDetails ? '':'cursor-pointer'}`}
    >
      <div className="bg-white rounded-md  overflow-hidden relative">
        <img
          src={igg}
          alt=""
          className="object-cover w-full h-44 object-center"
        />
        <div className="absolute right-2 bottom-2 bg-mustard h-8 w-24 p-1 rounded-md text-xs flex justify-center items-center font-semibold">
          Rs 250/month
        </div>
      </div>
      <h1 className="text-xl font-semibold py-3">
        Teach Your Kids Math In The Simple Way
      </h1>
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2">
          <IoSchoolOutline /> <span className="text-sm">42 Students</span>
        </p>
        <span>
          <ReactStars
            count={5}
            size={16}
            value={4}
            activeColor="#ffd700"
            isHalf={true}
            edit={false}
          />
        </span>
      </div>
      {showDetails && (
        <div className="ababab absolute p-4 min-h-full h-fit w-72 bg-white rounded-md shadow-lg scale-0 opacity-0 group-hover:scale-105 group-hover:top-0 group-hover:opacity-100 -top-full left-1/2 -translate-x-1/2 transition-all duration-300 flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold font-Ubuntu">
              Teach Your Kids Math In The Simple Way
            </h1>
            <p className="text-teal_green text-xs font-semibold">
              Updated March 2022
            </p>
            <p className="text-xs">
              2 Total Hours - 11 Lectures - Biginners Level
            </p>
            <p className="text-xs">Views - 44</p>
            <p className="text-xs font-semibold py-1">
              Creator <br />{" "}
              <span className="italic text-sm">Debasish Ransingh</span>
            </p>
            <p className="text-xs pb-3 font-semibold text-justify">
              Description <br />{" "}
              <span className="font-normal text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae omnis corrupti suscipit cupiditate dolorum sit
                nesciunt aspernatur facilis eius, placeat magni itaque illo!
                Dolore odit velit, nostrum aspernatur provident hic.
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <button className="btn py-2 bg-brandeise_blue text-white hover:bg-opacity-90 hover:cursor-pointer">
              Add to Playlist
            </button>
            <button className="btn py-2 btn-secondary">Learn Leter</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CourseCard;
