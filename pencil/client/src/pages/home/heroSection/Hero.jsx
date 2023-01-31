import React from "react";
import { IoPlayCircle } from "react-icons/io5";
import heroimg1 from "../../../assets/images/heroimg1.jpg";
import heroimg2 from "../../../assets/images/heroimg2.jpg";
import heroimg3 from "../../../assets/images/heroimg3.jpg";
import heroimg4 from "../../../assets/images/heroimg4.jpg";

const Hero = () => {
  return (
    <div className="bg-ghost_white2 min-h-[550px] px-10 mb-32 flex justify-between relative">
      <div className="w-3/5 pt-20">
        <h1 className="font-Ubuntu text-5xl tracking-wide leading-tight">
          Let's{" "}
          <b>
            Learn <br /> Beyond The Limits
          </b>
        </h1>
        <p className="py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quaerat
          esse deserunt quidem corrupti, eligendi vero magnam! Alias error
          soluta animi culpa, nesciunt earum labore fugiat tenetur incidunt
          placeat magni!
        </p>
        <div className="my-8 flex items-center gap-6">
          <button className="btn bg-brandeise_blue px-6 py-2 text-white rounded-md hover:bg-opacity-80">
            Start Learning
          </button>
          <button className="text-orange capitalize hover:opacity-80 flex items-center gap-2">
            <IoPlayCircle className="text-3xl pt-0.5" /> See How it works
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-10 items-end">
        <div className="flex gap-2">
          <img
            src={heroimg1}
            alt=""
            className="h-52 w-52 object-cover object-center rounded-l-xl rounded-r-full"
          />
          <img
            src={heroimg3}
            alt=""
            className="h-52 w-52 object-cover object-center rounded-xl"
          />
        </div>
        <div className="flex gap-2">
          <img
            src={heroimg4}
            alt=""
            className="h-52 w-52 object-cover object-center rounded-xl"
          />
          <img
            src={heroimg2}
            alt=""
            className="h-52 w-52 object-cover object-center rounded-full"
          />
        </div>
      </div>
      <div className="w-2/3 h-32 bg-brandeise_blue rounded-md p-4 absolute -bottom-6 inset-x-1/2 -translate-x-1/2 translate-y-1/2 text-white flex justify-evenly items-center">
        <div className=" flex flex-col items-center flex-1 border-r-2">
          <h1 className="text-2xl font-semibold">10K+</h1>
          <p>Students</p>
        </div>
        <div className="flex flex-col items-center flex-1 border-r-2">
          <h1 className="text-2xl font-semibold">20+</h1>
          <p>Quality Cources</p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <h1 className="text-2xl font-semibold">10+</h1>
          <p>Experienced Member</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
