import React from "react";
import { FaPlus } from "react-icons/fa";
import {
  homeCardDetails,
  homeCardDetailsIcons,
} from "../../Constants/Constants";
import ServiceProgress from "./ServiceProgress/page";

const HomeClientDetails = ({ homePage, setHomePage }: any) => {
  return (
    <div className="flex flex-col items-start justify-center p-4">
      <div className="flex items-start justify-between w-full px-2">
        <span className="text-2xl text-black font-semibold">
          Welcome, client name
        </span>
        <div className="bg-[#002E62] p-2 px-3 rounded-lg">
          <button className="flex items-center justify-center gap-2">
            <FaPlus className="text-gray-100" />
            <span className="text-gray-200 text-sm cursor-pointer">
              Buy service
            </span>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full gap-6 mt-10">
        {homeCardDetails.map((item, index) => (
          <div className="border border-gray-200 rounded-lg p-6 py-8 w-[25%] h-[150px] flex flex-col items-start">
            <div className="flex items-start justify-start gap-6" key={index}>
              <div className={`rounded-full p-2 bg-[${homeCardDetailsIcons[index].iconBackground}]`}>
                <img
                  key={index}
                  src={homeCardDetailsIcons[index].icon}
                  className="w-[25px] h-[25px] rounded-full"
                />
              </div>
              <div className="text-[#002E62] h-[35px] font-medium">
                {item.title}
              </div>
            </div>
            <div className="text-black text-4xl font-semibold mt-6">
              <span>{item.number}</span>
            </div>
          </div>
        ))}
      </div>
      <ServiceProgress />
      <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-center gap-20 w-[50%] mt-10">
        <div className="text-gray-500 flex flex-col items-start justify-center p-2">
          <span className="m-3">Tax filing status</span>
          <span className="m-3 bg-[#F3F3F3] p-2 rounded-3xl text-sm">status type</span>
        </div>
        <div className="text-gray-500 flex flex-col items-start justify-center p-2">
          <span className="m-3">Date of last filing</span>
          <span className="m-3 text-black font-medium">1/03/2024</span>
        </div>
      </div>
    </div>
  );
};

export default HomeClientDetails;
