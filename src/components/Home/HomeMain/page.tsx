import React from "react";
import { FaPlus } from "react-icons/fa";

const HomeMain = ({setHomePage}:any) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="w-full m-4 p-6">
        <span className="text-2xl text-black font-semibold">Welcome,</span>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
          <img src="/Images/Home/buy 1.svg" alt="buy" className="h-28 w-28" />
          <span className="text-[#ADAEB0] text-xl">
            You have not purchased a service yet
          </span>
        </div>
        <div className="bg-[#002E62] p-2 px-3 rounded-lg">
          <button className="flex items-center justify-center gap-2" onClick={()=>setHomePage("HomeClientDetails")}>
            <FaPlus className="text-gray-100"/>
            <span className="text-gray-200 text-sm cursor-pointer">Buy service</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
