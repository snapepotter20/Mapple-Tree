import React, { useEffect, useState } from "react";
import { serviceProgressCard } from "./ServiceProgressCard/page";
import ProgressBar from "@/components/Common/ProgressBar/page";

interface ServiceProgressCard {
  serviceName: string;
  completionPercentage: string;
}

const ServiceProgress: React.FC = () => {
  const [progressCard, setProgressCard] = useState<ServiceProgressCard[]>([]);

  useEffect(() => {
    setProgressCard(serviceProgressCard);
  }, []);

  return (
    <div className="flex flex-col items-start justify-center border border-gray-200 rounded-lg mt-14 w-full gap-8 p-4">
      <div className="m-2 text-2xl font-medium">
        <span>Your service progress</span>
      </div>
      <div className="flex items-start justify-between w-full gap-4">
        <div className="w-[50%]">
          {progressCard.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg w-full mb-3 px-3 p-1 bg-[#FAFAFA] h-[70px]"
            >
              <div className="text-right flex items-center justify-between mx-4">
                <span className="text-sm inline-block text-gray-500">
                  {item.serviceName}
                </span>
                <span className="text-sm font-semibold inline-block text-gray-500">
                  {item.completionPercentage}
                </span>
              </div>
              <ProgressBar />
            </div>
          ))}
        </div>
        <div className="bg-[#EAF5FD] rounded-lg w-[50%] p-4">
          <div className="flex flex-col items-start">
            <div className="text-[#002E62] text-lg m-2">
              <span>Service name</span>
            </div>
            <div className="m-1 text-gray-500">
              <span className="text-sm">Next action to be taken</span>
            </div>
            <div className="m-2 my-4 text-blue-500 flex justify-start gap-2">
              <p className="text-blue-500">&#9673;</p>
              <span>Upload document</span>
            </div>
          </div>
          <div className="flex justify-end m-2">
            <button className="flex items-center justify-center gap-2 bg-[#002E62] p-2 px-3 rounded-lg w-[150px]">
              <span className="text-gray-200 text-sm cursor-pointer">
                Upload Document
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProgress;
