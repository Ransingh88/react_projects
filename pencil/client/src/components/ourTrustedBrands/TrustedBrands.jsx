import React from "react";
import nasdaq from "../../assets/icons/trustedBrands/nasdaq.svg";
import netflix from "../../assets/icons/trustedBrands/netflix.svg";
import google from "../../assets/icons/trustedBrands/google.svg";
import bookingcom from "../../assets/icons/trustedBrands/bookingcom.svg";
import deloitte from "../../assets/icons/trustedBrands/deloitte.svg";
import amazon from "../../assets/icons/trustedBrands/amazon.svg";

const TrustedBrands = () => {
  return (
    <div className="flex flex-col h-64 justify-center items-center px-10">
      <h1 className="font-Ubuntu text-2xl font-bold capitalize">
        Trusted By The Best
      </h1>
      <p className="text-xs py-1 text-quartz">
        leading companies using the same courses to help employees keep their
        skill fresh..
      </p>
      <div className="w-11/12 flex items-center justify-evenly sm:gap-10 gap-4 py-10 overflow-x-scroll scrollbar-hide">
        <img src={nasdaq} alt="" className="h-6" />
        <img src={netflix} alt="" className="h-6" />
        <img src={google} alt="" className="h-6" />
        <img src={bookingcom} alt="" className="h-6" />
        <img src={deloitte} alt="" className="h-6" />
        <img src={amazon} alt="" className="h-6" />
      </div>
    </div>
  );
};

export default TrustedBrands;
