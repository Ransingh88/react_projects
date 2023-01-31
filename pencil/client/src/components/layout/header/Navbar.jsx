import React from "react";
import {
  IoCartOutline,
  IoGridOutline,
  IoHeartOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-14 bg-white flex justify-between items-center px-10 py-2 overflow-y-hidden">
      <div className="flex items-center">
        <h1 className="font-extrabold text-lg">
          <Link to='/'>PENCIL</Link>
        </h1>
        <div className="flex gap-4 ml-5">
          <span className="flex items-center gap-1">
            <IoGridOutline />
            Categories
          </span>
          <span className="relative">
            <IoSearchOutline className="absolute -top-0.7 left-2 translate-y-1/2" />
            <input
              type="text"
              name=""
              id=""
              className="outline-none bg-ghost_white1 rounded-md pl-7 pr-1 h-8"
            />
          </span>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Link to="teachwithus">Teach with us</Link>
        <IoCartOutline />
        <IoHeartOutline />
        <button className="btn btn-secondary">Login</button>
        <button className="btn btn-black">SignUp</button>
      </div>
    </div>
  );
};

export default Navbar;
