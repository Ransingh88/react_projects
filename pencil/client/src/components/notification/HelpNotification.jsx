import React from "react";
import { IoCallOutline } from "react-icons/io5";

const HelpNotification = () => {
  return (
    <div className="bg-mustard text-raisin_black text-xs flex justify-center items-center p-1">
      are you having in a problem?{" "}
      <span className="font-semibold text-xs flex items-center pl-3 cursor-pointer gap-1">
        <IoCallOutline /> 
        <p>Call For Help</p>
      </span>
    </div>
  );
};

export default HelpNotification;
